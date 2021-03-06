

function flashSaleCountDown() {
    if (document.getElementById("flash_sale_count_down") == null)
        return;

    var countDownDate = Date.parse("2021-04-19T18:47:00.000");

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = days == 0 ? "" : days + ":";


        // Output the result in an element with id="demo"
        document.getElementById("flash_sale_count_down").innerHTML = days + hours + ":"
            + minutes + ":" + seconds;

        // If the count down is over, write some text 
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("flash_sale_count_down").innerHTML = "Flash sale is over!"
        }
    }, 1000);
}
flashSaleCountDown();