import { Component, Input, OnInit } from '@angular/core';
import { MemberEntity } from '../models/member.model';

@Component({
  selector: 'app-member-row',
  templateUrl: './member-row.component.html',
  styleUrls: ['./member-row.component.css']
})
export class MemberRowComponent implements OnInit {
  
  @Input() member: MemberEntity;
  backgroundColor: string = ''

  colors = [
    '#ff0000' ,
    '#00ff00',
    '#0000ff',
    '#00FFFF',
    '#FFA500',
    '#FFFF00',
    '#EE82EE' 
  ];

  ngOnInit(): void {
    this.backgroundColor = this.ramdomColor();
  }
 
  ramdomColor = () => this.colors[Math.floor(Math.random() * this.colors.length)];

}
