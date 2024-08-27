import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPutComponent } from './tareas-put.component';

describe('TareasPutComponent', () => {
  let component: TareasPutComponent;
  let fixture: ComponentFixture<TareasPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasPutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
