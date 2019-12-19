import { Component } from '@angular/core';

import { OverlayService } from '@kirbydesign/designsystem/components/overlay/overlay.service';

@Component({
  // tslint:disable-next-line
  selector: 'close-overlay',
  template: `
    <kirby-card [hasPadding]="true">
      <button kirby-button (click)="closeOverlay()">Close overlay</button>
    </kirby-card>
  `,
})
export class CloseOverlayComponent {
  constructor(private overlayService: OverlayService) {}

  closeOverlay() {
    this.overlayService.closeOverlay();
  }
}
