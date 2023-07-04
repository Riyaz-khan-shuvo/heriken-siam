import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubiconComponent } from './subicon.component';

describe('SubiconComponent', () => {
  let component: SubiconComponent;
  let fixture: ComponentFixture<SubiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubiconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
