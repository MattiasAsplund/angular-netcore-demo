import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsTracksComponent } from './album-details-tracks.component';

describe('AlbumDetailsTracksComponent', () => {
  let component: AlbumDetailsTracksComponent;
  let fixture: ComponentFixture<AlbumDetailsTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDetailsTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
