import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Card} from '../model/card';
import {HouseCar} from '../model/houseCar';
import {ExamService} from '../exam.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  cardForm: FormGroup;
  id: number;
  card: Card;
  houseCarList: HouseCar[] | undefined;

  constructor(private cardService: ExamService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private toast: ToastrService) {
  }

  equals(o1: HouseCar, o2: HouseCar) {
    return o1.id === o2.id;
  }

  ngOnInit(): void {
    this.cardService.findAllHouseCar().subscribe(data => {
      this.houseCarList = data;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.cardService.findById(this.id).subscribe(data => {
        this.card = data[0];
        this.cardForm = this.formBuilder.group({
          id: [this.card.id],
          price: [this.card.price],
          address1: [this.card.address1],
          address2: [this.card.address2],
          startDate: [this.card.startDate],
          hourStart: [this.card.hourStart],
          houseCar: [this.card.houseCar],
          count: [this.card.count]
        });
      });
    });
  }

  updateCard(id: number) {
    const card = this.cardForm.value;
    this.cardService.updateCard(id, card).subscribe(data => {
        this.cardForm = this.formBuilder.group({
          id: [data.id],
          price: [data.price],
          address1: [data.address1],
          address2: [data.address2],
          startDate: [data.startDate],
          hourStart: [data.hourStart],
          houseCar: [data.houseCar],
          count: [data.count]
        });
        this.toast.success('Edit success');
      },
      error => {
        this.toast.error('Edit lose');
      });
  }

}
