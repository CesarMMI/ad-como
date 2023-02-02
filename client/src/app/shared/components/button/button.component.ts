import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label?: string;

  @Input() icon?: IconDefinition
  @Input() iconPos: 'right' | 'left' = 'left'
  @Input() iconClassArr: string[] = [];

  @Input() type: 'flat' | 'raised' | 'text' = 'flat';
  @Input() color: 'surface' | 'primary' = 'primary';
  
  @Input() disabled: boolean = false;
  @Input() submit: boolean = false;
}
