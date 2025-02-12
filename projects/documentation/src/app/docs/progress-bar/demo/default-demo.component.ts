import {Component} from '@angular/core';
import {
  FunnyProgressBarComponent
} from "../../../../../../my-funny-lib/src/lib/components/progress-bar/funny-progress-bar.component";

@Component({
  selector: 'app-demo',
  imports: [FunnyProgressBarComponent],
  templateUrl: './default-demo.component.html',
  styleUrl: './default-demo.component.scss'
})
export class DefaultDemoComponent {

}
