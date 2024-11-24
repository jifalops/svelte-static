/** The driven port of the application for reporting events related to ad campaigns. */
export abstract class AdCampaignService {
  abstract trackClick(targetId: string): void;
  abstract trackConversion(label: string, value?: number): void;
}
