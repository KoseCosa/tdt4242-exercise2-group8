import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFrontpageComponent } from './admin-frontpage.component';

describe('AdminFrontpageComponent', () => {
  let component: AdminFrontpageComponent;
  let fixture: ComponentFixture<AdminFrontpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFrontpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
