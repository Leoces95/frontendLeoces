import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGetComponent } from './tareas-get.component';

describe('TareasGetComponent', () => {
  let component: TareasGetComponent;
  let fixture: ComponentFixture<TareasGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
