INDERT INTO department (name)
VALUES
("Admin")
("Floor")
("customer-service")
("Maintenance");


INSERT INTO role (title, salary, department_id)
VALUES
("Administrator",100000,5)
("Manager",90000,6),
("Teller",80000,7),
("custodien",70000,8);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
("John","Doe",1,1)
("Ahmad","Bustami",2,2),
("Tim","smith",3,3),
("Cynthia","Guzman",4,4);