package com.itbegin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itbegin.service.UserService;
import com.itbegin.dao.UserDao;
import com.itbegin.model.User;

@Service("userService")
public class UserServiceImpl implements UserService {
  @Autowired
  private UserDao userDao;

  public User findOne(String email) {
    return userDao.findOne(email);
  }

  public void insert(User user) {
    userDao.insert(user);
  }
}
