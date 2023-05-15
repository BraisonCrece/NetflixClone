const $d = document,
    $bntMenu = $d.querySelector(".hamburguer"),
    $menu = $d.querySelector(".menu")

const toggleMenu = () => {
    $menu.classList.toggle("translateX")
    if ($bntMenu.ariaExpanded === "false") {
        $bntMenu.ariaExpanded = "true"
    } else {
        $bntMenu.ariaExpanded = "false"
    }
}

$bntMenu.addEventListener("click", toggleMenu)
