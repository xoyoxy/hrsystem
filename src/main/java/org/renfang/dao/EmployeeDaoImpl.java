package org.renfang.dao;

import org.renfang.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

    @Autowired
    private HibernateTemplate hibernateTemplate;

    public void insertEmployees(Employee Employees) {
        this.hibernateTemplate.save(Employees);
    }

    public void updateEmployees(Employee Employees) {
        this.hibernateTemplate.update(Employees);
    }

    public void deleteEmployees(Employee Employees) {
        this.hibernateTemplate.delete(Employees);
    }

    public Employee selectEmployeeById(int id) {
        return this.hibernateTemplate.get(Employee.class, id);
    }

}
