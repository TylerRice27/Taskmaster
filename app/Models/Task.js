

export class Tasks {

    constructor(tasksData) {

        this.id = tasksData.id || generateId()
        this.name = tasksData.name



    }


    get Template {
        return `
         <input id="btn-check" type="checkbox">
            <label for="btn-check">Bread</label>
            <i class="mdi mdi-delete m-5"></i>




`

    }

}