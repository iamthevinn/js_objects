// Name: Vince Carini

// Challenge 1

console.log("Challenge 1");

/*
Name: Remy, Cohort: Jan
Name: Genevieve, Cohort: March
Name: Chuck, Cohort: Jan
Name: Osmund, Cohort: June
Name: Nikki, Cohort: June
Name: Boris, Cohort: June
*/

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let key in students) {
    console.log("Name: " + students[key].name + ", Cohort: " + students[key].cohort);
}

console.log();

// Challenge 2

console.log("Challenge 2");

/*
EMPLOYEES
1 - JONES, MIGUEL - 11
2 - BERTSON, ERNIE - 12
3 - LU, NORA - 6
4 - BARKYOUMB, SALLY - 14
MANAGERS
1 - CHAMBERS, LILLIAN - 15
2 - POE, GORDON - 9
*/

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 for(let userType in users) {
    console.log(userType.toUpperCase());
    for (let i = 0; i < users[userType].length; i++) {
        let first_and_last = users[userType][i].last_name.toUpperCase() + users[userType][i].first_name.toUpperCase();
        console.log(i+1 + " - " + users[userType][i].last_name.toUpperCase() + ", " + users[userType][i].first_name.toUpperCase() + " - " + first_and_last.length);
     } 
}

console.log();

