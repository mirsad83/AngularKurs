import { ZaposlenikModel } from './../interfejsi/zaposlenik-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  sviZaposlenici: ZaposlenikModel[];
  sviZaposleniciZaDisplay: ZaposlenikModel[];

  radnaMjesta: any;
  terminPretrage: string = '';

  constructor(private globalni: GlobalniService, private router: Router) { }

  ngOnInit(): void {

    this.globalni.getZaposlenici().subscribe((rezultat: ZaposlenikModel[]) => {
      this.sviZaposlenici = rezultat;
      this.sviZaposleniciZaDisplay = rezultat;
      this.radnaMjesta = [...new Set(this.sviZaposlenici.map((element: ZaposlenikModel) => element.radnoMjesto))];
    });
  }

  FiltrirajZaposlene(mjesto: any): void {
    this.sviZaposleniciZaDisplay = this.sviZaposlenici.filter((zaposleni: ZaposlenikModel) => zaposleni.radnoMjesto === mjesto);
  }

  Pretrazi() {
    this.sviZaposleniciZaDisplay = this.sviZaposlenici.filter((zaposlenik) => zaposlenik.ime.toLowerCase().
    includes(this.terminPretrage.toLowerCase()) || zaposlenik.radnoMjesto.toLowerCase().includes(this.terminPretrage.toLowerCase()));
  }

  PonistiPretragu() {
    this.sviZaposleniciZaDisplay = this.sviZaposlenici;
  }

  NoviZaposleni() {
    this.router.navigate(['novizaposlenik']);
  }

}
