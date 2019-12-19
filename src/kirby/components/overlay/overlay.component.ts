import { Component, Input } from '@angular/core';
import { Components } from '@ionic/core';

import { ComponentConfiguration } from '../shared/component-configuration';

@Component({
  selector: 'kirby-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  @Input() component: ComponentConfiguration;
  @Input() options: Components.IonBackdrop;
}
