import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() icon?: IconDefinition
  @Input() color: 'transparent' | 'violet' = 'transparent'

  
  @Input() disabled: boolean = false;
}
