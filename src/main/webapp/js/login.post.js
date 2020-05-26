//使用jquery拦截sumbmit
$(document).ready(function () {
    registFocusoutEvent("loginUserName", "无效，需要大于6个字符。");
    registFocusoutEvent("loginPassword", "无效，需要大于6个字符。");
    registFocusoutEvent("loginAuthCode", "请输入验证码");
    registFocusoutEvent("registUserName", "无效，需要大于6个字符。");
    registFocusoutEvent("registPassword", "无效，需要大于6个字符。");
    registFocusoutEvent("registEmail", "无效，请正确填写。");
    registFocusoutEvent("registPhone", "无效，请正确填写。");
    registFocusoutEvent("registAuthCode", "请输入验证码");
});

function registFocusoutEvent(nodeName, alertString) {
    $("#" + nodeName).focusout(function () {
        if ($(this)[0].value.length == 0) {
            $("#" + nodeName + "_point")[0].innerHTML = alertString
        } else if (checkAuthCode($(this)[0].value)) {
            $("#" + nodeName + "_point")[0].innerHTML = "&radic;"
        }
    });
}

function formLoginSubmit(event, form) {
    if (!checkInputValid(event, form)) {
        return false;
    }
    stopDefault(event);
    var queryData = {
        "username": form["username"].value,
        "password": form["password"].value
    }
    $.ajax({
        type: "post",
        url: "login",
        dataType: "text",
        data: JSON.stringify(queryData),
        contentType: "application/json",
        async: false, // ajax 默认是异步的，这里要改成同步，否则有可能先执行后面的代码了
        success: function (data) {
            // data = jQuery.parseJSON(data);
            window.location.href = "succ.html?user=data";

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR);
            alert(textStatus);
            alert(errorThrown);
        }

    });

    return false;
}

function checkInput(form) {
    var warningTag = document.createElement("b");
    warningTag.innerText = "无效，需要大于6个字符。";
    warningTag.className = "checkInput";

    var result = true;
    if (form["username"].value.length <= 6) {
        $("#username").after(warningTag.cloneNode(true));
        result = false;
    }
    if (form["password"].value.length <= 0) {
        $("#password").after(warningTag.cloneNode(true));
        result = false;
    }

    return result;
}

function stopDefault(event) {
    //document.getElementById("username").value = "456";
    if (event && event.preventDefault) { //如果是FF下执行这个
        event.preventDefault();
    } else {
        window.event.returnValue = false; //如果是IE下执行这个
    }
    return false;
}

function html_form_post() {
    var username = document.forms["form_login"]["username"].value;
    var password = document.forms["form_login"]["password"].value;
    alert("username:" + document.forms["form_login"]["username"].value);
    document.getElementById("username").value = "456";
    document.forms["form_login"]["password"].value = "123";
}

function checkInputLength(value) {
    return value.length > 6;
}

function checkAuthCode(value) {
    return true; //// TODO:
}


function checkLoginInputValid(event, form) {
    return checkInputValid_addPoint(form, "loginUserName", "无效，需要大于6个字符。") && checkInputValid_addPoint(form, "loginPassword", "无效，需要大于6个字符。") && checkInputAuthCode(form, "loginAuthCode");
}

function checkInputValid_addPoint(form, nodeName, alertString) {
    if (form[nodeName].value.length <= 6) {
        $("#" + nodeName + "_point")[0].innerHTML = alertString;
        return false;
    } else {
        $("#" + nodeName + "_point")[0].innerHTML = "";
        return true;
    }
}

function checkInputAuthCode(form, nodeName) { // TODO:
    if (form[nodeName].value.length == 0) {
        $("#" + nodeName + "_point")[0].innerHTML = "请输入验证码";
        return false;
    } else {
        $("#" + nodeName + "_point")[0].innerHTML = "";
        return true;
    }
}

function checkRegistInputValid(event, form) {
    return checkInputValid_addPoint(form, "registUserName", "无效，需要大于6个字符。") &&
        checkInputValid_addPoint(form, "registPassword", "无效，需要大于6个字符。") &&
        regexTest(/[\w.-]@[\w.-]/, form["registEmail"].value, "registEmail", "无效，请正确填写。") &&
        regexTest(/[\d.-]{4,}/, form["registPhone"].value, "registPhone", "无效，请正确填写。") &&
        checkGender(form, "registGenderSelect", "请选择性别。") &&
        checkInputAuthCode(form, "registAuthCode");
}

function checkGender(form, nodeName, alertString) {

    if (form["registGenderSelect"].value == "") {
        $("#" + nodeName + "_point")[0].innerHTML = alertString;
        return false;
    } else {
        $("#" + nodeName + "_point")[0].innerHTML = "";
        return true;
    }
}

function regexTest(regex, testString, nodeName, alertString) {
    if (nodeName == '' || alertString == '') {
        return regex.test(testString);
    }

    if (regex.test(testString)) {
        $("#" + nodeName + "_point")[0].innerHTML = "";
        return true;
    } else {
        $("#" + nodeName + "_point")[0].innerHTML = alertString;
        return false;
    }

}
