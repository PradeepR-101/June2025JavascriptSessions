let studentdata = {
  stuname: 'Harshikaa Sivaraman',
  age: 14,
  school: 'Omega',
  homeaddress: {
    No: 190,
    Nagar: 'Sri Ramar Street',
    Area: 'Vigneshwara Nagar',
    homeaddress2: {
      city: 'Chennai',
      pincode: '600122',
      country: 'India'
    }
  },
  schooladdress: {
    area: 'Kolapakkam',
    city: 'Chennai',
    state: 'TamilNadu',
    country: 'India'
  }
};

for (let studata in studentdata) {
  console.log(studata); // provide the keys in studentdata
  console.log(studentdata[studata]); // provide the values in studentdata
  console.log(`${studata} = ${JSON.stringify(studentdata[studata])}`); // key = value (stringified if nested)
}
