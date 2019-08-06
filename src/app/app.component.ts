import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = ["3", "2", "1", "Lift Off!"];
  index = 0;
  isEnd = false;

  OnClick(){
    this.index ++;
    if (this.index == 3)
      this.isEnd = true;

  }
  

}
