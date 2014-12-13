$(function () {
    $(function () {
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: '50 Closest Pairs Of World Capitals'
            },
            subtitle: {
                text: 'Source: /u/darinhq',
                align: 'right'
            },
            credits: {
                text: 'github.com/LiveDataIsBeautiful',
                href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/ClosestCapitals'
            },
            legend: {
                enabled: false
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
                    text: 'Distance (Km)'
                },
                gridLineWidth: 0
            },
            tooltip: {
                headerFormat: '<span >{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.2f} Km</b></td></tr>',
                footerFormat: '</table>',
                useHTML: true
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            return this.x;
                        }
                    },
                    colorByPoint: true,
                    pointPadding: 0.0,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Distance',
                data: data.series

            }]
        });
    });
});