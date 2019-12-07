import { Component } from '@angular/core';
import {ApiService} from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  colleges;
  selectedCollege;

  constructor(private api: ApiService) {
    this.getColleges();
    this.selectedCollege = {id: -1, name: '' , desc: '', year: 0 };
  }
  getColleges = () => {
    this.api.getAllColleges().subscribe(
      data => {
        this.colleges = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  collegeClicked = (college) => {
    this.api.getOneCollege(college.id).subscribe(
      data => {
        this.selectedCollege = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateCollege = () => {
    this.api.updateCollege(this.selectedCollege).subscribe(
      data => {
        this.getColleges();
      },
      error => {
        console.log(error);
      }
    );
  }
  createCollege = () => {
    this.api.createCollege(this.selectedCollege).subscribe(
      data => {
        this.getColleges();
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteCollege = () => {
    this.api.deleteCollege(this.selectedCollege.id).subscribe(
      data => {
        this.getColleges();
        this.selectedCollege = {id: -1, name: '' , desc: '', year: 0 };
      },
      error => {
        console.log(error);
      }
    );
  }
}


