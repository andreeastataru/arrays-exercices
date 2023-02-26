// Customer object
let customers = [
  {
    id: 001,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 002,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 003,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 004,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 005,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

//Get 'Senior Citizens' by Filtering out other customers ( >= 60 years )

const seniors = customers
  .filter((customer) => {
    return customer.age >= 60;
  })
  .map((customer) => {
    return customer.f_name;
  });

console.log("[filter] Senior Customers = ", seniors);

// Transform the customer array with a new attribute ( add full name and title )

const customersWithFullNames = customers.map((customer) => {
  let title = "";
  if (customer.gender === "M") {
    title = "Mr.";
  }
  if (customer.gender === "F" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Miss";
  }
  customer["full_name"] = title + " " + customer.f_name + " " + customer.l_name;
  return customer;
});

console.log("Customers with full name", customersWithFullNames);

//Get the average age of the Customers who purchased 'Book'

let count = 0;
const total = customers.reduce((totalAge, customer, currentIndex, array) => {
  if (customer.purchased.includes("Book")) {
    totalAge = totalAge + customer.age;
    count = count + 1;
  }
  return totalAge;
}, 0);

console.log("Customer Avg age Purchased Book:", Math.floor(total / count));

//Do we have a Young Customer(age less than 10 years)?

const hasYoungCustomers = customers.some((customer) => {
  return customer.age < 10;
});

console.log("Young customer exists?", hasYoungCustomers);

//Who's the Young Customer (age less than 10 years)?

const youngCustomerName = customers.find((customer) => {
  return customer.age < 10;
});

console.log("Young customer name is", youngCustomerName.full_name);

//Do we have a Customer without any purchase?

const isThereAWindowShpper = customers.every((customer) => {
  return customer.purchased.length === 0;
});

console.log("Is there a window shopper?", isThereAWindowShpper); //de intrebat dc e false daca scot propietatea

/////Get the total amount spent by married customers

//Filter the married customers
const marriedCustomers = customers.filter((customer) => {
  return customer.married;
});

//console.warn(marriedCustomers);

//Get an array of expenses done by them with map

const expenses = marriedCustomers.map((customer) => {
  return customer.expense;
});

//console.warn(expenses);

//Use the output of the above(expenses of married customers) as input to a reduce() method to get total expense.

const totalexpense = expenses.reduce((total, expense) => {
  return total + expense;
}, 0);

//Refactor the code in the last exercise

const totalExpense = customers
  .filter((customer) => customer.married)
  .map((customer) => customer.expense)
  .reduce((total, expense) => total + expense);

console.log("Total amount spent by married customers", totalExpense);
