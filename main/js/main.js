// 드래그로 영화 목록을 넘기기 위한 코드
const movieContainer = document.getElementById("movie-container");

let isMouseDown = false;
let startX;
let scrollLeft;

movieContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - movieContainer.offsetLeft;
    scrollLeft = movieContainer.scrollLeft;
    movieContainer.style.cursor = "grabbing";  // 마우스 드래그 상태
});

movieContainer.addEventListener("mouseleave", () => {
    isMouseDown = false;
    movieContainer.style.cursor = "grab";  // 마우스 떠날 때 상태
});

movieContainer.addEventListener("mouseup", () => {
    isMouseDown = false;
    movieContainer.style.cursor = "grab";  // 마우스를 놓을 때 상태
});

movieContainer.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;  // 드래그 상태에서만 동작
    e.preventDefault();
    const x = e.pageX - movieContainer.offsetLeft;
    const walk = (x - startX) * 2;  // 속도 조절
    movieContainer.scrollLeft = scrollLeft - walk;
});