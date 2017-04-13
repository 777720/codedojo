package com.itbegin.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.dao.EmptyResultDataAccessException;

import com.itbegin.model.User;
import com.itbegin.dao.UserDao;

@Repository("userDao")
public class UserDaoImpl implements UserDao {
  @Autowired
  private JdbcTemplate jdbcTemplate;

  public User findOne(String email) {
    String sql = "select * from user where email = ?";

    User user;
    try {
      user = (User) jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper(User.class), new Object[] { email });
    } catch (EmptyResultDataAccessException e) {
      user = null;
    }

    return user;
  }

  public void insert(User user) {
    String sql = "insert into user (email, password) values (?, ?)";

    jdbcTemplate.update(sql, new Object[] { user.getEmail(), user.getPassword() });
  }

}
