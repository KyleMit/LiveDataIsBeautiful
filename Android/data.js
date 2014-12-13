var data = (function() {
    var dataSet = [
        { codename: "Froyo", version: "2.2", api: 8, distribution: 0.5 },
        { codename: "Gingerbread", version: "2.3.3-2.3.7", api: 10, distribution: 9.1 },
        { codename: "Ice Cream Sandwich", version: "4.03-4.04", api: 15, distribution: 7.8 },
        { codename: "Jelly Bean", version: "4.1.x", api: 16, distribution: 21.3 },
        { codename: "Jelly Bean", version: "4.2.x", api: 17, distribution: 20.4 },
        { codename: "Jelly Bean", version: "4.3.x", api: 18, distribution: 7.0 },
        { codename: "KitKat", version: "4.4", api: 19, distribution: 33.9 }
    ];

    var series = Enumerable.From(dataSet)
        .GroupBy("$.codename", null,
            function (key, g) {
                return {
                    name: key,
                    y: g.Sum("$.distribution"),
                    MaxVer: g.Max("$.version")
                }
            })
        .ToArray();
    console.log(series);
    return {
        series: series
    }

})();
