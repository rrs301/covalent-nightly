/**
 * @fileoverview added by tsickle
 * Generated from: data-table-cell/data-table-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';
export class TdDataTableCellComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    /**
     * align?: 'start' | 'center' | 'end'
     * Makes cell content align on demand
     * Defaults to 'left', overrides numeric
     * @param {?} align
     * @return {?}
     */
    set align(align) {
        this._align = align;
    }
    /**
     * @return {?}
     */
    get align() {
        return this._align;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
}
TdDataTableCellComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td[td-data-table-cell]',
                template: "<div\n  class=\"td-data-table-cell-content-wrapper\"\n  [class.td-data-table-cell-numeric]=\"numeric\"\n  [class.td-data-table-cell-align-center]=\"align === 'center'\"\n  [class.td-data-table-cell-align-end]=\"align === 'end'\"\n  [class.td-data-table-cell-align-start]=\"align === 'start'\"\n>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{padding:0;text-align:left;vertical-align:middle}[dir=rtl] :host,body[dir=rtl] :host,html[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%;padding:0 28px}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:0}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper,body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper,html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:0}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper,body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper,html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper,body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper,html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper,body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper,html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:none}:host.mat-numeric{text-align:right}[dir=rtl] :host.mat-numeric,body[dir=rtl] :host.mat-numeric,html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableCellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableCellComponent.propDecorators = {
    numeric: [{ type: Input }],
    align: [{ type: Input }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDataTableCellComponent.prototype._align;
    /**
     * numeric?: boolean
     * Makes cell follow the numeric data-table specs.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableCellComponent.prototype.numeric;
    /**
     * @type {?}
     * @private
     */
    TdDataTableCellComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdDataTableCellComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVyRixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQTRCbkMsWUFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7OztRQXBCaEUsWUFBTyxHQUFZLEtBQUssQ0FBQztRQXFCaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7Ozs7OztJQWZELElBQ0ksS0FBSyxDQUFDLEtBQTJCO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUVsQywwVkFBK0M7O2FBQ2hEOzs7O1lBVHFDLFVBQVU7WUFBckIsU0FBUzs7O3NCQWtCakMsS0FBSztvQkFPTCxLQUFLOzBCQVFMLFdBQVcsU0FBQyxtQkFBbUI7Ozs7Ozs7SUF0QmhDLDBDQUFxQzs7Ozs7OztJQU9yQywyQ0FBa0M7Ozs7O0lBb0J0QiwrQ0FBK0I7Ozs7O0lBQUUsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBUZERhdGFUYWJsZUNlbGxBbGlnbiA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndGRbdGQtZGF0YS10YWJsZS1jZWxsXScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfYWxpZ246IFRkRGF0YVRhYmxlQ2VsbEFsaWduO1xuXG4gIC8qKlxuICAgKiBudW1lcmljPzogYm9vbGVhblxuICAgKiBNYWtlcyBjZWxsIGZvbGxvdyB0aGUgbnVtZXJpYyBkYXRhLXRhYmxlIHNwZWNzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoKSBudW1lcmljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGFsaWduPzogJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCdcbiAgICogTWFrZXMgY2VsbCBjb250ZW50IGFsaWduIG9uIGRlbWFuZFxuICAgKiBEZWZhdWx0cyB0byAnbGVmdCcsIG92ZXJyaWRlcyBudW1lcmljXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ24oYWxpZ246IFRkRGF0YVRhYmxlQ2VsbEFsaWduKSB7XG4gICAgdGhpcy5fYWxpZ24gPSBhbGlnbjtcbiAgfVxuICBnZXQgYWxpZ24oKTogVGREYXRhVGFibGVDZWxsQWxpZ24ge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LW51bWVyaWMnKVxuICBnZXQgYmluZE51bWVyaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnVtZXJpYztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNlbGwnKTtcbiAgfVxufVxuIl19