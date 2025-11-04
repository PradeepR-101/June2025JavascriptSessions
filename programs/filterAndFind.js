

let empData = [
    {name: 'John', age: 28, department: 'HR'},
    {name: 'Jane', age: 34, department: 'Finance'},
    {name: 'Mike', age: 25, department: 'IT'},
    {name: 'Emily', age: 40, department: 'Finance'},
    {name: 'David', age: 30, department: 'IT'}
]

//returns all matching filter records
 let empdata1 = empData.filter(emp=>{
    return emp.age > 30
 })
console.log('Employees with age greater than 30:', empdata1);

//returns first matching find record
let empData2 = empData.find(emp=>{
    return emp.age > 30
})
console.log('First employee with age greater than 30:', empData2);