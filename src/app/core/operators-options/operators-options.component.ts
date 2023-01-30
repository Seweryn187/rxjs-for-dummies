import { Component } from '@angular/core';
import { Operators } from '../models/operators';

@Component({
  selector: 'app-operators-options',
  templateUrl: './operators-options.component.html',
  styleUrls: ['./operators-options.component.scss']
})
export class OperatorsOptionsComponent {
  public operators = Operators;

}
