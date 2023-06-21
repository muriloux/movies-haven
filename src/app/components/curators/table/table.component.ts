import { Component } from '@angular/core';
import { Curator } from 'src/app/models/curator.model';
import { CuratorsService } from 'src/app/services/curators.service';

@Component({
  selector: 'app-curators-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class CuratorsTableComponent {
  curators: Curator[] = [];

  constructor() {
    const crs = new CuratorsService()
    this.curators = crs.getCurators();
  }
}
