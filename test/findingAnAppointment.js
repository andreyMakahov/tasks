var assert = require('assert');
var getStartTime = require('../src/findingAnAppointment').getStartTime;
var addZeroUtil = require('../src/findingAnAppointment').addZeroUtil;

describe('Finding an appointment', function() {

    it('getZeroUtil should return zero before a one-digit number', function() {
        assert.equal(addZeroUtil(1), '01');
        assert.equal(addZeroUtil(8), '08');
    });

    it('getZeroUtil should return two-digit number', function() {
        assert.equal(addZeroUtil(10), '10');
        assert.equal(addZeroUtil(35), '35');
    });

    it('finding earliest time for a 60 minutes meeting should be 12:15', function() {
        var schedules = [
            [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
            [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
            [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
        ];

        assert.equal(getStartTime(schedules, 60), '12:15');
    });

    it('finding earliest time for a 120 minutes meeting should be null', function() {
        var schedules = [
            [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
            [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
            [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
        ];

        assert.equal(getStartTime(schedules, 120), null);
    });

    it('finding earliest time for a 15 minutes meeting should be 17:30', function() {
        var schedules = [
            [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
            [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
            [['11:30', '15:15'], ['15:00', '16:30'], ['17:45', '19:00']]
        ];

        assert.equal(getStartTime(schedules, 15), '17:30');
    });

});