import { Component } from "@angular/core";

@Component({
  selector: "app-portifolios",
  templateUrl: "./portifolios.component.html",
  styleUrls: ["./portifolios.component.scss"],
})
export class PortifoliosComponent {
  lista = [
    {
      imagem: "bi bi-fuel-pump-fill",
      titulo: "Posto de Combustivel",
      texto:
        "Abastecimento, vendas, lubrificantes.",
    },
    {
      imagem: "bi bi-film",
      titulo: "Filmes",
      texto:
        "Filmes separados por categorias",
    },
    {
      imagem: "bi bi-phone-landscape",
      titulo: "Landing page",
      texto:
        "Pagina de destino.",
    },
  ];
}
