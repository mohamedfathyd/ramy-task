import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {

	public lang!: string;

	constructor(
		private translate: TranslateService, private router: Router,
) {
	}

	setDefault(lang: 'ar' | 'en' | 'fr') {
		window.localStorage.setItem('lang', 'ar');
		let default_lang = 'ar'
		this.translate.setDefaultLang('ar');
        this.translate.use('ar');

		if (default_lang === 'en' || default_lang === 'fr')
			document.documentElement.dir = 'ltr';
		else
			document.documentElement.dir = 'rtl';

		this.lang = default_lang;
	}

	toAr() {
		window.localStorage.setItem('lang', 'ar');
		this.lang = 'ar';
		this.router.navigate(['/tabs/home'], {replaceUrl: true})
	}

	toEng() {
		window.localStorage.setItem('lang', 'en');
		this.lang = 'en';
		this.router.navigate(['/tabs/home'], {replaceUrl: true})
	}
	toFrench() {
		window.localStorage.setItem('lang', 'fr');
		this.lang = 'fr';
		this.router.navigate(['/tabs/home']).then(() => {
			//window.location.reload();
		});
	}

	getCurrentLang() {
		return this.translate.defaultLang;
	}

	async getValue(json_key: string | string[], params?: Object) {
		try {
			let value = await this.translate.get(json_key, params).toPromise();
			return value;
		}
		catch (err) {
			return ''
		}

	}

}

