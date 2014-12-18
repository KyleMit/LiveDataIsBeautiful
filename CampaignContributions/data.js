var data = (function() {
    var url = "http://transparencydata.com/api/1.0/contributions.json";
    var recipient = "Patrick Leahy";
    var cycle = 2014;
    var apiKey = "49cc54a8a3874ecf96f21af6ed96264a";
    var debug = true;


    var massageData = function(rawData) {
        if (debug) console.log(rawData);

        var simplifiedData = rawData.map(function (item) {
            return {
                amount: item.amount,
                contributor_name: item.contributor_name,
                contributor_state: item.contributor_state,
                date: item.date
            };
        });

        var series = Enumerable.From(simplifiedData)
            .GroupBy("$.contributor_state", null,
                function (key, g) {
                    return {
                        "hc-key": "us-" + key.toLowerCase(),
                        value: g.Max("$.amount")
                    }
                })
            .ToArray();

        loadChart(series);
    };

    //http://sunlightlabs.github.io/datacommons/search.html#methods/campaign-contributions
    $.ajax({
        dataType: "jsonp",
        url: url,
        data: {
            amount: ">|100",
            recipient_ft: recipient,
            cycle: cycle,
            apikey: apiKey
        },
        success: massageData
    });


})();
