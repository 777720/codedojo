


package com.itbegin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.ui.Model;

import com.itbegin.model.Movie;
import com.itbegin.service.MovieService;

@Controller
@RequestMapping("/movies")
public class MovieController {

  @Autowired
  private MovieService movieService;

  @GetMapping("/{id}")
  public String movieDetail(@PathVariable String id, Model model) {

    Movie movie = movieService.findOne(id);

    model.addAttribute("movie", movie);
    return "movie/detail";
  }
}
