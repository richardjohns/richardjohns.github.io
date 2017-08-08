function nextInLine(arr, item) {
  // Your code here
  testArr.push(item);
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));



function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
  case 'a':
  answer = "apple";
  break;
  case 'b':
  answer = "bird";
  break;
  case 'c':
  answer = "cat";
  break;
  default:
  answer = "stuff";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);



function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);



// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };

  result = lookup[val];


  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
