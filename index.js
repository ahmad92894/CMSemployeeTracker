const mysql = require('mysql2');
const question = require('./questions');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'

    },
    console.log(`Connected to the classlist_db database.`)
);

init();
function init(){
    initialQ();
}


function allEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.table(res);
    initialQ();
    })
};

function allRoles() {
    db.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;
    console.table(res);
    initialQ();
    })
};

function allDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        initialQ();
    })
};
function updateEmployeeRole() {
    db.query("SELECT * FROM employee", (err, results) => {
      if (err) throw err;

      const employeeList = results.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      }));
        inquirer
        .prompt([
          {
            type: "list",
            message: "Which employee's role do you want to update?",
            name: "employeeId",
            choices: employeeList,
          },
          {
            type: "input",
            message: "Enter the new role ID:",
            name: "newRoleId",
          },
        ])
        .then((answers) => {
          const { employeeId, newRoleId } = answers;
          db.query(
            `UPDATE employee SET role_id = ? WHERE id = ?`,
            [newRoleId, employeeId],
            (err, results) => {
              if (err) throw err;
              console.log(`Employee's role updated successfully!`);
              initialQ();
            }
          );
        });
    });
  }
// inquirer
//   .prompt({
//     type: "input",
//     name: "name",
//     message: "What is the name of the department?",
//   })
//   .then(({ name }) => {
//     connection.query(
//       "INSERT INTO department (name) VALUES (?)",
//       [name],
//       (error, results, fields) => {
//         if (error) {
//           console.error(error);
//           console.log("Failed to add department");
//         } else {
//           console.log(`Added department ${name}`);
//         }
//         connection.end();
//       }
//     );
//   });
function initialQ () {
inquirer.prompt(question)
.then(ans=>{
    console.log(ans);
    // ans.option === "want to try again" ? initialQ() : process.exit();
    switch (ans.option) {
        case "Want to try again?":
            initialQ()
            break;
        case "View All Employees":
            allEmployees();
            break;
        case "View All Roles":
            allRoles();
            break; 
        case "View All Departments":
            allDepartments();
            break;   
        case "Update Employee Role":
            updateEmployeeRole();
            break;    
        case "Add a Employee":
            
            break;
        case "Add a Role":

            break;
        case 'Add a department':
            addDepartment();
            break;

        default:
            break;
    }
})
}