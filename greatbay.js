var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Canning1!",
  database: "greatbay_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});


var mainMeun = () => {
  inquirer.prompt([{
      type: "input",
      message: "Enter User name.",
      namw: "userName"
    },
    {
      type: "password",
      message: "Enter user password.",
      mask: "8",
      name: "password"
    },
    {
      type: "list",
      message: "Select an option",
      choices: [
        "Place Bid",
        new inquirer.Separator("¯\\_(ツ)_/¯"),
        "Post Bid",
        new inquirer.Separator("¯\\_(ツ)_/¯"),


      ],
      name: "userPick"

    }
  ]).then(function (inquiry) {

  })

}