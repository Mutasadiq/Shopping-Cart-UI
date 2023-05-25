let productListArray = [];
let sId=null;
let btnCart = document.querySelectorAll(".btn-cart");
btnCart.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productName = e.target.parentElement.firstElementChild.textContent;
    const productPrice =
      e.target.previousElementSibling.firstElementChild.textContent;
      sId+=1;
    productListArray.push({
        sId:sId,
      productName: productName,
      productPrice: productPrice,
    });

    // const tBody=document.getElementById("tBody");
    // const tr=document.createElement("tr");
    // tr.innerHTML="<td>"+productName+"</td><td>"+productPrice+"</td><td>";
    // tBody.appendChild(tr);
    AddProductToCart();
    DisplayCartItemAmount();
  });
});
let tBody,tr;
function AddProductToCart() {
  productListArray.forEach((value) => {
    tBody = document.getElementById("tBody");
    tr = document.createElement("tr");
    tr.innerHTML =
      "<td class='margin-top'>"+value.sId+"</td><td class='margin-top'>" + value.productName + "</td><td class='margin-top'>" + value.productPrice + "</td><td class='margin-top'><button class='bg-blue-700 rounded-2xl px-5 py-3 me-3 text-white' onclick='removeItem(this)'>Remove Item</button></td>";
  });
  tBody.appendChild(tr);
}

function DisplayCartItemAmount() {
  const tableRow = document.getElementById("table-row");
  for (let index = 0; index < productListArray.length; index++) {
    tableRow.firstElementChild.innerHTML = productListArray.length;
    tableRow.lastElementChild.innerHTML = productListArray.reduce(
      (initalValue, currentValue) => {
        return initalValue + Number(currentValue.productPrice);
      },
      0
    );
  }
  if(productListArray.length==0){
    tableRow.firstElementChild.innerHTML = "";
    tableRow.lastElementChild.innerHTML="";
  }
}

function removeItem(td) {
    if (confirm("Are you want to delete the Item")) {
      let selectedrow = td.parentElement.parentElement;
      let productIdValue=td.parentElement.parentElement.firstElementChild.textContent;
      let result=productListArray.filter((item,index)=>{
            if(productIdValue==item.sId){
                productListArray.splice(index,1);
                selectedrow.remove();
                DisplayCartItemAmount();
                console.log(productListArray);
            }
      });
      
      
    }
  }

  let emptyBtn=document.getElementById("empty-cart");
  emptyBtn.addEventListener("click",(event)=>{
    tBody = document.getElementById("tBody");
    tBody.innerHTML="";
    while(productListArray.length!=0){
        productListArray.pop();
    }        
    
    DisplayCartItemAmount();
    sId=0;
  });


  function CheckOut(){
    if(productListArray.length===0){
        alert("Please Do the Shopping from our Store");
    }else{
        alert('Thanks for Shopping!!');
    }
  }
// let btnCart=document.querySelectorAll(".btn-cart");
// for (let index = 0; index < btnCart.length; index++) {
//     const productItem = btnCart[index];

//     productItem.addEventListener("click",(e)=>{

//                     console.log(e.target.previousElementSibling.firstElementChild.textContent);
//                     console.log(e.target.parentElement.firstElementChild.textContent);

//                 const productName=e.target.parentElement.firstElementChild.textContent;
//                 const productPrice=e.target.previousElementSibling.firstElementChild.textContent;
//                 const tBody=document.getElementById("tBody");
//                 const tr=document.createElement("tr");
//                 tr.innerHTML="<td>"+productName+"</td><td>"+productPrice+"</td><td>";
//                 tBody.appendChild(tr);

//        });
// }
// let btnCart=document.getElementById("btn-cart");
