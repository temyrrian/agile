import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Text Editor';
  editableType: string;

  setEditionType(editableType: string) {
    this.editableType = editableType;
  }
}
