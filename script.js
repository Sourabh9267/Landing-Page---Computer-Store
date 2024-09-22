const pointer = document.querySelector('.pointerdiv');

document.addEventListener('mousemove', (event) => {
    let x = event.clientX + 'px';
    let y = event.clientY + 'px';

    pointer.style.transform="translate(-50%,-50%)";
    pointer.style.left = x;
    pointer.style.top = y;

});