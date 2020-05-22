CREATE database IF NOT EXISTS hrsystem;
use hrsystem;
CREATE TABLE employee (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `work_id` int(11) NOT NULL UNIQUE ,
    `name` varchar(50) NOT NULL,
    `age` int(3) NOT NULL,
    `gender` enum('男','女','保密') DEFAULT '保密',
    `email` varchar(100) NOT NULL ,
    `birthday` date NOT NULL ,
    `phone` varchar(20) NOT NULL ,
    `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    foreign key(`work_id`) references password(`work_id`),
    UNIQUE KEY index_name (`name`),
    KEY index_create_date (`create_date`),
    KEY index_update_date (`update_date`)
) engine=innodb default charset=utf8;

CREATE TABLE password(
    `work_id` int(11) NOT NULL PRIMARY KEY,
    `password` char(32)
) engine=innodb default charset=utf8;




