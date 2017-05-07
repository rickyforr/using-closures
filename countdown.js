var countdownGenerator = function (x) {
  /* your code here */
    var num = x;

    return function () {

        if (x === 0) {
        console.log("Blast Off!");cd
        }
        else if (x < 0) {
          console.log("Rockets already gone, bub!");
        }
        else if (console.log("T-minus " + x));

         x = x - 1;

    };
};

var countdown = countdownGenerator(7);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // T-minus 3...
countdown(); // T-minus 2...