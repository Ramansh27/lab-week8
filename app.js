// step 1 add this JavaScript file to index.html in the head element using the appropriate attribute

//write functions for all of the following
//use querySelector or querySelectorAll for all of the following, where needed.


//step 2 select the first paragraph in the second div and add the class 'paragraph-color' so that the styles in the style sheet are applied to only that paragraph
/*function changeClass(){
	const tempP = document.querySelector('.first-paragraph')
    tempP.classList.add('paragraph-color')
}

changeClass()
*/
// step 3 create a paragraph template using a template litteral
function paragraph(phrase){
	return `<p>${phrase}</p>`
}

// step 5 add the paragraph template you just created to the first div using innerHTML
function addNewParagraph(temp){
	const div = document.querySelector('#first-div')
	div.innerHTML += temp
}

addNewParagraph(paragraph("Let's try it out"))