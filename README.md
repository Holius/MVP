# BOILER PLATE

This website is deployed live at https://daily-astronomy.herokuapp.com/.

## Using this Repository

-- npm install
-- npm run dev will build a dist folder and watch for changes made
-- npm start will launch a react hot server that will refresh on changes.
These commands will not work without the proper .env file containing sensitive information: database authentincation and NASA API authentication.
If you would like to be involved in developing this website further please contact me for information on making a .env to get the repo functional.

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## ES2015+ support

Spports ES2015+ by transpiling files with [Babel](https://babeljs.io/). Any JavaScript feature included in the [latest preset](https://babeljs.io/docs/plugins/preset-latest/) can be used. CSS files and HTML will also be transpiled and automatically inserted where intended.

##
Use link above to test the website out.  One may use the username "b" and password "b" to login to a dummy account or simply click the sign up button to create a new account.

Once logged in, one can make comments on the Astronomy Picture of the Day. These comments post to the MySQL database and persist comments. 

Once logged in, one can "favorite" an Astronomy Picture of the Day in the top right of the picture (button appers on hover of picture).  Favorites are quick-linked to every page a logged in user visits: making for quick navigation.  

The database will save all entries that have been visited,and this cuts down on API calls to NASA's server. This creates a faster experience for all users.  

Future improvements include modern CSS layout and log-in/sign-up modal.  
