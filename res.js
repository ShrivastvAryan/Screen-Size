function updateSize(){
    let height=window.innerHeight;
    let width=window.innerWidth;
    document.querySelector(".width").textContent=`${width}px*`;
    document.querySelector(".height").textContent=`${height}px`
    return updateSize;
}

updateSize();

window.addEventListener("resize", updateSize);


