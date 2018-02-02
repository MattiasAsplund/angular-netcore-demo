import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent implements OnInit {

  constructor() {
    for(let i = 0; i < 34; i++)
      this.genres.push("genre")
  }

  genres: any = ["genre"];

  ngOnInit() {
  }

}
