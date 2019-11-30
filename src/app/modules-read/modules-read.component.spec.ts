import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesReadComponent } from './modules-read.component';

describe('ModulesReadComponent', () => {
  let component: ModulesReadComponent;
  let fixture: ComponentFixture<ModulesReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
