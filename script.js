
const students = [
    {
        name: "Rahul Sharma",
        course: "Computer Science",
        skill: "Python",
        status: "Learning"
    },
    {
        name: "Priya Kumar",
        course: "Information Science",
        skill: "HTML and CSS",
        status: "Completed"
    },
    {
        name: "Arjun Rao",
        course: "Data Science",
        skill: "Machine Learning",
        status: "In Progress"
    },
    {
        name: "Sneha Patel",
        course: "Information Science",
        skill: "JavaScript",
        status: "Learning"
    },
    {
        name: "Kiran Reddy",
        course: "Computer Science",
        skill: "React",
        status: "In Progress"
    }
];

// Select and modify the heading
const heading = document.getElementById("pageTitle");
heading.textContent = "Student Management Dashboard";

// Select the profile container
const container = document.querySelector("#profileContainer");

// Select other page elements
const count = document.getElementById("studentCount");
const welcome = document.getElementById("welcomeMessage");

// Update the welcome message
welcome.textContent = "Welcome! Explore our student profiles and skills.";

// Create student cards dynamically
students.forEach(function(student) {
    const card = document.createElement("div");
    card.className = "student-card";

    const name = document.createElement("h3");
    name.textContent = student.name;

    const course = document.createElement("p");
    course.textContent = "Course: " + student.course;

    const skill = document.createElement("p");
    skill.textContent = "Skill: " + student.skill;

    const status = document.createElement("p");
    status.textContent = "Status: " + student.status;

    card.appendChild(name);
    card.appendChild(course);
    card.appendChild(skill);
    card.appendChild(status);

    container.appendChild(card);
});

// Highlight the first student
const cards = container.querySelectorAll(".student-card");
cards[0].classList.add("highlight");

// Remove the last student card automatically
cards[cards.length - 1].remove();

// Update count based on the cards currently displayed
count.textContent = container.children.length;
