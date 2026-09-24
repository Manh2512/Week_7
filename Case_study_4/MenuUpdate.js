function getTotalPrice(){
    'use strict';
    const justJavaSubtotal = Number(document.querySelector('input[name="java-subtotal"]').value) || 0.0;
    const cafeAuLaitSubtotal = Number(document.querySelector('input[name="cafe-subtotal"]').value) || 0.0;
    const icedCappuccinoSubtotal = Number(document.querySelector('input[name="cappuccino-subtotal"]').value) || 0.0;
    
    var sum = justJavaSubtotal + cafeAuLaitSubtotal + icedCappuccinoSubtotal;
    document.querySelector('input[name="total-price"]').value = sum;
}

function getJustJavaSubtotal(){
    const justJavaPrice = 2.0;
    const justJavaQuantity = Number(document.querySelector('input[name="java-quantity"]').value);
    console.log(justJavaQuantity);
    if(justJavaQuantity < 0){
        alert("Quantity cannot be negative number!");
    }else if(!Number.isInteger(justJavaQuantity)){
        alert("Quantity must be an integer!");
    }else{
        const subtotal = justJavaPrice * justJavaQuantity;
        document.querySelector('input[name="java-subtotal"]').value = subtotal;
        getTotalPrice();
    }
}

function getCafeAuLaitSubtotal(){
    const cafeAuLaitPrice = document.querySelector('#cafe-form input[name="cafe-price"]:checked');
    const cafeAuLaitQuantity = Number(document.querySelector('input[name="cafe-quantity"]').value) || 0;
    
    if(cafeAuLaitQuantity !== 0 && !cafeAuLaitPrice) {
        alert("Please choose Single shot or Double shot for Cafe Au Lait!");
    }else if(cafeAuLaitPrice){
        if(cafeAuLaitQuantity < 0){
            alert("Quantity cannot be negative number!");
        }else if(!Number.isInteger(cafeAuLaitQuantity)){
            alert("Quantity must be an integer!");
        }else{
            const subtotal = Number(cafeAuLaitPrice.value) * cafeAuLaitQuantity;
            document.querySelector('input[name="cafe-subtotal"]').value = subtotal;
            getTotalPrice();
        }
    }
}

function getIcedCappuccinoSubtotal(){
    const icedCappuccinoPrice = document.querySelector('#cappuccino-form input[name="cappuccino-price"]:checked');
    const icedCappuccinoQuantity = Number(document.querySelector('input[name="cappuccino-quantity"]').value) || 0;
    
    if(icedCappuccinoQuantity !== 0 && !icedCappuccinoPrice) {
        alert("Please choose Single shot or Double shot for Iced Cappuccino!");
    }else if(icedCappuccinoPrice){
        if(icedCappuccinoQuantity < 0){
            alert("Quantity cannot be negative number!");
        }else if(!Number.isInteger(icedCappuccinoQuantity)){
            alert("Quantity must be an integer!");
        }else{
            const subtotal = Number(icedCappuccinoPrice.value) * icedCappuccinoQuantity;
            document.querySelector('input[name="cappuccino-subtotal"]').value = subtotal;
            getTotalPrice();
        }
    }
}

document.querySelector('input[name="java-quantity"]').addEventListener("input", getJustJavaSubtotal);
document.querySelectorAll('#cafe-form input[name="cafe-price"], input[name="cafe-quantity"]').forEach(input => {
    input.addEventListener('input', getCafeAuLaitSubtotal);
});
document.querySelectorAll('#cappuccino-form input[name="cappuccino-price"], input[name="cappuccino-quantity"]').forEach(input => {
    input.addEventListener('input', getIcedCappuccinoSubtotal);
});