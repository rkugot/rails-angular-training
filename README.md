# README

This Rails project using Webpacker with Angular

## Installation

Clone the git repo
```
git clone https://github.com/rkugot/rails-angular-training.git
cd rails-angular-training
```
Install dependencies
```
bundle install
yarn install
```
Setup db
```
bundle exec rake db:create db:migrate
```
Start rails and webpack servers using [Foreman](https://github.com/ddollar/foreman)
```
foreman start
```

## Tips

### Using a separate file for html

Require this file to component using `template` instead of `templateUrl`:
```js
import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: require('./app.component.html'),
})
export class AppComponent {}
```
### Using a separate file for css

Require this file to component using `styles` instead of `styleUrls` and serve it as a string:
```js
import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  styles: [require('./app.component.css').toString()],
})
export class AppComponent {}
```

### Using images from Angular assets folder

Add `['app/assets']` to `resolved_paths` in `webpacker.yml` and you can serve images in component template this way:
```html
<img class="logo" src="assets/images/logo.png" >
```