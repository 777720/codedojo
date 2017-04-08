package com.itbegin.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import com.itbegin.model.Movie;
import com.itbegin.dao.MovieDao;

//使用@Repository注解实例化名称为movieDao的movieDaoImpl实例
@Repository("movieDao")
class MovieDaoImpl implements MovieDao {
  @Autowired
  private JdbcTemplate jdbcTemplate;

  public List<Movie> findAll() {
    String sql = "select * from movie";

    List<Movie> movies = jdbcTemplate.query(sql, new BeanPropertyRowMapper(Movie.class));

    return movies;
  }

}
