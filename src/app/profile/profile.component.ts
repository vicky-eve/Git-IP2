import { Component, OnInit } from '@angular/core';
import { GitService } from '../service/git.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile';
import { Repo } from '../repo';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitService]
})
export class ProfileComponent implements OnInit {

  username:Username;
  photo:Photo

  constructor(gitService:GitService, private http:HttpClient) { 
   
    this.Profile = gitService.getProfiles()
  }

  ngOnInit(): void {
    interface ApiResponse{
      username:string;
      photo:string;
  }
}
this.http.get<ApiResponse>("http://.stormconsultancy.co.uk/random.json").subscribe(data =>{
  // Succesful API request
  this.quote = new Profile(data.username, data.photo)
})
}
}
