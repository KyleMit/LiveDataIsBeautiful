(function () {

    var apiKey = "49cc54a8a3874ecf96f21af6ed96264a";
    var debug = false;


    // add handlebars helper
    Handlebars.registerHelper('toTitleCase', function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });

    // set defaults
    var $politician = $("#PoliticianName").val("Patrick Leahy");
    var $cycle = $("#Cycle").val(2014);

    $('#Submit').on('click', function callData() {
        $(this).attr("disabled", "disabled"); //disable until complete
        
        var name = $politician.val();
        var cycle = $cycle.val();

        if (cycle && name) {
            loadData(name, cycle);
        }

        return false;
    }).click();


    // http://sunlightlabs.github.io/datacommons/entities.html#methods/search-by-name
    var nameUrl = "http://transparencydata.org/api/1.0/entities.json" +
        "?apikey=" + apiKey +
        "&type=" + "politician" +
        "&callback=" + "?" +
        "&search=" + "%QUERY";

    // constructs the suggestion engine
    var politicians = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `states` is an array of state names defined in "The Basics"
        //local: $.map(states, function (state) { return { value: state }; })
        remote: nameUrl
    });

    // kicks off the loading/processing of `local` and `prefetch`
    politicians.initialize();

    $('#PoliticianName').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        displayKey: 'name',
        source: politicians.ttAdapter(),
        templates: {
            suggestion: Handlebars.compile('<p><strong>{{toTitleCase name}}</strong> ({{state}})</p>')
        }

    });


    function loadData(recipient, cycle) {
        // http://sunlightlabs.github.io/datacommons/search.html#methods/campaign-contributions
        $.ajax({
            dataType: "jsonp",
            url: "http://transparencydata.com/api/1.0/contributions.json",
            data: {
                recipient_ft: recipient,
                cycle: cycle,
                apikey: apiKey
            },
            success: function (rawData) {
                if (debug) console.log(rawData);

                var simplifiedData = rawData.map(function (item) {
                    return {
                        amount: parseInt(item.amount, 10),
                        contributor_name: item.contributor_name,
                        contributor_state: item.contributor_state,
                        date: item.date
                    };
                });

                if (debug) console.log(simplifiedData);

                var series = Enumerable.From(simplifiedData)
                    .GroupBy("$.contributor_state", null,
                        function (key, g) {
                            return {
                                "hc-key": "us-" + key.toLowerCase(),
                                value: g.Sum("$.amount")
                            };
                        })
                    .ToArray();

                if (debug) console.log(series);

                var title = recipient + "- Campaign Contributions by State - " + cycle;

                loadChart(series, title);


                // re-enable submit until complete
                $('#Submit').removeAttr("disabled"); 
            }
        });
    }



})();
