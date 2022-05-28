import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {


    constructor(listData) {
        this.id = listData.id || generateId()
        this.name = listData.name
        this.color = listData.color
        this.complete = listData.complete
        // this.task = listData.task


    }




    get Template() {
        return `
    <div class="col-md-4 shadow list-card">
        
            <h1 class="bg-success text-center">${this.name}</h1>
            <div class=" mt-3 ms-2 justify-content-around">
            ${this.Tasks}
            </div>
            <input type="text" placeholder="add task..." class="m-3  border-none border-bottom-secondary" name="" id="">
            <i class="fs-1 mdi text-success text-end   mdi-plus-box"></i>
       
    </div>
    `

    }

    // get Tasks() {
    //     let task = ProxyState.tasks.filter(it => it.listId == this.id)
    //     let template = ``
    //     task.forEach(it => template += it.Template)
    //     return template
    // }
}