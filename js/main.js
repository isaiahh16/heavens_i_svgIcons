console.log ('Javascript is running');

/* longer JS block comment

const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid css selector to make a connection to ANY element on the page - it works the same way as CSS selectors do, because its USING css selectors to fid matching element(s)

the document is the DOM - the web page and all of its elements

querySelector is the method (funtion) that makes the connection between JS and the DOM (the elements)
*/

//step 1 - make the connection to the element(s) you want to interact with
const jpgGraphic = document.querySelector('#bitmap');
// creating vector click event (steps 1, 2 and 3) DONT need a second function
const svgGraphic = document.querySelector("#vector");

// step 3  - what funtion do you want to run
    function logID() {
    console.log('clicked on this element:',this.id);
}

//step 2 - decide how you want the user to interact with the object you created in step 1
jpgGraphic.addEventListener('click', logID);
svgGraphic.addEventListener('click', logID);




