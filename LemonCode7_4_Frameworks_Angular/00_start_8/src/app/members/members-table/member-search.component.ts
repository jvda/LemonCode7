import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent {
  //searchParams: FormGroup;
  team: string = 'lemoncode';

  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  //constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.searchParams = this.fb.group({
  //     team: 'lemoncode'
  //   })
  // }

  handleSearch(teamToSearch: string) {
    this.searchChange.emit(teamToSearch);
  }
}
