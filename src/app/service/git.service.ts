import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  getProfiles(){
    return Profile
  }
  getRepos(){
    return Repo
  }

  constructor() { }
}
