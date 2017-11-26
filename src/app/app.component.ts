import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedMenu: string;
  menus = ['Loi binomial', 'Covariance', 'VaR'];

  ngOnInit(): void {
    this.selectedMenu = sessionStorage.getItem('selection') || 'Loi binomial';
  }

  select(menu: string) {
    sessionStorage.setItem('selection', menu);
    this.selectedMenu = menu;
  }
}
