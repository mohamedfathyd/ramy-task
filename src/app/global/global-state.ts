
import { DatePipe } from '@angular/common';
import {Injectable} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ar } from 'src/lang/ar';
import { en } from 'src/lang/en';

@Injectable({
  providedIn: 'root',
})
export class GlobalState {
  public lang!: string;
  constructor() {
    if (!localStorage.getItem("lang")) localStorage.setItem("lang", "en");
    let default_lang = localStorage.getItem('lang');
		if (default_lang === 'en' || default_lang === 'fr')
			document.documentElement.dir = 'ltr';
		else
			document.documentElement.dir = 'rtl';

		this.lang = default_lang;
    
  }
  public currentLanguage = localStorage.getItem("lang") || "ar";
  public language = this.currentLanguage == "ar" ? ar : en;
 public static appLoading = false;
}