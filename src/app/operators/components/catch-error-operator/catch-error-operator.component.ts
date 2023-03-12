import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { catchError, take } from 'rxjs';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-catch-error-operator',
  templateUrl: './catch-error-operator.component.html',
  styleUrls: ['./catch-error-operator.component.scss']
})
export class CatchErrorOperatorComponent {

  constructor(private mockRequestService: MockRequestsService, private notification: NzNotificationService) {}

  codeExample = `this.mockRequestService.getError().pipe(
      catchError((err, caught) => {
        this.createErrorNotification(err);
        return caught;
      }),
      take(5)
    ).subscribe();`;
  
  public sendRequestToGetError() {
    this.mockRequestService.getError().pipe(
      catchError((err, caught) => {
        this.createErrorNotification(err);
        return caught;
      }),
      take(5)
    ).subscribe();
  }

  public createErrorNotification(err: string): void {
    this.notification
      .blank(
        'Server request error',
        err
      );
  }


}
