import { Component } from "@angular/core";
import { HeaderLogo } from "./header-logo/header-logo";
import { HeaderNav } from "./header-nav/header-nav";
import { HeaderTheme } from "./header-theme/header-theme";

@Component({
  selector: 'app-header',
  imports: [ HeaderLogo, HeaderNav, HeaderTheme ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
