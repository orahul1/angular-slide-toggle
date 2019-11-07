import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-slide-toggle';
  settings = {
    barCheckedBgColor : "#beebe9",
    sliderCheckedColor : "#3fc5f0",
    barUncheckedBgColor : "#ded5d5",
    sliderUncheckedColor : "#bdbdbd",
    barDisabledBgColor: "red"
  }
}
