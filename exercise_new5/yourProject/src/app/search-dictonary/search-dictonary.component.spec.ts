import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDictonaryComponent } from './search-dictonary.component';

describe('SearchDictonaryComponent', () => {
  let component: SearchDictonaryComponent;
  let fixture: ComponentFixture<SearchDictonaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDictonaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDictonaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
