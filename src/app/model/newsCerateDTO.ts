import { DatabaseFileCreateDTO } from "./databaseFileCreateDTO";

export class NewsCreateDTO{
    newsTitle:String|undefined;
    newsBody:String|undefined;
    deploy:boolean|undefined;
    data!:File;

}