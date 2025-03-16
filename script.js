document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  function startLoader() {
    const counterElement = document.querySelector(".counter");
    let currentValue = 0;
    const totalDuration = 2500;
    const startTime = Date.now();

    function updateCounter() {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime >= totalDuration || currentValue >= 100) {
        counterElement.textContent = 100;
        setTimeout(() => {
          gsap.to(".counter", { duration: 0.75, opacity: 0 });
          gsap.to(".bar", {
            duration: 1.5,
            height: 0,
            stagger: { amount: 0.5 },
            ease: "power4.inOut",
          });
        }, 500);
        return;
      }

      const progress = elapsedTime / totalDuration;
      currentValue = Math.floor(progress * 100);
      counterElement.textContent = currentValue;

      const delay = Math.floor(Math.random() * 100) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  }

  startLoader();

  window.addEventListener("scroll", () => {
    const value = window.scrollY;
    document.getElementById("bg").style.top = value * 0.5 + "px";
    document.getElementById("moon").style.left = -value * 0.5 + "px";
    document.getElementById("mountain").style.top = -value * 0.01 + "px";
    document.getElementById("road").style.top = value * 0.65 + "px";
    document.getElementById("moon-text").style.top = value * 1.25 + "px";
  });

  // GSAP Animation for Grid Items
  gsap.from(".main_grid_box > div", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".main_grid_box",
      start: "top 80%",
    },
  });

  // Hover Effects
  const gridItems = document.querySelectorAll(
    ".lm_upper, .lm_lower, .m1, .m2, .m3, .rm_upper, .rm_lower"
  );

  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });
});

const projects = [
  {
    id: 1,
    name: "GlobePath",
    description:
      "GlobePath is an AI-powered travel planner app that curates personalized itineraries, smart recommendations, and seamless trip management for hassle-free travel experiences.",
    image: "/assets/globepath.png",
    techStack: "React Native,Tailwind,Firebase",
    link: "/globepath.html",
  },
  {
    id: 2,
    name: "Chattie",
    description:
      "Chattie is a real-time chat application built using the MERN stack, designed with Material-UI and Tailwind CSS for an intuitive UI. It offers seamless messaging, modern design, and responsive features for smooth user interactions.",
    image: "/assets/chattie.png",
    techStack:
      "React Js,Tailwind,Material UI,Node Js,Express,MongoDB,Scoket.io,Redux",
    link: "/chattie.html",
  },
  {
    id: 3,
    name: "Object Detection",
    description: "The third project focuses on solving...",
    image: "/assets/object.png",
    techStack: "Python",
    link: "/object_detection.html",
  },
];

