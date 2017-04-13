package com.itbegin.service;

import java.util.List;

import com.itbegin.model.Movie;

public interface MovieService {
  List<Movie> findAll();


  //第三题第二步
  Movie findOne(String id);
}
