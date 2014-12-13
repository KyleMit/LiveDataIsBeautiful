var data = (function() {
    var dataSet = [
        { cityA: 'Rome', cityB: 'Vatican', distance: 4.7 },
        { cityA: 'Brazzaville ', cityB: 'Kinshasa', distance: 10.52 },
        { cityA: 'Jerusalem', cityB: 'East Jerusalem', distance: 13.66 },
        { cityA: 'Bratislava ', cityB: ' Vienna', distance: 54.88 },
        { cityA: 'Amman ', cityB: ' East Jerusalem', distance: 70.58 },
        { cityA: 'Amman', cityB: 'Jerusalem', distance: 70.74 },
        { cityA: 'Pristina', cityB: 'Skopje', distance: 75.45 },
        { cityA: 'Helsinki', cityB: 'Tallinn', distance: 82.09 },
        { cityA: 'Beirut', cityB: 'Damascus', distance: 84.9 },
        { cityA: 'Basseterre', cityB: 'Saint Johns', distance: 95.59 },
        { cityA: 'Castries', cityB: 'Kingstown', distance: 98.3 },
        { cityA: 'Ljubljana', cityB: 'Zagreb', distance: 116.69 },
        { cityA: 'Conakry', cityB: 'Freetown', distance: 127.07 },
        { cityA: 'Podgorica', cityB: 'Tirane', distance: 134.92 },
        { cityA: 'Kingstown', cityB: 'Saint Georges', distance: 136.72 },
        { cityA: 'Doha', cityB: 'Manama', distance: 140.29 },
        { cityA: 'Castries', cityB: 'Roseau', distance: 149.01 },
        { cityA: 'Maputo', cityB: 'Mbabane', distance: 150.9 },
        { cityA: 'Skopje', cityB: 'Tirane', distance: 153.55 },
        { cityA: 'Port of Spain', cityB: 'Saint Georges', distance: 155.48 },
        { cityA: 'Podgorica', cityB: 'Pristina', distance: 156.89 },
        { cityA: 'Bern', cityB: 'Vaduz', distance: 158.48 },
        { cityA: 'Lome', cityB: 'Porto Novo', distance: 158.86 },
        { cityA: 'Bratislava ', cityB: 'Budapest', distance: 161.41 },
        { cityA: 'Banjul', cityB: 'Dakar', distance: 166.76 },
        { cityA: 'Accra', cityB: 'Lome', distance: 168.75 },
        { cityA: 'Podgorica', cityB: 'Sarajevo', distance: 170.26 },
        { cityA: 'Tbilisi', cityB: 'Yerevan', distance: 170.37 },
        { cityA: 'Minsk', cityB: 'Vilnius', distance: 172.4 },
        { cityA: 'Amsterdam', cityB: 'Brussles', distance: 173.48 },
        { cityA: 'Skopje', cityB: 'Sofia', distance: 173.66 },
        { cityA: 'Bridgetown', cityB: 'Kingstown', distance: 174.87 },
        { cityA: 'Amman', cityB: 'Damascus', distance: 175.91 },
        { cityA: 'Pristiina', cityB: 'Sofia', distance: 176.18 },
        { cityA: 'Bujumbura', cityB: 'Kigali', distance: 176.95 },
        { cityA: 'Guatemala', cityB: 'San Salvador', distance: 177.85 },
        { cityA: 'Bridgetown', cityB: 'Castries', distance: 179.39 },
        { cityA: 'Pristina', cityB: 'Tirane', distance: 184.64 },
        { cityA: 'Podgorica', cityB: 'Skopje', distance: 185.61 },
        { cityA: 'Brussels', cityB: 'Luxembourg', distance: 187.28 },
        { cityA: 'Pyongyang', cityB: 'Seoul', distance: 194.82 },
        { cityA: 'Belgrade', cityB: 'Sarajevo', distance: 198.46 },
        { cityA: 'Buenos Aires', cityB: 'Montevideo', distance: 203.44 },
        { cityA: 'Banjul', cityB: 'Bissau', distance: 206.1 },
        { cityA: 'Damascus', cityB: 'East Jerusalem', distance: 206.11 },
        { cityA: 'Roseau', cityB: 'Saint Johns', distance: 208.25 },
        { cityA: 'Budapest', cityB: 'Vienna', distance: 214.15 },
        { cityA: 'Damascus', cityB: 'Jerusalem', distance: 216.83 },
        { cityA: 'San Salvador', cityB: 'Tegucigalpa', distance: 218.18 },
        { cityA: 'Amman', cityB: 'Beirut', distance: 219.09 }
    ];

    var categories = dataSet.map(function(item) {
        return item.cityA + ' - ' + item.cityB;
    });

    var series = dataSet.map(function (item) {
        return item.distance;
    });

    return {
        categories: categories,
        series: series
    }

})();
