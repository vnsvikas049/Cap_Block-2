const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Try to coerce price into a number safely
    const price = Number(item.price);

    if (isNaN(price) || price < 0) {
      console.log(`Invalid price for item "${item.name}".`);
      return;
    }

    this.items.push({ ...item, price }); // Store price as a number
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`; // ✅ Backticks and string interpolation
  }
};

// Testing with mixed price types
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // String, but valid
checkout.addItem({ name: "Milk", price: 3.50 }); // Valid number
checkout.addItem({ name: "Broken Item", price: "abc" }); // Invalid

console.log(checkout.getTotal()); // Total: $103.45
