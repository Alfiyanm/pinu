import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Participant } from 'src/app/shared/participant.model';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('valueInput') valueInputRef: ElementRef;
  @Output() participantAdded = new EventEmitter<Participant>();

  constructor() { }

  ngOnInit() {
  }

  onAddData() {
    const partName = this.nameInputRef.nativeElement.value;
    const partValue = this.valueInputRef.nativeElement.value;
    const newParticipant = new Participant(partName, partValue);
    this.participantAdded.emit(newParticipant);
  }

}
