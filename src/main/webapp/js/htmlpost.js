/*
$.ajax({
    type : "post",
    url : "$!base/aaa/getList",
    dataType: 'html',
    data : JSON.stringify(queryData),
    contentType : "application/json",
    success : function (data) {
// data = jQuery.parseJSON(data);
        console.info(data);
        $("#aaa").html(data);
    }
});*/

window.onload = function () {
    /*document.forms["form_login"].onsubmit = function (event) {
        if(checkInput()){

        }else {
            stopDefault(event);
        }

    }*/
};

function formLoginSubmit(event, form) {
    if(checkInput(form)){
        var queryData={username:form["username"].value, password:form["password"].value}
        $.post("login",JSON.stringify(queryData),function(data,status){
            alert("数据: \n" + data + "\n状态: " + status);
        });
       /* $.get({
            type : "post",
            url : "login",
            dataType: 'json',
            data : JSON.stringify(queryData),
            contentType : "application/json",
            success : function (data) {
// data = jQuery.parseJSON(data);
                console.info(data);
            }
        });*/
        return true;
    }else {
        stopDefault(event);
        return false;
    }
}

function checkInput(form) {
    var warningTag = document.createElement("b");
    warningTag.innerText = "无效，需要大于6个字符。";
    warningTag.className = "checkInput";

    var result = true;
    if(form["username"].value.length <= 6){
        $("#username").after(warningTag.cloneNode(true));
        result = false;
    }
    if(form["password"].value.length <= 0){
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
    alert("stop submit");
    return false;
}

function html_form_post() {
    var username = document.forms["form_login"]["username"].value;
    var password = document.forms["form_login"]["password"].value;
    alert("username:" + document.forms["form_login"]["username"].value);
    document.getElementById("username").value = "456";
    document.forms["form_login"]["password"].value = "123";
}


