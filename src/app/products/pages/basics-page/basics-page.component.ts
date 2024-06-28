import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'marcelo';
  public nameUpper: string = 'MARCELO';
  public fullName: string = 'MaRcElO RodRIgUeZ';

  public customDate: Date = new Date();
  // public fullName: string = 'MaRcElO RodRIgUeZ';

}
