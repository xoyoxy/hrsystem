CREATE database IF NOT EXISTS hrsystem;
create table employee (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(200) NOT NULL,
    `age` int(3) NOT NULL,
    `gender` enum('男','女','保密'),
    user varchar(100) not null,password varchar(100) not null) engine=myisam default charset=utf8;




