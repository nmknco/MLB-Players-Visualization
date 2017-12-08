var utilities = {
    teams: ["ANA", "ARI", "ATL", "BAL", "BOS", "CAL", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "FLA", "HOU", "KCR", "LAA", "LAD", "MIA", "MIL", "MIN", "MON", "NYM", "NYY", "OAK", "PHI", "PIT", "SDP", "SEA", "SFG", "STL", "TBD", "TBR", "TEX", "TOR", "WSN"],

    cleanId: function(key_bbref){
        // remove dots from bbref keys for it to be valid css id
        return key_bbref.split('.').join('').split("'").join('');
    },

    formatSalary: function(n) {
        n = n.toString();
        segs = [];
        var i;
        for (i = n.length; i >= 3; i = i - 3) {
            segs.unshift(n.substring(i-3, i));
        }
        if (i > 0) {
            segs.unshift(n.substring(0, i));
        }
        return segs.join(',')

    },

    Fstats_raw: ['AVG', 'HR', 'BB', 'SO', 'SB'],
    Pstats_raw: ['ERA', 'FIP', 'SO9', 'H9', 'BB9'],

    teamNameDict: {"TEX": {"name": "Texas Rangers", "teamIDESPN": "TEX"}, "SEA": {"name": "Seattle Mariners", "teamIDESPN": "SEA"}, "MIA": {"name": "Miami Marlins", "teamIDESPN": "MIA"}, "TBD": {"name": "Tampa Bay Devil Rays", "teamIDESPN": "TB"}, "DET": {"name": "Detroit Tigers", "teamIDESPN": "DET"}, "CHW": {"name": "Chicago White Sox", "teamIDESPN": "CHW"}, "HOU": {"name": "Houston Astros", "teamIDESPN": "HOU"}, "ANA": {"name": "Anaheim Angels", "teamIDESPN": "LAA"}, "FLA": {"name": "Florida Marlins", "teamIDESPN": "MIA"}, "MIL": {"name": "Milwaukee Brewers", "teamIDESPN": "MIL"}, "PHI": {"name": "Philadelphia Phillies", "teamIDESPN": "PHI"}, "ARI": {"name": "Arizona Diamondbacks", "teamIDESPN": "ARI"}, "BOS": {"name": "Boston Red Sox", "teamIDESPN": "BOS"}, "OAK": {"name": "Oakland Athletics", "teamIDESPN": "OAK"}, "TOR": {"name": "Toronto Blue Jays", "teamIDESPN": "TOR"}, "STL": {"name": "St. Louis Cardinals", "teamIDESPN": "STL"}, "CAL": {"name": "California Angels", "teamIDESPN": "LAA"}, "ATL": {"name": "Atlanta Braves", "teamIDESPN": "ATL"}, "PIT": {"name": "Pittsburgh Pirates", "teamIDESPN": "PIT"}, "SDP": {"name": "San Diego Padres", "teamIDESPN": "SD"}, "BAL": {"name": "Baltimore Orioles", "teamIDESPN": "BAL"}, "WSN": {"name": "Washington Nationals", "teamIDESPN": "WSH"}, "TBR": {"name": "Tampa Bay Rays", "teamIDESPN": "TB"}, "CHC": {"name": "Chicago Cubs", "teamIDESPN": "CHC"}, "MIN": {"name": "Minnesota Twins", "teamIDESPN": "MIN"}, "CIN": {"name": "Cincinnati Reds", "teamIDESPN": "CIN"}, "NYM": {"name": "New York Mets", "teamIDESPN": "NYM"}, "SFG": {"name": "San Francisco Giants", "teamIDESPN": "SF"}, "WSA": {"name": "Washington Senators", "teamIDESPN": "WSA"}, "LAD": {"name": "Los Angeles Dodgers", "teamIDESPN": "LAD"}, "NYY": {"name": "New York Yankees", "teamIDESPN": "NYY"}, "LAA": {"name": "Los Angeles Angels of Anaheim", "teamIDESPN": "LAA"}, "CLE": {"name": "Cleveland Indians", "teamIDESPN": "CLE"}, "KCR": {"name": "Kansas City Royals", "teamIDESPN": "KC"}, "COL": {"name": "Colorado Rockies", "teamIDESPN": "COL"}, "MON": {"name": "Montreal Expos", "teamIDESPN": "MON"}},

}