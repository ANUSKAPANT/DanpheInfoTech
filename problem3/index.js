
// without rendering to the DOM

for(let i = 1; i <= 100; i++) {
	console.log((i%3 ? '' : 'Fizz' ) + (i%5 ? '' : 'Buzz' ) || i);
}



// with rendering to the DOM
output = document.querySelector('#output');

let html = '';

for(let i = 1; i <= 100; i++) {
	let result = (i%3 ? '' : 'Fizz' ) + (i%5 ? '' : 'Buzz' ) || i ;
	html = `
		<tr>
		<td>${i}</td>
		<td>${result}</td>
		</tr>
	`;
	output.innerHTML += html;
	console.log(result);
}

