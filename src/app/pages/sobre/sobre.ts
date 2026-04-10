import { Component, signal } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { TitlePagina } from "../../components/title-pagina/title-pagina";

@Component({
  selector: 'app-sobre',
  imports: [TitlePagina, MatIcon],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  about = signal({
    name: 'Adriano Rogério',    
    role: 'Full Stack Developer',
    avatar: 'avatar.jpg',
    bio: 'Apaixonado por criar experiências digitais excepcionais. Especialista em Angular, Node.js e design focado no usuário. Com mais de 5 anos de experiência transformando ideias em código sólido e escalável.',
    email: 'adrianorogeriodesouza4353@gmail.com',
    location: 'Brasil',
    socials: [
      { name: 'GitHub', url: 'https://github.com/GITGARDS', icon: 'code' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/adriano-rogerio-de-souza-95138a214/', icon: 'person' },
      { name: 'Email', url: 'mailto:adrianorogeriodesouza4353@gmail.com', icon: 'email' },
    ]
  });

}
