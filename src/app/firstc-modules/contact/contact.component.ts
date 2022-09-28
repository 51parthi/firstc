import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm !: FormGroup;
  Name:string= " ";

  constructor(private FormBulider: FormBuilder,private api :ApiService) { }
  

  ngOnInit(): void {
    this.contactForm = this.FormBulider.group({
      Name :[" ",Validators.required],
      mail :[" ", Validators.required],
      message :[" ", Validators.required]

      
    })
  }
  save(){
    // console.log(this.contactForm.value);
    // alert("submit Successfully")
    // this.contactForm.reset()
    if(this.contactForm.valid){
      this.api.postProduct(this.contactForm.value)
      .subscribe({
        next:(res)=>{
          alert("submit successFully")
          this.contactForm.reset()
        },
        error:()=>{
          alert("Not Submit Form")
        }
      })
    }
    
  }

}
