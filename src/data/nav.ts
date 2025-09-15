// src/data/nav.ts
export const NAV = [
  { href: '/', label: 'Domov' },

  {
    href: '/pozicovna-naradia',
    label: 'Požičovňa náradia',
    children: [
      {
        href: '/pozicovna-naradia/male-naradie',
        label: 'Malé náradie',
        children: [
          {
            href: '/pozicovna-naradia/male-naradie/vrtacie-buracie-kladiva-a-vrtacky',
            label: 'Vŕtacie/búracie kladivá a vŕtačky',
          },
        ],
      },
    ],
  },

  { href: '/zemne-buracie-prace', label: 'Zemné a búracie práce' },
  { href: '/kontakt', label: 'Kontakt' },
];
