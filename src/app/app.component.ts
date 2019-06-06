import { Component, OnInit } from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome to Lá Quinta Pizzaria!'

  constructor() { }

  ngOnInit() {
  }

}
