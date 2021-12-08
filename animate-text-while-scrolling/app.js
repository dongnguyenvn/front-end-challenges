let scroll = window.scrollY / 1.5;
const updateScroll = () => {
    scroll = window.scrollY / 1.5;
    document.getElementById("ticker").style.transform = "translateX(-"+scroll+"px)";
}
setInterval(updateScroll, 1);