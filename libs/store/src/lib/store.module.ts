import { Injectable, NgModule } from '@angular/core';
import { Action, NgxsModule, State } from "@ngxs/store";
import { StoreComponent } from './store.component';

class TestAction {
  public static type = 'test'
}

@State({ name: 'testState'})
@Injectable()
class TestState {
  @Action(TestAction)
  public callAction(param: string) {

  }
}

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    NgxsModule.forRoot([TestState]),
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
