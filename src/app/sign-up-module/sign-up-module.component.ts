import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-module',
  templateUrl: './sign-up-module.component.html',
  styleUrls: ['./sign-up-module.component.scss'],
})
export class SignUpModuleComponent implements OnInit {
  data = {
    name: 'pooja',
    email: 'pooja@gmail.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
