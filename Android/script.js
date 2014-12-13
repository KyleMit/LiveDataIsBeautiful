$(function () {
    // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[2],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((2 - i) / 7).get());
        }
        return colors;
    }());

    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Latest Android Platform Stats (12/1)'
        },
        credits: {
            text: 'github.com/LiveDataIsBeautiful',
            href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/Android'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.point.name + '</b>: ' + this.point.percentage + ' % <br/>' + 
                       '<b>Version</b>: ' + this.point.MaxVer;
                        
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                startAngle: 90,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Android Platform Share',
            data: data.series

        }]
    });
});
