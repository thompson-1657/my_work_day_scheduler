$(document).ready(function () {

    var m = moment().format("dddd, MMMM DD");
    var p = $('<p></p>')
    $('span').append(p).text(m)

    console.log(m);

    $(".saveBtn").on("click", function () {

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        console.log('value:', value);
        console.log('time:', time);
    });




});























