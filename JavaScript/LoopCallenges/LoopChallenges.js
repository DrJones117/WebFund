// ======Prints Odds======

for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

var i = 1;
while (i <= 20) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

// ======Decreasing Multiples of Three======

for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

var i = 100;
while (i > 0) {
    if (i % 3 == 0) {
        console.log(i);
    }
    i--;
}

// ======Prints the sequence======

for (var i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

var i = 4;
while (i > -4) {
    console.log(i)
    i -= 1.5;
}

// ======Sigma======

var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

var sum = 0;
var i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);

// ======Factorial======

var product = 1;
for (var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);

var product = 1;
var i = 1;
while (i <= 12) {
    product *= i;
    i++;
}
console.log(product);