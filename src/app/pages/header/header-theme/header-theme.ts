import { Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: 'app-header-theme',
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header-theme.html',
  styleUrl: './header-theme.css',
})
export class HeaderTheme {

  icone = signal<string>('light_mode');
  
  toggleTheme() {
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      this.icone.set('light_mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      this.icone.set('dark_mode');
    }
  }
}
