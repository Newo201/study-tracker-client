# Study Tracker App

The goal of this app is to create a study tracker which enables the user to view how much
study they have completed over a period of time. I wanted to build this app because I have
been keeping track of my study through an excel spreadsheet, so I thought something which was
more interactive and easier to complete could have a better user experience. I am also
interested in exploring dynamic dashboarding so I thought this was a good way to incorporate
this skill into a project.

## Server Side

Initially the server side will be relatively simple. It will consist of http requests to post or
retrieve information from a database. The database will consist of study units, with each row
containing a date, study type (e.g. assignment, lecture etc.), subject and study unit

- GET (/study): the amount of study units completed (may also contain filtering) by week (within a given date range)
- GET (/study/subject): all study completed by subject (within a given date range)
- GET (/study/type): all study completed by type (within a given date range)
- GET (/study/subject/week): all study grouped by week and subject
- GET (/study/type/week): all study grouped by week and type
- POST (/study): add a new study unit
- PUT/PATCH (/study/:id): change an aspect of the study completed
- DELETE (/study/:id): delete a row from the database


### Server Side ToDos

- Construct the SQL Database and SQL Queries needed to perform filters
- Add the API requests to the server
- Backend testing

## Client Side

Initially, the client side will contain 3 elements. The first will be a way for the user to add
a new study unit. The second will be for the user to edit or delete completed study units. The third
will be an interactive dashboard so that the user can see how much study they have completed.

The dashboard will have a few different visualisations:

- Line chart: a breakdown of how many units of study the user has completed each week
- Pie Chart: percentage of study (by type and by subject)
- Stacked Chart: combining these two ideas

### Client Side ToDos

- Add titles and axis labels to graphs
- Style out the dashboard page
- Add in a date picker section