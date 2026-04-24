import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-logo',
  imports: [RouterModule, MatButtonModule],
  template: `
    <div
      class="h-full rounded-lg flex items-center justify-center lg:justify-start text-2xl select-none cursor-pointer"
    >
      <a href="#sobre">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold"
          >
            A
          </div>
          <span class="text-xl font-bold text-zinc-900 dark:text-white hidden sm:block"
            >Adriano Rogerio</span
          >
        </div>
      </a>
    </div>
  `,
  styles: ``,
})
export class HeaderLogo {}
