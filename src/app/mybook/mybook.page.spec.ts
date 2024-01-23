import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MybookPage } from './mybook.page';

describe('MybookPage', () => {
  let component: MybookPage;
  let fixture: ComponentFixture<MybookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MybookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
