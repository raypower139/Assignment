# ICT Skills 2 Assignment - Single Page app.

Name: Raymond Power

## Overview.

This is an App which displays a list of Movies which is being taken from The Movie Database API. From the HOME PAGE the user will see 20 of the most popular films on THE MOVIE DATABASE API at the current time. The user can view the Movie Poster, Title and Overview of the film on the main page and once logged in can click on the image to display a protected page which will give additional info.

The main page also allows the user to search by name and also filter by LANGUAGE of the film. The API only delivers movies in pages of 20 movies and I hope to add pagination at a later date to allow the user to view more titles. 

The user can also edit the name or overview information on the film and also use the delete movie function from the main page. Users can login initially or they will be redirected to the login page when they click on the movie image to view the full movie page.

## Features.

- Display all movies served up from the API 
- Display number of movies served up
- View protected full movie info 
- View additional info
- Edit Title and Overview
- Delete movie
- Search by name
- Filter by language
- Components on Storybook
- e2e Testing
- Login and Logout

## Setup.

Clone the App
+ Create a new folder mkdir <foldername>
+ Navigate to the new folder cd <foldername>
+ Clone the project https://github.com/raypower139/Assignment

Run the Auth Server
+ Clone the project https://github.com/alex-c/mock-auth-backend
+ Navigate to the folder
+ Install dependencies npm install
+ Run the mock sever node index.js
+ The server should now be running on port 8005

Run the App
+ Open the App Folder
+ install dependencies npm install
+ Start the App using npm start
+ The App should now be running on localhost:3000

StoryBook
+ To run  story book : npx start-storybook -p 9001 -c .storybook/

## Data Model Design.

This is the data that is served up from the API

...
  results: [
{
popularity: 350.554,
vote_count: 390,
video: false,
poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
id: 429203,
adult: false,
backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
original_language: "en",
original_title: "The Old Man & the Gun",
genre_ids: [
35,
80,
18
],
title: "The Old Man & the Gun",
vote_average: 6.4,
overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, fullmazahd.in who loves him in spite of his chosen profession.",
release_date: "2018-09-28"
},
...

## UI Design.

. . . . . Screenshots of app's views with brief statements of their use (see examples below) . . . . . . .

![main]

>> Shows a card for each movie that is served up from the Movie Database API. The Movie list can be filtered by name and language. A movies title and overview can be edited or the user can also delete the movie. 

![movie]

>> This displays the main movie page for each movie. This page is protected and only accessed while the user is logged in. It displays the movie poster, title, id number, overview, release date and language. It also has a button which will show additional information when selected. 

![login]

>> This displays the form for the user to enter his username and password to access the protected area's of the site.

## Routing.

- / (public)- displays the main page with the movies listed thereon.
- /movies/:id (private) - detail view of the movies page.
- /login (public) - view the login page.

## Storybook.

![stories]

## Backend.

The API that serves the APP is just a list of popular movies from The Movie Database API from this site https://www.themoviedb.org/

## Authentication.

Authentication is served by the Mock Auth that we used in the labs. Login details: username: a@b.com  password: test

[login]: Login.jpg
[main]: MainPage.jpg
[movie]: MoviePage.jpg
[stories]: StoryBook.jpg
