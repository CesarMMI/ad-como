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
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal'
  
  @Input() classArr: string[] = [];
  @Input() iconClassArr: string[] = [];

  
  @Input() disabled: boolean = false;
}
