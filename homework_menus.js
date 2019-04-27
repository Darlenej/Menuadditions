// START HERE

// 1. Add method addIngredient(), which will take a string and add/push it onto the ingredients array

function menuItem(name, refId, description, calories, price) {
  this.name = name,
  this.refId = refId,
  this.description = description,
  this.calories = calories,
  this.price = price,
  this.ingredients = [],
  this.addIngredient()= function(){
return this.ingredients.push();
 };
  this.numIngredients = function() {
    return this.ingredients.length;
  };
}

// 2. Your best friend hired a new Head Chef who wants to make an adjustment to the menu.
// Add a flag which indicates if the menu item is vegan or not.

Vegan=true;
if(Vegan===true){
  return ("This item is vegan friendly.");
}
else {
  return("This menu item is not vegan.");
}

// 3. Create a breakfast menu.  This will be an array.  Add at least 3 breakfast dishes to this menu.  Make sure
// each menu item has all properties populated and at least 2 ingredients added.  You do NOT have to populate ingredients
// when you initialize each menu item.
// menuItem.breakfastMenu.addIngredient('Eggs,butter,milk');

let waffles = menuItem ('Wild Waffles',200,'Deliciously irrestible',180,7.50);
waffles.addIngredient('Butter','Eggs','Flour');

let pancakes = menuItem ('Petty Pancakes',201,'Painfully pleasurable',139,8.40);
pancakes.addIngredient('Butter','Eggs','Flour','Milk');

let eggs = menuItem('Evil Eggs',203,'Tasty and Chaotic',120,3.25);
eggs.addIngredient('Peppers,salt,tomato');

let breakfastMenu = ['waffles','pancakes','eggs'];




// To confirm things look good:
// a. Print the number of items on your breakfast menu.
// b. Print the names of each of your breakfast menu items.


console.log("-------------\n");
console.log(breakfastMenu.length);  
// 3a. Number of Breakfast Menu Items


console.log("-------------\n");
// console.log("3b. Breakfast Menu Item Names");
var i;
for (i=0;i<breakfastMenu.name.length;i++){
console.log('Here are the Breakfast Menu selections: '+ [i]);
}
// 4. Create a lunch menu. This will be an array.  Add at least 3 lunch dishes to this menu.

let pizza = menuItem ('Pizza',204,'Deliciously irrestible',880,17.50);
pizza.addIngredient('Mozzarella','Pepperoni','Banana peppers');

let lasagna = menuItem ('Lasagna',205,'Extremely Tasty',739,11.40);
lasagna.addIngredient('Tomato Sauce','Beef','Four blended cheese');

let burger = menuItem('Burger',206,'Mouth Watering',620,13.25);
burger.addIngredient('Peppers,salt,tomato,lettuce');

let lunchMenu= [Pizza,Lasagna,Burger];



console.log("-------------\n");
console.log("4a. Number of Lunch Menu Items");
console.log(lunchMenu.length);

console.log("-------------\n");
console.log("4b. Lunch Menu Item Names");

var j;
for (j=0;j<lunchMenu.name.length;j++){
console.log('Here are the Lunch Menu selections: '+ [j]);
}

// 5. Create a dinner menu. This will be an array.  Add at least 3 dinner dishes to this menu.
// menuItem.dinnerMenu.addIngredient('Peppers,Salt,Spices')

let steak= menuItem ('Steak',207,'Love the perfection!',880,17.50);
steak.addIngredient('Spices','Banana peppers');

let chicken = menuItem ('Chickem',208,'Just delightful',700,12.40);
chicken.addIngredient('Tomato Sauce','house seasoning');

let burger = menuItem('Burger',209,'Mouth Watering',620,13.25);
burger.addIngredient('Peppers,salt,lettuce,onions');


let dinnerMenu=[Steak,Chicken,Veggies];


console.log("-------------\n");
console.log("5a. Number of Dinner Menu Items");
console.log(dinnerMenu.length);

