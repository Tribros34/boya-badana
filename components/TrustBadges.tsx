const badges = [
  "Ücretsiz keşif",
  "Eşyalı ev koruma",
  "Temiz teslim",
  "Sabit fiyat yaklaşımı",
  "1 günde uygulama imkanı",
  "WhatsApp'tan hızlı teklif",
];

export function TrustBadges() {
  return (
    <ul className="flex flex-wrap gap-3">
      {badges.map((badge) => (
        <li
          key={badge}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
