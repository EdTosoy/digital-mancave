import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-shell',
  imports: [Navbar],
  templateUrl: './shell.html',
})
export class Shell { }
