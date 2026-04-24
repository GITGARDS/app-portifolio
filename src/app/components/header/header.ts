import { Component } from "@angular/core";
import { HeaderLogo } from "./header-logo";
import { HeaderNav } from "./header-nav";
import { HeaderTheme } from "./header-theme";

@Component({
  selector: 'app-header',
  imports: [HeaderLogo, HeaderNav, HeaderTheme],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 no-print"
    >
      <div class="flex justify-between items-center px-4 h-16">
        <app-header-logo/>
        <app-header-nav/>
        <app-header-theme/>
      </div>
    </header>
  `,
  styles: ``,
})
export class Header {}
