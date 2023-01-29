import { Component } from '@angular/core';
import { Operators } from '../models/operators';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent {
  public operators = Operators;
  
}
