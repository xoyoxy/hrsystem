package org.renfang.dao;


import org.renfang.model.Employee;
import org.renfang.model.Password;

public interface EmployeeDao {
    void insertEmployees(Employee employee, Password password);

    void updateEmployees(Employee employee);

    void deleteEmployees(Employee employee);

    Employee selectEmployeeById(int id);

}