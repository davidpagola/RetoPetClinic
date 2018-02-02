import { Component, OnInit } from '@angular/core';
import {OffertService} from '../offert.service';
import {Offert} from '../offert';
import {Router} from '@angular/router';


@Component({
  selector: 'app-offert-add',
  templateUrl: './offert-add.component.html',
  styleUrls: ['./offert-add.component.css']
})
export class OffertAddComponent implements OnInit {
offert: Offert;
errorMessage : string;

  constructor(private offertService: OffertService, private router: Router) {
    this.offert=<Offert>{};
   }

  ngOnInit() {
  }

onSubmit(offert: Offert) {
    offert.id = null;
    this.offertService.addOffert(offert).subscribe(
      new_offert => {
        this.offert = new_offert;
        this.gotoOffertsList();
      },
      error => this.errorMessage = <any>error
    );
  }
  
  gotoOffertsList(){
    this.router.navigate(['/offerts']);
  }

}
