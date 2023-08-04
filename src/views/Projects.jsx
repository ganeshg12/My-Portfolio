import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const projectsData = [
  {
    id: 1,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "Realtor Website",
    description: "Developed a realtor website with a range of features, including user authentication, dynamic header, private routes, and interactive listing components. Implemented OAuth functionality and Firebase integration for secure sign-in, sign-up, and password reset. Utilized React and leaflet to create dynamic UI elements, image sliders, and an interactive map for property listings. Tech: React, Tailwind CSS, OpenStreetMap API, and the Firebase database.",
    githubLink: "https://github.com/ganeshg12/realtor-clone-react",
  },
  {
    id: 2,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "IMDb Clone",
    description: "Developed an IMDb clone showcasing proficient front-end skills by creating a dynamic header, dark mode support, and a sleek navbar component. Utilized TMDB API to fetch movie data, implemented error handling, and added loading effects for enhanced user experience. Implemented card components and movie pages, providing users with a seamless search ability to explore movies. Tech: NextJS, Tailwind CSS, and TMDB API.",
    githubLink: "https://github.com/ganeshg12/IMDb-clone",
  },

  {
    id: 3,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "GSG Media",
    description: "Built a YouTube clone with a focus on  responsive layout with a dynamic navbar, feed, and sidebar for seamless navigation. Utilized API data fetching to display videos and their details, allowing users to explore and watch content. Implemented a search functionality to enhance the overall user experience and interactivity. Tech: React, Material UI, Rapid API",
    githubLink: "https://github.com/ganeshg12/GSG-Media",
  },

  {
    
    id: 4,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "Signature Verification System",
    description: "The system authenticates signatures for identity verification in legal, banking, and high-security environments. We have written a program in MATLAB that identified and distinguished 50 signatures out of 60 signatures, So the accuracy of this project is nearly 0.8 - 0.85. Tech: MATLAB.",
    githubLink: "https://github.com/ganeshg12/Signature-Verification-using-Image-Processing",
    
  },
  {
    id: 5,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "Hotel Booking Analysis",
    description: "Anderstanding Reservation Patterns and Cancellation Rates: This project analyzes a hotel booking dataset to understand reservation patterns and cancellations. It explores factors like hotel types, rates, trends, and market segments using statistics and visualizations. The goal is to provide valuable insights for hotel management and decision-making.",
    githubLink: "https://github.com/ganeshg12/Hotel-Booking-Analysis",
  },
  {
    id: 6,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "Airline Occupancy Analysis",
    description: "The project aims to increase the occupancy rate on low-performing flights to boost profitability and mitigate industry challenges. The project has three objectives: increase the occupancy rate, improve pricing strategy, and enhance customer experience. Achieving these objectives can help the company differentiate itself and increase customer loyalty. Tech: Jupyter Notebook.",
    githubLink: "https://github.com/ganeshg12/Airline-Occupancy-Analysis",
  },
  {
    id: 7,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "Term Deposit Subscription Prediction",
    description: " This project involves predicting whether a client of a retail banking institution will subscribe to a term deposit or not. The prediction will be based on various client data such as age, job type, marital status, etc., and information about the call made to the client.",
    githubLink: "https://github.com/ganeshg12/Predictive-Analysis-for-Targeted-Term-Deposit-Sales",
  },
  {
    id: 8,
    imageSrc: "https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg",
    title: "PG-Life Website",
    description: "Construct the web application with web development tools(HTML, CSS, JS, React, Bootstrap, DBMS, PHP), utilizing all of the ideas covered in the course and concepts taught in the Internshala training and create the database for the application with PHPMyAdmin database.",
    githubLink: "https://github.com/ganeshg12/InternshalaWebDevelopment-PGLife",
  },
  
  
  
  // Add more project data objects as needed
];

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projectsData.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        <a
          href="https://github.com/ganeshg12"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More On Github
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
