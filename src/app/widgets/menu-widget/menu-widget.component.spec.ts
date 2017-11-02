import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWidgetComponent } from './menu-widget.component';

describe('MenuWidgetComponent', () => {
  let component: MenuWidgetComponent;
  let fixture: ComponentFixture<MenuWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
