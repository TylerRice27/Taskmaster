import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {


    constructor(listData) {
        this.id = listData.id || generateId()
        this.name = listData.name
        this.complete = listData.complete
        // this.task = listData.task


    }




    get Template() {
        return `
 <div class="col-md-3">

        <div class="card m-3 shadow">
          <div>
            <h1 class="bg-success text-center">Grocies</h1>
          </div>

           <div class=" mt-3 ms-2 justify-content-around">
           ${this.Tasks}
          </div>
`

    }

    get Tasks() {
        let task = ProxyState.tasks.filter(it => it.listId == this.id)
        let template = ``
        tasks.forEach(it => template += it.Template)
        return template
    }
}