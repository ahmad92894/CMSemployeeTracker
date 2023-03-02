INSERT INTO department (name)
VALUES ("Admin"),
("Floor"),
("customer-service"),
("Maintenance");


INSERT INTO role (title, salary, department_id)
VALUES ("Administrator",100000,1),
("Manager",90000,2),
("Teller",80000,3),
("Custodien",70000,4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Ahmad","Bustami",2,1),
("John","Doe",1,NULL),
("Tim","smith",3,NULL),
("Cynthia","Guzman",4,NULL);