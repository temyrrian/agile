import { Component } from '@angular/core';
import {EditionType} from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Text Editor';
  editableType: EditionType;

  setEditionType(editableType: EditionType) {
    this.editableType = { ...editableType };
  }
}
