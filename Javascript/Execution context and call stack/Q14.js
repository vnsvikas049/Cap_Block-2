const userProfile = {
  name: "Alice",
  age: 28,

  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }

    this.age = newAge;
    console.log(this.details()); // ✅ calling the method properly
  }
};

// Test
userProfile.updateAge(30); // Output: Alice is 30 years old.
console.log(userProfile.details()); // Output: Alice is 30 years old.
