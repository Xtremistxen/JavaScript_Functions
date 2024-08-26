console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function  printOdds(count){
    for (let i =1; i <= Math.abs(count); i++){  // Loop 1 to absolute value
        if (i % 2 !== 0){ // Checking if the number is odd
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userAge, age){ // Being able to drive is a good thing?
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait till you're 16.`;
    
    if (!userName || !age){
        console.log("Please provide a valid name and age.");  // If user inputs invalid inputs for name/age
        return;
    }
    if (age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x,y) {
    if (x === 0 && y === 0) {
        console.log("The point (0, 0) is at the origin.");

    } else if (x === 0) {
        console.log(`The point (${x}, ${y}) is on the y-axis`);

    } else if (y === 0) {
        console.log(`The point (${x}, ${y}) is on the x-axis`);

    } else if (x > 0 && y > 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 1.`);

    } else if (x < 0 && y > 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 2.`);

    } else if (x < 0 && y < 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 3.`);

    } else if (x > 0 && y < 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(a,b,c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";

    } else if (a === b && b === c) {
        return "Equilateral triangle";

    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle";

    } else {
        return "Scalene triangle";
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus(planLimit, day, usage) {
    const daysInPeriod = 30;
    const avgDailyUse = usage / day;
    const projectedUse = avgDailyUse * daysInPeriod;
    const remainingDays = daysInPeriod - day;
    const remainingData = planLimit - usage;
    const remainingDailyUse = remainingData / remainingDays;

    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`Average daily use: ${avgDailyUse.toFixed(2)} GB/day`);

    if (projectedUse > planLimit) {
        console.log(`You are EXCEEDING your average daily use (${avgDailyUse.toFixed(2)} GB/day), 
        continuing this high usage, you'll exceed your data plan by 
        ${projectedUse - planLimit} GB.`);
    } else if (projectedUse < planLimit) {
        console.log(`You are UNDER your average daily use (${avgDailyUse.toFixed(2)} GB/day), 
        continuing this usage, you'll have ${planLimit - projectedUse} GB remaining.`);
    } else {
        console.log("You are EXACTLY on track with your average daily use.");
    }

    console.log(`To stay below your data plan, use no more than ${remainingDailyUse.toFixed(2)} GB/day.`);
}
