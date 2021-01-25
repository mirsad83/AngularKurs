import { Router } from '@angular/router';
import { GlobalniService } from './../globalni.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transakcije',
  templateUrl: './transakcije.component.html',
  styleUrls: ['./transakcije.component.css']
})
export class TransakcijeComponent implements OnInit {

  sveTransakcije: any;
  transakcijeZaDispley: any;
  kategorije: any;
  ukupno: any;

  constructor(private api: GlobalniService, private router: Router) { }

  ngOnInit(): void {
    this.api.getTransakcije().subscribe((rezultat: any) => {
      this.sveTransakcije = rezultat;
      this.transakcijeZaDispley = rezultat;
      this.kategorije = [...new Set(this.sveTransakcije.map((transakcija) => transakcija.kategorija))];

      this.ukupno = this.sveTransakcije.reduce((total, transakcija) => {
        total = total + transakcija.iznos;
        console.log(total);
        return total;
       }, 0);

      console.log("Ukupno: " + this.ukupno);
    });
  }

  Filter(kategorija: string) : void {
    this.transakcijeZaDispley = this.sveTransakcije.filter((transakcija) => transakcija.kategorija === kategorija);
  }

  novaTransakcija() {
    console.log("test");
    this.router.navigate(['novatransakcija']);
  }

}
