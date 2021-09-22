export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Aoenium',
    price: 7.99,
    description:
      'Aeoniums are most commonly known for their striking rosettes made up of dense, glossy, waxy leaves growing out of a single stem.',
  },
  {
    id: 2,
    name: 'Kalanchoe',
    price: 6.99,
    description:
      'Kalanchoe is a beautiful flowering plant that is both easy and rewarding to grow indoors or outdoors',
  },
  {
    id: 3,
    name: 'Senecio',
    price: 2.99,
    description: 'Senecio is a genus of flowering plants that contains more than 1000 species of groundsels, ragworts, and dusty miller.',
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/