// const tinderUser = new Object(); //Singleton object
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Atharva";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            firstnamae: "Atharva",
            lastname: "Chavan"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstnamae);

const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}

// const Obj3 = {Obj1, Obj2}; 
// console.log(Obj3);

// const Obj3 = Object.assign({}, Obj1, Obj2); // Merges Obj1 and Obj2 into a new object

const Obj3 = {...Obj1, ...Obj2};
// console.log(Obj3);

const user = {
    
        id: 1,
        email: "atharva.chavan@gmail.com"
    
}

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // Returns an array of keys
// console.log(Object.values(tinderUser)); // Returns an array of values
// console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs
// console.log(tinderUser.hasOwnProperty("id")); // Checks if the property exists



const course = {
    coursename: "JavaScript in Hindi",
    price: 999,
    courseInstructor: "Atharva Chavan"
}

// console.log(course.courseInstructor);

// DESTRUCTURING ASSIGNMENT
// course.courseInstructor

const {courseInstructor: instructor} = course; // Destructuring assignment
console.log(instructor);

const navbar = ({company}) => {

}

navbar(company = "Atharva");


// {
//     "name": "Atharva",
//     "course": "JavaScript in Hindi",
//     "price": 999,
// } 