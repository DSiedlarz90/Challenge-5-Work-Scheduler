//global variables
var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var currentHour = moment().hour();
//Array for all work hours
var workDayHours = [
    moment().hour(9).format('hA'),
    moment().hour(10).format('hA'),
    moment().hour(11).format('hA'),
    moment().hour(12).format('hA'),
    moment().hour(13).format('hA'),
    moment().hour(14).format('hA'),
    moment().hour(15).format('hA'),
    moment().hour(16).format('hA'),
    moment().hour(17).format('hA')
];

var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.text(currentDay);

//add time blocks for each hour (3 columns in 9 rows: 9AM to 5PM) format for 9AM is hA
for (var i = 0; i < workDayHours.length; i++) {

    var timeBlockRow = $('<div>')
        .addClass('row time-block')
        .attr({id: 'row-' + (i + 9)})

    var timeBlockHour = $('<div>')
        .addClass('col-1 hour')
        .text(workDayHours[i])
        .attr({id: i + 9})

    var timeBlockEventSpace = $('<div>')
        .addClass('col-10')
        .attr({id: 'time-block-' + (i + 9)})

    var userInput = $('<p>')
        .addClass('description')
        .text(' ')
        .attr({id: 'Hour-' + (i + 9)});

        $(containerEl).append(timeBlockRow);

        $(timeBlockRow).append(timeBlockHour);

        $(timeBlockRow).append(timeBlockEventSpace);

        $(timeBlockEventSpace).append(userInput);
}