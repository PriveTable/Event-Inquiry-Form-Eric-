$(document).ready(()=>{


let counter = 0
/* get all 3 sub headers */
let subheader1 = $('#subheader1')
let subheader2 = $('#subheader2')
let subheader3 = $('#subheader3')

let formPage1 = $('#formPage1')
let formPage2 = $('#formPage2')
let formPage3 = $('#formPage3')






function checkCounter (){
	if (counter === 0 ) {
		subheader1.css("display","inline");
		subheader2.css("display","none");
		subheader3.css("display","none");

		formPage1.css("display","inline");
		formPage2.css("display","none");
		formPage3.css("display","none");
		
		console.log(`counter value 0 = ${counter}`)
	} else if (counter === 1) {
		subheader1.css("display","none");
		subheader2.css("display","inline");
		subheader3.css("display","none");
		
		formPage1.css("display","none");
		formPage2.css("display","inline");
		formPage3.css("display","none");
		console.log(`counter value 1 = ${counter}`)
	} else if (counter === 2) {
		subheader1.css("display","none");
		subheader2.css("display","none");
		subheader3.css("display","inline");

		formPage1.css("display","none");
		formPage2.css("display","none");
		formPage3.css("display","inline");
		console.log(`counter value 2 = ${counter}`)
	} else if (counter <= 1) {
		counter = 0	
	} else if (counter >= 2) {
		counter = 2
	}
}

checkCounter();

$('.button1').on('click', () => {
	/*console.log('click button back')*/
	counter -= 1
	checkCounter();
	// console.log('this is counter value'  + counter);
})

$('.button2').on('click', () => {
	/*console.log('click button next')*/
	counter += 1
	checkCounter();
	// console.log('this is counter value ' + counter);
})


})

