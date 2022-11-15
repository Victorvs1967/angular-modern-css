import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass']
})
export class BoxComponent implements OnInit {

  @Input() color: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
