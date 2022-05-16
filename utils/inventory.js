import { v4 as uuid } from 'uuid'

let inventory = [
  // HOMME
  {
    categories: ['homme'], name: 'jacket', price: '24.90', image: '/products/homme1.jpeg ', description: 'Jean pour homme ', brand: 'Jason Bourne', currentInventory: 4 },
    {
      categories: ['homme'], name: 'chemise ', price: '24.90', image: '/products/homme3.jpeg ', description: 'Jean pour homme ', brand: 'Jason Bourne', currentInventory: 4 },
      {
        categories: ['homme'], name: 'pantalon', price: '24.90', image: '/products/homme5.jpeg ', description: 'Jean pour homme ', brand: 'Jason Bourne', currentInventory: 4 },
    
    //FEMME
    {
    categories: ['femme'], name: 'jupe courte noir', price: '42.39', image: '/products/femme1.jpeg', description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.' , brand: 'Jason Bourne' , currentInventory: 2 },
    {
      categories: ['femme'], name: 'robe rose ', price: '42.39', image: '/products/femme6.jpeg', description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.' , brand: 'Jason Bourne' , currentInventory: 2 },
      {
        categories: ['femme'], name: 'robe blanche', price: '42.39', image: '/products/femme2.jpeg', description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.' , brand: 'Jason Bourne' , currentInventory: 2 },
    //GARCON
  {
    categories: ['garcon'], name: 'nouveau arrivée', price: '8.99', image: '/products/garcon6.jpeg', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 8 },
    {
      categories: ['garcon'], name: 'nouveau arrivée', price: '8.99', image: '/products/garcon1.webp', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 8 },
      {
        categories: ['garcon'], name: 'nouveau arrivée', price: '8.99', image: '/products/garcon5.jpeg', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 8 },
      
    //FILLE
    {
    categories: ['fille'], name: 'robe fleuré', price: '19.20', image: '/products/fille4.jpeg', description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.' , brand: 'Jason Bourne', currentInventory: 10},
    {
      categories: ['fille'], name: 'nouveau arrivée', price: '19.20', image: '/products/fille1.webp', description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.' , brand: 'Jason Bourne', currentInventory: 10},
      {
        categories: ['fille'], name: 'nouveau arrivée', price: '19.20', image: '/products/fille5.webp', description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.' , brand: 'Jason Bourne', currentInventory: 10},

    // { 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
