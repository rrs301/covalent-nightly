/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent, TdDataTableColumnRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
/** @type {?} */
var TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
var CovalentDataTableModule = /** @class */ (function () {
    function CovalentDataTableModule() {
    }
    CovalentDataTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MatCheckboxModule, MatTooltipModule, MatIconModule, MatPseudoCheckboxModule],
                    declarations: [TD_DATA_TABLE],
                    exports: [TD_DATA_TABLE],
                },] }
    ];
    return CovalentDataTableModule;
}());
export { CovalentDataTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUFFcEYsYUFBYSxHQUFnQjtJQUNqQyxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBRTVCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qix5QkFBeUI7Q0FDMUI7QUFFRDtJQUFBO0lBS3NDLENBQUM7O2dCQUx0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQztvQkFDcEcsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ3pCOztJQUNxQyw4QkFBQztDQUFBLEFBTHZDLElBS3VDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LCBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtdGFibGUvZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX0RBVEFfVEFCTEU6IFR5cGU8YW55PltdID0gW1xuICBUZERhdGFUYWJsZUNvbXBvbmVudCxcbiAgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcblxuICBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCxcbiAgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCxcbiAgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlVGFibGVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtURF9EQVRBX1RBQkxFXSxcbiAgZXhwb3J0czogW1REX0RBVEFfVEFCTEVdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudERhdGFUYWJsZU1vZHVsZSB7fVxuIl19