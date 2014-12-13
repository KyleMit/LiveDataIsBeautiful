var data = (function() {
    var dataSet = [
        { order: 1,  division: "Metro",    team: "Columbus Blue Jackets", cost: 0.36 },
        { order: 2,  division: "Atlantic", team: "Ottawa Senators",       cost: 0.39 },
        { order: 3,  division: "Central",  team: "Colorado Avalanche",    cost: 0.44 },
        { order: 4,  division: "Metro",    team: "Philadelphia Flyers",   cost: 0.44 },
        { order: 5,  division: "Metro",    team: "Washington Capitals",   cost: 0.44 },
        { order: 6,  division: "Pacific",  team: "Calgary Flames",        cost: 0.47 },
        { order: 7,  division: "Central",  team: "Dallas Stars",          cost: 0.47 },
        { order: 8,  division: "Pacific",  team: "San Jose Sharks",       cost: 0.47 },
        { order: 9,  division: "Pacific",  team: "Arizona Coyotes",       cost: 0.48 },
        { order: 10, division: "Atlantic", team: "Buffalo Sabres",        cost: 0.49 },
        { order: 11, division: "Metro",    team: "Carolina Hurricanes",   cost: 0.50 },
        { order: 12, division: "Pacific",  team: "Los Angeles Kings",     cost: 0.50 },
        { order: 13, division: "Central",  team: "Nashville Predators",   cost: 0.50 },
        { order: 14, division: "Metro",    team: "Pittsburgh Penguins",   cost: 0.50 },
        { order: 15, division: "Atlantic", team: "Tampa Bay Lightning",   cost: 0.52 },
        { order: 16, division: "Pacific",  team: "Anaheim Ducks",         cost: 0.53 },
        { order: 17, division: "Central",  team: "Chicago Blackhawks",    cost: 0.53 },
        { order: 18, division: "Atlantic", team: "Detroit Red Wings",     cost: 0.53 },
        { order: 19, division: "Metro",    team: "New Jersey Devils",     cost: 0.53 },
        { order: 20, division: "Central",  team: "St. Louis Blues",       cost: 0.53 },
        { order: 21, division: "Atlantic", team: "Florida Panthers",      cost: 0.56 },
        { order: 22, division: "Central",  team: "Minnesota Wild",        cost: 0.56 },
        { order: 23, division: "Atlantic", team: "Boston Bruins",         cost: 0.58 },
        { order: 24, division: "Pacific",  team: "Edmonton Oilers",       cost: 0.58 },
        { order: 25, division: "Pacific",  team: "Vancouver Canucks",     cost: 0.58 },
        { order: 26, division: "Metro",    team: "New York Islanders",    cost: 0.59 },
        { order: 27, division: "Metro",    team: "New York Rangers",      cost: 0.59 },
        { order: 28, division: "Atlantic", team: "Toronto Maple Leafs",   cost: 0.63 },
        { order: 29, division: "Central",  team: "Winnipeg Jets",         cost: 0.67 },
        { order: 30, division: "Atlantic", team: "Montreal Canadiens",    cost: 0.75 }
    ];

    var divisions = [
        { name: "Atlantic", order: 1, color: '#578725' },
        { name: "Metro",    order: 2, color: '#367DA2' },
        { name: "Central",  order: 3, color: '#3C0949' },
        { name: "Pacific",  order: 4, color: '#AE1915' }
    ];

    var categories = dataSet.map(function(item) {
        return item.order;
    });

    var series = Enumerable.From(dataSet)
       .GroupBy("$.division", null,
           function (key, g) {
               return {
                   name: key,
                   data: g.source.map(function (item) {
                           return {
                               x: item.order,
                               y: item.cost,
                               team: item.team,
                               marker: {
                                   symbol: 'url(images/' + item.team.replace(/ /g, "") + '.gif)',
                                   width: 45,
                                   height: 30
                               }
                           }
                       
                   })
               }
           })
       .Join(divisions, "$.name", "$.name", function (a, b) {
            return {
                name: a.name,
                data: a.data,
                order: b.order,
                color: b.color
            }
       })
       .OrderBy("$.order")
       .ToArray();

    return {
        categories: categories,
        series: series
    }

})();
