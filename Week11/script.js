const svg = document.getElementById("svg-canvas");

window.addEventListener("resize", resizeSVG);

function resizeSVG(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewbox", `0 0 ${bbox.width} ${bbox.Height}`)

    console.log(`0 0 ${bbox.width} ${bbox.Height}`);

}