<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/4/24
  Time: 16:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content="人力资源管理平台" />
  <meta http-equiv="cache-control" content="no-cache">
  <meta http-equiv="expires" content="0">
  <link type="text/css" rel="stylesheet" href="css/index.css" />
  <title>人·力</title>
</head>

<body>
  <div class="main" id="pane">
    <div class="" style="width:100%;height:10%">

    </div>
    <div class="" id=" index_logo" style="float:left;width:65%; height:80%;background: url('images/logo.jpg') 30% 50% no-repeat rgb(248, 238, 210);background-size:50% 70%"></div>
    <div class="" id="loginContainer" style="float:right;width:35%;height:80%;background: rgb(248, 238, 210)">
      <div class="login-box" style="margin:30% 0%" align="left">
        <ul>
          <li><input id="userName" name="userName" type="text" class="user text" placeholder="用户名">
          </li>
          <li>

            <input id="password" name="password" type="password" class="pass text" placeholder="密码">
          </li>
          <li><input id="authCode" type="text" class="code text" placeholder="验证码"> <a href="javascript:void(0);"><img id="codeImage" title="点击更换" src="" class="code-img" onclick="refreshCode()">
            </a> </li>
          <li class="forget-pass">
            <font id="font" color="red" style="size: 15"></font>
            <a href="javascript:void(0);" class="forget" onclick="findPassword()" style="height: 22px">
              忘记密码
            </a>
          </li>
          <li>
            <div align="">
              <a id="loginBtn" href="javascript:void(0);" class="login-btn" onclick="login()">
                <span>登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="" style="width:100%;height:10%">

    </div>
  </div>

</body>

</html>
