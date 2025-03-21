# Space Travel: Expanding Horizons Beyond Earth

This project is a web application that simulates space exploration and travel. 
It allows users to create custom spacecraft, select planets to travel to and explore information about real-world spacecrafts and planets. 
The application aims to provide an interactive and engaging experience, combining educational content with creative gameplay elements.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Data Sources](#data-sources)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Spacecraft Creation:** Users can design custom spacecraft by specifying their name and type.
- **Planet Selection:** Users can choose from a list of planets (fetched from a CSV file) to travel to.
- **Spacecraft Travel Simulation:** The application simulates a spacecraft's journey to a selected planet.
- **Spacecraft Data Display:** Displays information about real-world spacecraft fetched from a CSV file.
- **Planet Data Display:** Displays information about planets fetched from a CSV file.
- **Interactive Accordion Sections:** Provides educational content about space travel through interactive accordion components.
- **Responsive Navigation:** Allows users to navigate between different pages (Home, Spacecrafts, Planets).
- **Visually Appealing UI:** A dark-themed, minimalist design with icons and clear typography.

## Technologies Used

- **React.js:** For building the user interface and managing component logic.
- **React Router:** This is for navigation between different pages.
- **Supabase:** For storing and retrieving spacecraft and planet data (initially exported to CSV).
- **PapaParse:** For parsing CSV files in React.
- **React Icons:** For using icons in the application.
- **CSS:** For styling the application.
- **Vite:** For bundling and serving the React application.

## Installation

    https://github.com/blovelace84/Space_Travel.git

  ## Data Sources

- **Spacecraft Data:** Initially exported from Supabase and stored in `public/spacecrafts.csv`.
- **Planet Data:** Initially exported from Supabase and stored in `public/planets.csv`.
- **Icons:** React Icons library.
