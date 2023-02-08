import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartTestComponent } from './my-chart-test.component';

describe('MyChartTestComponent', () => {
  let component: MyChartTestComponent;
  let fixture: ComponentFixture<MyChartTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChartTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyChartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
