import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ForecastComponent } from './forecast.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent ],
      imports: [HttpClientTestingModule,
        ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.cityForm.valid).toBeFalsy();
  });

  it('form gets submitted if valid', () => {
    expect(component.cityForm.valid).toBeFalsy();
    component.cityForm.controls['city'].setValue("Toronto");
    component.submit();
    expect(component.isSubmitted).toBeTruthy();
  });
  it('form does not get submitted if invalid', () => {
    component.submit();
    expect(component.cityForm.invalid).toBeTruthy();
  });

});
