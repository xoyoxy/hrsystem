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
    document.getElementById("username").value = "123";
    document.forms["form_login"]["form_login_submit"].onclick = function (event) {
        alert("event" + event);
        // stopDefault(event);
    }
};

function stopDefault(event) {
    //document.getElementById("username").value = "456";
    if (event && event.preventDefault) {//如果是FF下执行这个
        event.preventDefault();
    } else {
        window.event.returnValue = false;//如果是IE下执行这个

    }
    alert("stop");
    html_form_post();
    return false;
}

function html_form_post() {
    var username = document.forms["form_login"]["username"].value;
    var password = document.forms["form_login"]["password"].value;
    alert("username:" + document.forms["form_login"]["username"].value);
    document.getElementById("username").value = "456";
    document.forms["form_login"]["password"].value = "123";
}


