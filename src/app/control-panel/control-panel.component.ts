import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Output() editionTypeWasSelected = new EventEmitter<string>();

  onTypeSelected(type: string) {
    this.editionTypeWasSelected.emit(type);
  }
}
