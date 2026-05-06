import { Component } from '@angular/core';
import { LucideAngularModule, Code2, Server, Database } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly Code2 = Code2;
  readonly Server = Server;
  readonly Database = Database;
}
