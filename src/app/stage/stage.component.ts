import { Component } from '@angular/core';
import { Stage } from '../model/Stage';
import { StageServiceService } from '../services/stage-service.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
  listStages:Stage[]=[]

  constructor(private consp:StageServiceService){}

  ngOnInit(){
    this.consp.getStage().subscribe({
      next:(data)=>this.listStages=data,
      error:(error)=> console.log(error),
      complete:()=>console.log('done')
    }
    )
  }

  supp(id:number){
    this.consp.DeleteStage(id).subscribe(
      ()=>this.ngOnInit()
    )
  }
}
