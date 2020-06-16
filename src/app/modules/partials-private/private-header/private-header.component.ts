import { Component, OnInit, Input } from '@angular/core';

/**
 * Libraries
 */
import { ComponentCore } from '@lib/ComponentCore';

/**
 * API
 */
import { AuthService } from '@api/auth/auth.service';

/**
 * Services
 */
import { StorageService } from '@util/storage/storage.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent extends ComponentCore implements OnInit {

  /* Title value  */
  @Input() title = 'Administrador de usuarios';

  /* Complete name */
  completeName = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {
    super();
  }

  ngOnInit() {
    this.completeName = `${this.storageService.getName()} ${this.storageService.getLastname()}`;
  }

  /**
   * Close session
   */
  closeSession(): void {
    this.authService.logout();
  }

}
