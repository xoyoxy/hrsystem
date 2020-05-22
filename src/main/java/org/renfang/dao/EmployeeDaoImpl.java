package org.renfang.dao;

import org.renfang.model.Employee;
import org.renfang.model.Password;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

    @Autowired
    private HibernateTemplate hibernateTemplate;

    public void insertEmployees(Employee Employee, Password password) {
        this.hibernateTemplate.save(password);
        this.hibernateTemplate.save(Employee);

    }

    public void updateEmployees(Employee Employee) {
        this.hibernateTemplate.update(Employee);
    }

    public void deleteEmployees(Employee Employee) {
        this.hibernateTemplate.delete(Employee);
    }

    public Employee selectEmployeeById(int id) {
        return this.hibernateTemplate.get(Employee.class, id);
    }

}
