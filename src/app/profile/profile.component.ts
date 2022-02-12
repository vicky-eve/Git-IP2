import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { GitService } from '../service/git.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitService]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
