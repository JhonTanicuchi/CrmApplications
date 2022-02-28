import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  enSesion():boolean
  {
    if (sessionStorage.getItem("username")!=null)
      return true;

    return false;
  }

  cerrarSesion():void
  {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
