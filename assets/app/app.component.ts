import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        .config {
            text-align: right;
        }
    `]
})
export class AppComponent {
    message = {
        content: 'Hello messaging app!',
        author: 'Vineeta'
    }
}