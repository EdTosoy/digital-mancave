import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import {
  lucideGithub,
  lucideLinkedin,
  lucideMail,
  lucideArrowUp,
} from "@ng-icons/lucide";
import { HlmButtonImports } from "@spartan-ng/helm/button";

@Component({
  selector: "app-footer",
  imports: [NgIcon, HlmButtonImports],
  providers: [
    provideIcons({
      lucideGithub,
      lucideLinkedin,
      lucideMail,
      lucideArrowUp,
    }),
  ],
  templateUrl: "./footer.html"
})
export class FooterComponent {
  year = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
