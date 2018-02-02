import {Component, OnInit} from '@angular/core';
import {OffertService} from '../offert.service';
import {Offert} from '../offert';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
  selector: 'app-offert-list',
  templateUrl: './offert-list.component.html',
  styleUrls: ['./offert-list.component.css']
})
export class OffertListComponent implements OnInit {
  errorMessage: string;
  offerts: Offert[];
  constructor(private router: Router, private offertService: OffertService) { 
  }

  ngOnInit() {
    this.offertService.getOfferts().subscribe(
      offerts => this.offerts = offerts,
      error => this.errorMessage = <any> error);
  }
  onSelect(offert: Offert) {
    this.router.navigate(['/offert', offert.id]);
  }
  addOffert() {
    this.router.navigate(['/offerts/add']);
  }
}
