# ReadMe Sections


## Description
Family Movie Night is a website built by API. When you load the page, The Home page will randomly pick one of the family genre movies to show up as a recommendation and for the Index page, you can find all the different types of movies from that, can use sort and genres and search functions to filter the movie you are looking for, 

## Deployment link

[Netlify Pages](https://familymovienight.netlify.app/).

## Getting Started/Code Installation

If you want it to run locally on your machine:
 - Go to the [GitHub repository](https://github.com/yingjod/Family-Movie-Night).
 - Fork it to your own GitHub account
 - Clone in via this green button where it is written <>code and copy the link from SSH
 - Open the terminal and change the current working directory to the location where you want the cloned directory.
 - Type git clone, and then paste the URL of the SSH link you copied earlier in Step 2
 - Press Enter to create your local clone. 
 - You do have the code and all the necessary sources to run it locally on your machine

## Timeframe & Working Team (Pair)

Anne-Laure and I spent two days creating the project together, using JavaScript, React, SCSS, Axios, and React-Bootstrap.

## Technologies Used


001. SCSS
       - SCSS to design all the page backgrounds and organise all the items on the page.
       - use  @media to apply the style for different media queries. 
002. React
       - useState()
       - useLoaderData
       - Link
003. React-Bootstrap
       - Navbar
       - Containers
       - Layout
       - Spinner

004. JavaScript
       - RegExp


## Brief

![Brief1](/src/images/readme/Brief1.png)
![Brief2](/src/images/readme/Brief2.png)
![Brief3](/src/images/readme/Brief3.png)
![Brief4](/src/images/readme/Brief4.png)
![Brief5](/src/images/readme/Brief5.png)
![Brief6](/src/images/readme/Brief6.png)
![Brief7](/src/images/readme/Brief7.png)


## Planning

Anne-Laure and I collaborated on this project, designing a website consisting of three main pages. The index page features a random movie selection, while another page displays a comprehensive list of movies sourced from an API. Additionally, we created a dedicated page for individual movie details. Our wireframe outlines the structure and layout of each page.

![wireframe](/src/images/readme/wireframe.png)

## Build/Code Process

- Day 1
  On the first day, my partner and I kicked off the project by sketching out the wireframe for our website. We discussed the user interface design and layout, ensuring a user-friendly experience. After finalizing the wireframe, we made a collective decision on the API source to use for fetching movie data.With the wireframe as our guide, we proceeded to set up the foundational components of our project. Utilizing React-Bootstrap, we established a responsive grid layout, providing a structured framework for our website's design. Here's a snippet of our grid setup:

![code1](/src/images/readme/code1.png)

In addition to the grid layout, we implemented routing using React Router, enabling seamless navigation between different pages of our website. Here's how we configured routing:

![code2](/src/images/readme/code2.png)



- Day 2
  On the second day, we focused on enhancing the functionality and visual appeal of our website. We implemented a sorting function on the index page, allowing users to sort movies.
Here's a snippet demonstrating our sorting function:

![code3](/src/images/readme/code3.png)

Additionally, we dedicated time to refining the user interface, ensuring a visually appealing and intuitive design. We incorporated background images and logos to enhance the overall aesthetic of the website.

Overall, these two days were crucial in laying the foundation for our project and implementing key features to deliver a polished user experience.

## Challenges

 - Strive to align the Bootstrap functionality with our expectations.
 - Collaborating on VS Code Live with two people can be challenging for effective management.
 - In the process of familiarising myself with React and SCSS for the first time, requiring time to organise functions separately and avoid mixing them up.

## Wins
The initial experience of working on a project with others was valuable in learning how to collaborate effectively while coding. It involved separating tasks and compromising on ideas, and it proved beneficial in seamlessly integrating SCSS and React.

## Key Learnings/Takeaways
 - Learned how to use components.
 - Learned how to set up a search and sort funtions.
 - Learned how to create a grid by using React-bootstrap
 - Learned how to use API sources to fetch the information I need
 - Learned how to use a Router 
 - Learned how to use function correctly to the exact part to make the code tidy and clean. DRY the code.


## Bugs

## Future Improvements

An improved display would be more effective for the cast page. Currently, it shows each character individually, which is inconvenient when the same person plays different roles in a movie. Multiple occurrences of the same picture and name make it challenging to read. I would like to organise all characters under each person, creating a tidy and aesthetically pleasing page.


Additionally, I would like to add a link to the logo, allowing users to navigate back to the Home page easily.


