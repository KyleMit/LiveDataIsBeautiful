var data = (function() {
    var dataSet = [
        { countryCode: "dz", internetPenetration: 15.23, landLinePenetration: 8.32,  mobilePhonePenetration: 97.95  },
        { countryCode: "ao", internetPenetration: 16.94, landLinePenetration: 1.46,  mobilePhonePenetration: 47.07  },
        { countryCode: "bj", internetPenetration: 3.80,  landLinePenetration: 1.56,  mobilePhonePenetration: 83.65  },
        { countryCode: "bw", internetPenetration: 11.50, landLinePenetration: 8.01,  mobilePhonePenetration: 153.79 },
        { countryCode: "bf", internetPenetration: 3.73,  landLinePenetration: 0.86,  mobilePhonePenetration: 60.61  },
        { countryCode: "bi", internetPenetration: 1.22,  landLinePenetration: 0.18,  mobilePhonePenetration: 22.81  },
        { countryCode: "cm", internetPenetration: 5.70,  landLinePenetration: 3.40,  mobilePhonePenetration: 60.41  },
        { countryCode: "cv", internetPenetration: 34.74, landLinePenetration: 14.20, mobilePhonePenetration: 86.03  },
        { countryCode: "cf", internetPenetration: 3.00,  landLinePenetration: 0.13,  mobilePhonePenetration: 23.65  },
        { countryCode: "td", internetPenetration: 2.10,  landLinePenetration: 0.24,  mobilePhonePenetration: 33.73  },
        { countryCode: "km", internetPenetration: 5.98,  landLinePenetration: 3.35,  mobilePhonePenetration: 34.84  },
        { countryCode: "cd", internetPenetration: 1.68,  landLinePenetration: 0.09,  mobilePhonePenetration: 29.66  },
        { countryCode: "cg", internetPenetration: 6.11,  landLinePenetration: 0.34,  mobilePhonePenetration: 98.76  },
        { countryCode: "ci", internetPenetration: 2.38,  landLinePenetration: 1.35,  mobilePhonePenetration: 99.94  },
        { countryCode: "dj", internetPenetration: 8.27,  landLinePenetration: 2.09,  mobilePhonePenetration: 24.31  },
        { countryCode: "eg", internetPenetration: 44.07, landLinePenetration: 10.60, mobilePhonePenetration: 119.92 },
        { countryCode: "gq", internetPenetration: 13.94, landLinePenetration: 2.02,  mobilePhonePenetration: 68.05  },
        { countryCode: "er", internetPenetration: 0.80,  landLinePenetration: 0.98,  mobilePhonePenetration: 4.98   },
        { countryCode: "et", internetPenetration: 1.48,  landLinePenetration: 0.87,  mobilePhonePenetration: 22.38  },
        { countryCode: "ga", internetPenetration: 8.62,  landLinePenetration: 1.04,  mobilePhonePenetration: 179.47 },
        { countryCode: "gm", internetPenetration: 12.45, landLinePenetration: 3.58,  mobilePhonePenetration: 85.20  },
        { countryCode: "gh", internetPenetration: 17.11, landLinePenetration: 1.12,  mobilePhonePenetration: 100.99 },
        { countryCode: "gn", internetPenetration: 1.49,  landLinePenetration: 0.16,  mobilePhonePenetration: 41.75  },
        { countryCode: "gw", internetPenetration: 2.89,  landLinePenetration: 0.30,  mobilePhonePenetration: 65.94  },
        { countryCode: "ke", internetPenetration: 32.10, landLinePenetration: 0.58,  mobilePhonePenetration: 71.17  },
        { countryCode: "ls", internetPenetration: 4.59,  landLinePenetration: 2.10,  mobilePhonePenetration: 63.94  },
        { countryCode: "lr", internetPenetration: 3.79,  landLinePenetration: 0.00,  mobilePhonePenetration: 57.12  },
        { countryCode: "ly", internetPenetration: 19.86, landLinePenetration: 13.23, mobilePhonePenetration: 155.77 },
        { countryCode: "mg", internetPenetration: 2.06,  landLinePenetration: 0.65,  mobilePhonePenetration: 38.41  },
        { countryCode: "mw", internetPenetration: 4.35,  landLinePenetration: 1.43,  mobilePhonePenetration: 27.79  },
        { countryCode: "ml", internetPenetration: 2.17,  landLinePenetration: 0.75,  mobilePhonePenetration: 98.38  },
        { countryCode: "mr", internetPenetration: 5.37,  landLinePenetration: 1.71,  mobilePhonePenetration: 106.00 },
        { countryCode: "mu", internetPenetration: 41.40, landLinePenetration: 28.16, mobilePhonePenetration: 119.87 },
        { countryCode: "ma", internetPenetration: 55.00, landLinePenetration: 10.08, mobilePhonePenetration: 119.97 },
        { countryCode: "mz", internetPenetration: 4.85,  landLinePenetration: 0.35,  mobilePhonePenetration: 32.17  },
        { countryCode: "na", internetPenetration: 12.94, landLinePenetration: 7.58,  mobilePhonePenetration: 107.79 },
        { countryCode: "ne", internetPenetration: 1.41,  landLinePenetration: 0.59,  mobilePhonePenetration: 31.45  },
        { countryCode: "ng", internetPenetration: 32.88, landLinePenetration: 0.25,  mobilePhonePenetration: 66.80  },
        { countryCode: "rw", internetPenetration: 8.02,  landLinePenetration: 0.39,  mobilePhonePenetration: 49.67  },
        { countryCode: "st", internetPenetration: 21.57, landLinePenetration: 4.25,  mobilePhonePenetration: 64.86  },
        { countryCode: "sn", internetPenetration: 19.20, landLinePenetration: 2.46,  mobilePhonePenetration: 83.57  },
        { countryCode: "sc", internetPenetration: 47.08, landLinePenetration: 31.26, mobilePhonePenetration: 149.74 },
        { countryCode: "sl", internetPenetration: 1.30,  landLinePenetration: 0.30,  mobilePhonePenetration: 36.96  },
        { countryCode: "so", internetPenetration: 1.38,  landLinePenetration: 0.98,  mobilePhonePenetration: 6.45   },
        { countryCode: "za", internetPenetration: 41.00, landLinePenetration: 7.70,  mobilePhonePenetration: 130.56 },
        { countryCode: "ss", internetPenetration: 0.00,  landLinePenetration: 0.00,  mobilePhonePenetration: 18.45  },
        { countryCode: "sd", internetPenetration: 21.00, landLinePenetration: 1.14,  mobilePhonePenetration: 74.36  },
        { countryCode: "sz", internetPenetration: 20.78, landLinePenetration: 3.95,  mobilePhonePenetration: 65.40  },
        { countryCode: "tz", internetPenetration: 13.08, landLinePenetration: 0.37,  mobilePhonePenetration: 56.96  },
        { countryCode: "tg", internetPenetration: 4.00,  landLinePenetration: 3.39,  mobilePhonePenetration: 52.96  },
        { countryCode: "tn", internetPenetration: 41.44, landLinePenetration: 10.17, mobilePhonePenetration: 118.08 },
        { countryCode: "ug", internetPenetration: 14.69, landLinePenetration: 0.87,  mobilePhonePenetration: 45.00  },
        { countryCode: "zm", internetPenetration: 13.47, landLinePenetration: 0.59,  mobilePhonePenetration: 74.78  },
        { countryCode: "zw", internetPenetration: 17.09, landLinePenetration: 2.20,  mobilePhonePenetration: 91.91  }
    ];

    var seriesInternet = dataSet.map(function (item) {
        return {
            "hc-key": item.countryCode,
            value: item.internetPenetration
        }
    });

    var seriesMobile = dataSet.map(function (item) {
        return {
            "hc-key": item.countryCode,
            value: item.mobilePhonePenetration
        }
    });

    return {
        seriesInternet: seriesInternet,
        seriesMobile: seriesMobile
    }

})();
