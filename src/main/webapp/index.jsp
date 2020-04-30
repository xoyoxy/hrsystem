<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/4/24
  Time: 16:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="人力资源管理平台"/>
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <link type="text/css" rel="stylesheet" href="css/index.css"/>
    <title>人力</title>
</head>
<body>
<div class="header clearfix" id="header" style="margin-top: 10.5px;">
    <h1 id="logo" style="height: 20px">
    </h1>
    <p class="topLink" style="height: 20px">
    </p>
</div>
<div class="main" id="main"
     style="margin-top: 29px; background: url('images/logo.jpg') 50% 50% no-repeat rgb(248, 238, 210);">
    <div class="login" id="loginContainer"
         style="background: url('images/')no-repeat;height: 290px;margin-top: 100px;">
        <div class="login-box" align="left">
            <ul>
                <li><input id="userName" name="userName" type="text" class="user text" value="用户名">
                </li>
                <li>
                    <input id="password" name="password" type="password" class="pass text" value=""
                           style="display: none;color:black;fontWeight:bold">
                    <input id="pwdTip" name="password" class="pass text" value="密码">
                </li>
                <li><input id="authCode" type="text" class="code text" value="验证码"> <a
                        href="javascript:void(0);"><img id="codeImage" title="点击更换" src="" class="code-img"
                                                        onclick="refreshCode()">
                </a></li>
                <li class="forget-pass">
                    <font id="font" color="red" style="size: 15"></font>
                    <a href="javascript:void(0);" class="forget" onclick="findPassword()" style="height: 22px">
                        忘记密码
                    </a>
                </li>
                <li>
                    <div align="center">
                        <a id="loginBtn" href="javascript:void(0);" class="login-btn" onclick="login()">
                            <span>登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>
