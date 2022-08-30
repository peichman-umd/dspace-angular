import {DSpaceObject} from '../../../../../../app/core/shared/dspace-object.model';
import {autoserialize, autoserializeAs, deserialize, inheritSerialization} from 'cerialize';
import {link, typedObject} from '../../../../../../app/core/cache/builders/build-decorators';
import { HALLink } from 'src/app/core/shared/hal-link.model';
import { GROUP } from 'src/app/core/eperson/models/group.resource-type';
import { Observable } from 'rxjs';
import { RemoteData } from 'src/app/core/data/remote-data';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { Group } from 'src/app/core/eperson/models/group.model';

@typedObject
@inheritSerialization(DSpaceObject)
export class Unit extends DSpaceObject {
  @autoserializeAs('name')
  protected _name: string;

  @autoserialize
  public facultyOnly: boolean;
  
  /**
   * The {@link HALLink}s for this Group
   */
  @deserialize
  _links: {
    self: HALLink;
    groups: HALLink;
  };
  
  /**
   * The list of Groups this Group is part of
   * Will be undefined unless the groups {@link HALLink} has been resolved.
   */
  @link(GROUP, true)
  public subgroups?: Observable<RemoteData<PaginatedList<Group>>>;
}
