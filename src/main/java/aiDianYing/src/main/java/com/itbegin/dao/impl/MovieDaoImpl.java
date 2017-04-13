package com.itbegin.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
//3-2新加包
import org.springframework.dao.EmptyResultDataAccessException;


import com.itbegin.model.Movie;
import com.itbegin.dao.MovieDao;

//使用@Repository注解实例化名称为movieDao的movieDaoImpl实例
@Repository("movieDao")
public class MovieDaoImpl implements MovieDao {
  @Autowired
  private JdbcTemplate jdbcTemplate;

  public List<Movie> findAll() {
    String sql = "select * from movie";

    List<Movie> movies = jdbcTemplate.query(sql, new BeanPropertyRowMapper(Movie.class));

    return movies;
  }


  //第三题第二步
  public Movie findOne(String id) {
    String sql = "select * from movie where id = ?";

    Movie movie;
    try {
      movie = (Movie) jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper(Movie.class), new Object[] { id });
    } catch (EmptyResultDataAccessException e) {
      movie = null;
    }

    return movie;
  }


}
