INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 130000, 4),
       ("Lawyer", 120000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)  
VALUES ("Jennifer", "Gutierrez", 1, NULL),
       ("Mark", "Halstrom", 2, 1),
       ("Ricardo", "Chavez", 3, NULL),
       ("Angel", "Oropeza", 4, 3),
       ("Maria", "Manjares", 5, NULL),
       ("Gema", "Gutierrez", 6, NULL),
       ("Luis", "Flor", 7, 6);
       