let products = {

  'p01': {
    id: 'p01',
    name: 'Lounge Chair',
    price: 999,
    description: 'a comfy chair'
  },

  
  'p02': {
    id: 'p02',
    name: 'Stuffed Teddy Bear',
    price: 10000,
    description: 'Standing 9 feet tall, this teddy is sure to impress.'
  },

  'p03': {
    id: 'p03',
    name: 'Funny Hat',
    price: 150,
    description: 'a really funny hat'
  },

  getProductByID: function(productID) {
    // should return a sentence containing all of the info about the product (name price, and description)

    return products[productID]["name"] + " " + products[productID]["price"] + " " + products[productID]["description"]
  },

  getProductByName: function(productName) {
     // should return a sentence containing all of the info about the product (name price, and description)

      let productIDs = Object.keys(products);

      for (let i = 0; i < productIDs.length; i++) {
        if (products[productIDs[i]].name === productName) {
          return products[productIDs[i]].name + " " + products[productIDs[i]].price + " " + products[productIDs[i]].description;
        }
      }
  },

  addProduct: function(name, price, desc) {
    //will need a random id as well when creating a new product. console log the products to confirm it was added. 

    const uid = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    const newProduct = {
      id: uid,
      name: name,
      price: price,
      description: desc
    };

    products[uid] = newProduct;
    console.log(products.getProductByID(uid))
  },

  cartTotal: function(arrayOfIDs) {
    // this function will take in an array of product Ids, and using this, will add together the total cost of all the items. 
    let sum = 0;

    for (let i = 0; i < arrayOfIDs.length; i++) {
      sum = sum + products[arrayOfIDs[i]].price;
    }

    return sum
  }
}


// **************** TEST ****************
console.log(products.getProductByID("p01"));
console.log(products.getProductByName("Funny Hat"));
products.addProduct("name1", 99999, "This is a description");
console.log(products.cartTotal(["p02", "p03"]));