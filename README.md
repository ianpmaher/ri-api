# RI API 
Rhode Island as a Unit of Measurement | Measure any quantity in terms of Rhode Island. 

![Rhode Island Logo](public/newportbridge.webp)

## API Endpoints

Below is a table describing the functionality provided by each API endpoint when accessed via GET requests.

| Endpoint         | Functionality                             | Example Request                  | 
| ---------------- | ----------------------------------------- | -------------------------------- |
| `measure/length` | Compares length between RI and other measures (default = miles). | `/measure/length?length=1000` |
| `measure/width` | Comapres width (default = miles). | `/measure/width?width=30` |
| `measure/area`   | Converts areas between different units.   | `/measure/area?area=303&units=sqmi` |
| `measure/population`   | Compares population of other localities to that of R.I.   | `/measure/population?population=500000` |
| `measure/population-density`   | Compares population density.   | `/measure/population-density?density=300` |
| `measure/highest-point`   | Compares the tallest elevation.   | `/measure/highest-point?height=3000` |
| `measure/shoreline`   | Comapres RI's shoreline to that of entered quantity.   | `/measure/shoreline?shoreline=900` |
| `measure/water-to-land`   | Compares ratio of water (in %) to land versus R.I.'s ratio.   | `/measure/water-to-land?ratio=` |
| ---------------- | ----------------------------------------- | -------------------------------- |
| `/facts`         | Provides random facts.                    | `/facts`          |
| `/media/`         | Provides random image urls.                    | `/media`          |
| `/restaurants/`         | Get one random Rhode Island restaurant.                    | `/restaurants`          |
| `/restaurants/all`         | FULL list of Rhode Island restaurants.                    | `/restaurants/all`          |
| `/history/`         | FULL list of Rhode Island historical facts.                    | `/history/`          |
| `/history/random`         | One random historical fact.                    | `/history/random`          |

### Endpoint Details

#### 1. `measure/length`
This endpoint allows users to convert lengths from one unit to another. Supported units include meters, kilometers, feet, and miles. Users must specify `from`, `to`, and `value` parameters in the query.

#### 2. `measure/area`
This endpoint enables users to convert areas between different measurement units like square meters, square kilometers, acres, and square miles. The `from`, `to`, and `value` parameters need to be provided in the query.

#### 3. `./facts`
The facts endpoint provides random facts based on the specified type. Possible types include 'science', 'history', and 'math'. The `type` parameter can be included in the query to specify the category of fact desired.

#### 4. `./media`
The media endpoint provides WikiMedia photo URLs based on the search term "Rhode Island". Fetching from WikiMedia each time, not hosted locally.

#### 5. `./restaurants`
This endpoint provides a list of restaurants based in Rhode Island. I will add more structure and queries in the future to allow localization. The list is a json file I had scraped using cheerio/puppeteer function found in this repo. The original list from which I scraped is on visitrhodeisland.com .

#### 6. `./history`
This endpoint provides a list of history facts from Rhode Island. The source is originally from the Rhode Island Secretary of State's website, a timeline. I will add parameters in the future.

## Usage 

To use these endpoints, make a GET request to the appropriate URL with the necessary query parameters as shown in the examples.

## Feedback

If you have any feedback or issues, please open an issue in this repository, and we will address it as soon as possible.

Thank you for using our API!

# Functional deployment: 

[https://radiant-wildwood-30276-73f4e705b27f.herokuapp.com/](https://radiant-wildwood-30276-73f4e705b27f.herokuapp.com/)


# Details: 
* What is more American than looking at the world in terms of America itself? The Rhode Island API solves a problem few of us have ever considered: how many Rhode Islands would fit into this body of water? How large is this iceberg, in terms of Rhode Islands? How many people live in Indonesia, in units of Rhode Island? (That last one is about 267.)
* Call to action: developers, take this API and paint the world in terms of Rhode Island, Little Rhodey, the Ocean State. 

* [https://en.wikipedia.org/wiki/List_of_unusual_units_of_measurement#Area](https://en.wikipedia.org/wiki/List_of_unusual_units_of_measurement#Area)

# Technologies used:
* Node 
* Express
* Cheerio
* Puppeteer

Room for Improvement: 
* Rewrite with TypeScript
* Possibly rewrite with Python for Django or FastAPI


# Installation
* Feel free to clone and fork this repo! 

