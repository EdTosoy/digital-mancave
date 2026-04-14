import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-shell',
  imports: [Navbar, Footer],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {}
