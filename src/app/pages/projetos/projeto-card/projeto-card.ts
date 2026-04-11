import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BtnStacks } from "../../../components/btn-stacks/btn-stacks";
import { MockProjetoModel } from "../../../shared/mock";

@Component({
  selector: 'app-projeto-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, BtnStacks],
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
