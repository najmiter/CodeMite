// const item = {
//     name: "t-shirt",
//     price: 300,

//     getDiscountedPrice: function (discount = 0.1) {
//         return this.price - this.price * discount;
//     },
// };

// const item20 = {
//     name: "jeans",
//     price: 350,

//     getDiscountedPrice: function (discount = 0.1) {
//         return this.price - this.price * discount;
//     },
// };

// console.log(item.getDiscountedPrice());

function Item(name, price) {
    return {
        name,
        price,

        getDiscountedPrice(discount = 0.1) {
            return this.price - this.price * discount;
        },
    };
}

// const item = Item("t-shirt", 200);
// const item2 = Item("jeans", 300);

// console.log(item.getDiscountedPrice());
// console.log(item2.getDiscountedPrice());

const cartItems = ["t-shirt", "jeans"];
const cartPrices = [200, 300];

const items = cartItems.map((item, i) => Item(item, cartPrices.at(i)));

console.log(items);
