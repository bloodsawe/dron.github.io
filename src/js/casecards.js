document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".casecards").length > 0) {
        let dropDown = Array.from(document.querySelectorAll(".case-filter__arrow"));
        console.log('dropDown: ', dropDown);
        
        dropDown.forEach((elem,index) => {
            elem.addEventListener("click", (e) => {
                let list = document.querySelectorAll(".case-filter-block__list-insert")[index];
                list.classList.toggle("active");
            })
        })    
    }
})