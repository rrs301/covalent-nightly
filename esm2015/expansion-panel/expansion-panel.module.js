/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent, } from './expansion-panel.component';
import { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';
/** @type {?} */
const TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
export class CovalentExpansionPanelModule {
}
CovalentExpansionPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatRippleModule, MatIconModule, PortalModule],
                declarations: [TD_EXPANSION_PANEL],
                exports: [TD_EXPANSION_PANEL],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLCtCQUErQixFQUMvQiw4QkFBOEIsRUFDOUIsaUNBQWlDLEVBQ2pDLGdDQUFnQyxHQUNqQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztNQUU3RSxrQkFBa0IsR0FBZ0I7SUFDdEMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7Q0FDakM7QUFPRCxNQUFNLE9BQU8sNEJBQTRCOzs7WUFMeEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDckUsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7XG4gIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gIFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCxcbn0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxHcm91cENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0VYUEFOU0lPTl9QQU5FTDogVHlwZTxhbnk+W10gPSBbXG4gIFRkRXhwYW5zaW9uUGFuZWxHcm91cENvbXBvbmVudCxcbiAgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtURF9FWFBBTlNJT05fUEFORUxdLFxuICBleHBvcnRzOiBbVERfRVhQQU5TSU9OX1BBTkVMXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRFeHBhbnNpb25QYW5lbE1vZHVsZSB7fVxuIl19