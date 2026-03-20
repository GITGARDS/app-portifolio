import { Component } from "@angular/core";
import { TitlePagina } from "../../components/title-pagina/title-pagina";
import { MOCK_STACKS, MockStackModel } from "../../shared/mock";
import { StackCard } from "./stack-card/stack-card";

@Component({
  selector: 'app-stacks',
  imports: [StackCard, TitlePagina],
  templateUrl: './stacks.html',
  styleUrl: './stacks.css',
})
export class Stacks {
  items: MockStackModel[] = MOCK_STACKS;
}
