
$(document).ready(function() {
    //Init the carousel
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoHeight: true,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        center: true,
        loop:true,
        margin:10,
        items:1.5
    });

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 3000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
});
// date and time
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();

// click read mores
$("#show-more-1").click(function () {
    $(".more-1").slideToggle();
});
$("#show-more-2").click(function () {
    $(".more-2").slideToggle();
});
$("#show-more-3").click(function () {
    $(".more-3").slideToggle();
});


var delay = 1000000;
var jackpot = 0;
pull_jackpot();
var timer;

function pull_jackpot() {
    var nominal = 80136640.38;
    if (jackpot == 0) jackpot = parseInt(nominal - 100000);
    var amount = 100000 / delay * 1;
    timer = setInterval(function () {
        jackpot = set_jackpot(jackpot, nominal, amount);
    }, 10);
}

function set_jackpot(jackpot, nominal, amount) {
    var jackpot = jackpot + amount;
    if (jackpot >= nominal) {
        clearInterval(timer);
        pull_jackpot();
    } else {
        var result = addCommas(parseInt(jackpot));
        $('#progressive_jackpot').html(result);
    }
    return jackpot;
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

// Random Code Register
document.getElementById("random").innerHTML = Math.floor(Math.random() * 100000);


