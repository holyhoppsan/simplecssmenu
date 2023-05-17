const menu = document.getElementById("menu");

const menu_items = document.getElementsByClassName("menu-item");
Array.from(menu_items).forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
})