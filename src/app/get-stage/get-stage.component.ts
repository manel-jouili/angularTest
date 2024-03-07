import { Component } from '@angular/core';
import { Stage } from '../model/Stage';
import { ActivatedRoute } from '@angular/router';
import { StageServiceService } from '../services/stage-service.service';

@Component({
  selector: 'app-get-stage',
  templateUrl: './get-stage.component.html',
  styleUrls: ['./get-stage.component.css']
})
export class GetStageComponent {
  id!:number
  p!:Stage
    constructor(private Act:ActivatedRoute,private consP:StageServiceService){}
  
    ngOnInit(){
      this.id=this.Act.snapshot.params['id']
     // this.p=this.ps.listProduct[this.id]
     this.consP.getStageById(this.id).subscribe(
      (data)=>this.p=data
     )
    }
}
