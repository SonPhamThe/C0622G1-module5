import {Component, OnInit} from '@angular/core';

import {Card} from '../model/card';
import {HouseCar} from '../model/houseCar';
import {ExamService} from '../exam.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm: FormGroup;
  cards: Card[] = [];

  card: Card;
  address1Search: string;
  address2Search: string;
  houseCarList: HouseCar[] | undefined;

  pageNumber: number;

  date1: string;
  date2: string;

  constructor(private cardService: ExamService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private toast: ToastrService) {
  }

  equals(o1: HouseCar, o2: HouseCar) {
    return o1.id === o2.id;
  }

  ngOnInit(): void {
    this.date1 = '';
    this.date2 = '';
    this.address1Search = '';
    this.address2Search = '';
    this.pageNumber = 1;
    this.cardService.findAllHouseCar().subscribe(data => {
      this.houseCarList = data;
    });
    this.cardService.getList(this.address1Search, this.address2Search).subscribe(data => {
      this.cards = data;
    });
  }

  search1() {
    this.cardService.getList(this.address1Search, this.address2Search).subscribe(
      data => {
        this.pageNumber = 1;
        this.cards = data.filter(value => {
          if (this.date1 !== '' && this.date2 !== '') {
            const format = new Date(value.startDate);
            const startDate = new Date(this.date1);
            const endDate = new Date(this.date2);
            if (format >= startDate && format <= endDate) {
              return value;
            }
          } else {
            // @ts-ignore
            return data;
          }
        });
      });
  }

  findCard(id: number) {
    this.cardService.findById(id).subscribe(data => {
      this.card = data[0];
    });
  }

  bookingCard(id: number) {
    if (this.card.count > 0) {
      this.card.count = this.card.count - 1;
      this.cardService.updateCard(id, this.card).subscribe(data => {
        this.ngOnInit();
      });
    }
  }

}
