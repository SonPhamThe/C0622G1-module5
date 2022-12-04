import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Card} from '../model/card';
import {HouseCar} from '../model/houseCar';
import {ExamService} from '../exam.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {
  cardForm: FormGroup;
  id: number;
  card: Card;
  houseCarList: HouseCar[] | undefined;

  equals(o1: HouseCar, o2: HouseCar) {
    return o1.id === o2.id;
  }

  constructor(private cardService: ExamService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
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

  deleteCard(id: number) {
    this.cardService.deleteCard(id).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
