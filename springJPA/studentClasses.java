package com.springy.springboot;

public class Student {

    private String firstName;
    private String lastName;
    private int studentID;

    public Student(String firstName, String lastName, int studentID) {
        super();
        this.lastName = lastName;
        this.firstName = firstName;
        this.studentID = studentID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getStudentID() {
        return studentID;
    }

    public void setStudentID(int studentID) {
        this.studentID = studentID;
    }
}

/*
*
*
*/
package com.springy.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {

    @GetMapping("/student")
    public List<Student> sendStudent() {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Riley", "Fletcher", 27));
        students.add(new Student("Ramesh", "Fadatare", 1));
        students.add(new Student("Tony", "Cena", 12));
        students.add(new Student("Sanjay", "Jadhav", 33));
        students.add(new Student("Ram", "Jadhav", 88));
        students.add(new Student("Umesh", "Fadatare", 33));
        return students;
    }

    public Student createStudent(String firstName, String lastName, int studentID) {
        return new Student(firstName, lastName,studentID);
    }
}
