//使用jquery拦截sumbmit
$(document).ready(function () {
    $("#username").focusout(function () {
        if (!checkInputLength($(this)[0].value)) {
            $("#username_point")[0].innerHTML = "无效，需要大于6个字符。"
        } else {
            $("#username_point")[0].innerHTML = "&radic;"
        }
    });
    $("#password").focusout(function () {
        if (!checkInputLength($(this)[0].value)) {
            $("#password_point")[0].innerHTML = "无效，需要大于6个字符。"
        } else {
            $("#password_point")[0].innerHTML = "&radic;"
        }
    });
    document.getElementById("form_login").onsubmit = function (event) {
        var form = document.forms["form_login"];
        return formLoginSubmit(event, form);
    }
});

function formLoginSubmit(event, form) {
    if (!checkInputValid(event, form)) {
        return false;
    }
    stopDefault(event);
    var queryData = {"username": form["username"].value, "password": form["password"].value}
    $.ajax({
        type: "post",
        url: "login",
        dataType: "text",
        data: JSON.stringify(queryData),
        contentType: "application/json",
        async: false, // ajax 默认是异步的，这里要改成同步，否则有可能先执行后面的代码了
        success: function (data) {
            // data = jQuery.parseJSON(data);
            window.location.href="succ.html?user=data";

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
    if (event && event.preventDefault) {//如果是FF下执行这个
        event.preventDefault();
    } else {
        window.event.returnValue = false;//如果是IE下执行这个
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


function checkInputValid(event, form) {
    return checkInputValid_addPoint(form, "username") && checkInputValid_addPoint(form, "password");
}

function checkInputValid_addPoint(form, nodeName) {
    if (form[nodeName].value.length <= 6) {
        $("#" + nodeName + "_point")[0].innerHTML = "无效，需要大于6个字符。";
        return false;
    } else {
        $("#" + nodeName + "_point")[0].innerHTML = "";
        return true;
    }
}

