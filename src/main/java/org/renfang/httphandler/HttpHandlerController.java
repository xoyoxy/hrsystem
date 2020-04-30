package org.renfang.httphandler;

import org.springframework.web.HttpRequestHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 1. 使用HttpRequestHandler的接口，需要在xml中配置路径<bean class="org.renfang.HttpHandlerController.HttpController" name="/httphandler/login"/>
 * 实现HttpRequestHandler的接口,需要配置HttpRequestHandlerAdapter，http请求处理器适配器，
 *             所有实现了org.springframework.web.HttpRequestHandler接口的处理器，通过此适配器来执行。
 */
public class HttpHandlerController implements HttpRequestHandler {

    public void handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //给Request设置值，在页面进行回显
        request.setAttribute("username", "这是HttpRequestHandler！");
        //跳转页面
        request.getRequestDispatcher("/httphandler/home.jsp").forward(request, response);
    }
}
