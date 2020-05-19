package org.renfang.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.renfang.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:hibernate.xml")
public class EmployeeDaoImplTest {

    @Autowired
    private EmployeeDao employeeDao;

    @Test
    @Transactional
    public void testInsertUsers() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Employee employee = new Employee();
        employee.setAge(18);
        employee.setName("路飞");
        employee.setBirthday(sdf.parse("2000-01-02"));
        employee.setEmail("asdf@jsrf.com");
        employee.setGender("男");
        employee.setPhone("15951802273");
        employeeDao.insertEmployees(employee);
    }


    @Test
    @Transactional
    public void testSelectEmployeeById() throws ParseException {
        Employee employee = employeeDao.selectEmployeeById(1);
        System.out.println(employee);
    }

}