package com.itbegin.service;

import com.itbegin.model.User;

public interface UserService {
	User findOne(String email);
  void insert(User user);
}
