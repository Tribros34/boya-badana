type SEOJsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function SEOJsonLd({ data }: SEOJsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
