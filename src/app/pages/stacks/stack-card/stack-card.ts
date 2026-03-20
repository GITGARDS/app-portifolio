import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MockStackModel } from "../../../shared/mock";

@Component({
  selector: 'app-stack-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './stack-card.html',
  styleUrl: './stack-card.css',
})
export class StackCard {
  @Input() stack!: MockStackModel;
}
