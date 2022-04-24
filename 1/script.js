function createDiv(){
    $(document).ready( () => {
        let newDiv = {
            id: "div",
            class: "divclass"
        }
       let $div = $("<div>", newDiv)
       $div.html("New div tag created")
       $("body").append($div)
    })
}