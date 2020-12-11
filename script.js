$(document).ready(function () {

    var m = moment().format("dddd, MMMM DD");
    var p = $('<p></p>')
    $('span').append(p).text(m);


    $(".saveBtn").on("click", function () {

        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val()
        localStorage.setItem(time, value);

    });

    var time = "9";
    var retrieve = localStorage.getItem(time);
    $("#9").find(".description").val(retrieve);

    var time = "10";
    var retrieve = localStorage.getItem(time);
    $("#10").find(".description").val(retrieve);

    var time = "11";
    var retrieve = localStorage.getItem(time);
    $("#11").find(".description").val(retrieve);

    var time = "12";
    var retrieve = localStorage.getItem(time);
    $("#12").find(".description").val(retrieve);

    var time = "13";
    var retrieve = localStorage.getItem(time);
    $("#13").find(".description").val(retrieve);

    var time = "14";
    var retrieve = localStorage.getItem(time);
    $("#14").find(".description").val(retrieve);

    var time = "15";
    var retrieve = localStorage.getItem(time);
    $("#15").find(".description").val(retrieve);

    var time = "16";
    var retrieve = localStorage.getItem(time);
    $("#16").find(".description").val(retrieve);

    var time = "17";
    var retrieve = localStorage.getItem(time);
    $("#17").find(".description").val(retrieve);


    function hourUpdater() {

        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id"));

            if (currentHour > blockHour) {
                $(this).addClass("past");
            } else if (currentHour === blockHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    hourUpdater();
})




















