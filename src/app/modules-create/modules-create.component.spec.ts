import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesCreateComponent } from './modules-create.component';

describe('ModulesCreateComponent', () => {
  let component: ModulesCreateComponent;
  let fixture: ComponentFixture<ModulesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
