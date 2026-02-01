import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta.html',
})
export class Cta {
  @Input() title = '';
  @Input() text = '';
  @Input() button = 'Nous contacter';
}
