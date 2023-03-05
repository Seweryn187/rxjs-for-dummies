import { Component, Input } from '@angular/core';
import { IPerson } from '../../data/table-data';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent {

  @Input() tableData!: IPerson[];

}
