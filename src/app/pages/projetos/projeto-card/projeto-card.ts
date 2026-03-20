import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MockProjetoModel } from "../../../shared/mock";

@Component({
  selector: 'app-projeto-card',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './projeto-card.html',
  styleUrl: './projeto-card.css',
})
export class ProjetoCard {
  @Input() projeto!: MockProjetoModel;
}
