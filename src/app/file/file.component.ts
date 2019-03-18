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
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

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
  text$: Promise<SafeHtml>;

  @Input() editableType: EditionType;

  @ViewChild('textField') el: ElementRef;

  @HostListener('dblclick', ['$event.target'])
  onDblClick(element) {
    element.classList.toggle(this.editableType);
  }

  constructor(private textService: TextService, @Inject(Window) private window: Window, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText().then((text) => {
      return this.sanitizer.bypassSecurityTrustHtml( text.split(' ').map((word) => {
        return '<span class="bold">' +  word + '</span>';
      }).join(' '));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.editableType);
  }
}
