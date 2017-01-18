const MINUTES_COUNT = 59;
const FIRST_WORKING_HOUR = 9;
const LAST_WORKING_HOUR = 19;

function getStartTime(schedules, duration) {
    var busyList = {};

    for(var i = FIRST_WORKING_HOUR; i < LAST_WORKING_HOUR; i++) {
        busyList[i] = {};
        for(var j = 0; j <= MINUTES_COUNT; j++) {
            busyList[i][j] = 0;
        }
    }

    for(var k = 0; k < schedules.length; k++) {
        for(var n = 0; n < schedules[k].length; n++) {
            var res = schedules[k][n];

            var startInterval = res[0].split(':');
            var endInterval = res[1].split(':');

            var startHour = parseInt(startInterval[0]);
            var startMinute = parseInt(startInterval[1]);

            var endHour = parseInt(endInterval[0]);
            var endMinute = parseInt(endInterval[1]);

            var _startMinute;
            var _endMinute;

            for(var h = startHour; h <= endHour; h++) {
                _startMinute = startHour === h ? startMinute : 0;
                _endMinute = h !== endHour ? MINUTES_COUNT : endMinute - 1;

                for(var m = _startMinute; m <= _endMinute; m++) {
                    busyList[h][m] = 1;
                }
            }

        }
    }

    var _duration = duration;

    var resultHour = null;
    var resultMinute = null;

    for(var h1 in busyList) {
        for(var m1 in busyList[h1]) {
            if (busyList[h1][m1]) {
                _duration = duration;
                resultHour = null;
                resultMinute = null;

                continue;
            } else {
                resultHour = resultHour || h1;
                resultMinute = resultMinute || m1;

                _duration = _duration - 1;

                if (_duration <= 0) {
                    return addZero(resultHour) + ':' + addZero(resultMinute);
                }
            }
        }
    }

    return null;
}

function addZero(i) {
    return (i < 10) ? '0' + i : i;
}