import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Components } from '@ionic/core';

import { OverlayComponent } from './overlay.component';
import { ComponentConfiguration } from '../shared/component-configuration';

@Injectable()
export class OverlayService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  showOverlay(component: ComponentConfiguration, options?: Partial<Components.IonBackdrop>) {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }
    const componentRef = this.overlayRef.attach(new ComponentPortal(OverlayComponent));
    componentRef.instance.component = component;
    if (options) {
      const { stopPropagation, tappable, visible } = options;
      componentRef.instance.options = {
        stopPropagation,
        tappable,
        visible,
      };
    }
  }

  closeOverlay() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
