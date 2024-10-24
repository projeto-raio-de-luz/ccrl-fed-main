import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialComponent } from './pagina-inicial.component';

describe('PaginaInicialComponent', () => {
    let component: PaginaInicialComponent,
     fixture: ComponentFixture<PaginaInicialComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PaginaInicialComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PaginaInicialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
