# SportSee

SportSee is a web application that provides users with information on their daily physical activity and health indicators, such as calories burned, session duration, and much more. The application retrieves and visualizes user data through various charts and cards to offer a detailed view of their fitness journey.

## Table des matières
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Endpoints API](#endpoints-api)
- [Lauching the API](#launching-the-api)

## Features
- **Dashboard** : Displays the user's health indicators, including daily activities, average session duration, and performance.
- **Dynamic Data Visualization**: Provides detailed information via charts and visual components.
- **Responsive Design**: Ensures readability on screens with a minimum width of 1024px.

## Technologies
- **React** : JavaScript library for building the user interface.
- **Recharts** : Library used for rendering data visualizations.
- **Styled Components** : CSS-in-JS library for styling components.
- **React Router** : Library for route management and navigation.

## Installation

1. **Clone the repository:**

2. **Navigate to the project directory:**
   ```bash
    cd SportSee
3. **Install the dependencies:**
   ```bash
   npm install
5. **Start the development server:**
   ```bash
   npm start
The application should now be running at http://localhost:3000.

## Usage
- Open the application in your browser at http://localhost:3000.
- Access a user's profile by entering a URL like http://localhost:3000/profile/{userID}, replacing {userID} with a valid user ID (e.g., 12 or 18).
- Explore the dashboard to see the user's health indicators visualized with different charts.

## Project structure
```bash
src/
├── assets/             # Images and icons
├── components/         # Reusable UI components (e.g., Header, SideBar)
├── models/             # Data models for structuring API responses
├── pages/              # Page components (e.g., ProfilePage)
├── services/           # API service functions for data fetching
└── index.jsx           # Entry point of the application
```
## Endpoints API
The application connects to the following endpoints:
- Get User Info: /user/{userID} - Retrieves the user's main information, including user ID, personal information (first name, last name, age), today's score (todayScore), and key data (calories, macronutrients, etc.).
- Get User Activity: /user/{userID}/activity - Retrieves a user's daily activity with kilograms and calories.
- Get User Average Sessions: /user/{userID}/average-sessions - Retrieves the average sessions of a user per day. The week starts on Monday.
- Get User Performance: /user/{userID}/performance - Retrieves a user's performance (energy, endurance, etc.).
Note: Currently, only two users have been mocked. They have userId 12 and 18 respectively.

**Examples of Requests**
- http://localhost:3000/user/12/performance - Retrieves the performance of the user with ID 12.
- http://localhost:3000/user/18 - Retrieves user 18's main information.

## Launching the API
### Project (**without Docker**)

#### Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/) or higher (tested up to Node 20.0) 
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

#### Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.


### Project (**with Docker**)

#### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

#### Vscode and container remotes

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

Once in the container, run the `yarn dev` command.
