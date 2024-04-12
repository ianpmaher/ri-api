const rhodeIslandData = {
    area: 1545, // square miles
    land: 1034, // square miles
    water: 511, // square miles
    population: 1098163, // as of 2020 census
    popRank: 45,
    popDensity: 1006, // people per square mile
    popDensityRank: 2,
    medianHouseholdIncome: 63870,
    shoreline: 400, // miles
    length: 48, // miles
    width: 37, // miles
    highestPoint: 812, // feet
    elevation: 200, // feet
    waterToLandRatio: 49.5, // percent water
    shorelineToLandRatio: 38.7, // percent shoreline
    // https://www.ri.gov/facts/trivia.php
    stateName: "Rhode Island",
    nicknames: ["The Ocean State", "Little Rhody"],
    motto: "Hope",
    anthem: "Rhode Island, It's for Me",
    seal: "https://upload.wikimedia.org/wikipedia/commons/9/96/Seal_of_Rhode_Island_%282021%29.svg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg",
    size: {
        totalArea: "1,214 square miles",
        northToSouth: "48 miles",
        eastToWest: "37 miles",
    },
    
    geography: {
        landArea: "1,045 square miles",
        coastlineLength: "40 miles",
        totalShoreline: "384 miles",
        highestPoint: "Jerimoth Hill at 812 feet",
        tallestWaterfall: "Stepstone Falls at 12 feet",
    },
    cities: {
        largestCity: "Providence",
        capital: "Providence",
        retailCapital: "Warwick",
        famousFor: "Newport",
        navyBase: "Newport",
    },
    facts: [
        "Rhode Island was the last of the original thirteen colonies to become a state",
        "Shares a state water border with New York",
        "Home to the first National Lawn Tennis Championship in 1881",
        "St. Mary's, founded in 1828, is the oldest Roman Catholic parish",
        "The first open golf tournament in the US was in 1895",
        "The Flying Horse Carousel is the nation’s oldest carousel",
        "The first circus in the US was in Newport in 1774",
        "Ann and Hope was the first discount department store in the US",
        "Home to the Tennis Hall of Fame",
        "Known for making silverware and fine jewelry",
        "Home to the oldest schoolhouse in the US, built in 1716",
        "The longest running 4th of July observances since 1785 are in Bristol",
        "Touro Synagogue, built in 1763, is the oldest in North America",
        "The first state to declare independence from England",
        "The oldest Baptist Church in America, founded by Roger Williams in 1638",
        "Cogswell Tower, site of an Indian observation point",
        "World's largest bug on the roof of New England Pest Control",
        "The Independent Man, a statue atop the State House since 1899",
        "There is a replica of the Liberty Bell in the State House",
        "Judge Darius Baker imposed the first jail sentence for speeding in 1904",
        "Polo was played for the first time in the US in 1876",
        "The first Afro-American regiment fought in the Battle of Rhode Island",
        "George M. Cohan, born in 1878, wrote 'I'm a Yankee Doodle Dandy'",
        "The first British troops to squash the revolution landed in Newport",
        "Rhode Islanders first took military action against England by sinking 'The Gaspee'",
        "The first torpedo was launched in Newport",
        "The first steam engine was built in Providence",
        "The first cotton mill was built in Pawtucket",
        "The first strike in the US was in Pawtucket",
        "The longest running 4th of July parade in the US is in Bristol",
        "The first automobile race on a track was in Cranston in 1896",
        "The first automobile parade was in Newport in 1899",
        "The first Baptist Church in America was founded in Providence in 1671",
        "Newport's Pelham Street was the first in America illuminated by gaslight in 1806",
        "Watch Hill has the nation’s oldest continuously operating carousel since 1850",
        "The first nine hole golf course in America was in Newport in 1890",
        "The first strike in the US involving women occurred in Pawtucket in 1824",
        "Anne Franklin was the first woman newspaper editor in America in 1762",
        "The first state health laboratory was established in Providence in 1894",
        "The Rhode Island State House has the first all-marble dome built in the US",
        "The first lunch wagon in America was introduced in Providence in 1872",
        "A motion picture machine was patented in Providence in 1867",
        "H.P. Lovecraft, born in Providence in 1890, wrote horror fiction such as 'The Call of Cthulhu'",
    ],
};

const getRhodeIslandData = () => rhodeIslandData;

module.exports = {
    getRhodeIslandData,
};
