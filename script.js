function findLargest(a, b, c) {
  //your code here
	let lar
	if(a >= b && a >= c){
		lar = a
	}
	else if(b >= a && b >= c){
		lar = b 
	}
	else if(c >= a && c >= b){
		lar = c 
	}
	return lar;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
