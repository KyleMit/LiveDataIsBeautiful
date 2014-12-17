$(function () {

    $('#container').highcharts("Map", {
        title: {
            text: 'African Mobile Internet Usage in 2012'
        },
        subtitle: {
            text: 'Source: /u/AMT_io',
            align: 'right'
        },
        credits: {
            text: 'github.com/LiveDataIsBeautiful',
            href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/AfricaInternet'
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        legend: {
            title: {
                text: '% Penetration',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            },
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            layout: 'vertical',
            valueDecimals: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 0,
            symbolHeight: 14,
            borderWidth: 1,
            borderColor: '#000000',
            x: -80,
            y: 80

        },
        colors: [
            "#FFFDCA",
            '#E83016',
            '#E06091',
            '#EFB537',
            '#F2FB26',
            '#6DDCF0',
            '#2696E0',
            '#7726E4',
            '#67E924'
        ],
        colorAxis: {
            dataClassColor: 'category',
            dataClasses: [{
                name: "no data",
                to: 0
            }, {
                name: "< 5",
                from: .1,
                to: 5
            },{
                from: 5.1,
                to: 10
            }, {
                from: 10.1,
                to: 15
            }, {
                from: 15.1,
                to: 20
            }, {
                from: 20.1,
                to: 30
            }, {
                from: 30.1,
                to: 40
            }, {
                from: 40.1,
                to: 50
            }, {
                from: 50.1
            }]
        },
        series: [{
            data: data.seriesMobile,
            mapData: Highcharts.maps['custom/africa'],
            joinBy: 'hc-key',
            animation: true,
            name: 'Mobile Penetration Percentaage',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
});
