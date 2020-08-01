import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  title = 'Joseph Afriyie Attakorah';

  constructor() { }

  ngOnInit(): void {
  }

}
