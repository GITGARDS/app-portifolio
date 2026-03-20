import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { TitlePagina } from "../../components/title-pagina/title-pagina";

@Component({
  selector: 'app-sobre',
  imports: [MatIcon, TitlePagina],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}
