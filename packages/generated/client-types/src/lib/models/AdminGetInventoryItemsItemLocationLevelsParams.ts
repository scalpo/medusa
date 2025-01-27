/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRelation, Merge } from "../core/ModelUtils"

export interface AdminGetInventoryItemsItemLocationLevelsParams {
  /**
   * Locations ids to search for.
   */
  location_id?: Array<string>
  /**
   * Comma separated list of relations to include in the results.
   */
  expand?: string
  /**
   * Comma separated list of fields to include in the results.
   */
  fields?: string
}
