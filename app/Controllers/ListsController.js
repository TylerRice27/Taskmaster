import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";





function _drawList() {

    let list = ProxyState.lists
    let template = ""
    list.forEach(l => {
        template += l.Template
    })
    document.getElementById("list").innerHTML = template

}




export class ListsController {
    constructor() {
        console.log("list loaded")
        _drawList()
    }

    createList() {
        window.event.preventDefault()
        let form = window.event.target
        console.log("form submitted", form);
        let listData = {
            name: form.name.value,
            complete: false
        }
        console.log("New list", listData);
        listsService.createList(listData)
    }

}