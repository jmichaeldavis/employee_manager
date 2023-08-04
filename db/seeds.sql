INSERT INTO department (id, name)
VALUES  (001, "Marketing"),
        (002, "Accounting"),
        (003, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES  (001, "Boogie Man", 45000, 001),
        (002, "Scientist", 55, 002),
        (003, "Security", 456, 003);

 INSERT INTO employee (id, first_name, last_name, role_id)
 VALUES  (001, "John", "Wick", 001),
         (002, "Jimmy", "Neutron", 002),
         (003, "Shrek", "The Ogre", 003);