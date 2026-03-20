import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { Projetos } from "./pages/projetos/projetos";
import { Sobre } from "./pages/sobre/sobre";
import { Stacks } from "./pages/stacks/stacks";

@Component({
  selector: 'app-root',
  imports: [Header, Sobre, Stacks, Projetos],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('app-portifolio');
}
