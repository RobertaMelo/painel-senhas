import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizadorComponent } from './centralizador.component';

describe('CentralizadorComponent', () => {
  let component: CentralizadorComponent;
  let fixture: ComponentFixture<CentralizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
