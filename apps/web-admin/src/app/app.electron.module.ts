import { NgModule } from '@angular/core';
import { XeElectronCoreModule } from '@xe/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, XeElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
