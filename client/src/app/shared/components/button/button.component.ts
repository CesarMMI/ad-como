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

  @Input() type: 'flat' | 'raised' | 'text' = 'raised';
  
  @Input() iconClassArr: string[] = [];

  
  @Input() disabled: boolean = false;
}
