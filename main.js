//Ex2.1

const z = [1,2,3,4,5];
const newZ = z.map((newnum) => {
  return newnum*2;
} ); 
console.log(newZ)

//Ex2.2

const ages = [55,33,12,22,87,56];
const stringAge = ages.map((age) => age.toString())
console.log(stringAge);

//Ex2.3
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];

    const nameToUp = employees.map((x) => x.name.toUpperCase());
    console.log(nameToUp);
    
    //Ex2.4
   const numArr = [2,4,6,8];
   const biggerArr = numArr.map((x,y) => x*y );
   console.log(biggerArr);

   //Ex2.5
   const input = [
    {
        name: 'jhon',
        age:23,
    },
    {
        name: 'roy',
        age:76,
    },
    {
        name: 'hillel',
        age:11,
    },
    {
        name: 'guy',
        age:43,
    },
   ]

const ageArr = input.map((x) => x.age )
console.log(ageArr)
const oldest = Math.max(...ageArr);
const youngest = Math.min(...ageArr);
const result = oldest-youngest;
console.log(oldest);
console.log(youngest);
console.log(result);

//Ex forEach practice

//1
const numArry = [2,5,6,7,3];
let result1 = 0;
 result1 = numArry.forEach(num => result1+num );
 console.log(result1);

 //2.A
const values1 = [2,5,6,3];
const values1Double = values1.map((x)=> x*2);
console.log(values1Double);

//2.B
//map method!

//3.A
 const stringsArr = ['apple','banana','watermelon'];
 const theXArr = stringsArr.map((x) => x.replace(/[aeiou]/gi,'x'));
 console.log(theXArr);

 //4.A
 const employees1 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];

   
    
    employees1.forEach(check);

    function check(x,index) {
        if(x.age<20) {
            console.log(`"The person at index ${index} is too young."`)
        }
        else {
            console.log(`old`)
        }
    }
    
    //Ex4.B
//     const employees2 = [
//         { name: "John", age: 30 },
//         { name: "Jane", age: 15 },
//         { name: "Bob", age: 35 },
//        ];
//     employees2.forEach(updateEmployees);

// updateEmployees = (y,index) => {
// if(y.age>25) {
//     employees2.y[isAdult=true];
// }
// else {
//     employees2.y[isAdult=false];
// }
//  }
    

 //Ex filter-------

 //Ex1
 const arry2 = [2,3,4,5,6,20];
 const evenArr = arry2.filter(x => x%2==0);
 console.log(evenArr);

 //Ex2
 const arry3 = ['fgwefg','erg','eeeeerrrrr','ergefgg','ffefegegegege']
 const fiveAndGreaterOnly = (arry3) => {
    const arrayFilter = arry3.filter(x => x.length>5 )
    console.log(arrayFilter)
 }
fiveAndGreaterOnly(arry3);

//Ex3
const input1 = [
    {
        name: 'jhon',
        age:11,
        clubMember: true,
    },
    {
        name: 'dan',
        age:22,
        clubMember: false,
    },
    {
        name: 'alon',
        age:44,
        clubMember: false,
    },
    {
        name: 'hillel',
        age:99,
        clubMember: true,
    },
]

const filterClubMembers = (input1) => {
    const onlyMembers = input1.filter(member => input1.clubMember)
    console.log(onlyMembers);
} 

filterClubMembers(input1);


// find practice --------

//Ex1

const arry0 =[5,12,8,130,44];
const firstAbove10 = arry0.find(num => num>10)
console.log(firstAbove10)

//Ex2.A
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 28 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]
   
   const findStudent = (userInput) => {
    const result = students.find( x => x.name===userInput)
    console.log(result)
   }

   findStudent('Alice')

   //Ex2.B
   const olderThan23 = (arry) => {
const result3 = students.find(x => x.age>23)
console.log(result3);
   }
   olderThan23(students);

   // reduce practice-----------

   const input4 = [1,-4,12,0,-3,29,-150];
   const sortMyArry = () => {
   const positiveArr = input4.filter((x=> x>0));
   const sum = positiveArr.reduce((a,b) => a+b);
   if(input4===[]) {
    console.log('alert');
   }
   console.log(positiveArr);
   console.log(sum)
   }
   sortMyArry(input4);

   // Ex 2
   const calcFactorial = (num1) => {
    let newArry1 =[]
for(i=1;i<=num1;i++) {
   newArry1.push(i);
}
result5 = newArry1.reduce((a,b) => a*b);
console.log(newArry1);
console.log(result5);
   }
   calcFactorial(4)

   //Ex 3
   
   const students3 = [
    {
        name: 'jhon',
        age:11,
        clubMember: true,
    },
    {
        name: 'dan',
        age:22,
        clubMember: false,
    },
    {
        name: 'alon',
        age:44,
        clubMember: false,
    },
    {
        name: 'hillel',
        age:99,
        clubMember: true,
    },
]

const findOldest = (arry) => {
const result6 = students3.age.reduce((a,b)=> Math.max(a.age,b.age));
console.log(result6);
} 

findOldest(students3)