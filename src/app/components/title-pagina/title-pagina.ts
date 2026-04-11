import { TitleCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-title-pagina',
  imports: [TitleCasePipe],
  templateUrl: './title-pagina.html',
  styleUrl: './title-pagina.css',
})
export class TitlePagina {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
}
