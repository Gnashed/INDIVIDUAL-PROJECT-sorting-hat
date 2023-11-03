// TODO: Create Data structure(s), then create functions to manipulate it.

// Student array of objects should have a house color, name, house, and isExpelled initialized to false.
const students = [
    {
        id: 1,
        name: "Student Name",
        house: "House Name",
        houseColor: "House Color",
        isExpelled: false
    }
];

// Might need to move this array into a function later...
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// Produces a random number from houses array, then use the index to assign the student to a house.
const assignToHouse = (student) => {
    let assignedHouseIndex = Math.floor(Math.random() * houses.length);
    students.house = houses[assignedHouseIndex];
    // console.log(students.house);
};

/*
========================================= Form =========================================
*/
// Add student to first year's
const sortStudent = () => {
    
}

/*
========================================= Cards =========================================
*/

// Create the student cards.
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
========================================= main() =========================================
Will revisit this when I'm finished building the other functions. Basically the same as startApp(). Just naming it differently.
*/

// Func calls
renderCards(students);
