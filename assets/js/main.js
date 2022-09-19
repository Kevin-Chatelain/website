document.querySelectorAll('.container-competences svg').forEach(svg => {
    let x = Math.floor(100 * Math.random());
    let y = Math.floor(100 * Math.random());

    svg.style.left = x+'%';
    svg.style.top = y+'%';
})