
package com.itbegin.dao;

import java.util.List;

import com.itbegin.model.Movie;


public interface MovieDao {

  List<Movie> findAll();
}
