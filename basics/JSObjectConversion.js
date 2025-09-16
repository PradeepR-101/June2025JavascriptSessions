//person js object
let person = {
    name: 'tom',
    age: 40,
    salary: 34.55,
    isActive: true,
    status: 'pending'
}

console.log(typeof (person));

//js object to JSON string: marshelling
let personJson = JSON.stringify(person);
console.log(personJson);
console.log(typeof (personJson));//string

//JSON String to JS Object: unmarshelling

let booksJson = `{
    "name": "The Pragmatic Programmer",
    "author": "Andrew Hunt",
    "published_year": 1999,
    "book_summary": "A classic guide to software craftsmanship."
}`;

console.log(typeof (booksJson));//string

let books = JSON.parse(booksJson);
console.log(books);
console.log(typeof(books));

console.log('===========');

let compJson = `{
    "company": "EYDelta Pvt Ltd",
    "location": "Bangalore, India",
    "employees": [
        {
            "id": 101,
            "name": "Jitendra Parit",
            "position": "CTO",
            "skills": [
                "Motor Design",
                "Embedded Systems",
                "Product Strategy"
            ],
            "projects": [
                {
                    "name": "Drone BLDC Motor",
                    "status": "Ongoing",
                    "technologies": [
                        "Aluminum Rotor",
                        "Sensorless FOC",
                        "KiCad PCB"
                    ]
                },
                {
                    "name": "Robotic Actuator",
                    "status": "Completed",
                    "technologies": [
                        "Closed-loop Control",
                        "CAN Bus"
                    ]
                }
            ]
        },
        {
            "id": 102,
            "name": "Amit Sharma",
            "position": "Embedded Software Engineer",
            "skills": [
                "C++",
                "RTOS",
                "INAV"
            ],
            "projects": [
                {
                    "name": "Smart BMS",
                    "status": "In R&D",
                    "technologies": [
                        "Li-Ion Safety",
                        "CAN",
                        "Python Automation"
                    ]
                }
            ]
        }
    ]
}`;


let comp = JSON.parse(compJson);
console.log(comp);
console.log(typeof (comp));

