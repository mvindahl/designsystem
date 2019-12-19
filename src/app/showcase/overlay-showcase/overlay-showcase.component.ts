import { Component } from '@angular/core';

import { ShowcaseProperty } from '~/app/shared/showcase-properties/showcase-property';
import { OverlayExampleComponent } from '~/app/examples/overlay-example/overlay-example.component';

@Component({
  selector: 'kirby-overlay-showcase',
  templateUrl: './overlay-showcase.component.html',
  preserveWhitespaces: true,
})
export class OverlayShowcaseComponent {
  overlayConfig = OverlayExampleComponent.overlayConfig;

  properties: ShowcaseProperty[] = [
    {
      name: 'component',
      description: 'Shows the loading spinner.',
      inputValues: ['true', 'false'],
    },
    {
      name: 'options',
      description: 'Add options to the backdrop',
      inputValues: ['{ stopPropagation: boolean, tappable: boolean, visible: boolean }'],
      defaultValue: '{ stopPropagation: true, tappable: true, visible: true }',
    },
  ];
}
