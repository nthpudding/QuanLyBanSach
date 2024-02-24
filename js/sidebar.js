let arrow = document.querySelectorAll(".arrow");
console.log(arrow);
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
        console.log(arrowParent);
    });
}

let footer = document.querySelector(".footer")
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let sidebarBtn = document.querySelector(".bx-menu");
let cardblock = document.querySelectorAll(".card-block");
let chartblock = document.querySelectorAll(".chart-block1");  
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    // footer.classList.toggle("footer_close");
    // content.classList.toggle("closeContent");
    // for (var i = 0; i < cardblock.length; i++) {
    //     cardblock[i].classList.toggle("boxsize");
    //     chartblock[i].classList.toggle("chart-block2");
    // }
});


let allMenu = document.querySelectorAll(".menu");
// let dots = document.querySelectorAll(".dots");
// let menulink = document.querySelectorAll(".menulink");
// console.log(dots);
// console.log(menulink);
// for (var i = 0; i < dots.length; i++){
//     dots[i].addEventListener("click", () => {
//         for (var j = 0; j < menulink.length; j++) {
//             menulink[j].classList.toggle("showMenulink");
//             console.log(menulink[j]);
//         }
//     });
//}

allMenu.forEach(item=> {
    let dots =item.querySelector(".dots");
    let menulink = item.querySelector(".menulink");
    let unshow = item.querySelector(".unshowMenulink")
    dots.addEventListener("click", function (){
        if(menulink.classList.contains("unshowMenulink")==true){
            menulink.classList.remove("unshowMenulink");
            menulink.classList.toggle("showMenulink");
        }
        else if(menulink.classList.contains("unshowMenulink")==false && menulink.classList.contains("showMenulink")==true){
            menulink.classList.remove("showMenulink");
            menulink.classList.toggle("unshowMenulink");
        }
    })
})


