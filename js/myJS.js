$(function() {
    var data = [
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [300, 250],
    [250, 175],
    [500, 175],
    [500, 175],
    [500, 175],
    [500, 175],
    [500, 175],
    [500, 175],
    [500, 175],
    [500, 175]
];

var chart = hexChart();

var chartWrapper = d3.select('#vis')
                    .datum(data)
                    .call(chart);
});