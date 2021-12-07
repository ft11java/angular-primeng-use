import { DatabaseFile } from "./databaseFile";

export class News{
    id:String|undefined;
    newsTitle:String|undefined;
    newsBody:String|undefined;
    deploy:boolean|undefined;
    newsRegistrationDate:Date|undefined;
    databaseFile:DatabaseFile|undefined;

}