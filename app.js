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
let all_room_img = document.querySelectorAll(".room_card .room_card_body .room:not(:first-child) img");
let i = 0;
if(!window.location.origin.includes("127.0.0.1"))
{
    let api_url = `https://api.generated.photos/api/v1/faces?api_key=BecfcPu_U9cI9swhnd1iSw&per_page=${all_friends_img.length}`;
    fetch(api_url)
        .then(d => d.json())
        .then(res => {
            if(res)
            {
                all_room_img.forEach(img =>
                {
                    img.src = res.faces[i].urls[4][512];
                    i++;
                    if(i == res.faces.length)
                        i = 0;
                });
                all_friends_img.forEach(img =>{
                    img.src = res.faces[i].urls[4][512];
                    i++;
                    if(i == res.faces.length)
                        i = 0;
                });
            }
        });
}

// New post focus display new_post field as a modal
let exit_modal_mode = document.querySelector(".card_head .account_options_links");
exit_modal_mode.addEventListener("click", ()=>{
    document.body.classList.remove("new_post_focused");
    let modal_bg = document.querySelector(".modal_bg");
    document.body.removeChild(modal_bg);
});
let new_post_field = document.querySelector(".card.new_post_card #post.new_post");
new_post_field.addEventListener("focus", () =>
{
    //<div class="modal_bg"></div>
    let modal_bg = document.createElement("DIV");
    modal_bg.classList.add("modal_bg")

    modal_bg.addEventListener("click", ()=>{
        document.body.classList.remove("new_post_focused");
        document.body.removeChild(modal_bg);
    })

    document.body.classList.add("new_post_focused");
    document.body.prepend(modal_bg)
}); 