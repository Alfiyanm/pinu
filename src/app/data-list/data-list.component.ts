import { Component, OnInit } from '@angular/core';

import { Participant } from '../shared/participant.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  participants: Participant[] = [
    new Participant('Budi', 90),
    new Participant('Eko', 85)
  ];

  constructor() { }

  ngOnInit() {
  }

  onParticipantAdded(participant: Participant) {
    this.participants.push(participant);
  }

}
