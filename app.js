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


