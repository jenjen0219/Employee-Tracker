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

//the main menu function will be called first and will prompt the user to choose what they would like to do
const mainMenu = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'initialize',
        message: 'What would you like to do?',
        choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Role', 'Exit']
    })
};

//the following select case will be used to determine which function to call based on the user's choice
mainMenu().then(answers => {
    switch (answers) {
        case 'View Departments':
            viewDepartments();
            break;
        case 'View Roles':
            viewRoles();
            break;
        case 'View Employees':
            viewEmployees();
            break
        case 'Add Department':
            addDepartment();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;

    }
});

const viewDepartments = () => {
    employee_tracker_db.promise().query('SELECT * FROM department', (err, results) => {

        if (err) {
            console.log(err);
        }
        console.table(results);
    });
};


function addDepartment() {
    return inquirer.prompt({
        type: 'input',
        name: 'adding a department',
        message: 'What will this department be called?',
    })
    //add a .then to record the response

}

function addRole() {
    return inquirer.prompt({
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
        })
}
function addEmployee() {
    return inquirer.prompt({
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
    })
}

function updateEmployeeRole() {
    return inquirer.prompt({
        type: 'input',
        name: 'employee selection for new role',
        message: 'Which employee would you like to update?',
    }, {
        type: 'input',
        name: 'updating employee role',
        message: 'What department will this role be in?',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],

    })
}

inquirer
    .prompt([
        {
            type: 'list',
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

    // create seperate functions for the various prompts