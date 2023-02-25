import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operator-page',
  templateUrl: './operator-page.component.html',
  styleUrls: ['./operator-page.component.scss']
})
export class OperatorPageComponent implements OnInit {

  operatorName!: string;
  
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.router.params.subscribe( (params) => {

    //   console.log(params['operator']);
    //   this.operatorName = params['operator'].replaceAll('-', ' ');
    // });
  }


}
