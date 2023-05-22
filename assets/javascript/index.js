const $d = document,
    $bntMenu = $d.querySelector(".hamburguer"),
    $menu = $d.querySelector(".menu"),
    $slider = $d.querySelector(".video-container")

const toggleMenu = () => {
    $menu.classList.toggle("translateX")
    if ($bntMenu.ariaExpanded === "false") {
        $bntMenu.ariaExpanded = "true"
    } else {
        $bntMenu.ariaExpanded = "false"
    }
}

// let scrollAmount = 0;

// setInterval(() => {

//     scrollAmount += 500; // Ajusta esta cantidad según sea necesario
//     $slider.scroll({
//         left: 500,
//         behavior: "smooth"
//     });
// }, 5000);

// let $slides = $slider.children;
// console.log($slides);
// let currentIndex = 0;

// setInterval(() => {
//     let totalWidth = 0;
//     for (let i = 0; i <= currentIndex; i++) {
//         totalWidth += $slides[i].offsetWidth + 20;
//     }
//     $slider.scroll({
//         left: totalWidth,
//         behavior: "smooth"
//     });
//     currentIndex = (currentIndex + 1) % $slides.length;
// }, 5000);

$bntMenu.addEventListener("click", toggleMenu)

