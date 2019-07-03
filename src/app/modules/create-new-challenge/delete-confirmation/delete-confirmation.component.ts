import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../../workspace/solution-dialog/solution-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChallengeService } from '../../../services/challenge.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private challengeService: ChallengeService) { }

  id = "";

  ngOnInit() {
  }

  delete() {
    if (this.data['id'] == this.id) {
      this.challengeService.delete(this.id);
      this.dialogRef.close();
    }
  }

}
