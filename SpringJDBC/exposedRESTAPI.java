// Main Spring Application
package com.okta.developer.tours;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class ToursApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ToursApplication.class, args);
	}

	@Override
	public void run(String...strings) throws Exception {

	}

}

// Data Model
package com.okta.developer.tours;

import javax.persistence.*;

@Entity
@Table(name = "test")
public class TestTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer user_id;

    private String username;

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

// Interface for JpaRepository
package com.okta.developer.tours;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestInterface extends JpaRepository<TestTable, Integer> {
}

// API (mapping and object conversion)
package com.okta.developer.tours;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TestTableRowMapper implements RowMapper<TestTable> {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public TestTable mapRow(ResultSet rs, int rowNum) throws SQLException {

        TestTable testTable = new TestTable();
        testTable.setUser_id(rs.getInt("user_id"));
        testTable.setUsername(rs.getString("username"));

        return testTable;

    }

    @CrossOrigin(origins = "*")
    @GetMapping("/test")
    public List<TestTable> findAll() {
        String sql = "SELECT * FROM test";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(TestTable.class));
    }
}
