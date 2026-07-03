
import { Component } from '@angular/core';
import { About } from "../home/components/about";

@Component({
  selector: 'app-home',
  imports: [About],
  template: `
          <app-about />
  `,
})
export class Work { }
