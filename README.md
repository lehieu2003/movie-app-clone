## Features

1. **Search Movies and TV Series:**

   1. Users can easily search for their favorite movies and TV series within the application.
   2. View trailers to get a sneak peek before watching.

2. **Detailed Movie Information:**

   1. Access comprehensive information about a selected movie, including details about the cast, crew, and more.

<br/>

## :camera: Screenshots

<kbd><img width="952" alt="hero" src="https://github.com/sudeepmahato16/movie-app/assets/122378993/195e2334-4790-4d0c-85e6-7a03ca1981ee"></kbd>

<kbd><img width="950" alt="youtube video" src="https://user-images.githubusercontent.com/122378993/218236507-d55ca04d-2d6c-414b-9316-3817ae1a6cd7.png"></kbd>

<kbd><img width="953" alt="movie" src="https://user-images.githubusercontent.com/122378993/218257506-40efd922-0525-4620-81f4-eb03cdc661c8.png"></kbd>

<kbd><img width="953" alt="catalog" src="https://github.com/sudeepmahato16/movie-app/assets/122378993/d185a488-bb66-4890-a8af-a73b4e0941b5"></kbd>

<br/>
<br/>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

\***\* Prerequisites \*\***

- git
  If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (**[https://git-scm.com/](https://git-scm.com/)**).
- Node.js
  Application requires Node.js to be installed on your system in order to run. You can download and install the latest version of Node.js from the official website (**[https://nodejs.org/](https://nodejs.org/)**).
- npm (Node Package Manager)
  npm is the package manager for Node.js, and is used to manage the dependencies and packages required for your Next.js project. It is installed automatically when you install Node.js.
  To check if npm is installed on your system, you can open a terminal or command prompt and enter the following command:
  ```bash
  npm -v
  ```

Once you have these prerequisites in place, you can proceed to clone the project from GitHub using Git.

<br/>

\***\* Installing \*\***

Make sure you have all the necessary prerequisites installed on your system. Follow the below steps to install the setup the project on your machine:

- Open a terminal or command prompt and navigate to the directory where you want to clone the project.
- Run the following command to clone the project from GitHub:
  ```bash
  git clone https://github.com/sudeepmahato16/movie-app.git
  ```
- This will create a new directory called "movie-app" in the current location, containing the code for the movie app project.
- Navigate to the project directory by running the following command:

  ```bash
  cd movie-app
  ```

- Run the following command to install the project's dependencies using npm:

  ```bash
  npm install
  ```

- Start the server

  ```bash
  npm run dev
  ```

- To use the movie project, you will need to set up some environment variables on your development machine. Here are the steps to follow:

  1. Create a **`.env`** file in the root of the project.
  2. Add the following variables to the **`.env`** file, replacing the placeholder values with your own:

  ```jsx
  VITE_API_KEY=<your-tmdb-api-key>
  VITE_TMDB_API_BASE_URL = https://api.themoviedb.org/3
  ```

  3. Save the **`.env`** file.

- Once the dependencies are installed, you can run the project locally by running the following command:
  ```bash
  npm run dev
  ```

This will start the development server and open the movie application in your default web browser.

<br/>



