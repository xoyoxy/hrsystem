package org.renfang.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WelComeFileController {

    @RequestMapping(value = {"test"}, method = RequestMethod.GET)
    public ModelAndView welcome(){
        return new ModelAndView("index");
    }
}
