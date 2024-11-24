import type { AdCampaignService } from './ad_campaign/service';
import type { AdDisplayService } from './ad_display/service';
import type { ReportingService } from './reporting/service';
import type { TelemetryService } from './telemetry/service';

export class App {
  adCampaign: AdCampaignService;
  adDisplay: AdDisplayService;
  reporting: ReportingService;
  telemetry: TelemetryService;

  constructor(
    adCampaign: AdCampaignService,
    adDisplay: AdDisplayService,
    reporting: ReportingService,
    telemetry: TelemetryService
  ) {
    this.adCampaign = adCampaign;
    this.adDisplay = adDisplay;
    this.reporting = reporting;
    this.telemetry = telemetry;
  }
}
