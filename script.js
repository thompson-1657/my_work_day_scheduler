$(document).ready(function () {

    var m = moment().format("dddd, MMMM DD");
    var p = $('<p></p>')
    $('span').append(p).text(m);


    $(".saveBtn").on("click", function () {

        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val()
        localStorage.setItem(time, value);

        var storedData = localStorage.getItem(time);
        console.log(storedData);

    });

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




















