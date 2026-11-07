function sayHello() {
      console.log("Hello");
 }
 function execute(fn) {
      fn();
 }
 execute(sayHello);


function add() {
    console.log("Adding");
}

function subtract() {
    console.log("Subtracting");
}

function execute(operation) {
    operation();
}

execute(add);
execute(subtract);


function add(a, b) {
    		return a + b;
	}

	let result = add(10, 20);

	console.log(result);

     const student = {
    		name: "Rahul",
   		 age: 20,
    		course: "JavaScript"
	};

	const { name, age, course } = student;

	console.log(name);   
	console.log(age);    
	console.log(course);

