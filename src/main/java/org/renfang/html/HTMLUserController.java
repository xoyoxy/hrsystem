package org.renfang.html;

import org.renfang.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("html")
public class HTMLUserController {

    /*** 
     * 用户登陆 
     * <p>注解配置，只允许POST提交到该方法 
     * @param user
     * @return
     */
    @RequestMapping(value = "login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseBody
    public User login(@RequestBody User user, HttpServletRequest request, HttpServletResponse response) {
        //验证传递过来的参数是否正确，否则返回到登陆页面。  
        if (this.checkParams(new String[]{user.getUsername(), user.getUsername()})) {
            //指定要返回的页面为succ.jsp
            ModelAndView mav = new ModelAndView("html/succ");
            //将参数返回给页面
            mav.addObject("username", user.getUsername());
            mav.addObject("password", user.getPassword());
            return user;
        }else{
            User errorUser = new User();
            errorUser.setError("error");
            return errorUser;
        }

    }

    /*** 
     * 验证参数是否为空 
     * @param params
     * @return
     */
    private boolean checkParams(String[] params) {
        for (String param : params) {
            if (param == "" || param == null || param.isEmpty()) {
                return false;
            }
        }
        return true;
    }
}