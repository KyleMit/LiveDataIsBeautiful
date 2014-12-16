$(function () {

    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Percentage of students using free and reduced lunch programs from 1969 to 2014'
        },
        subtitle: {
            text: 'Source: /u/lennyp4',
            align: 'right'
        },
        credits: {
            text: 'github.com/LiveDataIsBeautiful',
            href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/SchoolLunch'
        },
        legend: {
            verticalAlign: 'top',
            y: 20
        },
        xAxis: {
            title: {
                text: "Year"
            },
            categories: data.categories,
            labels: {
                rotation: -90
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent (%)'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: ' + 
                         '<b>{point.percentage:.1f}%</b> ({point.y:,.0f})<br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: data.series
    });
});
