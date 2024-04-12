const rhodeIslandData = {
    area: 1545, // square miles
    land: 1034, // square miles
    water: 511, // square miles
    population: 1097379, // as of 2022
    length: 48, // miles
    width: 37, // miles
    // Add any other relevant data about Rhode Island

    stateName: "Rhode Island",
    size: {
        totalArea: "1,214 square miles",
        northToSouth: "48 miles",
        eastToWest: "37 miles",
    },
    demographics: {
        population2002: "1,069,725",
        personsPerSquareMile: "1,003",
        homeOwnershipRate2000: "60%",
    },
    geography: {
        landArea: "1,045 square miles",
        coastlineLength: "40 miles",
        totalShoreline: "384 miles",
        highestPoint: "Jerimoth Hill at 812 feet",
    },
    cities: {
        largestCity: "Providence",
        capital: "Providence",
        retailCapital: "Warwick",
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
    
    
        "Cogswell Tower, site of an Indian observation point",
        "World's largest bug on the roof of New England Pest Control",
        "The Independent Man, a statue atop the State House since 1899",
        "A replica of the Liberty Bell in the State House",
    
    
        "Judge Darius Baker imposed the first jail sentence for speeding in 1904",
        "Polo was played for the first time in the US in 1876",
        "The first Afro-American regiment fought in the Battle of Rhode Island",
    
    
        "George M. Cohan, born in 1878, wrote 'I'm a Yankee Doodle Dandy'",
        "Roger Williams established the first model of Democracy",
    
        "The first British troops to squash the revolution landed in Newport",
        "Rhode Islanders first took military action against England by sinking 'The Gaspee'",
        "The first torpedo was launched in Newport",
        "The first steam engine was built in Providence",
        "The first cotton mill was built in Pawtucket",
        "The first strike in the US was in Pawtucket",
    ]
};

const getRhodeIslandData = () => rhodeIslandData;

module.exports = {
    getRhodeIslandData,
};
