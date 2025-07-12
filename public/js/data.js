
let employeeData = JSON.parse(localStorage.getItem("employeeData")) || [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    department: "Engineering",
    role: "Frontend Developer"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob@example.com",
    department: "Design",
    role: "UI/UX Designer"
  }
];
function saveData() {
  localStorage.setItem("employeeData", JSON.stringify(employeeData));
}
