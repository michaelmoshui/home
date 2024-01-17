export const projects = [
  {
    name: "Freezing of Gait Detection with Deep Learning Models",
    identification: "FOG",
    tools: ["Python", "TensorFlow", "Transformers", "LSTM"],
    description:
      "- Developed various transformer encoder models and LSTM models to detect freezing of gait events in Parkinson's Disease patients.\n" +
      "- Explored 6 different feature sets based on body acceleration feature extraction that produced models up to 25% better-performing than base-line acceleration features\n" +
      "- Best-performing transformer model achieved a top 10% score in Kaggle’s Parkinson’s Disease Freezing of Gait Prediction competition.",
    link: "https://arxiv.org/pdf/2310.06322.pdf",
  },
  {
    name: "Chat2Cart",
    identification: "chat2cart",
    tools: ["React", "Flask"],
    description:
      "- A web app that allows users to enter a description of the product they want and receive Amazon product results.\n" +
      "- Incorporated ChatGPT 3.5 and Amazon search API in Python Flask for product result generation.\n" +
      "- Interactive chatbot and result display page with React.",
    link: "https://chat2-cart.vercel.app/",
  },
  {
    name: "Bluedraw",
    identification: "bluedraw",
    tools: ["MongoDB", "Express", "React", "NextJS"],
    description:
      "A web app that allows user to draw on a digital whiteboard with free hand motions captured by the webcam.\n\n" +
      "Functionalities:\n" +
      "1. Hand motion tracking using Google MediaPipe Computer Vision API.\n" +
      "2. Digital whiteboard using Perfect Freehand NPM package.\n" +
      "3. Dynamic user interface created using React\n" +
      "4. A social media platform with register, login, posting, and add friend functionalities.\n" +
      "5. Cookies and Jotai state container to keep track of user data after login.",
    link: "https://drawing-front-end.vercel.app/",
  },
  {
    name: "Moshuibook",
    identification: "moshuibook",
    tools: ["MongoDB", "Express", "React", "NodeJS"],
    description:
      "A Facebook clone created using the MERN stack.\n\n" +
      "Current functionalities:\n" +
      "1. Dynamic UI for login page, registration page, and home page header using React\n" +
      "2. User data storage in MongoDB Atlas\n" +
      "3. RESTful backend server using NodeJS checks login validation\n" +
      "4. Redux state container and cookies keep track of user data after login\n" +
      "5. Email activation and verification\n" +
      "6. Password reset\n\n" +
      "Future implementations:\n" +
      '- "Create post" functionality and cloud-based image and video storage\n' +
      "- Profile page\n" +
      '- "Follow", "unfollow", "friend request", "search friend" functionalities',
    link: "https://moshuibook.vercel.app/",
  },
  {
    name: "Matboard Beam Design",
    identification: "beam-design",
    tools: ["MatLab"],
    description:
      "- Optimized geometry of a matboard beam that is subjected to moving train load.\n- Hand-constructed 1.26-meter 815-gram beam supported 700 Newtons of train load.",
    link: "https://github.com/michaelmoshui/Beam-Design",
  },
  {
    name: "Leafing (Team Project)",
    identification: "leafing",
    tools: ["Flask", "MySQL", "CSS", "HTML"],
    description:
      "A website that allows users to share or find information about restaurants with dietary restriction options. Restuarant filtering based on address, price levels, ratings, and dietary restriction type were implemented using Python. Resturant data are stored in MySQL database.",
    link: "https://github.com/michaelmoshui/newHack_leafing",
  },
  {
    name: "2048",
    identification: "two-zero-four-eight",
    tools: ["JavaScript", "CSS", "HTML"],
    description:
      "An online 2048 Game recreated using JavaScript, CSS, and HTML.",
    link: "https://michaelmoshui.github.io/2048/",
  },
  {
    name: "Election Poll",
    identification: "election-poll",
    tools: ["NodeJS", "Express", "EJS", "MongoDB", "mongoose"],
    description:
      "(Give website some time to load)\nAn online election poll creator that allows users to view different election polls, vote for election candidates, nominate election candidates, or create a new election poll. Election data are stored in MongoDB Atlas database; create, read, update, and delete commands are done with the Mongoose framework.",
    link: "https://election-poll.onrender.com/",
  },
  {
    name: "Blog",
    identification: "blog",
    tools: ["NodeJS", "Express", "EJS", "MongoDB", "mongoose"],
    description:
      "(Give website some time to load)\nAn online blog site that allows user to read past articles, compose new article, and delete articles.\n\nBackend server was created with NodeJS using the Express framework. Articles are stored in MongoDB Atlas database; create, read, and delete commands are done with the Mongoose framework.",
    link: "https://blog-site-54ic.onrender.com/",
  },
  {
    name: "Calculator",
    identification: "calculator",
    tools: ["JavaScript", "CSS", "HTML"],
    description:
      'An online calculator with eementary operations, paranthesis, and memory storage functionality. The calculator takes in a multi-step calculation string upon "enter" , verify syntax, and compute the result according to the order of operation.',
    link: "https://michaelmoshui.github.io/calculator/",
  },
  {
    name: "Simon Game",
    identification: "simon-game",
    tools: ["JavaScript", "CSS", "HTML"],
    description:
      "A fun pattern-memorization game created using JavaScript, CSS, and HTML. View website for specific rules on how to play",
    link: "https://michaelmoshui.github.io/Simon-game/",
  },
];

export const skills = [
  { name: "TensorFlow" },
  {
    name: "Python",
  },
  {
    name: "Java",
  },
  {
    name: "MATLAB",
  },
  {
    name: "JavaScript",
  },
  {
    name: "CSS",
  },
  {
    name: "HTML",
  },
  {
    name: "React",
  },
  {
    name: "NodeJS",
  },
  {
    name: "Express",
  },
  {
    name: "MongoDB",
  },
];
