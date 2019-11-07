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

  settings2 = {
    barCheckedBgColor : "#f45905",
    sliderCheckedColor : "#c70d3a",
    barUncheckedBgColor : "#ded5d5",
    sliderUncheckedColor : "#bdbdbd",
    barDisabledBgColor: "red"
  }

  settings3 = {
    barCheckedBgColor : "#bc4873",
    sliderCheckedColor : "#472b62",
    barUncheckedBgColor : "#ded5d5",
    sliderUncheckedColor : "#bdbdbd",
    barDisabledBgColor: "red"
  }

  settings4 = {
    barCheckedBgColor : "#00918e",
    sliderCheckedColor : "#ffdc34",
    barUncheckedBgColor : "#ded5d5",
    sliderUncheckedColor : "#bdbdbd",
    barDisabledBgColor: "red"
  }
}
