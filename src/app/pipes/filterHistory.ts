import { GlobalVariablesService } from '../servcies/global-variables.service';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterHistory'
})
export class FilterHistory implements PipeTransform {
  constructor(private globals:GlobalVariablesService){}
  
  transform(requests: any[], walletId: string, senderOrReceiver: string) {
    if (senderOrReceiver && requests) {
      return requests.filter((req) => this.globals.formatMobileNumber(req[`${senderOrReceiver}_identifier`]) == walletId)
    }
    return requests;
  }



}

