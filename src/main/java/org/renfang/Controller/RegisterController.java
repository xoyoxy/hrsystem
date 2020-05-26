package org.renfang.Controller;

import org.renfang.model.Employee;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RegisterController {

    @RequestMapping(value = "register", method = RequestMethod.POST, consumes = {"application/json"})
    public ModelAndView register(String username, String password, String email, String phone, String gender, String birthday) {
        //验证传递过来的参数是否正确，否则返回到登陆页面。
//        if (this.checkParams(employee)) {
            //指定要返回的页面为succ.jsp
            ModelAndView mav = new ModelAndView("page/succ");
            //将参数返回给页面
            /*mav.addObject("username", username);
            mav.addObject("password", password);*/
            return mav;
//        }
//        return new ModelAndView("page/home");
    }

    private boolean checkParams(Employee employee){
        return true;
    }


}
