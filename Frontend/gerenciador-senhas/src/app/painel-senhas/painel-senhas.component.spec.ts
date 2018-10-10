import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelSenhasComponent } from './painel-senhas.component';

describe('PainelSenhasComponent', () => {
  let component: PainelSenhasComponent;
  let fixture: ComponentFixture<PainelSenhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelSenhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
