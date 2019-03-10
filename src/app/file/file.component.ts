import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { TextService } from '../text-service/text.service';
import {EditionType} from '../types';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers: [
    { provide: Window, useValue: window }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit, OnChanges {
  text$: Promise<string>;

  @Input() editableType: EditionType;

  @ViewChild('textField') el: ElementRef;

  @HostListener('dblclick')
  onDblClick() {
    console.log(this.editableType);

    const textContent = this.el.nativeElement.innerHTML;
    const startEditingIndex = this.window.getSelection().anchorOffset;
    const endEditingIndex = this.window.getSelection().focusOffset;

     const editedContent = `
     ${textContent.slice(0, startEditingIndex)}
     ${this.editableType.startTag}
     ${textContent.slice(startEditingIndex, endEditingIndex)}
     ${this.editableType.endTag}
     ${textContent.slice(endEditingIndex, textContent.length)}
     `;

    this.textService.saveMockText(editedContent).then(() => {
      this.el.nativeElement.innerHTML = editedContent;
    });

  }

  constructor(private textService: TextService, @Inject(Window) private window: Window) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.editableType);
  }
}
