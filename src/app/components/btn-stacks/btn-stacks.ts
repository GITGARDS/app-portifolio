import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-btn-stacks',
  imports: [MatCardModule],
  templateUrl: './btn-stacks.html',
  styleUrl: './btn-stacks.css',
})
export class BtnStacks {
  @Input() stacks: string[] = [];
}
