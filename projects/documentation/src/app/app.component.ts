import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent} from "@ng-doc/app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgDocRootComponent, NgDocSidebarComponent, NgDocNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'documentation';
}
