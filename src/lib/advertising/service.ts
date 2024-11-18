export abstract class AdvertisingService {
	abstract loadAd(element: HTMLElement, adSlot: string, format: string): Promise<void>;
}
