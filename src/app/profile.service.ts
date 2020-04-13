
import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
 private client_id = "1b32a6f6ba246b6d9c8f";
  private client_secret ="4ca1066cc43d90afd6e6acb138c18de490bd934c";
  constructor(private http:HttpClient) { 
    this.username = "mmbukane-shy6";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}