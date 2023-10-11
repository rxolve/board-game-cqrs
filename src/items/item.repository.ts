import { Injectable } from "@nestjs/common";
import { ItemModel } from "./item.model";

@Injectable()
export class ItemRepository{
    async getById(id:string){
        const item:IItem = {
            id: id,
            name: "Item",
            description: "Item description"
        }
        return new ItemModel(item);
    }
}