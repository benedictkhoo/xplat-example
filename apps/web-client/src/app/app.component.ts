import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@xe/web';

@Component({
  selector: 'xe-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
