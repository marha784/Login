package se.jensen.login.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

 
@Controller
public class AngularController{
 
    @RequestMapping(value = {"/","/login","/register","/admin"})
    public String index() {
        return "index.html";
    }
}

