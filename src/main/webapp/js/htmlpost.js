$(document).ready(function () {
    document.getElementById("form_login").onsubmit = function (event) {
        var form = document.forms["form_login"];
        return formLoginSubmit(event, form);
    }
});


function formLoginSubmit(event, form) {
    stopDefault(event);
    if (checkInput(form)) {
        var queryData = {"username": form["username"].value, "password": form["password"].value}
        $.ajax({
            type: "post",
            url: "login",
            // dataType: "json",
            data : JSON.stringify(queryData),
            contentType: "application/json",
            async: false, // ajax 默认是异步的，这里要改成同步，否则有可能先执行后面的代码了
            success: function (data) {
                // data = jQuery.parseJSON(data);
                alert(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR);
                alert(textStatus);
                alert(errorThrown);
            }

        });
    }
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


