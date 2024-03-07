import { Injectable } from '@angular/core';
import { Stage } from '../model/Stage';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StageServiceService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3000/stages'
  getStage(){
    return this.http.get<Stage[]>(this.url)
  }

  AddStage(p:Stage){
    return this.http.post('http://localhost:3000/stages',p)
  }
  DeleteStage(id:number){
    return this.http.delete('http://localhost:3000/stages'+'/'+id)
  }
  getStageById(id:number){
    return this.http.get<Stage>('http://localhost:3000/stages'+'/'+id)
  }

}
