export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center py-12 px-4">

      <div className="w-full max-w-4xl">

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-zinc-500 font-mono text-sm mb-1">
              begimai bolotbekova
            </p>
            <h1 className="text-3xl font-bold text-white font-mono">
              Resume
            </h1>
          </div>
          <div className="flex gap-3">
            <a
              href="/resume/resume.pdf"
              download
              className="px-4 py-2 rounded border border-zinc-600 text-zinc-300 font-mono text-sm hover:border-zinc-400 hover:text-white transition-colors"
            >
              Download PDF
            </a>
            <a
              href="/"
              className="px-4 py-2 rounded border border-zinc-600 text-zinc-300 font-mono text-sm hover:border-zinc-400 hover:text-white transition-colors"
            >
              Back Home
            </a>
          </div>
        </div>

        <div className="w-full rounded-lg overflow-hidden border border-zinc-800">
          <iframe
            src="/resume/resume.pdf"
            className="w-full h-[90vh]"
            title="Begimai Bolotbekova Resume"
          />
        </div>

      </div>
    </main>
  );
}
