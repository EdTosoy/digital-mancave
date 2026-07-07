
import { Component } from '@angular/core';
import { Journey } from "./components/journey";
import { Stack } from "./components/stack";

@Component({
  selector: 'app-work',
  imports: [Journey, Stack],
  template: `
    <div class="flex justify-between">
      <app-journey/>
      <app-stack/>
    </div>
  `
})

export class Work { }
