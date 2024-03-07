import { Component } from '@angular/core';
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { Colours } from '../../shared/enums/colours';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ColouredBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blue = Colours.Blue;
  green = Colours.Green;
}
