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


// Set different friend image 

let all_friends_img = document.querySelectorAll(".contacts .list_friends .profile_img");
let i = 0;

if(!window.location.origin.includes("127.0.0.1"))
{
    let api_url = `https://api.generated.photos/api/v1/faces?api_key=BecfcPu_U9cI9swhnd1iSw&per_page=${all_friends_img.length}`;
    fetch(api_url)
        .then(d => d.json())
        .then(res => {
            all_friends_img.forEach(img =>{
                img.src = res.faces[i].urls[4][512];
                i++;
                if(i == res.faces.length)
                    i = 0;
            })
        });
}