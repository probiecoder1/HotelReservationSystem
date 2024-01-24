import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<WarnComponent>) {}

  ngOnInit(): void {}

  closePopup(): void {
    this.dialogRef.close();
  }


}
