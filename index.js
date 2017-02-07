function hideGuru() {
    document.getElementById('de-schnaebi-guru').style.display = 'none';
}

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'hours': hours + (days * 24),
        'minutes': minutes,
        'seconds': seconds
    };
}

function startTimer() {
    var endtime = new Date().addHours(0.02),
        $countdown = document.getElementById('countdown');
    function updateTime() {
        var time = getTimeRemaining(endtime);
        if (time.hours === 0 &&
            time.minutes === 0 &&
            times.seconds === 0) {
            $countdown.innerText = 'ehy i bi immr no eue wicheller guru oder?';
            window.clearInterval(interval);
        }
        $countdown.innerText = time.hours + ':' + time.minutes + ':' + time.seconds + '';
    }
    updateTime();
    var interval = window.setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    window.setTimeout(function () {
        hideGuru();
        startTimer();
    }, 2000);
});