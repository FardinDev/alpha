import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: object;
  showSpinner = false;
  breakpoint;
  constructor(private _http: HttpService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.showSpinner = true;
    const width = window.innerWidth;
    switch(true) {
      case (width <= 700):
        this.breakpoint = 2;
        break;
      case (width >= 700 && width < 1000):
        this.breakpoint = 4;
        break;
        case (width >= 1000):
          this.breakpoint = 6;
          break;
      default:
        this.breakpoint = 2;
    }
    this._http.getData().subscribe(data => {
      this.data = data;

      this.showSpinner = false;
    });
  }


  onScroll() {
    this.spinner.show();
    this._http.getData().subscribe(data => {
      this.data = this.data.concat(data);
      console.log(this.data);
    });
    this.spinner.hide();
  }

  cardClick(id) {
    console.log(id);
  }


  onResize(event) {
    // this.breakpoint = (event.target.innerWidth <= 500) ? 2 : 4;
    const width = event.target.innerWidth;
    switch(true) {
      case (width <= 700):
        this.breakpoint = 2;
        break;
      case (width >= 700 && width < 1000):
        this.breakpoint = 4;
        break;
        case (width >= 1000):
          this.breakpoint = 6;
          break;
      default:
        this.breakpoint = 2;
    }

    console.log( window.innerWidth);
  }

}
