package org.renfang.dao;


import org.renfang.model.Employee;

public interface EmployeeDao {
    void insertEmployees(Employee users);

    void updateEmployees(Employee users);

    void deleteEmployees(Employee users);

    Employee selectEmployeeById(int id);

}