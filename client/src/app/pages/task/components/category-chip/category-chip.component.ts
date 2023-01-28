import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICategory } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-chip',
  templateUrl: './category-chip.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryChipComponent {
  @Input() category!: ICategory;
}
