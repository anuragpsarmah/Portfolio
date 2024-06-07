import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'No Fine',
        description: "No Fine is an application designed for Christ University Hostel (K E Hall, Jonas Hall etc.) residents to track their attendance. It automates the attendance tracking process and notifies users to mark their attendance to avoid fines imposed for non-compliance. The Android frontend of the application regularly sends HTTP POST requests to the backend Python script. This script is responsible for extracting attendance data from the user's Knowledge Pro profile. The frontend then processes the response it receives, and displays notifications accordingly.",
        tools: ['Kotlin', 'Python', 'Selenium', 'TensorFLow', 'NumPy', 'Flask', 'EC2', 'ngrok',],
        previewLink: 'https://github.com/anuragp787/No-Fine-Backend-Hostel-Attendance-Tracking-Application/assets/90975247/28ed22c7-54f6-49d3-bcb9-ddc5b733a742',
        frontendRepo: 'https://github.com/anuragpsarmah/No-Fine-Frontend-Hostel-Attendance-Tracking-Application',
        backendRepo: 'https://github.com/anuragpsarmah/No-Fine-Backend-Hostel-Attendance-Tracking-Application',
        completeRepo: '',
    },
    {
        id: 2,
        name: 'CampusNest',
        description: 'CampusNest is a web application designed for students to easily search and book accommodations. It allows users to host their properties and explore a variety of other listings. With a wide range of filtering options, including hostel type, facilities, and department, finding the perfect place is simple and convenient. Each hostel listing features a Google Map location for easy navigation, and secure payments are facilitated through Stripe. Additionally, users can post reviews on hostels they have booked, ensuring a community-driven experience.',
        tools: ['ReactJS', "TypeScript", "MongoDB", "Cloudinary", 'Tailwind CSS', "Google Maps", "Stripe"],
        previewLink: 'https://campusnest-bbwd.onrender.com/',
        frontendRepo: '',
        backendRepo: '',
        completeRepo: 'https://github.com/anuragpsarmah/CampusNest',
    },
    {
        id: 3,
        name: 'OnClique',
        description: 'OnClique is a placement training application designed for final year computer science students. Users can solve daily aptitude questions, a daily coding question, and a daily SQL question. The application maintains a leaderboard based on the scores achieved by the students. With AI integration, students can analyze their code submissions as well. Additionally, it features an archive where students can access and solve past questions. The admin panel is highly intuitive, providing visibility into student statistics and utilizing the Nivo library to display graphs. Admins can also add new questions directly through the admin panel, ensuring the content remains current and challenging.',
        tools: ['ReactJS', 'Firebase', 'Recoil', 'Docker', 'MUI', 'D3.js', 'nivo', 'EdenAI', 'OpenAI API'],
        previewLink: "https://onclique.vercel.app",
        frontendRepo: '',
        backendRepo: '',
        completeRepo: '',
    },
    // {
    //     id: 4,
    //     name: 'No Fine',
    //     description: "CampusNest is a web application designed for students to easily search and book accommodations. It allows users to host their properties and explore a variety of other listings. With a wide range of filtering options, including hostel type, facilities, and department, finding the perfect place is simple and convenient. Each hostel listing features a Google Map location for easy navigation, and secure payments are facilitated through Stripe. Additionally, users can post reviews on hostels they have booked, ensuring a community-driven experience.",
    //     tools: ['Kotlin', 'Python', 'Selenium', 'TensorFLow', 'NumPy', 'Flask', 'EC2', 'ngrok',],
    //     previewLink: 'https://github.com/anuragp787/No-Fine-Backend-Hostel-Attendance-Tracking-Application/assets/90975247/28ed22c7-54f6-49d3-bcb9-ddc5b733a742',
    //     frontendRepo: 'https://github.com/anuragpsarmah/No-Fine-Frontend-Hostel-Attendance-Tracking-Application',
    //     backendRepo: 'https://github.com/anuragpsarmah/No-Fine-Frontend-Hostel-Attendance-Tracking-Application',
    //     completeRepo: '',
    // },

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },