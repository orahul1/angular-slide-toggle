# Angular 8+ slider toggle

![alt text](https://i.ibb.co/QpgC7jd/toggles.jpg)

[Demos / Examples](https://stackblitz.com/github/orahul1/angular-slide-toggle)

## Getting Started


### Installation

- Install the package :
    `npm install ang-slider-toggle --save`


### Usage

Import `AngSlideToggleModule` into `NgModule` in `app.module.ts`. `CommonModule` is also required.
```js


import { AngSlideToggleModule } from 'ang-slider-toggle';
import { CommonModule } from '@angular/common';

@NgModule({
  // ...
  imports: [
    AngSlideToggleModule,
    CommonModule
  ]
  // ...
})
```


Add the following component tag in you template

```html
<ang-slider-toggle [sliderSettings]='settings' [checked]="true" [disabled]="false"></ang-slider-toggle>
```

settings

```js
 settings = {
    barCheckedBgColor: '#beebe9',
    sliderCheckedColor: '#3fc5f0',
    barUncheckedBgColor: '#ded5d5',
    sliderUncheckedColor: '#bdbdbd'
  }
```
or

```html
<ang-slider-toggle 
barCheckedBgColor="#beebe9" 
sliderCheckedColor="#3fc5f0"
barUncheckedBgColor="#ded5d5",
sliderUncheckedColor="#bdbdbd"
[checked]="true" 
[disabled]="false">
</ang-slider-toggle>
```

## Todos
click animation on slider

## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## License
free to use on any purpose.
