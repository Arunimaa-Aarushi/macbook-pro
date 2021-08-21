// best price for mac 
const bestPrice = document.getElementById('best-price');


// memory variables 
const eightGB = document.getElementById('eightGB');
const sixteenGB = document.getElementById('sixteenGB');


// memory table 
const memoryTable = document.getElementById('memory-table');


// storage variable 
const storage1 = document.getElementById('normal-storage');
const storage2 = document.getElementById('intermidiate-storage');
const storage3 = document.getElementById('professional-storage');


// storage table 
const storageTable = document.getElementById('storage-table');


// delivery charge 
const freeDelivery = document.getElementById('free');
const paidDelivery = document.getElementById('paid');
const deliveryCharge = document.getElementById('delivery-charge');


// total price 
const totalPrice = document.getElementById('total');


// promo code 
const inputCode = document.getElementById('promo-code');


// main total 
const mainTotal = document.getElementById('main-total');


// update memory price 
eightGB.addEventListener('click', function () {
    memoryTable.innerText = "00";
    updatePrice()
});
sixteenGB.addEventListener('click', function () {
    memoryTable.innerText = "100";
    updatePrice()
});

storage1.addEventListener('click', function () {
    storageTable.innerText = "00";
    updatePrice()
});
storage2.addEventListener('click', function () {
    storageTable.innerText = "100";
    updatePrice()
});
storage3.addEventListener('click', function () {
    storageTable.innerText = "180";
    updatePrice()
});

freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = "00"
    updatePrice()
});
paidDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = "20"
    updatePrice()
});

function updatePrice() {
    const memoryTableNumber = parseFloat(memoryTable.innerText);
    const storageTableNumber = parseFloat(storageTable.innerText);
    const stockPrice = parseFloat(bestPrice, innerText);
    const deliveryFee = parseFloat(deliveryCharge.innerText);
    grandTotal = stockPrice + memoryTableNumber + storageTable + deliveryFee;
    totalPrice.innerText = grandTotal;
    mainTotal.innerText = grandTotal;
}

function applyCode() {
    const finalTotal = mainTotal.innerText;
    const inputCodeNo = inputCode.value;
    inputCode.value = '';
    const promoCode = 'stevekaku';
    if (inputCodeNo == promoCode) {
        const discount = finalTotal / 20;
        const allFinalPrice = finalTotal - discount;
        mainTotal.innerText = allFinalPrice;
    }
};