const listProjects = [
  {
    id: 1,
    name: "BOT-Stone_Paper_Scissor",
    techStack: "Python",
    descriptionCell:
      "This is an interactive Rock-Paper-Scissors game where the player uses hand gestures to play.",
    link: "https://github.com/yatinkashyap1252/Stone_Paper_Scissor",
  },
  {
    id: 2,
    name: "Tiny_camera_detector",
    techStack: "Python",
    descriptionCell:
      "The application called TinyTracker is a real-time, Python-based application for tracking minute movements inside a captured footage.",
    link: "https://github.com/yatinkashyap1252/Tiny-Tracker",
  },
  {
    id: 3,
    name: "Hand gesture Cricket",
    techStack: "Python",
    descriptionCell:
      "The game involves using hand gestures to represent runs, with the computer generating a random choice. If the user's gesture matches the computer's choice, they are out!",
    link: "https://github.com/yatinkashyap1252/Hand_gesture_cricket",
  },
  {
    id: 4,
    name: "Text-Extractor from PDF",
    techStack: "Python",
    descriptionCell: "this is very much useful tool for study...",
    link: "https://github.com/yatinkashyap1252/textExtractorPDF",
  },
  {
    id: 5,
    name: "Snake Game",
    techStack: "Python",
    descriptionCell:
      "Conquer the green land in a nostalgic adventure: My Python Snake 🐍 Game!",
    link: "https://github.com/yatinkashyap1252/Snake_Game",
  },
  {
    id: 6,
    name: "Inshort clone",
    techStack: "MERN Stack",
    descriptionCell:
      "clone of the inshort app use of mongo db database service for the realtime update of news",
    link: "https://github.com/yatinkashyap1252/Inshort-clone",
  },
  {
    id: 7,
    name: "Chatpatti Gupshap",
    techStack: "MERN Stack",
    descriptionCell: "Coming directly from the Aunty in the house!",
    link: "https://github.com/yatinkashyap1252/News-js",
  },
  {
    id: 8,
    name: "Employeement Management System",
    techStack: "Java",
    descriptionCell:
      "I know this is not the special project,but this is my first project",
    link: "https://github.com/yatinkashyap1252/Employee-ManageMent-System",
  },
  {
    id: 9,
    name: "Figma",
    techStack: "Figma",
    descriptionCell:
      "desktop designs link-https://www.figma.com/design/VqrZahHwYxg0ryFdFmy40N/Desktop-yatin?node-id=0-1&t=FlqblrHcnQGK2Lm3-1,mobile designs link-https://www.figma.com/design/mmo7lP8csn2lT8l6iraLn4/Mobile-yatin?node-id=328-145&t=kes8AnGTEc1f3J2a-1",
    link: "https://www.figma.com/design/VqrZahHwYxg0ryFdFmy40N/Desktop-yatin?node-id=0-1&t=FlqblrHcnQGK2Lm3-1",
  },
  {
    id: 10,
    name: "Framer",
    techStack: "Framer",
    descriptionCell:
      "Showcasing dynamic and interactive prototypes built with Framer, blending smooth animations with intuitive user experiences.",
    link: "https://framer.com/join/My-Workspace--sbGzgwfLUVl6RIa6al3X",
  },
  {
    id: 11,
    name: "Spline 3d Tool",
    techStack: "Spline",
    descriptionCell:
      "For the showcase of my 3d work,I have posted video of the spline on my another channel",
    link: "https://www.youtube.com/@PixelRedemption",
  },
  {
    id: 12,
    name: "Blender",
    techStack: "Blender",
    descriptionCell:
      "Showcasing dynamic and interactive built with blender,blending smooth animations.",
    link: "https://www.instagram.com/pixelredemption_404/?hl=en",
  },
];

function createProjectElement(project) {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.style.backgroundImage = `url(${project.image})`;

  const content = document.createElement("div");
  content.className = "project-content";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.link;
  link.className = "project-link";
  link.textContent = "Click here";
  link.target = "_blank"; // Opens in a new tab
  link.rel = "noopener noreferrer"; // Security best practice

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(link);
  projectDiv.appendChild(content);

  return projectDiv;
}

function populateProjects() {
  const container = document.getElementById("project-container");
  projects.forEach((project) => {
    container.appendChild(createProjectElement(project));
  });
}

function populateTable() {
  const tableBody = document.getElementById("project-table-body");
  listProjects.forEach((project) => {
    const row = document.createElement("tr");

    const indexCell = document.createElement("td");
    indexCell.textContent = project.id;

    const nameCell = document.createElement("td");
    nameCell.textContent = project.name;

    const techStackCell = document.createElement("td");
    techStackCell.textContent = project.techStack;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = project.descriptionCell;

   const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Click here";
    button.onclick = () => window.open(project.link, "_blank", "noopener,noreferrer");
    actionCell.appendChild(button);

    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(techStackCell);
    row.appendChild(descriptionCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  populateProjects();
  populateTable();
});

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper_404");
  const cards = [
    { id: "#card_1", endTranslateX: -2000, rotate: 45 },
    { id: "#card_2", endTranslateX: -1000, rotate: -30 },
    { id: "#card_3", endTranslateX: -2000, rotate: 45 },
    { id: "#card_4", endTranslateX: -1000, rotate: -30 },
    { id: "#card_5", endTranslateX: -1000, rotate: -30 },
    { id: "#card_6", endTranslateX: -1000, rotate: -45 },
  ];

  ScrollTrigger.create({
    trigger: ".scroll-container",
    start: "top top",
    end: "+=300%", // Adjust this value to control the scroll length
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(wrapper, {
        x: () => -self.progress * 300 + "vw",
        ease: "none",
      });

      cards.forEach((card) => {
        gsap.to(card.id, {
          x: () => card.endTranslateX * self.progress,
          rotate: () => card.rotate * self.progress,
          ease: "none",
        });
      });
    },
  });
});
