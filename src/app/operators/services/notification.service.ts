import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification: NzNotificationService) { }

  public createErrorNotification(err: string): void {
    this.notification
      .blank(
        'Server request error',
        err
      );
  }

  public createSuccessNotification(message: string): void {
    this.notification
      .blank(
        'Success',
        message
      );
  }
}
