package com.itbegin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

import com.itbegin.service.MovieService;

@Controller
public class HelloController {

  //数据获取方式改为从数据库获取,并删除之前的list
 	@Autowired
  private MovieService movieService;

 // 使用GetMapping注解解析请求，替代之前的RequestMapping
    @GetMapping("/")
  	public String welcome(Model model) {

      model.addAttribute("movies", movieService.findAll());
      return "index";
    }

}
