const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey'];

// Add 'Meat' to the beginning if it's not already there
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end if it's not already there
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'honey' if you are allergic to it
const indexOfHoney = shoppingCart.indexOf('honey');
if (indexOfHoney !== -1) {
    shoppingCart.splice(indexOfHoney, 1);
}

// Modify 'Tea' to 'Green Tea'
const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
    shoppingCart[indexOfTea] = 'Green Tea';
}

console.log(shoppingCart);

