import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {EditionType} from '../types';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Output() editionTypeWasSelected = new EventEmitter<EditionType>();

  onTypeSelected(type: any) {
    this.editionTypeWasSelected.emit({startTag: `<${type}>`, endTag: `</${type}>`});
  }
}
