import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListFilterComponent } from './album-list-filter.component';

describe('AlbumListFilterComponent', () => {
  let component: AlbumListFilterComponent;
  let fixture: ComponentFixture<AlbumListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
