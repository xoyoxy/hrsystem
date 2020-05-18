package org.renfang.dao;


import org.renfang.model.Employee;

public interface EmployeeDao {
    void insertUsers(Employee users);

    void updateUsers(Employee users);

    void deleteUsers(Employee users);

    Employee selectUserById(Long id);

}