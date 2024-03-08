import { Component } from '@angular/core';
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { TerminalTextComponent } from '../../shared/components/terminal-text/terminal-text.component';
import { Colours } from '../../shared/enums/colours';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ColouredBoxComponent,
    TerminalTextComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly Blue = Colours.Blue;
  readonly Green = Colours.Green;
  readonly textList = ["Hi there.", "I hope this works.", "Dobby is cool."]
}
