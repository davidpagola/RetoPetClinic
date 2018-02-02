import { Component, OnInit } from '@angular/core';
import {OffertService} from '../offert.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Offert} from '../offert';
import 'rxjs/Rx';


@Component({
  selector: 'app-offert-detail',
  templateUrl: './offert-detail.component.html',
  styleUrls: ['./offert-detail.component.css']
})
export class OffertDetailComponent implements OnInit {
  errorMessage: string;
  offert: Offert;

  constructor(private route: ActivatedRoute, private router: Router, private offertService: OffertService) { 
this.offert=<Offert>{};
  }

  ngOnInit() {
    const offertId= this.route.snapshot.params['id'];
    this.offertService.getOffertById(offertId).subscribe(
      offert => this.offert = offert,
      error => this.errorMessage = <any> error);
    
  }

  gotoOffertsList() {
    this.router.navigate(['/offerts']);
  }
 editOffert() {
    this.router.navigate(['/offerts', this.offert.id, 'edit']);
  }
}
