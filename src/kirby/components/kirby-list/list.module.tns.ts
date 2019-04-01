import { NgModule } from '@angular/core';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';

import {
  commonImports,
  commentDeclarations,
  commonExports,
} from '~/kirby/components/kirby-list/list.common';

@NgModule({
  imports: [...commonImports, NativeScriptUIListViewModule],
  declarations: [...commentDeclarations],
  exports: [...commonExports],
})
export class ListModule {}