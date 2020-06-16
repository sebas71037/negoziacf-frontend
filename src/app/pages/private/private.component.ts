import { Component, OnInit, AfterViewChecked, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ComponentCore } from '@lib/ComponentCore';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent extends ComponentCore {

  constructor() {
    super();
  }

}
