import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'child_Parent_Child';
  public MessageGot: any;
  public App_to_child: string = 'Hello beta, from parent componenet';
}
