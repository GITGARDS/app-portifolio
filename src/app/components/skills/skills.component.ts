import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  lista = [
    {
      imagem: "bi bi-filetype-java",
      titulo: "Java",
      texto: "Abastecimento, vendas, lubrificantes.",
    },
    {
      imagem: "bi bi-film",
      titulo: "Angular",
      texto: "Filmes separados por categorias",
    },
    {
      imagem: "bi bi-phone-landscape",
      titulo: "NodeJs",
      texto: "Pagina de destino.",
    },
  ];
}
