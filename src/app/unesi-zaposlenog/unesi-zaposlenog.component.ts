import { ZaposlenikModel } from './../interfejsi/zaposlenik-model';
import { GlobalniService } from './../globalni.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unesi-zaposlenog',
  templateUrl: './unesi-zaposlenog.component.html',
  styleUrls: ['./unesi-zaposlenog.component.css']
})
export class UnesiZaposlenogComponent implements OnInit {

  zaposlenik: FormGroup;

  constructor(private api: GlobalniService) { }

  ngOnInit(): void {
    this.zaposlenik = new FormGroup({
      ime: new FormControl('', Validators.required),
      starost: new FormControl(0, Validators.required),
      radnoMjesto: new FormControl('', Validators.required)
    });
  }

  onSubmit(noviZaposlenik) {
    this.api.postZaposlenik(noviZaposlenik.value).subscribe((rezultat) => console.log(rezultat));
  }
}
