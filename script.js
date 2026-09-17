/* =========================================================
   DOM
========================================================= */

const body = document.body;

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const scrollProgress =
    document.getElementById("scrollProgress");

const backTop =
    document.getElementById("backTop");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const savedTheme =
    localStorage.getItem("nashima-theme");


if (savedTheme === "light") {

    body.classList.add("light");

    themeIcon.textContent = "☾";

} else {

    body.classList.remove("light");

    themeIcon.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

    body.classList.toggle("light");

    const isLight =
        body.classList.contains("light");

    localStorage.setItem(
        "nashima-theme",
        isLight ? "light" : "dark"
    );

    themeIcon.textContent =
        isLight ? "☾" : "☀";

});


/* =========================================================
   MOBILE MENU
========================================================= */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuToggle.classList.toggle("active");

});


document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.classList.remove("active");

        });

    });


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText =
    document.getElementById("typingText");


const roles = [

    "Full Stack Developer",

    "Web Developer",

    "IoT Developer",

    "Salesforce Developer",

    "Python Developer",

    "Problem Solver"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingText) return;


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }


    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );

}


typeEffect();


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function handleScroll() {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;


    scrollProgress.style.width =
        `${progress}%`;


    if (scrollTop > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    handleScroll
);

handleScroll();


/* =========================================================
   BACK TO TOP
========================================================= */

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    laser: {

        icon: "🔐",

        type: "IoT • Security",

        title: "Laser Beam Security Grid",

        description:
            "An IoT-based security system designed for real-time intrusion detection using laser transmission, LDR sensors and NodeMCU ESP8266.",

        tags: [
            "NodeMCU ESP8266",
            "LDR",
            "Arduino IDE",
            "IoT",
            "Wi-Fi"
        ],

        details: [

            "Uses laser beams and light-dependent sensors to detect interruption.",

            "NodeMCU ESP8266 is used as the main microcontroller.",

            "Buzzer and indicators provide immediate alerts.",

            "Designed for real-time security monitoring and automation."

        ]

    },


    lease: {

        icon: "🏢",

        type: "Salesforce • CRM",

        title: "Lease Management System",

        description:
            "A Salesforce-based property leasing solution designed to manage properties, tenants, lease agreements, payments and automated business processes.",

        tags: [
            "Salesforce CRM",
            "Apex",
            "SOQL",
            "Salesforce Flow",
            "Validation Rules"
        ],

        details: [

            "Custom objects were used for Property, Tenant, Lease and Payment management.",

            "Salesforce Flow and automation support business processes.",

            "Apex and scheduled automation can support backend logic.",

            "Email notifications can be used for automated communication."

        ]

    },


    guardian: {

        icon: "🛡️",

        type: "IoT • Autonomous System",

        title: "Guardian Care Autonomous Safety Network",

        description:
            "An IoT safety concept designed to monitor restricted or sensitive areas using connected sensors and automated alerts.",

        tags: [
            "NodeMCU",
            "PIR Sensor",
            "HC-SR04",
            "IoT",
            "Sensors"
        ],

        details: [

            "PIR sensors detect movement in monitored areas.",

            "HC-SR04 ultrasonic sensing provides distance information.",

            "NodeMCU handles sensor processing and connectivity.",

            "Buzzer and LED indicators can provide immediate alerts."

        ]

    },


    irrigation: {

        icon: "💧",

        type: "IoT • Automation",

        title: "Automatic Irrigation System",

        description:
            "An automated irrigation system that monitors environmental conditions and helps control water supply based on soil moisture and rain detection.",

        tags: [
            "NodeMCU",
            "Soil Moisture Sensor",
            "Rain Sensor",
            "Relay",
            "Blynk"
        ],

        details: [

            "Soil moisture level is monitored continuously.",

            "Rain detection can help avoid unnecessary watering.",

            "Relay module controls the water pump.",

            "IoT connectivity can provide remote monitoring."

        ]

    },


    elite: {

        icon: "🔥",

        type: "IoT • Safety",

        title: "Elite Exhaust Care",

        description:
            "A smart kitchen safety system designed to monitor LPG leakage, smoke, fire and abnormal temperature conditions.",

        tags: [
            "ESP8266",
            "MQ-2",
            "Flame Sensor",
            "Temperature Sensor",
            "Blynk",
            "Firebase"
        ],

        details: [

            "MQ-2 sensor can detect smoke and combustible gases.",

            "Flame sensor helps identify fire conditions.",

            "Temperature monitoring supports additional safety detection.",

            "Buzzer and connected notifications can alert users."

        ]

    },


    mp3: {

        icon: "🎵",

        type: "C • File Handling",

        title: "MP3 Tag Reader and Editor",

        description:
            "A command-line application for reading and editing MP3 ID3 metadata such as title, artist, album, year, track and genre.",

        tags: [
            "C",
            "Structures",
            "Pointers",
            "File Handling",
            "ID3 Metadata"
        ],

        details: [

            "Reads metadata directly from binary MP3 files.",

            "Supports metadata fields such as title, artist and album.",

            "Uses structures and pointers for data handling.",

            "Demonstrates binary file processing and command-line arguments."

        ]

    },


    steganography: {

        icon: "🖼️",

        type: "C • Information Security",

        title: "Image Steganography Using LSB Encoding & Decoding",

        description:
            "A C-based project that hides and retrieves text information inside BMP images using Least Significant Bit encoding.",

        tags: [
            "Advanced C",
            "LSB",
            "Bitwise Operations",
            "Pointers",
            "BMP"
        ],

        details: [

            "Encodes secret text into image pixel data.",

            "Uses LSB techniques for information hiding.",

            "Decodes the hidden message from the image.",

            "Demonstrates file handling, pointers and bitwise operations."

        ]

    },


    address: {

        icon: "📒",

        type: "C • CLI Application",

        title: "Address Book Management System",

        description:
            "A command-line address book application supporting contact management and persistent file storage.",

        tags: [
            "Advanced C",
            "Structures",
            "File Handling",
            "Pointers",
            "CLI"
        ],

        details: [

            "Allows users to add and store contacts.",

            "Supports search, edit, delete and display operations.",

            "Uses file storage for persistent contact data.",

            "Demonstrates structures, pointers and string handling."

        ]

    },


    ecommerce: {

        icon: "🛒",

        type: "Backend • REST API",

        title: "Ecommerce API Development",

        description:
            "A backend API project focused on e-commerce services including product management, cart and order processing and database integration.",

        tags: [
            "Python",
            "REST API",
            "MySQL",
            "JSON",
            "Git/GitHub"
        ],

        details: [

            "Developed backend API concepts for e-commerce operations.",

            "Worked with product and application data.",

            "Used MySQL for database structure and data handling.",

            "Applied REST API concepts, debugging and API testing."

        ]

    }

};


