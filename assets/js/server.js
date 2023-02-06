const mysql = require('mysql2');
const inquirer = require('inquirer');

const createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'KaleDolphin797!',
        database: 'employee_tracker_db'
    });
};


inquirer
    .prompt([
        {
            type: 'input',
            name: 'initialize',
            message: 'What would you like to do?',
            choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Role', 'Exit'],
        },
        {
            type: 'input',
            name: 'adding a department',
            message: 'What will this department be called?',
        },
        {
            type: 'input',
            name: 'adding a role',
            message: 'What will this role be called?',
        },
        {
            type: 'input',
            name: 'adding a role salary',
            message: 'What is the salary for this role?',
        },
        {
            type: 'input',
            name: 'adding a role department',
            message: 'What department will this role be in?',
        },
        {
            type: 'input',
            name: 'adding an employee first name',
            message: 'What is the employee’s first name?',
        }, {
            type: 'input',
            name: 'adding an employee last name',
            message: 'What is the employee’s last name?',
        },
        {
            type: 'input',
            name: 'adding employee role',
            message: 'What is the employee’s role?',
        }, {
            type: 'input',
            name: 'adding employee manager',
            message: 'Who is the employee’s manager?',
        },
        {
            type: 'input',
            name: 'employee selection for new role',
            message: 'Which employee would you like to update?',
        }, {
            type: 'input',
            name: 'updating employee role',
            message: 'What department will this role be in?',
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
        },

    // ])
    // .then((answers) => {
    //     const htmlPageContent = generateHTML(answers);

    //     fs.writeFile('index.html', htmlPageContent, (err) =>
    //         err ? console.log(err) : console.log('Successfully created index.html!')
    //     );
    // });