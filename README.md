# Fitness Tracker

## Contains an Index.js/Workout.js that function as models for use in the server.js file. This repo also contains pre-written (not my) front-end code located in the public folder. The seeders folder is also pre-written and is used to seed the mongo database. Finally there is a package.json and a server.js file.

## Installation

### Ensure there is an active process of mongodb running

### Run 'npm i'

### Run 'node seeders/seed.js

## Technologies Used

Express, MongoJS, Mongoose, Morgan.

## Usage

Upon installing all of the ncessary dependencies, and running 'node server.js', the site will bring you to a landing page that displays the last logged workout. The options at this point are to continue that workout, or create a new one. If continue workout is selected, the application will go to the mongo database and pull the existing entry and use 'put' methods to update that entry.

If the user clicks on create a new workout, a post method is used to the api route that will pull the model created and allow the user to input exercise name, type, weight, sets, reps, duration, and distance (for cardio). Once the user has completed entering their workouts, this entry is saved to the database for future use. After creating a new workout, the newly created workout should display on the landing page as the most recent workout.

The user also has at their disposal a stats page. The stats page is rendered with a range of 7 days of workouts and a few charts that show total workout duration and other statistical information that gives an overview of the user's workout habits.

## Project Status

This project is completed. While there is additional functionality that could be added later, it stands on it's own currently.

## Credits

Collaborator(s) - Justin Kellogg  
Outside Resources Used:  
W3Schools - www.w3schools.com
Stack Overflow - www.stackoverflow.com

## License

https://github.com/justinkellogg89/fitness-tracker
