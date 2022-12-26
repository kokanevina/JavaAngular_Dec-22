import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDevelopmentComponent } from './my-development.component';

describe('MyDevelopmentComponent', () => {
  let component: MyDevelopmentComponent;
  let fixture: ComponentFixture<MyDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
