import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-logo',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './header-logo.html',
  styleUrl: './header-logo.css',
})
export class HeaderLogo {}
