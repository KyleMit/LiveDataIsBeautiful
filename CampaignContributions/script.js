function loadChart(data, title) {

    $(function () {

        $('#container').highcharts("Map", {
            title: {
                text: title
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
                max: 30000
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
