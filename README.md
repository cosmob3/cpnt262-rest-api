# CPNT-262 // Bryan Velasco // Fetching API Data

[GitHub Repo](https://github.com/cosmob3/cpnt262-rest-api)
[GitHub Page](https://cosmob3.github.io/cpnt262-rest-api/)

***Attributions:***

- Used the zoom video '[Exploring Open Data](https://sait-ca.zoom.us/rec/share/WpcJ2ZqI0_BkFYKvAOeNIXtzfnlmLQ62-6F5yKoOCVczi0wVqyTJ7g4QGmwRZSdx.kwJOkwQZzMVxtXzq)' fron January the 17th as a guide. Thank You, Tony!

## February 23, 2022
TODO: **Working on Fetching API Data Assignment**

1. Using `fetch()` to retrieve data

  The retrieved data must include:

    - X A name or title
    - X An image url
    - X An off-site link that's directly related to the data
    - X At least one other property that can be displayed on the page

2. HTML Output

  Display the above information on an index.html page.

    - X Name or title should be displayed in an appropriate heading
    - X An off-site link
    - X Image should not be distorted and include a custom alt attribute derived from the retrieved data
    - X All other data should be displayed appropriately according to the content

3. Interactivity

  An interactive element of your choice, and related to the data, must be included on your page.

    - A button to refresh a random Disney character (without reloading the page)
    - A button to show the next episode in a season
    - A button to change the sort order of a list

4. Error handling

  All errors must be handled gracefully:

    - Rejected fetch() Promises are handled by a catch block (for example, there is a network error) or similar
    - The request doesn't return a 200 OK response code such as 404 Not found
    - API data validated in case it's missing, is of an unexpected data type or otherwise undefined