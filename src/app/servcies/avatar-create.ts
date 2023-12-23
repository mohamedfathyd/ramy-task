import { Injectable } from "@angular/core";

@Injectable()
export class AvatarCreate{
    createAvatar(name:string){
        let initials;
        let nameSplit = String(name).toUpperCase().split(' ')
        if (nameSplit.length > 1) initials = nameSplit[0].charAt(0) +" "+ nameSplit[1].charAt(0);
        else  initials = nameSplit[0].charAt(0);
        return initials;
    }
}