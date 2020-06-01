import { Component } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.css']
})
export class MembersTableComponent {
  members: MemberEntity[];
  team: String = 'Search a team';

  constructor(private membersApi: MembersApiService) { }

  loadMembers(team: string) {
    this.team = team;
    this.membersApi.getAllMembers(team)
      .subscribe(
        (ms) => this.members = ms,
        (error) => console.log(error)
      );
  }

}
