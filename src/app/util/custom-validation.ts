import { FormControl } from "@angular/forms";

export function validateInput(c: FormControl) {
    let User_Pattern = new RegExp("^((\\+2189)|(2189)|(002189)|(09)|(9))([1|2|4|5])([0-9]{7}$)"); // Regular Expression 1
    let Sub_Merchant_pattern = new RegExp("^[0-9]{8}$");
    let Sub_Bank_Account_pattern = new RegExp("^[0-9]{13}$");
    return (User_Pattern.test(c.value) ||
     Sub_Merchant_pattern.test(c.value))||
     Sub_Bank_Account_pattern.test(c.value) ? null : {
      validateInput: {
        valid: false
      }
    };
  }

export function validateBankAccInput (c:FormControl){
  let bancAccountPattern = new RegExp("^[0-9]{13}$");
  return (bancAccountPattern.test(c.value))? null :{
    validateAccount:{
      valid:false
    }
  };

}
  