import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class Footer {
  year = signal(new Date().getFullYear());
  name = signal('Adriano Rogério');
}
