package com.itbegin.dao;

import com.itbegin.model.User;

public interface UserDao {
  User findOne(String email);
  void insert(User user);
}
