import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public icon:IconsService) {

  }
  ngOnInit(): void {
  }

}
