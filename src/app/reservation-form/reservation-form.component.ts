import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formbulder: FormBuilder) {
  }

  ngOnInit(): void{
    this.reservationForm = this.formbulder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', [Validators.required ,Validators.maxLength(255)]],
      guestEmail: ['', [Validators.required ,Validators.email]],
      roomNumber: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.reservationForm.valid){
      console.log("valid")
    }
  }

}