console.log("-------------\n");
console.log("5b. Dinner Menu Item Names");

var k;
for (k=0;k<dinnnerMenu.name.length;k++){
console.log('Here are the Dinner Menu selections: '+ [k]);
}



// 6. The Head Chef wants to confirm the total number of ingredients per menu (don't worry about duplicates).
// Print the total number of ingredients per menu.

console.log("-------------\n");
// console.log("6. Number of Breakfast Menu Ingredients");
console.log(breakfastMenu.length);

// console.log("6. Number of Lunch Menu Ingredients");
console.log(lunchMenu.length);

// console.log("6. Number of Dinner Menu Ingredients");
console.log(dinnerMenu.length);



// 7. The General Manager thinks the breakfast menu prices are too low.  First, print the sum of all breakfast menu prices.
// Second, increase every breakfast menu price by 25%.  Third, print the sum again now that the prices have changed.

console.log("-------------\n");
// console.log("7. BEFORE: Sum Breakfast Menu Prices");

function sum(breakfastMenuP){
  let total=0;
  for(i=0;i<breakfastMenuP.length;i++){
    total += breakfastMenuP[i];
  }
  return total;
}
console.log((sumbreakfastMenu.price));

function sum(breakfastMenuP25) {
  let total=0;
  for(i=0;i<breakfastMenuP25.length;i++){
    total += breakfastMenuP25[i]*0.25;
  }
  return total;
}
console.log((breakfastMenu25.price));
// breakfastMenu=breakfastMenu*0.25


// 8. Your best friend left the printed menu at home.  Please print out the name, reference ID, and price of each menu item.
console.log("-------------\n");
console.log(waffles.name,waffles.refId,waffles.price);
console.log(pancakes.name,pancakes.refId,pancakes.price);
console.log(eggs.name,eggs.refId,eggs.price);



console.log("-------------\n");
console.log("8. Lunch Menu At a Glance");
console.log(pizza.name,pizza.refId,pizza.price);
console.log(lasagna.name,lasagna.refId,lasagna.price);
console.log(burger.name,burger.refId,burger.price);




console.log("-------------\n");
console.log("8. Dinner Menu At a Glance");
console.log(steak.name,steak.refId,steak.price);
console.log(chicken.name,chicken.refId,chicken.price);
console.log(veggies.name,veggies.refId,veggiess.price);



// 9. The General Manager fears the recent 15%-increase for all breakfast menu items has made the average breakfast unaffordable.
// Print the average cost for the breakfast menu.
console.log("-------------\n");

var total=0;
for(var l=0;l<breakfastMenu.length;l++){
  total += breakfastMenu[l];
}
var avg= total/breakfastMenu.length;
console.log(avg);


// 10. The General Manager loves how QUICKLY you produced the average cost for breakfast.  Go ahead and get the averages for lunch and dinner.
console.log("-------------\n");
var total=0;
for(var m=0;l<lunchMenu.length;m++){
  total += breakfastMenu[m];
}
var avg= total/lunchMenu.length;
console.log(avg);

console.log("-------------\n");
var total=0;
for(var n=0;l<dinnerMenu.length;n++){
  total += dinnerMenu[n];
}
var avg= total/dinnerMenu.length;
console.log(avg);


// 11.  The Head Chef wants to know if you added the vegan flag.  For each menu, print the number of vegan and non-vegan items.
console.log("-------------\n");
console.log("11. Number of Vegan Breakfast Items");
console.log("11. Number of Non-Vegan Breakfast Items");

console.log("11. Number of Vegan Lunch Items");
console.log("11. Number of Non-Vegan Lunch Items");

console.log("11. Number of Vegan Dinner Items");
console.log("11. Number of Non-Vegan Dinner Items");

// 12. Your best friend and the Head Chef have a bet to determine which menu has the most calories.  They want you to write code to calculate this and
// print the value.  If the calorie count is the same for two or more menus, print that.
console.log("-------------\n");
console.log("12. Menu with Most Calories");
