import { Component, input } from "@angular/core";

@Component({
  selector: 'app-btn-stacks',
  imports: [],
  templateUrl: './btn-stacks.html',
  styleUrl: './btn-stacks.css',
})
export class BtnStacks {
  stacks = input.required<string[]>( );
}
