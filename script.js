function fibonacci(num) {
// your code here
 let num1= 0;
 let num2= 1;
	let next;
	
	for(let i =0; i<num; i++){
         next = num1 + num2;
		 num2=num1;
		 next = num2;
		if (next[i] == num ){
	          console.log(next[i]);
		}

	
	}
	
fibonacci();


}
fibonacci();
module.exports = fibonacci;
