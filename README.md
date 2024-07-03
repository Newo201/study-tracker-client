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

- Construct the SQL Database and SQL Queries needed to perform filters ✓
- Add the API requests to the server
    - GET /study ✓
    - GET /study/subject ✓
    - GET /study/type ✓
    - POST /study/add
    - PUT/PATCH /study/:id
    - DELETE /study:/id
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

#### Dashboard Component

- Add titles and axis labels to graphs ✓
- Create a custom hook for updating the dashboard
    - useAsync ✓
    - useFetch ✓
    - useAxios and useAxiosMultiple ✓
    - useUpdateDashboard ✓
- Change position of elements on dashboard without causing data to re-render ✓
- Add in a date picker section ✓
- Connect Date Picker to updating dashboard ✓
- Style out the dashboard page
    - Remove labels when graphs are small
    - Navbar and Footer Components

#### Study Log Component

- Create a ToDo component with add, edit, delete capabilities
    - Use the bootstrap features
- Allow user to select different type and subject of study
    - Ideally they should be able to do this on the ToDo card as they are adding/editing it (e.g. with dropdowns)
- Connect the ToDos to a database
- Add a complete capability
    - Make a post request to add the study to the database
    - Remove the ToDo from the list or move it to a different section (e.g. a completed page)
- Create a form where users can add new study types and subjects