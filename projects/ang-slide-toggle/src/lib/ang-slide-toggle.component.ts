import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang-slide-toggle',
  templateUrl: 'ang-slide-toggle.component.html',
  styleUrls: ['ang-slide-toggle.component.scss']
})
export class AngSlideToggleComponent implements OnInit {
  @Input() barCheckedBgColor;
  @Input() sliderCheckedColor;
  @Input() barUncheckedBgColor;
  @Input() sliderUncheckedColor;
  @Input() barDisabledBgColor;
  @Input() sliderDisabledColor;
  @Input() checked: boolean = false;
  @Input() disabled: boolean;
  @Input() sliderSettings = {
    barCheckedBgColor: '#beebe9',
    sliderCheckedColor: '#3fc5f0',
    barUncheckedBgColor: '#ded5d5',
    sliderUncheckedColor: '#bdbdbd'
  }

  constructor() { }

  ngOnInit() {}

  changeCheckStatus(){
    this.checked = !this.checked;
  }

}
