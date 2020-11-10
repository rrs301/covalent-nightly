/**
 * @fileoverview added by tsickle
 * Generated from: steps.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CovalentCommonModule } from '@covalent/core/common';
// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective, } from './step.component';
// Nav Steps
import { TdNavStepsHorizontalComponent } from './nav/nav-steps-horizontal/nav-steps-horizontal.component';
import { TdNavStepsVerticalComponent } from './nav/nav-steps-vertical/nav-steps-vertical.component';
import { TdNavStepLinkComponent } from './nav/nav-step-link/nav-step-link.component';
/** @type {?} */
const TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
    TdNavStepsHorizontalComponent,
    TdNavStepsVerticalComponent,
    TdNavStepLinkComponent,
];
export class CovalentStepsModule {
}
CovalentStepsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatIconModule, MatRippleModule, PortalModule, ScrollingModule, CovalentCommonModule],
                declarations: [TD_STEPS],
                exports: [TD_STEPS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvc3RlcHMvc3RlcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUc3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sa0JBQWtCLENBQUM7O0FBRzFCLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztNQUUvRSxRQUFRLEdBQWdCO0lBQzVCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLHNCQUFzQjtDQUN2QjtBQU9ELE1BQU0sT0FBTyxtQkFBbUI7OztZQUwvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztnQkFDNUcsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IENvdmFsZW50Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuLy8gU3RlcHNcbmltcG9ydCB7IFRkU3RlcHNDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFN0ZXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFN0ZXBCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLWJvZHkvc3RlcC1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBUZFN0ZXBDb21wb25lbnQsXG4gIFRkU3RlcExhYmVsRGlyZWN0aXZlLFxuICBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlLFxuICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlLFxufSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcblxuLy8gTmF2IFN0ZXBzXG5pbXBvcnQgeyBUZE5hdlN0ZXBzSG9yaXpvbnRhbENvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi1zdGVwcy1ob3Jpem9udGFsL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZE5hdlN0ZXBzVmVydGljYWxDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYtc3RlcHMtdmVydGljYWwvbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX1NURVBTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRTdGVwc0NvbXBvbmVudCxcbiAgVGRTdGVwQ29tcG9uZW50LFxuICBUZFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gIFRkU3RlcEJvZHlDb21wb25lbnQsXG4gIFRkU3RlcExhYmVsRGlyZWN0aXZlLFxuICBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlLFxuICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlLFxuICBUZE5hdlN0ZXBzSG9yaXpvbnRhbENvbXBvbmVudCxcbiAgVGROYXZTdGVwc1ZlcnRpY2FsQ29tcG9uZW50LFxuICBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlLCBQb3J0YWxNb2R1bGUsIFNjcm9sbGluZ01vZHVsZSwgQ292YWxlbnRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtURF9TVEVQU10sXG4gIGV4cG9ydHM6IFtURF9TVEVQU10sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50U3RlcHNNb2R1bGUge31cbiJdfQ==