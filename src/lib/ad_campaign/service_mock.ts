import { log } from '$lib';

import { AdCampaignService } from './service';

/**
 * Mock adapter for the ad campaign service that logs to the console.
 */
export class AdCampaignServiceMock extends AdCampaignService {
  trackClick(targetId: string): void {
    log.debug('AdCampaign:', 'click', targetId);
  }
  trackConversion(label: string, value?: number): void {
    log.debug('AdCampaign:', 'conversion', label, value);
  }
}
