//Global variables
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

//Date on header
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.text(currentDay);

//Add time blocks to page
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

    //Save button
    var saveBtn = $('<button>')
        .addClass('col-1 saveBtn')
        .attr({
            id: 'save-button-' + (i + 9),
            type: 'button',
        })
        .on('click', function () {
            var hour = $(this).siblings().first().text();
            var task = $(this).siblings().last().text();

            saveTask(hour, task)

        })

    //Add save button icon
    var saveIcon = $('<i>')
        .addClass('fas fa-save');    

    $(containerEl).append(timeBlockRow);
    $(timeBlockRow).append(timeBlockHour);
    $(timeBlockRow).append(timeBlockEventSpace);
    $(timeBlockEventSpace).append(userInput);
    $(timeBlockRow).append(saveBtn);
    $(saveBtn).append(saveIcon);
}
//Edit text when clickng on hours
$('.col-10').on('click', 'p', function () {

    var text = $(this)
        .text()
        .trim()

    var textInput = $('<textarea>')
        .addClass('form-control')
        .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger('focus');
});

$('.col-10').on('blur', 'textarea', function () {
    var text = $(this)
        .val()
        .trim();

    var userTextP = $("<p>")
        .addClass("description")
        .text(text);

    $(this).replaceWith(userTextP);
});