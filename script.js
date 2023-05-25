let productsListItem = [
  {
    id: 1,
    name: "Butter",
    price: 120,
  },
  {
    id: 2,
    name: "Egg",
    price: 25,
  },
  {
    id: 3,
    name: "Bread",
    price: 250,
  },
  {
    id: 4,
    name: "Macroni",
    price: 175,
  },
  {
    id: 5,
    name: "Cheese",
    price: 450,
  },
  {
    id: 6,
    name: "Oil",
    price: 720,
  },
  {
    id: 7,
    name: "Rice",
    price: 1500,
  },
  {
    id: 8,
    name: "Wheat",
    price: 1200,
  },
  {
    id: 9,
    name: "Biscuit",
    price: 40,
  },
  {
    id: 10,
    name: "Custard",
    price: 110,
  },
];

//Product List Items Function

function products_List() {
  let toStringProduct = "";
  productsListItem.forEach((product) => {
    toStringProduct += `Product Id: ${product.id}    Product Name: ${product.name}   Product Price: ${product.price} \n`;
  });
  return toStringProduct;
}

//AddToCart Class
class AddToCart {
  productCartList = [];
  addToCartList = [];

  // Push to Array method
  pushToArray(element) {
    this.productCartList.push(element);
  }

  // Display Product List method
  display(productArrayList) {
    let toStringCart = "";
    productArrayList.forEach((product) => {
      toStringCart += `Product Id: ${product.id}          Product Name: ${product.name}
       Product Price: ${product.price}    Product Quantity: ${product.quantity} \n`;
    });
    return prompt(`Product List Items\n${toStringCart}`);
  }

  // Find Product List method
  findProduct(productArrayList, element) {
    let productElement = productArrayList.find((product) => {
      if (product.id === Number(element)) {
        return true;
      } else {
        return false;
      }
    });
    return productElement;
  }

  // Add to Cart Method
  add_to_Cart(element) {
    let quantities = prompt("Enter the Quantity of the product");
    element.quantity = Number(quantities);
    this.addToCartList.push(element);
  }
  // remove_from_Cart(element){
  //  this.addToCartList.forEach((product,index)=>{
  //     if(product===element){
  //       this.addToCartList.splice(index,1);
  //     }
  //  });
  // }

  // Remove from Cart method
  remove_from_Cart(element) {
    let removeArray = this.addToCartList.filter((product) => {
      return product !== element;
    });
    this.addToCartList = removeArray;
  }

  // Proceed to Bill method
  proceed_to_Bill() {
    let bill = this.addToCartList.reduce(function (preValue, product) {
      let itemBill = product.price * product.quantity;
      preValue += itemBill;
      return preValue;
    }, 0);
    return bill;
  }
}

//Object creation
let addToCart = new AddToCart();
// Menu Function

function menu() {
  let option = prompt(`Please choose of the following options:
1: Show the Product Items List
2: Add the Product to the Cart
3: Remove the Product from the Cart
4: Proceed to the Bill
5: Exit`);

  switch (Number(option)) {
    case 1:
      // Show Product List Item
      let toStringProducts = products_List();
      alert(`Product List Items\n${toStringProducts}`);
      menu();
      break;
    case 2:
      //Add the product to Cart
      let cnfrm;

      productsListItem.forEach((product) => {
        addToCart.pushToArray(product);
      });

      do {
        let toStringProducts = products_List();
        const productId = prompt(`Product List Items\n${toStringProducts}`);

        let productElement = addToCart.findProduct(
          addToCart.productCartList,
          productId
        );
        if (productElement !== undefined) {
          addToCart.add_to_Cart(productElement);
        } else {
          alert(`The Product Id: ${productId} is invalid`);
          menu();
          break;
        }
        cnfrm = prompt(
          "Do you wish to add the product in the cart for Yes Press Y || y and for No Press N || n"
        );
      } while (cnfrm === "Y" || cnfrm === "y");

      menu();

      break;
    case 3:
      // debugger;
      //Remove the product to Cart
      let confirm;
      if (addToCart.addToCartList.length === 0) {
        alert("Please add the Products in the cart");
        menu();
      } else {
        const productId = addToCart.display(addToCart.addToCartList);
        do {
          let productElement = addToCart.findProduct(
            addToCart.addToCartList,
            productId
          );
          if (productElement !== undefined) {
            addToCart.remove_from_Cart(productElement);
          } else {
            alert(`The Product Id: ${productId}  is invalid`);
            break;
          }
          confirm = prompt(
            "Do you wish to remove the product in the cart for Yes Press Y || y and for No Press N || n"
          );
        } while (confirm === "Y" || confirm === "y");
        menu();
        break;
      }
      break;
    case 4:
      // Proceed to the Bill
      if (addToCart.addToCartList.length === 0) {
        alert("Please add the product in the cart");
        menu();
      } else if (addToCart.addToCartList.length !== 0) {
        let bill = addToCart.proceed_to_Bill();
        alert(`Your Total Bill is: ${bill}`);
        menu();
      }
      break;

    case 5:
      // Exit
      break;
  }
}

window.onload = menu;
