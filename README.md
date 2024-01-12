# personal-budget-I
 Portfolio project for Codecademy. Project is completed at the end of the Back-End Development section.
 
 <!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Envelope Budget</h3>

  <p align="center">
    Express.js built back end for envelope budgeting system.
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#tasks">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I successfully completed a project focused on building a robust API for personal budget management, adhering to Envelope Budgeting principles. The API, developed using Node.js and Express, provides users with the ability to create, read, update, and delete budget envelopes. Throughout the project, I maintained best practices for REST endpoint naming conventions, utilized Git version control, navigated files and folders via the command line, and tested API endpoints using Postman. The project aimed to enforce data validation to prevent users from overspending their budget.

# Project Objectives
* Build an API using Node.js and Express
* Implement CRUD operations for budget envelopes
* Develop endpoints for updating envelope balances
* Adhere to REST endpoint naming conventions and response codes
* Utilize Git version control for tracking work
* Navigate files and folders using the command line
* Test API endpoints using Postma

This project showcases my proficiency in building a functional API using Node.js and Express while incorporating essential features for personal budget management, including robust data validation and error handling. The adherence to best practices and utilization of version control and testing tools reflects a commitment to high-quality development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* Express.js
* VS Code
* GitHub

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started, clone the repository.

### Prerequisites

Install the required packages
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ROADMAP -->
## Tasks

- [x] Set up project files and installed Express
- [x] Created 'server.js' and 'envelopes.js' files
- [x] Implemented a POST route for creating new envelopes, including data validation
- [x] Developed a GET route to retrieve all envelopes
- [x] Created middleware to find the index of a given envelope in the array
- [x] Implemented middleware to convert envelope name to lowercase for case-insensitive searches
- [x] Added error handling for invalid searches (e.g., searching with a number)
- [x] Enhanced error handling for non-existent envelopes
- [x] Developed a GET route to retrieve a specific envelope
- [x] Implemented a PUT route to subtract funds from a specific envelope
- [x] Created a DELETE route to delete a specified envelope
- [x] Added a POST route for fund transfers between envelopes, with data validation
- [x] Ensured the transfer amount must be a number



<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>