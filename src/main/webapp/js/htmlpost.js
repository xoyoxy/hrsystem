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
});