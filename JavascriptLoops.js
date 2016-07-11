//1
for (var i = 0; i < 1001; i += 100) {
    console.log(i);
}
//2
for (var i = 1; i < 129; i = i * 2) {
    console.log(i);
}
//3
for (var i = 0; i < 11; i = i + 2) {
    console.log(i);
}
//4
for (var i = 0; i < 16; i = i + 3) {
    console.log(i);
}
//5
for (var i = 9; i >= 0; i--) {
    console.log(i);
}
//6
for (var i = 0; i <= 4; i++) {
    console.log(i);
    console.log(i);
    console.log(i);
}
//7
for (var j = 1; j <= 3; j++) {
    for (var i = 0; i <= 4; i++) {
        console.log(i);
    }
}

//prints the numbers 1-25 and tells you whether that number is odd or even

for (var i = 1; i < 26; i++) {
    if (i % 2 === 0) {
        console.log(i + "  is even ");
    } else {
        console.log(i + "  is odd ");
    }
}
//prints the numbers from 1 to 50, however, for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
for (var i = 1; i < 51; i++) {
    if ((i % 3 === 0 && i % 5 === 0) === true) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 1; i < 1001; i++) {
    if ((i % 3) === 0) {
        sum = sum + i;
    } else if ((i % 5) === 0) {
        sum = sum + i;
    } else {
        sum = sum + 0;
    }
}
console.log(sum);
//that makes seven calls to console.log to output the following triangle:
array = "";
for (var i = 0; i < 8; i++) {
    array = array + "#";
    console.log(array);
}
