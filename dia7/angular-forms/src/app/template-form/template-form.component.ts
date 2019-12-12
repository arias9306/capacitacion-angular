import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { GenderService } from "../services/gender.service";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  genders: string[] = [];

  @ViewChild("authorForm", { static: false }) authorForm: NgForm;

  constructor(private genderService: GenderService) {}

  ngOnInit() {
    this.genders = this.genderService.getGenders();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.authorForm);
  }

  onReset() {
    this.authorForm.reset();
    this.authorForm.form.patchValue({});
  }
}
