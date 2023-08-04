import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPreviewComponent } from './column-preview.component';

describe('ColumnPreviewComponent', () => {
  let component: ColumnPreviewComponent;
  let fixture: ComponentFixture<ColumnPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
