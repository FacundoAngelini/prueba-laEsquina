import { Component, viewChild,ElementRef, output,afterNextRender } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login-modal',
  styleUrl: './login-modal.css',
  templateUrl: './login-modal.html',
})
export class LoginModel {

  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('modalRef');
  public readonly userConfirmed = output<boolean>();

  constructor(){
    afterNextRender(()=> {
      this.dialogRef().nativeElement.showModal();
    });
  }

  close (confirmed : boolean){
    this.userConfirmed.emit(confirmed);
    this.dialogRef().nativeElement.close();
  }
}

