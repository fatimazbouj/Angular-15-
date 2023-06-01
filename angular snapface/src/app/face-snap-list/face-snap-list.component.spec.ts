import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FaceSnapListComponent } from './face-snap-list.component';
import { faceSnapService } from '../services/face-snap.service';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

describe('FaceSnapListComponent', () => {
  let component: FaceSnapListComponent;
  let fixture: ComponentFixture<FaceSnapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceSnapListComponent,FaceSnapComponent],
      providers:[faceSnapService]
    });

    fixture = TestBed.createComponent(FaceSnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should test if the list is not empty', () => {
    fixture.detectChanges();
    expect(component.faceSnaps).toBeDefined();
    expect(component.faceSnaps.length).toBeGreaterThan(0);
  });
  // it('should test if the list is empty', () => {
  //   fixture.detectChanges();
  //   expect(component.faceSnaps).toBeDefined();
  //   expect(component.faceSnaps.length).toBe(0);
  // });

  it('should test the title', () => {
    fixture.detectChanges();
    const item=fixture.nativeElement.querySelector('.testTitle')
    expect(item.textContent).toContain('Test the title')
  });
  // Ajoutez d'autres tests ici
});
