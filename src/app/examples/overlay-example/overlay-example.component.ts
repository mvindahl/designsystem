import { Component } from '@angular/core';

import { OverlayService } from '@kirbydesign/designsystem/components/overlay/overlay.service';
import { CloseOverlayComponent } from './components/close-overlay';

@Component({
  selector: 'kirby-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss'],
})
export class OverlayExampleComponent {
  static readonly overlayConfig = `constructor(private overlayService: OverlayService) {}

  openOverlay() {
    this.overlayService.showOverlay(
      { component: SomeComponent, data: { someData: true } },
      { stopPropagation: false, tappable: false, visible: false }
    );
  }`;

  constructor(private overlayService: OverlayService) {}

  openOverlay() {
    this.overlayService.showOverlay({ component: CloseOverlayComponent });
  }
}
