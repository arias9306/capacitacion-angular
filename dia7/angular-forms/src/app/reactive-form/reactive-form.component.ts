import { Component, OnInit } from '@angular/core';
import { GenderService } from '../services/gender.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders: string[] = [];
  constructor(private genderService: GenderService) { }

  ngOnInit() {
    this.genders = this.genderService.getGenders();
  }

}
