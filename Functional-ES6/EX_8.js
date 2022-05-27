const employees = [{
    name: 'John Smith',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Chuck Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Mario Podreo',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Carston',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];

// Filter the developers from the employees
const developers = employees.filter(employee =>
    employee.jobTitle === 'developer');

// the map function return an array just of the salaries
const developerSalaries = developers.map(developer => developer.salary);
//reduce to sum the developerSalaries array
const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);

const averageDeveloperSalary = totalDeveloperSalaries / developerSalaries.length;
console.log(averageDeveloperSalary);

// The same opeartion but for not developers
const nonDevelopers = employees.filter(employee =>
    employee.jobTitle !== 'developer');
const nonDeveloperSalaries = nonDevelopers.map(nonDev => nonDev.salary);
const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce((acc, x) => acc + x, 0);
const averageNonDeveloperSalary = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDeveloperSalary);