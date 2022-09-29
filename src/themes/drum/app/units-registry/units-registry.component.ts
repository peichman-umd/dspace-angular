import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Unit} from '../core/eperson/models/unit.model';
import {RequestService} from '../../../../app/core/data/request.service';
import { UnitDataService } from '../core/eperson/unit-data.service';
import { RemoteData } from 'src/app/core/data/remote-data';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';

@Component({
  selector: 'ds-units-registry',
  templateUrl: './units-registry.component.html',
  styleUrls: ['./units-registry.component.scss']
})
export class UnitsRegistryComponent implements OnInit {

  units$: Observable<RemoteData<PaginatedList<Unit>>>;

  constructor(
    protected requestService: RequestService,
    protected unitDataService: UnitDataService
  ) { }

  ngOnInit(): void {
    this.units$ = this.unitDataService.findAll();
  }

}
