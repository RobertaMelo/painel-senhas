import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGerenteComponent } from './painel-gerente.component';

describe('PainelGerenteComponent', () => {
  let component: PainelGerenteComponent;
  let fixture: ComponentFixture<PainelGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
