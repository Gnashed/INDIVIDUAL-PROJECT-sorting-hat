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

// Func calls
assignToHouse(students[0]);
