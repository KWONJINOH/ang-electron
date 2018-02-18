import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _electronService: ElectronService) { }

  /** 
   * 네이버주소 이동한다
   */
  goToNaver() {
    this._electronService.shell.openExternal('https://naver.com')
  }
} 
