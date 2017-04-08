package com.itbegin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itbegin.service.MovieService;
import com.itbegin.dao.MovieDao;
import com.itbegin.model.Movie;

//使用@Service注解实例化名称为movieService的MovieServiceImpl
@Service("movieService")
public class MovieServiceImpl implements MovieService {
  @Autowired
  private MovieDao movieDao;

  public List<Movie> findAll() {
    
    return movieDao.findAll();
  }

}
