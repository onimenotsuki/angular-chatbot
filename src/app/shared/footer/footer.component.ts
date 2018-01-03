import { Component } from '@angular/core';

// Services
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
    providers: [DataService]
})
export class FooterComponent {
  constructor(public _data: DataService) { }
}
