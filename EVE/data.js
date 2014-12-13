var data = (function() {
    var dataSet = [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 2, y: 0},
        {x: 3, y: 0},
        {x: 4, y: 0},
        {x: 5, y: 0},
        {x: 6, y: 0},
        {x: 7, y: 0},
        {x: 8, y: 0},
        {x: 9, y: 0},
        {x: 10, y: 0},
        {x: 11, y: 0},
        {x: 12, y: 0},
        {x: 13, y: 0.001},
        {x: 14, y: 0.0015},
        {x: 15, y: 0.002},
        {x: 16, y: 0.003},
        {x: 17, y: 0.004},
        {x: 18, y: 0.0055},
        {x: 19, y: 0.01},
        {x: 20, y: 0.0145},
        {x: 21, y: 0.0205},
        {x: 22, y: 0.028},
        {x: 23, y: 0.0355},
        {x: 24, y: 0.0505},
        {x: 25, y: 0.049},
        {x: 26, y: 0.05},
        {x: 27, y: 0.054},
        {x: 28, y: 0.055},
        {x: 29, y: 0.057},
        {x: 30, y: 0.053},
        {x: 31, y: 0.051},
        {x: 32, y: 0.048},
        {x: 33, y: 0.045},
        {x: 34, y: 0.047},
        {x: 35, y: 0.038},
        {x: 36, y: 0.032},
        {x: 37, y: 0.025},
        {x: 38, y: 0.023},
        {x: 39, y: 0.022},
        {x: 40, y: 0.019},
        {x: 41, y: 0.0175},
        {x: 42, y: 0.0165},
        {x: 43, y: 0.0155},
        {x: 44, y: 0.0155},
        {x: 45, y: 0.013},
        {x: 46, y: 0.0095},
        {x: 47, y: 0.008},
        {x: 48, y: 0.007},
        {x: 49, y: 0.006},
        {x: 50, y: 0.005},
        {x: 51, y: 0.004},
        {x: 52, y: 0.0035},
        {x: 53, y: 0.0035},
        {x: 54, y: 0.003},
        {x: 55, y: 0.0028},
        {x: 56, y: 0.0027},
        {x: 57, y: 0.0025},
        {x: 58, y: 0.0024},
        {x: 59, y: 0.002},
        {x: 60, y: 0.0015},
        {x: 61, y: 0.001},
        {x: 62, y: 0.001},
        {x: 63, y: 0.0008},
        {x: 64, y: 0.0008},
        {x: 65, y: 0.0006},
        {x: 66, y: 0.0003},
        {x: 67, y: 0.0002},
        {x: 68, y: 0.0002},
        {x: 69, y: 0.0002},
        {x: 70, y: 0.0001},
        {x: 71, y: 0.0001},
        {x: 72, y: 0.0001}
    ];

    var categories = dataSet.map(function(item) {
        return item.x;
    });

    var values = dataSet.map(function(item) {
        return item.y;
    });

    var minR = 50, maxR = 200, baseG = 0, baseB = 205;
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);

    var getColorValue = function(value) {
        var percent = getPercentOfRange(value, min, max);
        var r = Math.round(50 + (1 - percent) * (maxR - minR));
        var hex = rgbToHex(r, baseG, baseB);
        return hex;
    }

    var series = dataSet.map(function (item) {
        return {
            y: item.y,
            color: getColorValue(item.y)
        }
    });

    return {
        categories: categories,
        series: series
    }

})();

function getPercentOfRange(value, min, max) {
    return value / max;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
