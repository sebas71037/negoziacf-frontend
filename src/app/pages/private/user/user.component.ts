import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';

/**
 * Modules
 */
import { NotificationsService } from 'angular2-notifications';

/**
 * Libraries
 */
import { PageCore } from '@lib/PageCore';

/**
 * Interfaces
 */
import { ISearchFilter } from '@interface/ISearchFilter';
import { IPagination } from '@interface/IPagination';

/**
 * API
 */
import { UserService } from '@api/user/user.service';

/**
 * Models
 */
import { User } from '@model/User';
import { PhoneType } from '@model/PhoneType';

/**
 * Components
 */
import { ConfirmModalComponent } from '@module/custom-modal/confirm-modal/confirm-modal.component';
import { UserManagerModalComponent } from '@module/partials-user/user-manager-modal/user-manager-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends PageCore implements OnInit {

  searchFilter: ISearchFilter = { search: '', field: 'name', sort: 'desc', sortField: 'created' };

  pagination: IPagination = {
    page: 1,
    limit: 10,
    total: 0,
    pageSizeOptions: [5, 10, 20],
    hidePageSize: true
  };

  recordList: User[] = [];
  phoneTypeList: PhoneType[] = [];


  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private notificationsService: NotificationsService
  ) {
    super();
  }

  ngOnInit() {
    this.phoneTypeList = this.activatedRoute.snapshot.data.phoneTypeList || [];
    this.paginateRecordList();
  }

  /**
   * Paginate `User` record list from API
   */
  private async paginateRecordList() {
    try {
      if (this.loader) {
        return;
      }
      this.loader = true;
      const response = await this.userService.getPagination(this.searchFilter, this.pagination);
      this.pagination.total = response.data.count;
      this.recordList = response.data.userList;
      this.loader = false;
    } catch (error) {
      this.loader = false;
      console.warn('Error@UserComponent@paginateRecordList:', error);
    }
  }

  /**
   * Call event of pagination controls
   * @param: Event object
   */
  pageChange(event) {
    this.recordList = [];
    this.pagination.page = event.pageIndex ? event.pageIndex + 1 : event;
    this.paginateRecordList();
  }

  openManage(user: User) {
    const bsModalRef = this.modalService.show(UserManagerModalComponent, {
      class: 'modal-lg',
      backdrop: 'static',
      keyboard: false,
      initialState: {
        user,
        phoneTypeList: this.phoneTypeList
      }
    });

    const subscription = bsModalRef.content.responseEvent.subscribe((response) => {
      console.log(response);
      if (response) {
        this.paginateRecordList();
      }
      subscription.unsubscribe();
    });
  }

  openDelete(user: User) {
    const bsModalRef = this.modalService.show(ConfirmModalComponent, {
      class: '',
      backdrop: 'static',
      keyboard: false,
      initialState: {
        title: 'Eliminar usuario',
        description: '¿Estás seguro que deseas eliminar este usuario?',
        acceptText: 'Eliminar',
        acceptColor: 'danger',
        data: user
      }
    });

    const subscription = bsModalRef.content.responseEvent.subscribe((response) => {
      if (response) {
        this.delete(response);
      }
      subscription.unsubscribe();
    });
  }

  /**
   * Delete `User` record
   * @param user: `User` record
   */
  async delete(user: User) {
    try {
      if (this.loader) {
        return;
      }
      this.loader = true;
      await this.userService.delete(user);
      this.notificationsService.success('Felicidades!', 'Usuario eliminado con éxito.');
      this.loader = false;
      this.searchByFilter(this.searchFilter);
    } catch (error) {
      this.loader = false;
      console.warn('Error@UserComponent@delete:', error);
    }
  }

  /**
   * Search records by filter
   * @param searchFilter: Search filter object
   */
  searchByFilter(searchFilter: ISearchFilter): void {
    this.searchFilter = Object.assign(this.searchFilter, searchFilter);
    this.pagination.page = 1;
    this.recordList = [];
    this.paginateRecordList();
  }
}
