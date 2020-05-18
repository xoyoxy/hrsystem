package org.renfang.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.renfang.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:hibernate.xml")
public class EmployeeDaoImplTest {

    @Autowired
    private EmployeeDao userDao;

    @Test
    @Transactional
    @Rollback(false)
    public void testInsertUsers() {
        Employee users = new Employee();
        users.setAge(18);
        users.setName("路飞");
        this.userDao.insertUsers(users);
    }
}