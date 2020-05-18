package org.renfang.dao;

import org.renfang.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {
	
	@Autowired
	private HibernateTemplate hibernateTemplate;
 
	public void insertUsers(Employee users) {
		this.hibernateTemplate.save(users);
	}
 
	public void updateUsers(Employee users) {
		this.hibernateTemplate.update(users);
	}
 
	public void deleteUsers(Employee users) {
		this.hibernateTemplate.delete(users);
	}
 
	public Employee selectUserById(Long id) {
		return this.hibernateTemplate.get(Employee.class, id);
	}
 
}
