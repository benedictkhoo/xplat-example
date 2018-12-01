import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@xe/core';
import { AppService } from '@xe/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
