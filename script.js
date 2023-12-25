function fibonacci(num) {
// your code here
 let n = num.length;
	let output = "";
	for(let i = 0; i < n; i++ + (i*1) - (i-2)){
             console.log(num[i]);
	}

}
fibonacci();
module.exports = fibonacci;
