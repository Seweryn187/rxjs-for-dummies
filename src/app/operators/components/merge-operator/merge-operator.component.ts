import { Component } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { NotificationService } from '@operators/services/notification.service';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.scss']
})
export class MergeOperatorComponent {

  loginSubject$ = new Subject<string>();
  logoutSubject$ = new Subject<string>();

  login$: Observable<string> = this.loginSubject$.asObservable();
  logout$: Observable<string> = this.logoutSubject$.asObservable();
  loginOrLogout$: Observable<string>;

  destroy$: Subject<void> = new Subject()

  codeExample = `this.loginOrLogout$ = merge(this.login$, this.logout$);
  this.loginOrLogout$.subscribe( (message) => this.notification.createSuccessNotification(message));`;


  constructor(private mockRequestService: MockRequestsService, private notification: NotificationService) {
    this.loginOrLogout$ = merge(this.login$, this.logout$);
  }

  ngOnInit(): void {
    this.loginOrLogout$.subscribe( (message) => this.notification.createSuccessNotification(message));
  }

  login() {
    this.loginSubject$.next('You logged in successfully');
  }

  logout() {
    this.logoutSubject$.next('You logged out successfully');
  }
  
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
  
}
