import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HouseCar} from '../model/houseCar';
import {ExamService} from '../exam.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  cardForm: FormGroup;
  houseCarList: HouseCar[] | undefined;

  constructor(private cardService: ExamService,
              private formBuilder: FormBuilder,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.cardService.findAllHouseCar().subscribe(data => {
      this.houseCarList = data;
      this.cardForm = this.formBuilder.group({
        id: [],
        price: ['', [Validators.required, Validators.min(0)]],
        address1: ['', [Validators.required, Validators.minLength(5)]],
        address2: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        hourStart: ['', [Validators.required]],
        houseCar: ['Select', [Validators.required]],
        count: ['', [Validators.required, Validators.min(0)]],
      });
    });
  }

  submit() {
    const card = this.cardForm.value;
    if (this.cardForm.valid) {
      console.log(this.cardForm.value);
    }
    this.cardService.saveCard(card).subscribe(data => {
        this.cardForm = this.formBuilder.group({
          id: [data.id],
          price: [data.price],
          address1: [data.address1],
          address2: [data.address2],
          startDate: [data.startDate],
          hourStart: [data.hourStart],
          houseCar: [data.houseCar]
        });
        this.toast.success('Create Success');
      },
      error => {
        this.toast.error('Success lose');
      });
  }

}
