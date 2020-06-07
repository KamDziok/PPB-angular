import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdvertisementsComponent } from './category-advertisements.component';

describe('CategoryAdvertisementsComponent', () => {
  let component: CategoryAdvertisementsComponent;
  let fixture: ComponentFixture<CategoryAdvertisementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAdvertisementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
