const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
const image = document.querySelector(".image")
const imgs = document.querySelector("img");

function first(){
    imgs.src="/image/html.jpg"
}
function second(){
    imgs.src="/image/css.jpg"
}
function third(){
    imgs.src="/image/js.png"
}
function fourth(){
    imgs.src="/image/react.jpg"
}

tabs.addEventListener("click",(event)=>{
    const id = event.target.dataset.id
    

    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
        articles.forEach((articles)=>{
            articles.classList.remove("live");
        });
        const element = document.getElementById(id)
        element.classList.add("live");
    }
})
