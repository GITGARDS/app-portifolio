import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Header } from "./pages/header/header";

@Component({
  selector: 'app-root',
  imports: [Header, RouterModule],
  templateUrl: "./app.html",
  styles: [],
})
export class App {
  protected readonly title = signal('app-portifolio');
}
