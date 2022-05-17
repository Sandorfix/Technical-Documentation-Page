const at_Px = 150
const backToTop = document.querySelector(".back-to-top")

const scrollCtn = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollCtn().scrollTop > at_Px) {
    backToTop.classList.remove("hidden")
    } else {
    backToTop.classList.add("hidden")
}
})

const up = () => {
    document.body.scrollIntoView();
};

backToTop.addEventListener("click", up)