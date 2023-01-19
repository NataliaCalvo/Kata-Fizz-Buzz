for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0 || i.toString().includes(3, 5)) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 || i.toString().includes(3)) {
      console.log('Fizz');
    } else if (i % 5 === 0 || i.toString().includes(5)) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }