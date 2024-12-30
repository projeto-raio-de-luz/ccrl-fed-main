import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoParceirosComponent } from './projeto-parceiros.component';

describe('ProjetoParceirosComponent', () => {
  let component: ProjetoParceirosComponent;
  let fixture: ComponentFixture<ProjetoParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoParceirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
