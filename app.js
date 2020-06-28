// foldable event

let see_more = document.querySelector(".foldable_event");

see_more.addEventListener('click', function(e){
    e.preventDefault();
    this.nextElementSibling.classList.toggle("open");
    this.classList.toggle("hide");
});

let onlines = document.querySelectorAll(".online");

onlines.forEach(online =>{
    let span = document.createElement("span");
    span.classList.add("green_dot")
    online.appendChild(span);
})


let left_sidebar_items = document.querySelectorAll(".main_container .main_left_sidebar .account_options__items");

left_sidebar_items.forEach(item =>
{
    item.addEventListener("click", function(e)
    {
        e.preventDefault();
        document.querySelector(".main_container .main_left_sidebar").querySelector(".active").classList.remove("active");
        this.classList.add("active")
    })   
})