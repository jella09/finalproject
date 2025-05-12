Web Systems and Technologies Final Project

For our final project, our group developed a fully responsive and interactive web application called INFO SITE using Next.js (App Router), Tailwind CSS, and Flowbite UI. This site has 5 navigations (Home, Users, Posts, Dashboard and About Us). Home shows the starting page of the site. Users shows the list of users with their username and email, then when it is clicked, a pop up message shows his/her information including his/her posts. Posts shows the posts of the users and when clicked, it shows the full details and the comments. Dashboard shows the data visualizations of the number of users, posts and comments retrieve from the JSON  placeholder using bar graph. About Us shows the authors or collaborators of this site.

This project allowed us to apply our knowledge in frontend and back-end development, API integration, and real-time data visualization.

Project Features

API Integration: 
Retrieved and displayed user, post, and comment data from the 
JSON Placeholder.

Reusable UI Components: 
Designed a clean interface using Flowbite components like buttons, cards, sidebars and navigation.

Efficient Data Handling: Employed React Query to manage and cache data fetching.

Map Integration: Mapped user locations using the Google Maps API via @react-google-maps/api.

Dynamic Charts: Visualized live application data with ApexCharts.

Deployment: The app is live and hosted on Vercel for continuous deployment.

Technologies Used

Framework: Next.js (App Router)
Styling: Tailwind CSS + Flowbite
Data Management: React Query
Maps: Google Maps API
Charts: ApexCharts
Hosting: Vercel

Installation & Setup:
Node.js
npm
Gitbash

# Create a new Next.js application
cd webtech-final-project

# Integrated Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Flowbite and dependencies
npm install flowbite flowbite-react

# Configure Tailwind to include Flowbite

# In tailwind.config.js, add:

# content: ["./node_modules/flowbite-react/**/*.js", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]

# Install additional libraries
1. Dependencies
npm install @headlessui/react
npm install apexcharts react-apexcharts
npm install mapbox-gl
npm install next
npm install react react-dom
npm install react-map-gl

2. DevDependencies
npm install -D @eslint/eslintrc
npm install -D @tailwindcss/postcss
npm install -D @types/node
npm install -D @types/react
npm install -D eslint eslint-config-next
npm install -D tailwindcss postcss autoprefixer


# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

TEAM MEMBER:
1. JELLA MAE CALUPIT
- designed the website using flowbite and deployed to vercel
2. SANDRINE GUELAS 
- created Next.js and integrated tailwind CSS
3. JAMES WILSON BARTOLATA
- checked the website's error and tested it after deployment
4. CRISTIAN CATAMORA
- none

Deployed URL in Vercel: [https://infositeapp.vercel.app/]