import { AdvertisingService } from './service';

declare global {
	interface Window {
		adsbygoogle: any[];
	}
}

export class AdvertisingServiceGoogleAdsense extends AdvertisingService {
	private clientId: string;

	constructor(clientId: string) {
		super();
		this.clientId = clientId;
		window.adsbygoogle = window.adsbygoogle || [];
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.clientId}`;
		script.crossOrigin = 'anonymous';
		document.head.appendChild(script);
	}

	async loadAd(element: HTMLElement, adSlot: string, format: string = 'auto'): Promise<void> {
		window.adsbygoogle.push({
			element,
			adUnitPath: adSlot,
			format: format
		});
		return new Promise((resolve) => {
			element.addEventListener('load', () => resolve());
		});
	}
}
