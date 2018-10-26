/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
export class TdDataTableService {
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    filterData(data, searchTerm, ignoreCase = false, excludedColumns) {
        /** @type {?} */
        let filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((item) => {
                /** @type {?} */
                const res = Object.keys(item).find((key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        const preItemValue = ('' + item[key]);
                        /** @type {?} */
                        const itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    sortData(data, sortBy, sortOrder = TdDataTableSortingOrder.Ascending) {
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort((a, b) => {
                /** @type {?} */
                let compA = a[sortBy];
                /** @type {?} */
                let compB = b[sortBy];
                /** @type {?} */
                let direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
            });
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    pageData(data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    }
}
TdDataTableService.decorators = [
    { type: Injectable }
];
/**
 * @param {?} parent
 * @return {?}
 */
export function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
/** @type {?} */
export const DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new Optional(), new SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSx1QkFBdUIsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUd0RixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7SUFXN0IsVUFBVSxDQUFDLElBQVcsRUFBRSxVQUFrQixFQUFFLGFBQXNCLEtBQUssRUFBRSxlQUEwQjs7WUFDN0YsTUFBTSxHQUFXLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDM0YsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFOztzQkFDekIsR0FBRyxHQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7OEJBQ3JELFlBQVksR0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7OzhCQUN2QyxTQUFTLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVk7d0JBQ2hGLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDdkM7Z0JBQ0gsQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFVRCxRQUFRLENBQUMsSUFBVyxFQUFFLE1BQWMsRUFBRSxZQUFxQyx1QkFBdUIsQ0FBQyxTQUFTO1FBQzFHLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7WUFDdEcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTs7b0JBQ3ZCLEtBQUssR0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDOztvQkFDdEIsS0FBSyxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7O29CQUN0QixTQUFTLEdBQVcsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3RGLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFNO29CQUNMLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTt3QkFDakIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNoQjt5QkFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7d0JBQ3hCLFNBQVMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxTQUFTLEdBQUcsQ0FBQyxTQUFTLEtBQUssdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVVELFFBQVEsQ0FBQyxJQUFXLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDbEQsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXhFRixVQUFVOzs7Ozs7QUEyRVgsTUFBTSxVQUFVLDJCQUEyQixDQUN2QyxNQUEwQjtJQUM1QixPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBQWE7O0lBRTNDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsMkJBQTJCO0NBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciwgSVRkRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVTZXJ2aWNlIHtcblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc2VhcmNoVGVybTogc3RyaW5nXG4gICAqIC0gaWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlXG4gICAqIC0gZXhjbHVkZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdXG4gICAqXG4gICAqIFNlYXJjaGVzIFtkYXRhXSBwYXJhbWV0ZXIgZm9yIFtzZWFyY2hUZXJtXSBtYXRjaGVzIGFuZCByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlbS5cbiAgICovXG4gIGZpbHRlckRhdGEoZGF0YTogYW55W10sIHNlYXJjaFRlcm06IHN0cmluZywgaWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlLCBleGNsdWRlZENvbHVtbnM/OiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBsZXQgZmlsdGVyOiBzdHJpbmcgPSBzZWFyY2hUZXJtID8gKGlnbm9yZUNhc2UgPyBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkgOiBzZWFyY2hUZXJtKSA6ICcnO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlczogYW55ID0gT2JqZWN0LmtleXMoaXRlbSkuZmluZCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoIWV4Y2x1ZGVkQ29sdW1ucyB8fCBleGNsdWRlZENvbHVtbnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJlSXRlbVZhbHVlOiBzdHJpbmcgPSAoJycgKyBpdGVtW2tleV0pO1xuICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlOiBzdHJpbmcgPSBpZ25vcmVDYXNlID8gcHJlSXRlbVZhbHVlLnRvTG93ZXJDYXNlKCkgOiBwcmVJdGVtVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVZhbHVlLmluZGV4T2YoZmlsdGVyKSA+IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBzb3J0Qnk6IHN0cmluZ1xuICAgKiAtIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICpcbiAgICogU29ydHMgW2RhdGFdIHBhcmFtZXRlciBieSBbc29ydEJ5XSBhbmQgW3NvcnRPcmRlcl0gYW5kIHJldHVybnMgdGhlIHNvcnRlZCBkYXRhLlxuICAgKi9cbiAgc29ydERhdGEoZGF0YTogYW55W10sIHNvcnRCeTogc3RyaW5nLCBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nKTogYW55W10ge1xuICAgIGlmIChzb3J0QnkpIHtcbiAgICAgIGRhdGEgPSBBcnJheS5mcm9tKGRhdGEpOyAvLyBDaGFuZ2UgdGhlIGFycmF5IHJlZmVyZW5jZSB0byB0cmlnZ2VyIE9uUHVzaCBhbmQgbm90IG11dGF0ZSBvcmlnaW5hbCBhcnJheVxuICAgICAgZGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgY29tcEE6IGFueSA9IGFbc29ydEJ5XTtcbiAgICAgICAgbGV0IGNvbXBCOiBhbnkgPSBiW3NvcnRCeV07XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IDA7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSkgJiYgIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQikpKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpIC0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb21wQSA8IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBBID4gY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gKiAoc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nID8gLTEgOiAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBmcm9tUm93OiBudW1iZXJcbiAgICogLSB0b1JvdzogOiBudW1iZXJcbiAgICpcbiAgICogUmV0dXJucyBhIHNlY3Rpb24gb2YgdGhlIFtkYXRhXSBwYXJhbWV0ZXIgc3RhcnRpbmcgZnJvbSBbZnJvbVJvd10gYW5kIGVuZGluZyBpbiBbdG9Sb3ddLlxuICAgKi9cbiAgcGFnZURhdGEoZGF0YTogYW55W10sIGZyb21Sb3c6IG51bWJlciwgdG9Sb3c6IG51bWJlcik6IGFueVtdIHtcbiAgICBpZiAoZnJvbVJvdyA+PSAxKSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShmcm9tUm93IC0gMSwgdG9Sb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gREFUQV9UQUJMRV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGREYXRhVGFibGVTZXJ2aWNlKTogVGREYXRhVGFibGVTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGREYXRhVGFibGVTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBEQVRBX1RBQkxFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGREYXRhVGFibGVTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGREYXRhVGFibGVTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IERBVEFfVEFCTEVfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=