import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { OverlayComponent } from './overlay.component';
import { ComponentConfiguration } from '../shared/component-configuration';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  showOverlay(component: ComponentConfiguration) {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }
    const componentRef = this.overlayRef.attach(new ComponentPortal(OverlayComponent));
    componentRef.instance.component = component;
  }

  hideOverlay() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
