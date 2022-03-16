export const products = [
  {
    id: '1',
    name: 'Dak Galbi',
    currency: 'USD',
    price: 7.99,
    flag: 'new',
    imageUrl: '/images/dak-galbi.jpeg',
    rating: 5,
    ratingCount: 1,
    description:
      'Succulent chicken thighs, tteok, and roasted veggies in a sweet and spicy sauce.',
  },
  {
    id: '2',
    name: 'Kimchi Stew',
    currency: 'USD',
    price: 10.95,
    salePrice: 6.99,
    flag: 'on-sale',
    imageUrl: '/images/kimchi-stew.jpeg',
    rating: 4,
    ratingCount: 12,
    description:
      'A rich and spicy broth made of quality kimchi. Topped with delicious tofu.',
  },
  {
    id: '3',
    name: 'L.A. Galbi',
    currency: 'USD',
    price: 11,
    imageUrl: '/images/la-galbi.jpeg',
    rating: 4,
    ratingCount: 12,
    description: 'Slice, bone in short ribs marinated in a sweet soy sauce.',
  },
  {
    id: '4',
    name: 'Pajeon',
    currency: 'USD',
    price: 7.89,
    imageUrl: '/images/pajeon.jpeg',
    rating: 5,
    ratingCount: 1,
    description: 'Korean style seafood pancake with a soy dipping sauce',
  },
  {
    id: '5',
    name: 'Galbi JJim',
    currency: 'USD',
    price: 9.99,
    imageUrl: '/images/short-rib.jpeg',
    rating: 5,
    ratingCount: 1,
    description:
      'Pressured cooked short rib that melts off the boned. Glazed in sweet soy sauce.',
  },
  {
    id: '6',
    name: 'Seafood Soon Tofu',
    currency: 'USD',
    price: 6.99,
    imageUrl: '/images/soon-tofu.jpeg',
    rating: 5,
    ratingCount: 1,
    description: 'Spicy and rich broth with soft tofu and seafood.',
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
