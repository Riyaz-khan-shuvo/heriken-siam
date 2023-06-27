import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  scrollToTop() {
    (function scroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(scroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
