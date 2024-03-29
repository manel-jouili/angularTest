import { Component } from '@angular/core';
import { StageServiceService } from '../services/stage-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent {
  constructor(private ps :StageServiceService,private route:Router){}
  registerForm=new FormGroup({
    id:new FormControl('',Validators.required),
    titre:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(3)]),
    entreprise:new FormControl('',Validators.required),
    disponible:new FormControl('',Validators.required)
  })

  save(){
    console.log(this.registerForm.value)
   // this.ps.addproduct(this.registerForm.value as any)
   this.ps.AddStage(this.registerForm.value as any).subscribe(
    ()=>{this.route.navigateByUrl('/stage')}
   )
  }

}
