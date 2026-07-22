/** Renders a multi-line description as headings + paragraphs, dash-free. */
export function RichText({ text }: { text: string }) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {lines.map((line, i) => {
        const clean = line.replace(/\s*[—–]\s*/g, ', ');
        const isHeading =
          clean.length < 42 && !/[.!?,:]$/.test(clean) && !clean.includes(',') && !clean.includes('.');
        return isHeading ? (
          <h3 key={i} className="pt-2 font-display text-lg font-semibold text-cloud">
            {clean}
          </h3>
        ) : (
          <p key={i} className="leading-relaxed text-cloud/70">
            {clean}
          </p>
        );
      })}
    </div>
  );
}
