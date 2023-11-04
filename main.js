/*
========================================= Arrays =========================================
*/
const students = [];

// Might need to move this array into a function later...
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

/*
========================================= Cards =========================================
*/

// Will render cards to the DOM.
const renderCards = (array) => {
    // Initialize empty string to fill up the values that will make the student cards.
    let domString = "";

    // Loop through students
    for(let value in array) {
        // Store HTML to domString
        domString += `
        <div class="student container">
            <div id="house-color"></div>
                <p>${value.name}</p>
                <p>${value.house}</p>
                <button type="button" class="btn btn-danger mb-3">Expel</button>
        </div> <!-- ./student -->
        `;
    }
    // Target .student
    const student = document.querySelector("#fill-student");
    // Render the card to the DOM.
    student.innerHTML = domString;
}

/*
========================================= Form =========================================
*/
// Target form
const form = document.querySelector('form');

// Create student, add student to first year's.
const sortStudent = (event) => {
    event.preventDefault();

    // New Student
    const newStudent = {
        id: students.length + 1,
        name: document.querySelector("#student").value,
        house: "Placeholder", // Will figure out later.
        houseColor: "Placeholder", // Will figure out later.
        isExpelled: false
    }

    // Push student to the students array
    students.push(newStudent);
    // Render students to the DOM.
    renderCards(students);
    // Reset the form.
    form.reset();
}

// Produces a random number from houses array, then use the index to assign the student to a house.
const assignToHouse = (student) => {
    let assignedHouseIndex = Math.floor(Math.random() * houses.length);
    students.house = houses[assignedHouseIndex];
    // console.log(students.house);
};

/*
========================================= main() =========================================
Will revisit this when I'm finished building the other functions. Basically the same as startApp(). Just naming it differently.
*/

// Func calls
form.addEventListener('click', sortStudent);
