# RI API 
Rhode Island as a Unit of Measurement | Measure any quantity in terms of Rhode Island. 

![Rhode Island Logo](public/newportbridge.webp)

## API Endpoints

Below is a table describing the functionality provided by each API endpoint when accessed via GET requests.

| Endpoint         | Functionality                             | Example Request                  | 
| ---------------- | ----------------------------------------- | -------------------------------- |
| `measure/length` | Converts lengths between different units. | `/measure/length?from=feet&to=meters&value=10` |
| `measure/area`   | Converts areas between different units.   | `/measure/area?area=303&units=sqmi` |
| `measure/population`   | Converts areas between different units.   | `/measure/population?population=500000` |
| `measure/population-density`   | Converts areas between different units.   | `/measure/population-density?density=300` |
| `measure/highest-point`   | Converts areas between different units.   | `/measure/highest-point?height=3000` |
| `measure/shoreline`   | Converts areas between different units.   | `/measure/shoreline?shoreline=900` |
| `measure/highest-point`   | Converts areas between different units.   | `/measure/area?from=square_km&to=square_mile&value=5` |
| `/facts`         | Provides random facts.                    | `/facts?type=science`          |
| `/media/`         | Provides random image srcs.                    | `/media`          |
| `/restaurants/`         | Get one random Rhode Island restaurant.                    | `/restaurants`          |
| `/restaurants/all`         | FULL list of Rhode Island restaurants.                    | `/restaurants/all`          |

### Endpoint Details

#### 1. `measure/length`
This endpoint allows users to convert lengths from one unit to another. Supported units include meters, kilometers, feet, and miles. Users must specify `from`, `to`, and `value` parameters in the query.

#### 2. `measure/area`
This endpoint enables users to convert areas between different measurement units like square meters, square kilometers, acres, and square miles. The `from`, `to`, and `value` parameters need to be provided in the query.

#### 3. `./facts`
The facts endpoint provides random facts based on the specified type. Possible types include 'science', 'history', and 'math'. The `type` parameter can be included in the query to specify the category of fact desired.

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
* 

Room for Improvement: 
* Rewrite with TypeScript
* Possibly rewrite with Python for Django or FastAPI


# Installation
* Feel free to clone and fork this repo! 

