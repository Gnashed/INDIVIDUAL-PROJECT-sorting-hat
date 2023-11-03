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

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// Produces a random number from houses array, then logs it to the console.
const assignToHouse = (student) => {
    let assignedHouse = Math.floor(Math.random() * houses.length);
    console.log(assignedHouse);
};

// Func calls
assignToHouse(students[0]);
