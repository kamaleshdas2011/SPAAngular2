import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <employee-list></employee-list>
              `,
})
export class AppComponent {
    name = 'Angular 2 application';
}
