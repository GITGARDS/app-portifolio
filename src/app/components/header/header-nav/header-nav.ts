import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { MOCK_ROTAS } from "../../../shared/mock";

@Component({
  selector: 'app-header-nav',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav {
  items = MOCK_ROTAS;
}
