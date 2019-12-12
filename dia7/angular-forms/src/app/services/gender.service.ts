import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private genders: string[] = ['male', 'female'];

  constructor() { }

  getGenders(): string[] {
    return this.genders;
  }
}
