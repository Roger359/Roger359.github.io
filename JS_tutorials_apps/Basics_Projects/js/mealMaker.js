// Meal Maker
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However,
// having to figure out what you want to order can be a time-consuming ordeal if the menu is big, 
// and you want an easier way to be able to figure out what you are going to eat.
// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu.
// We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
  _courses: {
    _appetizers:[],
    _mains:[],
    _desserts:[],
     get appetizers(){
      return this._appetizers
    },
    set appetizers(appetizersIn){
      this._appetizers = appetizersIn
    },
    get mains(){
      return this._mains
    },
    set mains(mainsIn){
      this._mains = mainsIn
    },
    get desserts(){
      return this._desserts
    },
    set desserts(dessertsIn){
      this._desserts = dessertsIn
    },
  },
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
addDishToCourse(courseName,dishName,dishPrice){
 const dish = {
   name: dishName,
   price: dishPrice
 };
 this._courses[courseName].push(dish)
},

getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName]
  // This will guarantee that the random number will be between 0 and the length of the array)
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex]; 
},
generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
}
}
menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);