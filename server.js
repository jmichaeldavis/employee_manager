const mysql = require("mysql2");
const inquirer = require('inquirer');
require("console.table");
//Connect to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '0601',
    database: 'employee_db'
  },
  console.log('Connected to Database.')
);

function latestAllDepartmentsArray() {
  db.query("SELECT * FROM department", function (err, results){
    if (err) {
      console.log(err)
      return []
    }
    return results;
  })
}

let allDepartments = latestAllDepartmentsArray()

function displayMenu() {
  //Presents the options through inquirer
  inquirer.prompt([
    {
      type: 'list',
      message: 'Please select an action below',
      name: 'menuChoice',
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    }
  ])
  .then((data) => {
    if(data.menuChoice === "view all departments"){
      viewAllDepartments()
    }
    if(data.menuChoice === "view all roles"){
      viewAllRoles()
    }
    if(data.menuChoice === "view all employees"){
      viewAllEmployees()
    }
    if(data.menuChoice === "add a department"){
      addDepartment()
    }
    if(data.menuChoice === "add a role"){
      console.log("not ready")
    }
    if(data.menuChoice === "add an employee"){
      console.log("not ready")
    }
    if(data.menuChoice === "update an employee role"){
      console.log("not ready")
    }
  })
};
function viewAllDepartments() {
  db.query("SELECT * FROM department", function (err, results){
    if (err) {
      console.log(err)
      return
    }
    console.table(results)
  })
}
function viewAllRoles() {
  db.query("SELECT * FROM role", function (err, results){
    if (err) {
      console.log(err)
      return
    }
    console.table(results)
  })
}
function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (err, results){
    if (err) {
      console.log(err)
      return
    }
    console.table(results)
  })
}
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What department do you want to add?',
      name: 'newDepartment',
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO department (name) VALUES ("${data.newDepartment}")`, function (err, results){
      if (err) {
       console.log(err)
       return
      }
      viewAllDepartments()
    })
  })
}
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What role do you want to add?',
      name: 'newRole',
    },
    {
      type: 'list',
      message: 'What department is this for?',
      name: 'departmentName',
      choices: [allDepartments[i]]
    }

  ])
  .then((data) => {
    db.query(`INSERT INTO role (name) VALUES ("${data.newDepartment}")`, function (err, results){
      if (err) {
       console.log(err)
       return
      }
      viewAllDepartments()
    })
  })
}
function getDepartmentOptions() {
  let departmentOptions = []
  for(i = 0; i < allDepartments.length; i++) {
    departmentOptions.push(allDepartments[i].name)
  }
}
console.log(allDepartments);
//getDepartmentOptions()
//displayMenu();
//console.log(allDepartments);
//init function calls selection function. Thats where the inquirer options begin. It will create the prompt lists. If prompt answer
// === option run the db.query function. console.table shows the results in table format. would need to install with npm i
// Need selection functions (display all, selection, etc)
// Need adding functions (new department, employee, etc)
