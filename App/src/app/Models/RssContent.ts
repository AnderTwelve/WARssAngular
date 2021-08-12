export class RssContent { 
    title: string; 
    description: string; 
    entries:any; 

    constructor(title:string, description:string, contents:any) { 
            this.title = title; 
            this.description = description; 
            this.entries = contents; 
        }
}