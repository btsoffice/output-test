import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  categories = ['shoes', 'sports'];
  @Output() showCategory = new EventEmitter<string>();

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
