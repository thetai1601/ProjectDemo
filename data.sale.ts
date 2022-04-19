export class Sale {
    id: number | undefined;
    src: string | undefined;
    title: string | undefined;
    price: string | undefined;
    discount: string | undefined;
    sizes: any | undefined;
    rating: string | undefined;
  }
  
  export var Sales: Sale[] = [
    {
      id: 1,
      title: 'Balenciaga',
      price: '300$',
      src: 'https://ananas.vn/wp-content/uploads/Pro_AV00131_2.jpeg',
      discount: '-25%',
      sizes: ['M', 'L', 'S', 'XL'],
      rating: '100',
    },
    {
      id: 2,
      title: 'Balenciaga',
      price: '300$',
      src: 'https://ananas.vn/wp-content/uploads/Pro_AV00130_2.jpeg',
      discount: '-25%',
      sizes: ['M', 'L', 'S'],
      rating: '4.5',
    },
    {
      id: 3,
      title: 'Balenciaga',
      price: '300$',
      src: 'https://ananas.vn/wp-content/uploads/Pro_AV00127_2.jpeg',
      discount: '-25%',
      sizes: ['M', 'L', 'S'],
      rating: '4.5',
    },
  ];
  