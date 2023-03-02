const mysql = require('mysql2');
const question = require('./questions');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
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

// function updateEmployeeRole() {
//     db.query('Update * FROM employee role_id', (err, res) => {
//         if (err) throw err;
//         console.table(res);
//         initialQ();
//     })
// };
// function addDepartment() {
//     db.query('INSERT INTO department (name) VALUES (?)',(err, res) => {
//         if (err) throw err;
//         console.table(res);
//         initialQ();
//     })
// };


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
        case "Add a Department":
            addDepartment();
            break;

        default:
            break;
    }
})
}