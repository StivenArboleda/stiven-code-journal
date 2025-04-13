import { Component, AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{
  menuOpen = false;

  constructor(private route: ActivatedRoute) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  cerrarMenu() {
    this.menuOpen = false;
  }
  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
