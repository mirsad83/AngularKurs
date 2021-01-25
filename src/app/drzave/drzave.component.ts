import { GlobalniService } from './../globalni.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {

  sveDrzave: any;
  terminZaPretragu: string;

  constructor(private api: GlobalniService) { }

  ngOnInit(): void {
    this.api.getDrzave().subscribe((rezultat) => {
      this.sveDrzave = rezultat;
      console.log(this.sveDrzave);
    }, error => console.log("Došlo je do greske"));
  }

  Pretrazi() {
    this.api.pretraziDrzave(this.terminZaPretragu).subscribe((rezultat) => {
      this.sveDrzave = rezultat;
    })
    console.log('Pretraži');
  }

}
