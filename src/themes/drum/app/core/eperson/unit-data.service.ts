import { Injectable } from '@angular/core';
import {DataService} from '../../../../../app/core/data/data.service';
import {Unit} from './models/unit.model';
import {HALEndpointService} from '../../../../../app/core/shared/hal-endpoint.service';
import {NotificationsService} from '../../../../../app/shared/notifications/notifications.service';
import {ObjectCacheService} from '../../../../../app/core/cache/object-cache.service';
import {HttpClient} from '@angular/common/http';
import {RemoteDataBuildService} from '../../../../../app/core/cache/builders/remote-data-build.service';
import {Store} from '@ngrx/store';
import {RequestService} from '../../../../../app/core/data/request.service';
import { CoreState } from 'src/app/core/core-state.model';
import { DSOChangeAnalyzer } from 'src/app/core/data/dso-change-analyzer.service';
import { dataService } from 'src/app/core/cache/builders/build-decorators';
import { UNIT } from './models/unit.resource-type';

@Injectable({
  providedIn: 'root'
})
@dataService(UNIT)
export class UnitDataService extends DataService<Unit> {

  protected linkPath: string = 'units'

  constructor(
    protected comparator: DSOChangeAnalyzer<Unit>,
    protected halService: HALEndpointService,
    protected http: HttpClient,
    protected notificationsService: NotificationsService,
    protected objectCache: ObjectCacheService,
    protected rdbService: RemoteDataBuildService,
    protected requestService: RequestService,
    protected store: Store<CoreState>,
  ) {
    super();
  }

}
