import { v4 as uuid } from 'uuid'

let inventory = [
  // HOMME
  {
    categories: ['homme'], name: 'veste de dinde', price: '24.90', image: '/products/homme1.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 0 },
    {
      categories: ['homme'], name: 'lunette bg-style', price: '17.90', image: '/products/homme2.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 1 },
      {
        categories: ['homme'], name: 'Homme en chemise', price: '24.90', image: '/products/homme3.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 2 },
        {
          categories: ['homme'], name: 'Chemise homme popeline et veste gris foncé', price: '64.90', image: '/products/homme6.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 3 },
          {
            categories: ['homme'], name: 'Chemise blanche cahouchou ', price: '4.90', image: '/products/homme5.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 4 },
            {
              categories: ['homme'], name: 'Chemise bleu homme popeline ', price: '6.90', image: '/products/homme4.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 5 },
              {
                categories: ['homme'], name: 'Chemise homme pop gris', price: '24.90', image: '/products/homme7.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 6 },
                {
                  categories: ['homme'], name: 'Costume rouge et noir', price: '125.90', image: '/products/homme8.jpeg ', description: "Sol's 02922 - Chemise Homme Popeline Manches Longues Baltimore Fit", brand: 'Jason Bourne', currentInventory: 7 },
  
            //FEMMe
    {
    categories: ['femme'], name: 'Carmel Brown Sofa', price: '42.39', image: '/products/femme1.jpeg', description: "Large collerette, délicates finitions dentelle et 100% coton bio... Entre romantisme et modernité, le top donne une belle liberté de ton au style urbain quotidien." , brand: 'Jason Bourne' , currentInventory: 0 },
    {
      categories: ['femme'], name: 'Carmel Brown Sofa', price: '42.39', image: '/products/femme2.jpeg', description: "Large collerette, délicates finitions dentelle et 100% coton bio... Entre romantisme et modernité, le top donne une belle liberté de ton au style urbain quotidien." , brand: 'Jason Bourne' , currentInventory: 1 },
      {
        categories: ['femme'], name: 'Carmel Brown Sofa', price: '42.39', image: '/products/femme3.jpeg', description: "Large collerette, délicates finitions dentelle et 100% coton bio... Entre romantisme et modernité, le top donne une belle liberté de ton au style urbain quotidien." , brand: 'Jason Bourne' , currentInventory: 2 },
        {
          categories: ['femme'], name: 'Carmel Brown Sofa', price: '42.39', image: '/products/femme4.jpeg', description: "Large collerette, délicates finitions dentelle et 100% coton bio... Entre romantisme et modernité, le top donne une belle liberté de ton au style urbain quotidien." , brand: 'Jason Bourne' , currentInventory: 3 },
          {
            categories: ['femme'], name: 'Carmel Brown Sofa', price: '42.39', image: '/products/femme5.jpeg', description: "Large collerette, délicates finitions dentelle et 100% coton bio... Entre romantisme et modernité, le top donne une belle liberté de ton au style urbain quotidien." , brand: 'Jason Bourne' , currentInventory: 4 },
    //GARCON
  
    {
      categories: ['garcon'], name: 'Mod Leather Sofa', price: '14.99', image: '/products/garcon1.webp', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 0 },
      {
        categories: ['garcon'], name: 'Mod Leather Sofa', price: '6.99', image: '/products/garcon2.webp', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 1 },
        {
          categories: ['garcon'], name: 'Mod Leather Sofa', price: '4.45', image: '/products/garcon3.jpeg', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 2 },
          {
            categories: ['garcon'], name: 'Mod Leather Sofa', price: '4.99', image: '/products/grcon4.jpeg', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 3 },
            {
              categories: ['garcon'], name: 'Mod Leather Sofa', price: '4.99', image: '/products/garcon5.jpeg', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 4 },
              {
                categories: ['garcon'], name: 'Mod Leather Sofa', price: '8.99', image: '/products/garcon6.jpeg', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 5 },
                {
                  categories: ['garcon'], name: 'Mod Leather Sofa', price: '22.30', image: '/products/garcon7.jpeg', description: "Le plus célèbre des quadrupèdes d'Amérique promène sa moue pataude dans nos collections. Une ligne de sweats et t-shirts Famille 100% vintage et bonne humeur !", brand: 'Jason Bourne', currentInventory: 6},
  //FILLE
    {
    categories: ['fille'], name: 'Thetis Gray Love Seat', price: '19.20', image: '/products/fille1.jpeg', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 0},
    {
      categories: ['fille'], name: 'Thetis Gray Love Sea', price: '19.20', image: '/products/fille1.webp', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 1},
      {
        categories: ['femme'], name: 'Thetis Gray Love Se', price: '19.20', image: '/products/fille2.jpeg', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 2},
        {
          categories: ['fille'], name: 'Thetis Gray Love S', price: '19.20', image: '/products/fille2.webp', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 3},
          {
            categories: ['fille'], name: 'Thetis Gray Love', price: '19.20', image: '/products/fille4.JPEG', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 4},
            {
              categories: ['fille'], name: 'Thetis Gray Lo', price: '19.20', image: '/products/fille5.jpeg', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 5},
              {
                categories: ['femme'], name: 'Thetis Gray L', price: '19.20', image: '/products/fille6.webp', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 6},
                {
                  categories: ['fille'], name: 'Thetis G', price: '19.20', image: '/products/fille7.webp', description: "Adèle est réalisée dans un tissu plumetis légèrement reliefé, ponctué d'épis de blé brodés et ajourés, l'effet est subtil et raffiné. Une création unique dessinée en France par notre équipe de style et réalisée par nos partenaires de Madagascar.", brand: 'Jason Bourne', currentInventory: 7},
    // { 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
