/*
========================================= Arrays =========================================
*/
const students = [];

// Might need to move this array into a function later...
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

/*
========================================= Render to DOM =========================================
*/

// Will render cards to the DOM.
const renderCards = (array) => {
    // Initialize empty string to fill up the values that will make the student cards.
    let domString = "";

    // Loop through students
    array.forEach(student => {
        // Store HTML to domString
        domString += `
        <div class="student container">
            <div id="house-color"></div>
                <p>${student.name}</p>
                <p>${student.house}</p>
                <button type="button" class="btn btn-danger mb-3" id="expel">Expel</button>
        </div> <!-- ./student -->
        `;
    });
    // Target .student
    const student = document.querySelector("#fill-student");
    // Render the card to the DOM.
    student.innerHTML = domString;
}

// Renders dark army to DOM
const renderExpelledArmy = (array) => {
    // Initialize empty string to fill up the values that will make the expelled army card.
    let domString = "";

    // Loop through array
    array.forEach(student => {
        // Store HTML to domString
        domString += `
        <p>He Who Must Not Be Named's Army</p>
        <img src="assets/expelled-unsplash.jpg" alt="scary hand placed behind a glossy window.">
        <p>Sadly, ${student.name} went over to the dark side.</p>
        `;
    });
    // Target #expelled-army
    const expelled = document.querySelector("#expelled-army");
    // Render the card to the DOM.
    expelled.innerHTML = domString;
}

/*
========================================= Filters =========================================
*/
// Target the filter buttons
const allFilter = document.querySelector("#allFilter");
const gryffindorFilter = document.querySelector("#gryffindor");
const hufflepuffFilter = document.querySelector("#hufflepuff");
const ravenclawFilter = document.querySelector("#ravenclaw");
const slytherinFilter = document.querySelector("#slytherin");

// Filter Students
const filterStudents = (array, house) => {
    // To hold the filtered students
    let filteredStudents = [];

    array.forEach(value => {
        if (value.house === house) {
            filteredStudents.push(value);
        }
    });
    renderCards(filteredStudents);
}

/*
========================================= Create, Delete =========================================
*/

// Create student, add student to first year's.
const createStudent = (event) => {
    event.preventDefault();

    // Randomly selects a house for the student.
    const assignToHouse = () => {
        let assignedHouseIndex = Math.floor(Math.random() * houses.length);
        students.house = houses[assignedHouseIndex];
        return students.house;
    };

    // New Student
    const newStudent = {
        id: students.length + 1,
        name: document.querySelector("#student").value,
        house: assignToHouse(),
        houseColor: "Placeholder", // Will figure out later.
        isExpelled: false
    }

    // Push student to the students array
    students.push(newStudent);
    // Render students to the DOM.
    renderCards(students);
    // Reset the form.
    document.querySelector('form').reset();
}

// Expels (delete) student from DOM, sends them to HWMNBN's Army
const expelStudent = () => {
    // Expelled Army Array
    const expelledArmy = [];

    // Target student card
    const student = document.querySelector("#fill-student");

    // Capture click
    student.addEventListener('click', (event) => {
        if (event.target.id.includes("expel")) {
            const [, id] = event.target.id.split("--");
            const index = students.findIndex(event => event.id === Number(id));
            let expelledStudent = students.splice(index, 1);
            expelledArmy.push(expelledStudent);
            // console.log(expelledStudent);
            renderCards(students);
            renderExpelledArmy(expelledArmy);
        }
    })
    // TODO: Figure out why the student name is undefined.
};

/*
========================================= main() =========================================
*/

const main = () => {
    // Func calls
    allFilter.addEventListener('click', () => {
        renderCards(students);
    });
    gryffindorFilter.addEventListener('click', () => {
        filterStudents(students, "Gryffindor");
    });

    hufflepuffFilter.addEventListener('click', () => {
        filterStudents(students, "Hufflepuff");
    });

    ravenclawFilter.addEventListener('click', () => {
        filterStudents(students, "Ravenclaw");
    });

    slytherinFilter.addEventListener('click', () => {
        filterStudents(students, "Slytherin");
    });

    document.querySelector('#sort-btn').addEventListener('click', createStudent);
    expelStudent();
};

main();

/*
============================== Zombie Code, will remove later... ==============================
// Func calls
// allFilter.addEventListener('click', () => {
//     renderCards(students);
// });
// gryffindorFilter.addEventListener('click', () => {
//     filterStudents(students, "Gryffindor");
// });

// hufflepuffFilter.addEventListener('click', () => {
//     filterStudents(students, "Hufflepuff");
// });

// ravenclawFilter.addEventListener('click', () => {
//     filterStudents(students, "Ravenclaw");
// });

// slytherinFilter.addEventListener('click', () => {
//     filterStudents(students, "Slytherin");
// });

// document.querySelector('#sort-btn').addEventListener('click', createStudent);
// expelStudent();
*/
