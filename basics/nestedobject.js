// let user = {
//     name: 'tom',
//     age: 30,
//     address: {
//         city: 'bangalore',
//         zip: 56011,
//         area: {
//             areaname: 'new area'
//             }
//     }
// };

// console.log(user);
// console.log(user.name);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.zip);
// console.log(user.address.area.areaname);


let user = {
  studentName : 'xyz',
  rollNumber : 20,
  marks : {
    maths : {
      firstSem : 91,
      secondSem : 91
    },
    science : {
      firstSem : 85,
      secondSem : 91
    }
  }
};

for (let e in user) {
    console.log(user[e]);
    if (typeof user[e] === 'object' && user[e] !== null) {
        for (let e1 in user[e]) {
            console.log(user[e][e1]);
            if (typeof user[e][e1] === 'object' && user[e][e1] !== null) {
                for (let e2 in user[e][e1]) {
                    console.log(user[e][e1][e2]);
                }
            }
        }
    }
  
}


