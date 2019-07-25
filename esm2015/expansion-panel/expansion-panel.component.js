/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation, } from '@covalent/core/common';
export class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-header]ng-template',
            },] }
];
/** @nocollapse */
TdExpansionPanelHeaderDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-label]ng-template',
            },] }
];
/** @nocollapse */
TdExpansionPanelLabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelSublabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-sublabel]ng-template',
            },] }
];
/** @nocollapse */
TdExpansionPanelSublabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdExpansionPanelSummaryComponent {
}
TdExpansionPanelSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-summary',
                template: '<ng-content></ng-content>'
            }] }
];
export class TdExpansionPanelBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
export class TdExpansionPanelComponent extends _TdExpansionPanelMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        super();
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        this.collapsed = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel');
    }
    /**
     * expand?: boolean
     * Toggles [TdExpansionPanelComponent] between expand/collapse.
     * @param {?} expand
     * @return {?}
     */
    set expand(expand) {
        this._setExpand(coerceBooleanProperty(expand));
    }
    /**
     * @return {?}
     */
    get expand() {
        return this._expand;
    }
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    clickEvent() {
        this._setExpand(!this._expand);
    }
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    toggle() {
        return this._setExpand(!this._expand);
    }
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    open() {
        return this._setExpand(true);
    }
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    close() {
        return this._setExpand(false);
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    }
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @param {?} newExpand
     * @return {?}
     */
    _setExpand(newExpand) {
        if (this.disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                this._onExpanded();
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                this._onCollapsed();
            }
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    _onExpanded() {
        this.expanded.emit(undefined);
    }
    /**
     * @return {?}
     */
    _onCollapsed() {
        this.collapsed.emit(undefined);
    }
}
TdExpansionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel',
                template: "<div\n  class=\"td-expansion-panel-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : 0\"\n  (keydown.enter)=\"clickEvent()\"\n  (click)=\"clickEvent()\"\n>\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{ label }}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{ sublabel }}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                inputs: ['disabled', 'disableRipple'],
                animations: [tdCollapseAnimation, tdRotateAnimation],
                styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
            }] }
];
/** @nocollapse */
TdExpansionPanelComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdExpansionPanelComponent.propDecorators = {
    expansionPanelHeader: [{ type: ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
    expansionPanelLabel: [{ type: ContentChild, args: [TdExpansionPanelLabelDirective,] }],
    expansionPanelSublabel: [{ type: ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    expand: [{ type: Input, args: ['expand',] }],
    expanded: [{ type: Output }],
    collapsed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TdExpansionPanelComponent.prototype._expand;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelHeader;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelLabel;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelSublabel;
    /**
     * label?: string
     * Sets label of [TdExpansionPanelComponent] header.
     * Defaults to 'Click to expand'
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.label;
    /**
     * sublabel?: string
     * Sets sublabel of [TdExpansionPanelComponent] header.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.sublabel;
    /**
     * expanded?: function
     * Event emitted when [TdExpansionPanelComponent] is expanded.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.expanded;
    /**
     * collapsed?: function
     * Event emitted when [TdExpansionPanelComponent] is collapsed.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.collapsed;
    /** @type {?} */
    TdExpansionPanelComponent.prototype._renderer;
    /** @type {?} */
    TdExpansionPanelComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsYUFBYSxFQUViLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSx1QkFBdUIsQ0FBQztBQUsvQixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsdUJBQXVCOzs7OztJQUMxRSxZQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO1FBQzNFLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QzthQUNuRDs7OztZQXJCQyxXQUFXO1lBQ1gsZ0JBQWdCOztBQThCbEIsTUFBTSxPQUFPLDhCQUErQixTQUFRLHVCQUF1Qjs7Ozs7SUFDekUsWUFBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxLQUFLLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7YUFDbEQ7Ozs7WUE5QkMsV0FBVztZQUNYLGdCQUFnQjs7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Q2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQTNIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFFOUIsbXpDQUErQztnQkFDL0MsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztnQkFDckMsVUFBVSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7O2FBQ3JEOzs7O1lBM0RDLFNBQVM7WUFEVCxVQUFVOzs7bUNBZ0VULFlBQVksU0FBQywrQkFBK0I7a0NBQzVDLFlBQVksU0FBQyw4QkFBOEI7cUNBQzNDLFlBQVksU0FBQyxpQ0FBaUM7b0JBTzlDLEtBQUs7dUJBTUwsS0FBSztxQkFNTCxLQUFLLFNBQUMsUUFBUTt1QkFZZCxNQUFNO3dCQU1OLE1BQU07Ozs7SUF6Q1AsNENBQWlDOztJQUVqQyx5REFBcUc7O0lBQ3JHLHdEQUFrRzs7SUFDbEcsMkRBQTJHOzs7Ozs7O0lBTzNHLDBDQUF1Qjs7Ozs7O0lBTXZCLDZDQUEwQjs7Ozs7O0lBa0IxQiw2Q0FBa0U7Ozs7OztJQU1sRSw4Q0FBbUU7O0lBRXZELDhDQUE0Qjs7SUFBRSxnREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7XG4gIHRkQ29sbGFwc2VBbmltYXRpb24sXG4gIElDYW5EaXNhYmxlLFxuICBtaXhpbkRpc2FibGVkLFxuICBJQ2FuRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICB0ZFJvdGF0ZUFuaW1hdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLXN1YmxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tc3VtbWFyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50IHt9XG5cbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRFeHBhbnNpb25QYW5lbE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkRXhwYW5zaW9uUGFuZWxCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb24sIHRkUm90YXRlQW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCBleHRlbmRzIF9UZEV4cGFuc2lvblBhbmVsTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcbiAgcHJpdmF0ZSBfZXhwYW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbEhlYWRlcjogVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmUpIGV4cGFuc2lvblBhbmVsTGFiZWw6IFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmUpIGV4cGFuc2lvblBhbmVsU3VibGFiZWw6IFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogbGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBsYWJlbCBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byAnQ2xpY2sgdG8gZXhwYW5kJ1xuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBzdWJsYWJlbCBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaGVhZGVyLlxuICAgKi9cbiAgQElucHV0KCkgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogZXhwYW5kPzogYm9vbGVhblxuICAgKiBUb2dnbGVzIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBiZXR3ZWVuIGV4cGFuZC9jb2xsYXBzZS5cbiAgICovXG4gIEBJbnB1dCgnZXhwYW5kJylcbiAgc2V0IGV4cGFuZChleHBhbmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZXRFeHBhbmQoY29lcmNlQm9vbGVhblByb3BlcnR5KGV4cGFuZCkpO1xuICB9XG4gIGdldCBleHBhbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBleHBhbmRlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgZXhwYW5kZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogY29sbGFwc2VkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBjb2xsYXBzZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5zaW9uLXBhbmVsJyk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGNsaWNrZWQuXG4gICAqL1xuICBjbGlja0V2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldEV4cGFuZCghdGhpcy5fZXhwYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgZXhwYW5kIHN0YXRlIG9mIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIHRvZ2dsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0RXhwYW5kKCF0aGlzLl9leHBhbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgY2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZChmYWxzZSk7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYgJiYgdGhpcy5fZXhwYW5kKSB7XG4gICAgICB0aGlzLl9leHBhbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uQ29sbGFwc2VkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjaGFuZ2UgZXhwYW5kIHN0YXRlIGludGVybmFsbHkgYW5kIGVtaXQgdGhlIFtvbkV4cGFuZGVkXSBldmVudCBpZiAndHJ1ZScgb3IgW29uQ29sbGFwc2VkXVxuICAgKiBldmVudCBpZiAnZmFsc2UnLiAoQmxvY2tlZCBpZiBbZGlzYWJsZWRdIGlzICd0cnVlJylcbiAgICovXG4gIHByaXZhdGUgX3NldEV4cGFuZChuZXdFeHBhbmQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZXhwYW5kICE9PSBuZXdFeHBhbmQpIHtcbiAgICAgIHRoaXMuX2V4cGFuZCA9IG5ld0V4cGFuZDtcbiAgICAgIGlmIChuZXdFeHBhbmQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5kZWQnKTtcbiAgICAgICAgdGhpcy5fb25FeHBhbmRlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5kZWQnKTtcbiAgICAgICAgdGhpcy5fb25Db2xsYXBzZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9vbkV4cGFuZGVkKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQuZW1pdCh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25Db2xsYXBzZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh1bmRlZmluZWQpO1xuICB9XG59XG4iXX0=