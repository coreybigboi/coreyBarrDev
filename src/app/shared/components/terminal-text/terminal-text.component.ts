import { Component, Input } from '@angular/core';
import { Colours } from '../../enums/colours';

@Component({
  selector: 'app-terminal-text',
  standalone: true,
  imports: [],
  templateUrl: './terminal-text.component.html',
  styleUrl: './terminal-text.component.css'
})
export class TerminalTextComponent {
  readonly colours: string[];
  readonly speed: number;
  
  displayText: string;
  currentColour: string;

  @Input()
  textList!: string[]

  constructor() {
    this.colours = [Colours.Blue, Colours.Green];
    this.displayText = "";
    this.currentColour = this.colours[0];
    this.speed = 100;
  }

  ngOnInit() {
    this.animateConsoleText();
  }

  animateConsoleText() {
    let textListIndex = 0;
    let coloursIndex = 0;
    
    let currentText = this.textList[0];
    let currentTextIndex = 0;
  

    const interval = setInterval(() => {
      // word has been fully printed
      if (currentTextIndex >= currentText.length) {
        this.displayText = ""; 

        // wrap around if reached end of array
        textListIndex = textListIndex >= (this.textList.length - 1) ? 0 : textListIndex + 1;
        coloursIndex = coloursIndex >= (this.colours.length - 1) ? 0 : coloursIndex + 1;
        
        console.log(textListIndex)

        currentTextIndex = 0;
        currentText = this.textList[textListIndex];
        this.currentColour = this.colours[coloursIndex];
      }
      this.displayText += currentText[currentTextIndex];
      currentTextIndex++;
    }, this.speed)
  }
}
