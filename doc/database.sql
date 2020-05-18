CREATE database IF NOT EXISTS hrsystem;
use hrsystem;
create table employee (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `age` int(3) NOT NULL,
    `gender` enum('男','女','保密') DEFAULT '保密',
    `email` varchar(100) NOT NULL ,
    `birthday` date NOT NULL ,
    `phone` varchar(20) NOT NULL ,
    `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) engine=innodb default charset=utf8;




