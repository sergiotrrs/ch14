let numbers = [1, 2, 4, 5];

function doubles(newArray = numbers) {
    numbers.forEach(numbers => console.log(numbers * 2));
}

doubles();