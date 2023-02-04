import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
  @Output() onEdit = new EventEmitter<ITask>();
  @Output() onDelete = new EventEmitter<ITask>();

  @Input() task!: ITask;

  private getRGB(c: string) {
    return parseInt(c, 16);
  }

  private getsRGB(c: string) {
    return this.getRGB(c) / 255 <= 0.03928
      ? this.getRGB(c) / 255 / 12.92
      : Math.pow((this.getRGB(c) / 255 + 0.055) / 1.055, 2.4);
  }

  private getLuminance(hexColor: string) {
    return (
      0.2126 * this.getsRGB(hexColor.substr(1, 2)) +
      0.7152 * this.getsRGB(hexColor.substr(3, 2)) +
      0.0722 * this.getsRGB(hexColor.substr(-2))
    );
  }

  private getContrast(f: string, b: string) {
    const L1 = this.getLuminance(f);
    const L2 = this.getLuminance(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  protected getCategoryTextColor(bgColor: string) {
    const whiteContrast = this.getContrast(bgColor, '#ffffff');
    const blackContrast = this.getContrast(bgColor, '#000000');

    return whiteContrast > blackContrast ? '#ffffff' : '#000000';
  }
}
