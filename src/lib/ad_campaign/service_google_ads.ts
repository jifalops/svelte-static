import { AdCampaignService } from './service';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Google Ads (AdWords) adapter for the ad campaign service.
 */
export class AdCampaignServiceGoogleAds extends AdCampaignService {
  private trackingId: string;

  constructor(trackingId: string) {
    super();
    this.trackingId = trackingId;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    this.gtag('js', new Date());
    this.gtag('config', trackingId);
  }

  private gtag(..._: any[]): void {
    window.dataLayer.push(arguments);
  }

  trackClick(targetId: string): void {
    this.gtag('event', 'click', { targetId, send_to: this.trackingId });
  }
  trackConversion(label: string, value?: number): void {
    this.gtag('event', 'conversion', { label, value, send_to: this.trackingId });
  }
}
