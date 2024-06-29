const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance; // Added 'this' to access the balance property
  },
  getDiscount() {
    return this.discount; // Added 'this' to access the discount property
  },
  setDiscount(value) {
    this.discount = value; // Added 'this' to modify the discount property
  },
  getOrders() {
    return this.orders; // Added 'this' to access the orders property
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; // Added 'this' to access balance and discount
    this.orders.push(order); // Added 'this' to access the orders array
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // Outputs: 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // Outputs: 19750
console.log(customer.getOrders()); // Outputs: ["Burger", "Pizza", "Salad", "Steak"]
