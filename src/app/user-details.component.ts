import { Component, Input } from '@angular/core';

import  { User } from './user';

@Component({
    selector: 'user-detail',
    templateUrl: './user-details.component.html'
})

export class UserDetailsComponent {
    @Input() user: User;
}
