import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-and-integration-app';

  evaluateArea(length: number,breadth: number): number {
  
    return length * breadth;
  }
}
