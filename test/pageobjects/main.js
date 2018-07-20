import Page from './page';

class MainPage extends Page {

	get searchButton()     { return browser.element('.sb-searchbox__button'); }
	get errorBanner()     { return browser.element('[id="destination__error"]'); }

	open() {
		super.open('/');
	}

	search() {
		this.searchButton.click();
	}

}

export default new MainPage();