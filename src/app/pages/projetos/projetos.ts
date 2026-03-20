import { Component } from "@angular/core";
import { TitlePagina } from "../../components/title-pagina/title-pagina";
import { MOCK_PROJETOS, MockProjetoModel } from "../../shared/mock";
import { ProjetoCard } from "./projeto-card/projeto-card";

@Component({
  selector: 'app-projetos',
  imports: [ProjetoCard, TitlePagina],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  items: MockProjetoModel[] = MOCK_PROJETOS;
}
