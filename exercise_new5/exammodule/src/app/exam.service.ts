import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from './model/card';
import {environment} from '../environments/environment';
import {HouseCar} from './model/houseCar';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  constructor(private httpClient: HttpClient) {
  }

  getList(address1Search: string, address2Search: string): Observable<Card[]> {
    return this.httpClient.get<Card[]>(
      environment.url_list_card + '?address1_like=' + address1Search + '&address2_like=' + address2Search);
  }

  findAllHouseCar(): Observable<HouseCar[]> {
    return this.httpClient.get<HouseCar[]>(environment.url_list_housecar);
  }

  saveCard(card): Observable<Card> {
    return this.httpClient.post<Card>(environment.url_list_card, card);
  }

  findById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(environment.url_find_by_id + id);
  }

  updateCard(id: number, card: Card): Observable<Card> {
    return this.httpClient.put<Card>(environment.url_edit_card + card.id, card);
  }

  deleteCard(id: number): Observable<Card> {
    return this.httpClient.delete<Card>(environment.url_list_card + '/' + id);
  }

}
