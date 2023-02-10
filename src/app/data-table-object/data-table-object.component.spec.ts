import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableObjectComponent } from './data-table-object.component';

describe('DataTableObjectComponent', () => {
  let component: DataTableObjectComponent;
  let fixture: ComponentFixture<DataTableObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableObjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
