import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class ComponentCore implements OnDestroy {

  /* Destroy subject */
  protected $destroy: Subject<boolean> = new Subject<boolean>();

  /* Loader flag */
  loader = false;

  constructor() {}

  ngOnDestroy() {
    this.destroySubscriptionList();
  }

  protected destroySubscriptionList(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }


}
