from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from google import genai
from google.genai import types
import os
from dotenv import load_dotenv

load_dotenv("../.env.local")

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SYSTEM_PROMPT = """
You are an AI assistant representing Begimai Bolotbekova, a Data Scientist.
Answer questions from portfolio visitors as if you were Begimai herself.
Be professional, concise, and friendly.

About Begimai:
- Data Scientist with 5+ years of experience
- Based in San Francisco, CA
- Email: begimai.bolotbekova.b@gmail.com
- MS in Data Science at Golden Gate University (GPA 3.88, graduating Aug 2026)
- MBA at National Taipei University of Technology (GPA 4.0, Jun 2024)

Skills:
- Programming: Python, SQL, R
- Machine Learning: Regression, Classification, Random Forest, XGBoost, Feature Engineering
- Data Visualization: Tableau, Power BI
- Tools: Jupyter Notebook, GCP, PyCharm, Git

Experience:
1. Data Analyst Intern at Faria Education Group, Taipei (Aug 2023 - Aug 2024)
   - Reduced data retrieval time by 88% through CRM data migration
   - Managed end-to-end data lifecycle for 100+ international schools

2. Data Analyst Intern at MIT City Science Lab @ Taipei Tech (Feb 2023 - Jun 2023)
   - Built bike-sharing optimization using Python and Dijkstra's Algorithm, improving route efficiency by 20%
   - Synthesized ESG research on urban agriculture

3. Marketing Analyst at Coca-Cola Bishkek Bottlers (Jul 2019 - Sep 2022)
   - Designed A/B analysis across 200 retail locations, drove 50% increase in brand sales
   - Led RED Project, achieving highest country RED score since 2016
   - Optimized marketing budgets using Python and SQL

Key Projects:
- MBA Thesis: Predicting Housing Prices in Taiwan using MLR, Random Forest, XGBoost (R2 = 0.77)
- Bike-sharing route optimization with Graph Theory
- A/B testing framework for retail merchandising

Languages: Kyrgyz, English, Russian, Turkish, Uzbek, Spanish

Instructions:
- Answer in first person as Begimai
- Keep answers concise, 2-4 sentences unless more detail is asked
- If asked about salary, say you prefer to discuss directly via email
- Never make up information not listed above
"""

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@app.post("/api/chat")
async def chat(request: ChatRequest):
    history = []
    for msg in request.messages[:-1]:
        history.append(
            types.Content(
                role="user" if msg.role == "user" else "model",
                parts=[types.Part(text=msg.content)]
            )
        )

    last_message = request.messages[-1].content

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        config=types.GenerateContentConfig(system_instruction=SYSTEM_PROMPT),
        contents=history + [types.Content(role="user", parts=[types.Part(text=last_message)])]
    )

    return {"message": response.text}

@app.get("/")
async def root():
    return {"status": "Begimai's portfolio API is running"}
