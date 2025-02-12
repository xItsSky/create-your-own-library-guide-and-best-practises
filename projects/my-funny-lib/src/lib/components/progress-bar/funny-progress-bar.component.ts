import {AfterViewInit, Component, effect, ElementRef, inject, input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'funny-progress-bar',
  imports: [],
  templateUrl: './funny-progress-bar.component.html',
  styleUrl: './funny-progress-bar.component.scss'
})
export class FunnyProgressBarComponent implements AfterViewInit {
  @ViewChild('progress', { read: ElementRef}) progressRef!: ElementRef<HTMLDivElement>;

  readonly #renderer = inject(Renderer2);

  value = input.required<number>();
  color = input<string>('#ffffff');
  backgroundColor = input<string>('#05043e');

  effect = effect(() => {
    if(this.progressRef) {
      this.#renderer.setStyle(this.progressRef.nativeElement, 'width', `${Math.min(this.value(), 100)}%`);
    } else {
      Promise.resolve().then(() => {
        this.#renderer.setStyle(this.progressRef.nativeElement, 'width', `${Math.min(this.value(), 100)}%`);
      })
    }
  });

  ngAfterViewInit(): void {
    this.#renderer.setStyle(this.progressRef.nativeElement, 'color', this.color());
    this.#renderer.setStyle(this.progressRef.nativeElement, 'background-color', this.backgroundColor());
    this.#renderer.setStyle(this.progressRef.nativeElement, 'width', '0%');
  }
}
