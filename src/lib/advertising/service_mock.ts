import { AdvertisingService } from './service';

export class AdvertisingServiceMock extends AdvertisingService {
	override async loadAd(element: HTMLElement, adSlot: string, format: string): Promise<void> {
		element.classList.add('block', 'bg-neutral-500', 'rounded-lg', 'overflow-hidden');
		element.innerHTML = `
      <div class="flex items-center justify-center h-full">
        <span>Ad Placeholder ${element.clientWidth}x${element.clientHeight}</span>
      </div>
    `;
		return Promise.resolve();
	}
}
