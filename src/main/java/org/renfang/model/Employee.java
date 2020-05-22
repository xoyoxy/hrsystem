package org.renfang.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "employee")
@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Employee extends AbstractTimeStamp {

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

    @Column(name = "birthday")
    public Date birthday;

    @Column(name = "phone")
    private String phone;

    @OneToOne(cascade = CascadeType.ALL)//全级联的级联关系
    @JoinColumn(name = "work_id")//被控类对应的主键为pid
    private Password password;
}


