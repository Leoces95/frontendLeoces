import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDeleteComponent } from './tareas-delete.component';

describe('TareasDeleteComponent', () => {
  let component: TareasDeleteComponent;
  let fixture: ComponentFixture<TareasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
