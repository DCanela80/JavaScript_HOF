//Exercise 1
function plus(number){
    return function (plusNumber) {
        return plusNumber + number;
    }
}

const plus15 = plus(15);
console.log(plus15(10));

//Exercise 2
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

    users.forEach((element, index, array) =>{
        console.log(element.name)

    })

    //Exercise 3
    const mappedUsers = users.map((element, index, array) => {
      return {
        name: element.name,
        score: element.score
      }
    });
    console.log(mappedUsers);

    //Exercise 4
    const filteredUsers = users.filter((element, index, array) => {
      if (element.isActive){
        return true;
      } else {
        return false;
      }
        
    });
    console.log(filteredUsers);



    //Exervise 5
    users.sort((a, b) => {
        return b.score - a.score;
    });

    console.log(users);

    //Exercise 6
    const result = users.reduce((accumulator, currentValue, index, array) => {
        /*console.log(accumulator, currentValue.score);*/
        return accumulator + currentValue.score;

    }, 0);

    console.log(result);
    console.log(result/users.length);