import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService {

    createList(listData) {
        ProxyState.lists = [...ProxyState.lists, new List(listData)]

    }

}

export const listsService = new ListsService()