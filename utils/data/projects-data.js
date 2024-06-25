import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Silhouette',
        description: "Silhouette is a web application designed to facilitate anonymous feedback and criticism. Users can create accounts and opt to receive anonymous messages through a unique public link available on their dashboard. This link can be shared widely, allowing anyone to send feedback without needing to log in or reveal their identity, thus ensuring complete anonymity. Feedback can be viewed in the user's dashboard, making Silhouette a powerful tool for honest, candid insights. The user-centric design focuses on privacy and ease of use, providing a straightforward way for individuals to gather constructive criticism from diverse sources.",
        tools: ['Next.js', 'MongoDB', 'Zod', 'NextAuth.js', 'Resend', 'MUI', 'Tailwind', 'Firebase Storage',],
        previewLink: 'https://www.silhouette.in.net/',
        frontendRepo: '',
        backendRepo: '',
        completeRepo: 'https://github.com/anuragpsarmah/Silhouette',
    },
    {
        id: 2,
        name: 'OnClique',
        description: 'OnClique is a placement training application designed for final year computer science students. Users can solve daily aptitude questions, a daily coding question, and a daily SQL question. The application maintains a leaderboard based on the scores achieved by the students. With AI integration, students can analyze their code submissions as well. Additionally, it features an archive where students can access and solve past questions. The admin panel provides visibility into student statistics utilizing the Nivo library to display graphs.',
        tools: ['ReactJS', 'Firebase', 'Recoil', 'Docker', 'MUI', 'D3.js', 'Nivo', 'EdenAI', 'OpenAI API'],
        previewLink: "https://onclique.tech",
        frontendRepo: '',
        backendRepo: '',
        completeRepo: '',
    },
    {
        id: 3,
        name: 'CampusNest',
        description: 'CampusNest is a web application designed for students to easily search and book accommodations. It allows users to host their properties and explore other listings. With a wide range of filtering options, including hostel type, facilities, and department, finding the perfect place is simple. Each hostel listing features a Google Map location for easy navigation, and secure payments are facilitated through Stripe. Uers can also post reviews on hostels they have booked.',
        tools: ['ReactJS', "TypeScript", "MongoDB", "Cloudinary", 'Tailwind CSS', "Google Maps", "Stripe"],
        previewLink: 'https://campusnest-bbwd.onrender.com/',
        frontendRepo: '',
        backendRepo: '',
        completeRepo: 'https://github.com/anuragpsarmah/CampusNest',
    },
    {
        id: 4,
        name: 'No Fine',
        description: "No Fine is an application designed for Christ University Hostel (K E Hall, Jonas Hall etc.) residents to track their attendance. It automates the attendance tracking process and notifies users to mark their attendance to avoid fines imposed for non-compliance. The Android frontend of the application regularly sends HTTP POST requests to the backend Python script. This script is responsible for extracting attendance data from the user's Knowledge Pro profile. The frontend then processes the response it receives, and displays notifications accordingly.",
        tools: ['Kotlin', 'Python', 'Selenium', 'TensorFLow', 'NumPy', 'Flask', 'EC2', 'ngrok',],
        previewLink: 'https://github.com/anuragp787/No-Fine-Backend-Hostel-Attendance-Tracking-Application/assets/90975247/28ed22c7-54f6-49d3-bcb9-ddc5b733a742',
        frontendRepo: 'https://github.com/anuragpsarmah/No-Fine-Frontend-Hostel-Attendance-Tracking-Application',
        backendRepo: 'https://github.com/anuragpsarmah/No-Fine-Backend-Hostel-Attendance-Tracking-Application',
        completeRepo: '',
    },
];