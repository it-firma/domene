/**
 * Render JSON-LD structured data inline in the page.
 * Multiple schemas can be passed as an array.
 */
export function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.filter(Boolean).map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
