// Fetch a rectangle from html document
let rectangle = document.getElementById('myRectangle');
// Create a variable rectHeight which provide random value with maximum of 350, 
// and using setAttribute method to apply the randomly created value of the variable
let rectHeight = Math.round(Math.random() * 350);
rectangle.setAttribute('height', rectHeight);
// Create a variable r, g, b which provide random numerial values with maximum of 255, 
// and using setAttribute method to apply the randomly created value of the variable, 
// so that the color of the rectangle will be changed everytime when the page is loaded
let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);
rectangle.setAttribute('fill', 'rgb(' + r + ',' + g + ',' + b + ')');

// Fetch a circle from html document
let circle = document.getElementById('myCircle');
// Create new variables radius, circleX and circleY which provide the random numerical values 
// with maximum of the given values, and use addAttribute method
// to change the size and location of the circle created in the html document
let radius = Math.round(Math.random() * 100);
let circleX = Math.round(Math.random() * 400);
let circleY = Math.round(Math.random() * 500);
circle.setAttribute('r', radius);
circle.setAttribute('cx', circleX);
circle.setAttribute('cy', circleY);
// Create new variables cr, cg, cb which provide the random numerical values as what I did for rectangle above,
// to change the circle color randomly everytime when the page is loaded
let cr = Math.round(Math.random() * 255);
let cg = Math.round(Math.random() * 255);
let cb = Math.round(Math.random() * 255);
circle.setAttribute('fill', 'rgb(' + cr + ',' + cg + ',' + cb + ')');

// Fetch a line from html document
let line = document.getElementById('myLine');
// Create the new variable named strokeWidth, to provide a random value with maximum of 20
let strokeWidth = Math.round(Math.random() * 20);
line.setAttribute('stroke-width', strokeWidth);
// Create a lineX and lineY variable to change the location of the line
let lineX = Math.round(Math.random() * 200)
let lineY = Math.round(Math.random() * 200)
line.setAttribute('x1', lineX);
line.setAttribute('y2', lineY);

// Create a constant variable named svg, that fetch a svg area from the html document
const svg = document.getElementById('base_svg');

// Create a new variable named newRectangle to crate a new rectangular shape using js
let newRectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
// Make a random location for the new rectangle using random method
let rectX = Math.round(Math.random() * 500);
let rectY = Math.round(Math.random() * 400);
// Using setAttribute method to assign values for location and the size of the new rectangle
newRectangle.setAttribute('x', rectX);
newRectangle.setAttribute('y', rectY);
newRectangle.setAttribute('width', '200');
newRectangle.setAttribute('height', '200');
// Using the similar codes above, create a random colors when a new page is loaded
let r1 = Math.round(Math.random() * 255);
let g1 = Math.round(Math.random() * 255);
let b1 = Math.round(Math.random() * 255);
newRectangle.setAttribute('fill', 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')');
// Use appendChild method to add the newly created rectangle into the existing svg code
svg.appendChild(newRectangle);

// Create a new variable named newLine which create a new line using js
let newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
// Create a random values for the x and y coordinates of the new line using random method
let lineX1 = Math.round(Math.random() * 500);
let lineY1 = Math.round(Math.random() * 400);
let lineX2 = Math.round(Math.random() * 500);
let lineY2 = Math.round(Math.random() * 400);
newLine.setAttribute('x1', lineX1);
newLine.setAttribute('y1', lineY1);
newLine.setAttribute('x2', lineX2);
newLine.setAttribute('y2', lineY2);
// New variable named lineWidth which create a random stroke-width of the new line
let lineWidth = Math.round(Math.random() * 10);
newLine.setAttribute('stroke-width', lineWidth);
// Using the similar codes above, create a random colors when a new page is loaded
let r2 = Math.round(Math.random() * 255);
let g2 = Math.round(Math.random() * 255);
let b2 = Math.round(Math.random() * 255);
newLine.setAttribute('stroke', 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')');
// Using the similar codes above, create a random colors for the new line when a new page is loaded
svg.appendChild(newLine);

// Resize SVG
window.addEventListener("resize", resizeSVG);

function resizeSVG(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewbox", `0 0 ${bbox.width} ${bbox.Height}`)

    console.log(`0 0 ${bbox.width} ${bbox.Height}`);

}