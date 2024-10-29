import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextRotate]'
})
export class TextRotateDirective implements OnInit {
  @Input('appTextRotate') words: string[] = []; // array com as palavras para rodar
  @Input() period: number = 2000; // tempo de cada rotação em milissegundos

  private loopNum: number = 0;
  private txt: string = '';
  private isDeleting: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.words.length;
    const fullTxt = this.words[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.nativeElement.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}
