/** The driven port of the application for loading and showing ads. */
export abstract class AdDisplayService {
  abstract loadAd(element: HTMLElement, adSlot: string, format: string): Promise<void>;
}
