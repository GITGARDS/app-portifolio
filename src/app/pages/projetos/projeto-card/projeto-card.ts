import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";
import { BtnStacks } from "../../../components/btn-stacks/btn-stacks";
import { MockProjetoModel } from "../../../shared/mock";

@Component({
  selector: 'app-projeto-card',
  imports: [CommonModule, MatCardModule, MatIconButton, MatIcon, BtnStacks, MatTooltip],
  templateUrl: './projeto-card.html',
  styleUrl: './projeto-card.css',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ProjetoCard {
  projeto  = input.required<MockProjetoModel>( );
}
