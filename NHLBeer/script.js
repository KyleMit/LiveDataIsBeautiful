$(function () {

    $('#container').highcharts({
        chart: {
            type: 'line',
            backgroundColor: null,
            events: {
                load: function () {
                    $(".highcharts-legend .highcharts-legend-item").each(function () {
                        var $this = $(this);
                        var color = $this.find("path").attr('fill');
                        var rect = '<svg><rect width="100" height="25" style="fill:' + color + ';"></rect></svg>';
                        $this.prepend(rect);
                    });
                }
            }
        },
        title: {
            text: 'Relative cost of beer per ounce at all 30 NHL Arenas'
        },
        subtitle: {
            text: 'Source: /u/Librewian',
            align: 'right'
        },
        credits: {
            text: 'github.com/LiveDataIsBeautiful',
            href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/NHLBeer'
        },
        legend: {
            verticalAlign: 'top',
            y: 20,
            symbolHeight: 20,
            itemWidth: 120,
            itemStyle: { "color": "white" }
        },
        xAxis: {
            title: {
                text: null
            },
            categories: data.categories,
            labels: {
                enabled: false
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Price ($/oz)'
            }
        },
        tooltip: {
            headerFormat: '<table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">Division: </td>' +
                         '<td style="padding:0"><b>{series.name}</b></td></tr>' +
                         '<tr><td style="color:{series.color};padding:0">Team: </td>' +
                         '<td style="padding:0"><b>{point.team}</b></td></tr>' +
                         '<tr><td style="color:{series.color};padding:0">Cost: </td>' +
                         '<td style="padding:0"><b>{point.y:.2f} $/OZ</b></td></tr>',
            footerFormat: '</table>',
            useHTML: true
        },
        plotOptions: {
            line: {
                lineWidth: 0
            },
            series: {
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    color: function() {
                        return this.series.color;
                    },
                    y: -6,
                    //format: '{y}',
                    formatter: function () {
                        return '<b style="color:'+ this.series.color +';" >' + this.point.y + '</b>';
                    }
                }
            }
        },
        series: data.series
    });
});
