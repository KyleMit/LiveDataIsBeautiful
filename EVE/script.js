$(function () {
    $(function () {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'EVE Online - Distrubution of Player Age (Dec 2014)'
            },
            subtitle: {
                text: 'Source: CCP Quant, Analytics - COPYRIGHT © 1997-2014',
                align: 'right'
            },
            credits: {
                text: 'github.com/LiveDataIsBeautiful',
                href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/EVE'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: 'Age'
                },
                categories: data.categories,
                labels: {
                    step: 10
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Density'
                },
                labels: {
                    formatter: function() {
                        return Math.round(this.value * 100) + '%';
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b style="color:' + this.series.color + ';">Age</b>: ' + this.x + '<br/>' +
                           '<b style="color:' + this.series.color + ';">Density</b>: ' + (Math.round(this.y * 100 * 100) / 100) + '%';
                },
                useHTML: true
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            return this.x;
                        }
                    },
                    pointPadding: 0.0,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Percent',
                data: data.series

            }]
        });
    });
});