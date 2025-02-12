import { Component } from '@angular/core';
import {
    FunnyProgressBarComponent
} from "../../../../../../my-funny-lib/src/lib/components/progress-bar/funny-progress-bar.component";

@Component({
  selector: 'app-color-demo',
    imports: [
        FunnyProgressBarComponent
    ],
  templateUrl: './color-demo.component.html',
  styleUrl: './color-demo.component.scss'
})
export class ColorDemoComponent {

}
