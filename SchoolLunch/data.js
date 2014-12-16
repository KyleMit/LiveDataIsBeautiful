var data = (function() {
    var dataSet = [
        { year: 1969, free: 2900000,  reduced: 1000000, fullPrice: 16500000, bringsLunch: 40513000 },
        { year: 1970, free: 4600000,  reduced: 1000000, fullPrice: 17800000, bringsLunch: 37957000 },
        { year: 1971, free: 5800000,  reduced: 500000,  fullPrice: 17800000, bringsLunch: 37006000 },
        { year: 1972, free: 7300000,  reduced: 500000,  fullPrice: 16600000, bringsLunch: 35742000 },
        { year: 1973, free: 8100000,  reduced: 500000,  fullPrice: 16100000, bringsLunch: 34692000 },
        { year: 1974, free: 8600000,  reduced: 500000,  fullPrice: 15500000, bringsLunch: 35659000 },
        { year: 1975, free: 9400000,  reduced: 600000,  fullPrice: 14900000, bringsLunch: 36069000 },
        { year: 1976, free: 10200000, reduced: 800000,  fullPrice: 14600000, bringsLunch: 34882000 },
        { year: 1977, free: 10500000, reduced: 1300000, fullPrice: 14500000, bringsLunch: 33813000 },
        { year: 1978, free: 10300000, reduced: 1500000, fullPrice: 14900000, bringsLunch: 31916000 },
        { year: 1979, free: 10000000, reduced: 1700000, fullPrice: 15300000, bringsLunch: 30854000 },
        { year: 1980, free: 10000000, reduced: 1900000, fullPrice: 14700000, bringsLunch: 30748000 },
        { year: 1981, free: 10600000, reduced: 1900000, fullPrice: 13300000, bringsLunch: 32590000 },
        { year: 1982, free: 9800000,  reduced: 1600000, fullPrice: 11500000, bringsLunch: 35005000 },
        { year: 1983, free: 10300000, reduced: 1500000, fullPrice: 11200000, bringsLunch: 34745000 },
        { year: 1984, free: 10300000, reduced: 1500000, fullPrice: 11500000, bringsLunch: 33913000 },
        { year: 1985, free: 9900000,  reduced: 1600000, fullPrice: 12100000, bringsLunch: 34414000 },
        { year: 1986, free: 10000000, reduced: 1600000, fullPrice: 12200000, bringsLunch: 34453000 },
        { year: 1987, free: 10000000, reduced: 1600000, fullPrice: 12400000, bringsLunch: 34791000 },
        { year: 1988, free: 9800000,  reduced: 1600000, fullPrice: 12800000, bringsLunch: 34647000 },
        { year: 1989, free: 9700000,  reduced: 1600000, fullPrice: 12900000, bringsLunch: 35036000 },
        { year: 1990, free: 9800000,  reduced: 1700000, fullPrice: 12600000, bringsLunch: 36488000 },
        { year: 1991, free: 10300000, reduced: 1800000, fullPrice: 12200000, bringsLunch: 37076000 },
        { year: 1992, free: 11200000, reduced: 1700000, fullPrice: 11700000, bringsLunch: 37482000 },
        { year: 1993, free: 11700000, reduced: 1700000, fullPrice: 11400000, bringsLunch: 37830000 },
        { year: 1994, free: 12200000, reduced: 1800000, fullPrice: 11300000, bringsLunch: 43972260 },
        { year: 1995, free: 12400000, reduced: 1900000, fullPrice: 11400000, bringsLunch: 44069000 },
        { year: 1996, free: 12600000, reduced: 2000000, fullPrice: 11300000, bringsLunch: 44396700 },
        { year: 1997, free: 12900000, reduced: 2100000, fullPrice: 11300000, bringsLunch: 45731000 },
        { year: 1998, free: 13000000, reduced: 2200000, fullPrice: 11400000, bringsLunch: 45509000 },
        { year: 1999, free: 13000000, reduced: 2400000, fullPrice: 11600000, bringsLunch: 45395000 },
        { year: 2000, free: 13000000, reduced: 2500000, fullPrice: 11900000, bringsLunch: 44914000 },
        { year: 2001, free: 12900000, reduced: 2600000, fullPrice: 12000000, bringsLunch: 45624000 },
        { year: 2002, free: 13300000, reduced: 2600000, fullPrice: 12000000, bringsLunch: 46046000 },
        { year: 2003, free: 13700000, reduced: 2700000, fullPrice: 11900000, bringsLunch: 46511000 },
        { year: 2004, free: 14100000, reduced: 2800000, fullPrice: 12000000, bringsLunch: 46461000 },
        { year: 2005, free: 14600000, reduced: 2900000, fullPrice: 12200000, bringsLunch: 46180000 },
        { year: 2006, free: 14800000, reduced: 2900000, fullPrice: 12400000, bringsLunch: 45097000 },
        { year: 2007, free: 15000000, reduced: 3100000, fullPrice: 12600000, bringsLunch: 45367000 },
        { year: 2008, free: 15400000, reduced: 3100000, fullPrice: 12500000, bringsLunch: 45353000 },
        { year: 2009, free: 16300000, reduced: 3200000, fullPrice: 11900000, bringsLunch: 45988000 },
        { year: 2010, free: 17600000, reduced: 3000000, fullPrice: 11100000, bringsLunch: 46719000 },
        { year: 2011, free: 18400000, reduced: 2700000, fullPrice: 10800000, bringsLunch: 47243000 },
        { year: 2012, free: 18700000, reduced: 2700000, fullPrice: 10200000, bringsLunch: 46726000 },
        { year: 2013, free: 18900000, reduced: 2600000, fullPrice: 9200000,  bringsLunch: 47072000 },
        { year: 2014, free: 19100000, reduced: 2500000, fullPrice: 8700000,  bringsLunch: 47472000 }
    ];

    var categories = dataSet.map(function(item) {
        return item.year;
    });

    var free = dataSet.map(function (item) {
        return item.free;
    });
    var reduced = dataSet.map(function (item) {
        return item.reduced;
    });
    var fullPrice = dataSet.map(function (item) {
        return item.fullPrice;
    });
    var bringsLunch = dataSet.map(function (item) {
        return item.bringsLunch;
    });

    var series = [
        { name: "Free", data: free, color: "red" },
        { name: "Reduced Price", data: reduced, color: "yellow" },
        { name: "Full Price", data: fullPrice, color: "green" },
        { name: "Brings Lunch", data: bringsLunch, color: "grey" }
    ];

    return {
        categories: categories,
        series: series
    }

})();
