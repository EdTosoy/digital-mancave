import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideAppWindow,
  lucideCode,
  lucideChevronLeft,
  lucideChevronRight,
} from '@ng-icons/lucide';

import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';

@Component({
  selector: 'app-whats-new',
  standalone: true,
  imports: [HlmTabsImports, HlmPaginationImports, NgIcon],
  providers: [
    provideIcons({
      lucideAppWindow,
      lucideCode,
      lucideChevronLeft,
      lucideChevronRight,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whats-new.html',
})
export class WhatsNew {
  readonly totalPages = 5;
  readonly pageSize = 10;

  readonly pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  currentPage = signal(1);

  startItem = computed(() => (this.currentPage() - 1) * this.pageSize + 1);

  endItem = computed(() =>
    Math.min(this.currentPage() * this.pageSize, this.totalPages * this.pageSize),
  );

  next() {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update((p) => p + 1);
    }
  }

  previous() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }
}
