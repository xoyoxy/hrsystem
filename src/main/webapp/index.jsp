<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/4/24
  Time: 16:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content="人力资源管理平台" />
  <meta http-equiv="cache-control" content="no-cache">
  <meta http-equiv="expires" content="0">
  <script src="js/jquery-3.4.1.min.js" type="text/javascript"></script>
  <script src="js/login.post.js" type="text/javascript"></script>
  <link type="text/css" rel="stylesheet" href="css/index.css" />
  <title>人·力</title>
</head>

<body>
  <div class="main" id="pane">
    <div class="" style="width:100%;height:10%">

    </div>
    <div class="" id=" index_logo" style="float:left;width:65%; height:80%;background: url('images/logo.jpg') 30% 50% no-repeat rgb(248, 238, 210);background-size:50% 70%"></div>
    <div class="" id="loginContainer" style="float:right;width:35%;height:80%;background: rgb(248, 238, 210)">
      <div class="login-box" style="margin:20% 0%" align="left">
        <h2>登录账号</h2>
        <form action="#" method="post" onsubmit="return checkLoginInputValid(window.event,this)">
          <div style="display:inline-block"><input id="loginUserName" name="loginUserName" type="text" class="text" placeholder="用户名"></div><div class="text-point" id="loginUserName_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><input id="loginPassword" name="loginPassword" type="password" class="text" placeholder="密码" style="display:inline-block"></div><div class="text-point" id="loginPassword_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><input id="loginAuthCode" name="loginAuthCode" type="text" class="code text" placeholder="验证码"> <a href="javascript:void(0);"><img id="codeImage" title="点击更换" src="" class="code-img" onclick="refreshCode()"></a></div><div class="text-point" id="loginAuthCode_point" style="width:268px;display:inline-block"></div>
          <a href="javascript:void(0);" class="forget" onclick="findPassword()" style="height: 22px;margin-right:52%">
            忘记密码
          </a>
        <input type="submit" name="loginBtn" value="登&nbsp;&nbsp;&nbsp;&nbsp;录" class="login-btn">
        </form>
        <div align="">
          <a href="javascript:void(0);" class="forget" style="height: 22px;margin-right:52%;margin-top:15px">
            <span>还没账号，点击注册</span>
          </a>
        </div>
      </div>
      <div class=" login-box" style="margin:10% 0%" align="left">
        <h2>创建一个账号</h2>
        <form action="register" method="post" onsubmit="return checkRegistInputValid(window.event,this)">
          <div style="display:inline-block"><input type="text" id="registUserName" name="registUserName" placeholder="用户名" class="user text" /></div><div class="text-point" id="registUserName_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><input type="password" id="registPassword" name="registPassword" placeholder="密码"  class="pass text" /></div><div class="text-point" id="registPassword_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><input type="text" id="registEmail" name="registEmail" placeholder="Email" class="user text" /></div><div class="text-point" id="registEmail_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><input type="text" id="registPhone" name="registPhone" placeholder="电话" class="user text" /></div><div class="text-point" id="registPhone_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><span style="font-size: 15px">性别：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="男" name="registGenderSelect" />男
          <input type="radio" value="女" name="registGenderSelect" />女
          <input type="radio" value="保密" name="registGenderSelect" />保密</div><div class="text-point" id="registGenderSelect_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><span style="font-size: 15px">生日：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="registBirthday" name="registBirthday" type="date" value="1990-01-01" /></div><div class="text-point" id="registBirthday_point" style="width:268px;display:inline-block"></div>
          <div style="display:inline-block"><input id="registAuthCode" name="registAuthCode" type="text" style="margin-top: 5px;" class="code text" placeholder="验证码"> <a href="javascript:void(0);"><img id="codeImage" title="点击更换" src="" class="code-img" onclick="refreshCode()"> </a></div><div class="text-point" id="registAuthCode_point" style="width:268px;display:inline-block"></div>
          <input type="submit" name="registBtn" value="注&nbsp;&nbsp;&nbsp;&nbsp;册" class="login-btn">
        </form>
        <div align="">
          <a href="javascript:void(0);" class="forget" style="height: 22px;margin-right:50%">
            <span>已有账号，返回登录</span>
          </a>
        </div>
      </div>
    </div>
    <div class="" style=" width:100%;height:10%"> </div>
  </div>
  <script type="text/javascript">
    $('.forget').click(function() {
      $('.login-box').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");

    });
  </script>
</body>

</html>
