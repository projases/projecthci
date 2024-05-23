import { accessKey } from "../utils/accessKey"

export const courses = [
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Harvard University",
        title: "Introduction to Computer Science",
        description: "Learn the basics of computer programming and problem-solving.",
        rating: 4.7,
        duration: "8 weeks",
        price: "Free",
        // keywords: ["Computer Science", "Programming", "Basics", "Problem-solving"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Stanford University",
        title: "Data Science Fundamentals",
        description: "Explore the foundational concepts of data analysis and visualization.",
        rating: 4.5,
        duration: "10 weeks",
        price: "$49",
        // keywords: ["Data Science", "Data Analysis", "Visualization", "Foundational Concepts"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
         provider: "MIT",
        title: "Introduction to Artificial Intelligence",
        description: "Discover the principles and applications of artificial intelligence.",
        rating: 4.8,
        duration: "12 weeks",
        price: "$99",
        // keywords: ["Artificial Intelligence", "Principles", "Applications", "Advanced"]
    },
    {
        image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Berkeley",
        title: "Web Development Bootcamp",
        description: "A comprehensive bootcamp covering HTML, CSS, and JavaScript.",
        rating: 4.6,
        duration: "6 weeks",
        price: "$59",
        // keywords: ["Web Development", "HTML", "CSS", "JavaScript"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Yale University",
        title: "Introduction to Psychology",
        description: "Explore the fundamentals of psychology and human behavior.",
        rating: 4.4,
        duration: "8 weeks",
        price: "Free",
        // keywords: ["Psychology", "Fundamentals", "Human Behavior", "Introduction"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Princeton University",
        title: "Machine Learning Basics",
        description: "Get started with machine learning algorithms and techniques.",
        rating: 4.9,
        duration: "10 weeks",
        price: "$79",
        // keywords: ["Machine Learning", "Basics", "Algorithms", "Techniques"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Columbia University",
        title: "Financial Markets and Investment Strategy",
        description: "Learn about financial markets, investment strategies, and portfolio management.",
        rating: 4.7,
        duration: "8 weeks",
        price: "$69",
        // keywords: ["Financial Markets", "Investment", "Strategy", "Portfolio Management"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Cambridge",
        title: "Introduction to Environmental Science",
        description: "Explore key concepts in environmental science and sustainability.",
        rating: 4.5,
        duration: "6 weeks",
        price: "Free",
        // keywords: ["Environmental Science", "Sustainability", "Key Concepts", "Introduction"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "LSE",
        title: "Digital Marketing Strategies",
        description: "Learn effective digital marketing strategies for businesses and organizations.",
        rating: 4.6,
        duration: "8 weeks",
        price: "$59",
        // keywords: ["Digital Marketing", "Strategies", "Businesses", "Organizations"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Caltech",
        title: "Introduction to Astrophysics",
        description: "Discover the wonders of the universe and explore the principles of astrophysics.",
        rating: 4.8,
        duration: "10 weeks",
        price: "$89",
        // keywords: ["Astrophysics", "Wonders of the Universe", "Principles", "Exploration"]
    },
    {
      image: "./Logo.png",
        altText: "Alt text for image",
        provider: "Oxford",
        title: "Creative Writing Workshop",
        description: "Hone your creative writing skills and unleash your imagination.",
        rating: 4.7,
        duration: "8 weeks",
        price: "$69",
        // keywords: ["Creative Writing", "Workshop", "Skills", "Imagination"]
    }
];
// Function to fetch images for all courses and store them in an array
// export async function fetchAllImages(courses) {
//     const images = [];
//     for (let i = 0; i < courses.length; i++) {
//         const image = await fetchImage(courses[i].keywords[0]); // Fetch image using the first keyword
//       images.push(image || './Logo.png'); // Use a default image if no image is found
//     }
//     return images;
// }

// // Function to load and display courses
// export async function loadCourses() {
//   const courseCatalog = document.querySelector('.courseCatalog');
//     const images = await fetchAllImages(courses);

//     for (let i = 0; i < courses.length; i++) {
//         const courseElement = course(
//             images[i],
//             courses[i].title,
//             courses[i].provider,
//             courses[i].title,
//             courses[i].description,
//             courses[i].rating,
//             courses[i].duration,
//             courses[i].price
//         );
//         courseCatalog.appendChild(courseElement);
//     }
// }
// // Function to perform a keyword-based image search using Unsplash API
// export async function fetchImage(keyword) {
//     const apiUrl = `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${accessKey}`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         if (data.urls && data.urls.regular) {
//             return data.urls.regular; // Return the URL of a random image related to the keyword
//         } else {
//           return './Logo.png'; // No image found for the keyword
//         }
//     } catch (error) {
//         console.error('Error fetching image:', error);
//         return './Logo.png'; // Return a default image in case of an error
//     }
// }
