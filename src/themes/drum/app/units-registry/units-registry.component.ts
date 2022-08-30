import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Unit} from '../core/eperson/models/unit.model';
import {RequestService} from '../../../../app/core/data/request.service';
import { UnitDataService } from '../core/eperson/unit-data.service';

@Component({
  selector: 'ds-units-registry',
  templateUrl: './units-registry.component.html',
  styleUrls: ['./units-registry.component.scss']
})
export class UnitsRegistryComponent implements OnInit {

  units$: BehaviorSubject<Unit> = new BehaviorSubject<Unit>({} as any);

  constructor(
    protected requestService: RequestService,
    protected unitDataService: UnitDataService
  ) { }

  ngOnInit(): void {
    this.unitDataService.findAll();
  }

}
