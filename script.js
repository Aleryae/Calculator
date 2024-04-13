console.log("Ready !");
window.addEventListener("load", () => {
	console.log("Hello world !");

	let blocks = document.querySelectorAll('td');
	let equation = document.querySelector('#equation');

	for (i = 0; i < blocks.length; i++) {
			let block = blocks[i];
			block.addEventListener('click', () => {
			equation.innerText = equation.innerText + block.innerText;

			if (equation.innerText.includes('C')){
				equation.innerHTML = '&nbsp;';
			}else if (equation.innerText.includes('=')){
				let equationRes = equation.innerText.slice(0, -1);
				result = eval(equationRes);
				equation.innerText = result;
			}
		  });
	}


});
