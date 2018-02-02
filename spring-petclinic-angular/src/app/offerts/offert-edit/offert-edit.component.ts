import { Component, OnInit } from '@angular/core';
import {OffertService} from '../offert.service';
import {Offert} from '../offert';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';
@Component({
  selector: 'app-offert-edit',
  templateUrl: './offert-edit.component.html',
  styleUrls: ['./offert-edit.component.css']
})
export class OffertEditComponent implements OnInit {
  public offert;
  errorMessage: string;
  constructor(private offertService: OffertService, private route: ActivatedRoute, private router: Router) { 
    this.offert= <Offert>{};
  }

  ngOnInit() {
        const offertId = this.route.snapshot.params['id'];
    this.offertService.getOffertById(offertId).subscribe(
      offert => this.offert = offert,
      error => this.errorMessage = <any> error);
  }
  onSubmit(offert) {
    var that = this;
    this.offertService.updateOffert(offert.id.toString(), offert).subscribe(
      get_result,
      get_error
    );

      function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
      }
      function get_result(update_status) {
      console.log(update_status);
      if (update_status.status === 204) {
        console.log('update success');
        that.gotoOffertDetail(offert);
      } else {
        return console.log('update failed');
      }
    }
  };

    gotoOffertDetail(offert: Offert) {
    this.router.navigate(['/owners', offert.id]);
  }
}