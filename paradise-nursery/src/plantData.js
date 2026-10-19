// Each plant has a name, image, description and cost (in dollars).
const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=60`;

const plantData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: img('photo-1593482892290-f54927ae1bb6'),
        description: 'Produces oxygen at night and removes toxins from the air.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image: img('photo-1572688484438-313a6e50c333'),
        description: 'Filters formaldehyde and xylene from the air.',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image: img('photo-1593691509543-c55fb32d8de5'),
        description: 'Removes mold spores and purifies the air.',
        cost: 18,
      },
      {
        name: 'Boston Fern',
        image: img('photo-1598880940371-c756e015faf1'),
        description: 'Adds humidity to the air and removes pollutants.',
        cost: 20,
      },
      {
        name: 'Rubber Plant',
        image: img('photo-1598880513655-3a6ecb1f2b2f'),
        description: 'Easy to care for and absorbs airborne chemicals.',
        cost: 17,
      },
      {
        name: 'Aloe Vera',
        image: img('photo-1509423350716-97f9360b4e09'),
        description: 'Purifies the air and its gel soothes skin burns.',
        cost: 14,
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: img('photo-1499002238440-d264edd596ec'),
        description: 'Calming scent that promotes relaxation and sleep.',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image: img('photo-1592729645009-b96d1e63d14b'),
        description: 'Sweet floral fragrance that uplifts the mood.',
        cost: 18,
      },
      {
        name: 'Rosemary',
        image: img('photo-1515586000433-45406d8e6662'),
        description: 'Fragrant herb used in cooking and aromatherapy.',
        cost: 15,
      },
      {
        name: 'Mint',
        image: img('photo-1628556270448-4d4e4148e1b1'),
        description: 'Refreshing aroma that repels pests.',
        cost: 12,
      },
      {
        name: 'Lemon Balm',
        image: img('photo-1620803366004-119b57f54cd6'),
        description: 'Lemony scent that reduces stress and anxiety.',
        cost: 14,
      },
      {
        name: 'Hyacinth',
        image: img('photo-1457089328109-e5d9bd499191'),
        description: 'Strongly scented spring blooms.',
        cost: 22,
      },
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      {
        name: 'Jade Plant',
        image: img('photo-1509423350716-97f9360b4e09'),
        description: 'Symbol of good luck and very low maintenance.',
        cost: 16,
      },
      {
        name: 'Echeveria',
        image: img('photo-1459156212016-c812468e2115'),
        description: 'Rosette-shaped succulent in soft pastel colors.',
        cost: 10,
      },
      {
        name: 'Barrel Cactus',
        image: img('photo-1485955900006-10f4d324d411'),
        description: 'Round, sturdy cactus that thrives on neglect.',
        cost: 19,
      },
      {
        name: 'Zebra Haworthia',
        image: img('photo-1520412099551-62b6bafeb5bb'),
        description: 'Small striped succulent, ideal for desks and shelves.',
        cost: 11,
      },
      {
        name: 'String of Pearls',
        image: img('photo-1587334274328-64186a80aeee'),
        description: 'Trailing plant with bead-like leaves.',
        cost: 21,
      },
      {
        name: 'Burro\'s Tail',
        image: img('photo-1446071103084-c257b5f70672'),
        description: 'Cascading succulent that looks great in hanging pots.',
        cost: 17,
      },
    ],
  },
];

export default plantData;
