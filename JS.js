let ListNamber = 1;
const ListMax = 10;

while (ListNamber <= ListMax) {
  console.log(ListNamber);
  ListNamber += 1;
}




// 2 task





for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}



// task 3

const number = 7;

for (let i = 1; i <= 10; i++) {
  const NambMno = number * i;
  console.log(`${number} * ${i} = ${NambMno}`);
}


  // Task 4


var numbers4 = [1, 2, 3, 4, 5];


var i = 0;


while (i < numbers4.length) {
    console.log(numbers4[i]);
    i++;
}



// task 5



const numberTask5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const num = numberTask5.length;

let counter = 0;

while (counter < num.length) {
    console.log(num[counter]);
    counter++;
}

// task 6


const N = 10;

for (var i = 0; i < N; i++) {

    console.log(i);


    if (i >= N) {
        break;
    }
}





// task 7





const number7 = 5;


while (i <= 20) {

    if (i % 3 === 0) {

        i++;
        continue;
    }


    console.log(i);


    i++;
}
