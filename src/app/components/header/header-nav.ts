import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { MOCK_ROTAS } from "../../shared/mock";

@Component({
  selector: 'app-header-nav',
  imports: [RouterModule, MatButtonModule],
  template: `
    <ul class="h-full flex items-center justify-center lg:justify-start gap-4">
      @for (item of items; track $index) {
        <li>
          <a
            [href]="item.link"
            class="text-lg font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >{{ item.label }}</a
          >
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class HeaderNav {
  items = MOCK_ROTAS;
}
