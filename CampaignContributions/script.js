function loadChart(data) {

    $(function () {

        $('#container').highcharts("Map", {
            title: {
                text: 'Leahy Campaign Contributions by State - 2014'
            },
            subtitle: {
                text: 'Source: /u/livedataisbeautiful',
                align: 'right'
            },
            credits: {
                text: 'github.com/LiveDataIsBeautiful',
                href: 'https://github.com/KyleMit/LiveDataIsBeautiful/tree/gh-pages/CampaignContributions'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                min: 0,
                max: 3000
            },
            series: [{
                data: data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                animation: true,
                name: 'Campaign Contributions',
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
                    valuePrefix: '$'
                }
            }]
        });
    });
}
