import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPostComponent } from './tareas-post.component';

describe('TareasPostComponent', () => {
  let component: TareasPostComponent;
  let fixture: ComponentFixture<TareasPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
