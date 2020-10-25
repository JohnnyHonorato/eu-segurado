import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {

  today = new Date();

  msg;

  constructor() {
    if (this.today.getHours() >= 5 && this.today.getHours() <= 12) {
      this.msg = 'Bom Dia !';
    } else if (this.today.getHours() > 12 && this.today.getHours() <= 18) {
      this.msg = 'Boa Tarde !';
    } else {
      this.msg = 'Boa Noite !';
    }
  }

  ngOnInit(): void {
  }

}
