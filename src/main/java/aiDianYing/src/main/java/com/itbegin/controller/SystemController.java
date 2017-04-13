package com.itbegin.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;

import com.itbegin.model.User;
import com.itbegin.service.UserService;

@Controller
public class SystemController {

  @Autowired
  private UserService userService;

  @GetMapping("/join")
  public String signUp() {

    return "join";
  }

  @PostMapping("/join")
  public String signUp(User user, Model model) {
   	String email = user.getEmail();
    String password = user.getPassword();
    User entity = userService.findOne(email);

    if (entity != null) {
      model.addAttribute("message", "此邮箱已注册");
      return "join";
    }
		userService.insert(user);
    return "redirect:/";
  }

  @GetMapping("/login")
  public String login() {

    return "login";
  }

  @PostMapping("/login")
  public String login(User user, Model model, HttpSession session) {
    String email = user.getEmail();
    String password = user.getPassword();
    User entity = userService.findOne(email);

    if (entity == null) {
      model.addAttribute("message", "还未注册");
      return "login";
    }

    if (!entity.getPassword().equals(password)) {
      model.addAttribute("message", "密码错误");
      return "login";
    }

    session.setAttribute("email", entity.getEmail());
    return "redirect:/";
  }

  @GetMapping("/logout")
	public String logout(HttpSession session) {
    session.removeAttribute("email");

    return "redirect:/";
  }
}
