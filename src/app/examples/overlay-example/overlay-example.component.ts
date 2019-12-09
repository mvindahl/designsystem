import { Component } from '@angular/core';

import { OverlayService } from '@kirbydesign/designsystem/components/overlay/overlay.service';
import { CardExampleComponent } from '../card-example/card-example.component';

@Component({
  selector: 'kirby-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss'],
})
export class OverlayExampleComponent {
  constructor(private overlayService: OverlayService) {}

  openOverlay() {
    this.overlayService.showOverlay({ component: CardExampleComponent, data: null });
  }
}