/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal =
    document.getElementById("projectModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalIcon =
    document.getElementById("modalIcon");

const modalType =
    document.getElementById("modalType");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTags =
    document.getElementById("modalTags");

const modalDetails =
    document.getElementById("modalDetails");


const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("click", event => {

        if (
            event.target.closest(".project-btn")
            || event.target.closest(".project-card")
        ) {

            const projectKey =
                card.dataset.project;

            openProjectModal(projectKey);

        }

    });

});


function openProjectModal(projectKey) {

    const project =
        projectData[projectKey];

    if (!project) return;


    modalIcon.textContent =
        project.icon;

    modalType.textContent =
        project.type;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;


    modalTags.innerHTML = "";


    project.tags.forEach(tag => {

        const span =
            document.createElement("span");

        span.textContent = tag;

        modalTags.appendChild(span);

    });


    modalDetails.innerHTML = "";


    project.details.forEach(detail => {

        const li =
            document.createElement("li");

        li.textContent = detail;

        modalDetails.appendChild(li);

    });


    projectModal.classList.add("show");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    body.style.overflow = "hidden";

}


function closeProjectModal() {

    projectModal.classList.remove("show");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


modalOverlay.addEventListener(
    "click",
    closeProjectModal
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("show")
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNav() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const mobile =
            document.getElementById("mobile").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const subject =
            encodeURIComponent(
                `Portfolio Contact - ${name}`
            );


        const body =
            encodeURIComponent(

                `Name: ${name}\n` +

                `Mobile: ${mobile}\n` +

                `Email: ${email}\n\n` +

                `Message:\n${message}`

            );


        window.location.href =
            `mailto:nashimaroshan2005@gmail.com?subject=${subject}&body=${body}`;

    }
);


/* =========================================================
   SMOOTH ANCHOR
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        event => {

            const targetId =
                anchor.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const navbarHeight = 80;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});