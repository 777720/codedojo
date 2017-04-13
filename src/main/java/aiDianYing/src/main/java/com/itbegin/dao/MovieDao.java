
package com.itbegin.dao;

import java.util.List;

import com.itbegin.model.Movie;


public interface MovieDao {

  List<Movie> findAll();

  //第三题第二步
  Movie findOne(String id);
}
