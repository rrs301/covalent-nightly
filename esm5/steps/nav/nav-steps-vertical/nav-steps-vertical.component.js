/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ViewChild, QueryList, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, ElementRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
var TdNavStepsVerticalComponent = /** @class */ (function () {
    function TdNavStepsVerticalComponent(_renderer, _changeDetectorRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._separators = [];
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    TdNavStepsVerticalComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._configureSteps();
            _this._changeDetectorRef.markForCheck();
        }));
        this._configureSteps();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdNavStepsVerticalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Set the step line separators and display numbers
     */
    /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    TdNavStepsVerticalComponent.prototype._configureSteps = /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._separators.forEach((/**
         * @param {?} separator
         * @return {?}
         */
        function (separator) {
            _this._renderer.removeChild(_this._stepList.nativeElement, separator);
        }));
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        function (step, index) {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                var separator = _this._renderer.createElement('div');
                _this._renderer.addClass(separator, 'td-vertical-line-wrapper');
                /** @type {?} */
                var separatorChild = _this._renderer.createElement('div');
                _this._renderer.addClass(separatorChild, 'td-vertical-line');
                _this._renderer.appendChild(separator, separatorChild);
                _this._separators.push(separator);
                _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        }));
    };
    TdNavStepsVerticalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nav[td-steps][vertical]',
                    template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-steps td-steps-vertical',
                    },
                    styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{position:absolute;top:-16px;height:34px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
                }] }
    ];
    /** @nocollapse */
    TdNavStepsVerticalComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdNavStepsVerticalComponent.propDecorators = {
        _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent,] }],
        _stepList: [{ type: ViewChild, args: ['stepList', { static: true },] }]
    };
    return TdNavStepsVerticalComponent;
}());
export { TdNavStepsVerticalComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._separators;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._destroyed;
    /** @type {?} */
    TdNavStepsVerticalComponent.prototype._steps;
    /** @type {?} */
    TdNavStepsVerticalComponent.prototype._stepList;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3N0ZXBzLyIsInNvdXJjZXMiOlsibmF2L25hdi1zdGVwcy12ZXJ0aWNhbC9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUVULHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVNsRjtJQXFCRSxxQ0FBb0IsU0FBb0IsRUFBVSxrQkFBcUM7UUFBbkUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFWL0UsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDOzs7O1FBR3ZCLGVBQVUsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQU95QixDQUFDOzs7O0lBRTNGLHdEQUFrQjs7O0lBQWxCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzdELEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyxxREFBZTs7Ozs7SUFBdkI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxTQUFzQjtZQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUMsQ0FBQzs7WUFDQyxVQUFVLEdBQTZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2hFLHdFQUF3RTtRQUN4RSxVQUFVLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLElBQTRCLEVBQUUsS0FBYTtZQUM3RCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUU7O29CQUN0QyxTQUFTLEdBQVEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsMEJBQTBCLENBQUMsQ0FBQzs7b0JBQzNELGNBQWMsR0FBUSxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM1RCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNyRztZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFFbkMsNk1BQWtEO29CQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsNEJBQTRCO3FCQUNwQzs7aUJBQ0Y7Ozs7Z0JBMUJDLFNBQVM7Z0JBQ1QsaUJBQWlCOzs7eUJBaUNoQixlQUFlLFNBQUMsc0JBQXNCOzRCQUV0QyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF3Q3pDLGtDQUFDO0NBQUEsQUEzREQsSUEyREM7U0FqRFksMkJBQTJCOzs7Ozs7SUFDdEMsa0RBQXdDOzs7Ozs7SUFHeEMsaURBQWlFOztJQUdqRSw2Q0FBbUY7O0lBRW5GLGdEQUErRDs7Ozs7SUFFbkQsZ0RBQTRCOzs7OztJQUFFLHlEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGROYXZTdGVwTGlua0NvbXBvbmVudCB9IGZyb20gJy4uL25hdi1zdGVwLWxpbmsvbmF2LXN0ZXAtbGluay5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBkaXJlY3Rpb25zIHRoYXQgc2Nyb2xsaW5nIGNhbiBnbyBpbiB3aGVuIHRoZSBoZWFkZXIncyB0YWJzIGV4Y2VlZCB0aGUgaGVhZGVyIHdpZHRoLiAnQWZ0ZXInXG4gKiB3aWxsIHNjcm9sbCB0aGUgaGVhZGVyIHRvd2FyZHMgdGhlIGVuZCBvZiB0aGUgdGFicyBsaXN0IGFuZCAnYmVmb3JlJyB3aWxsIHNjcm9sbCB0b3dhcmRzIHRoZVxuICogYmVnaW5uaW5nIG9mIHRoZSBsaXN0LlxuICovXG5leHBvcnQgdHlwZSBTY3JvbGxEaXJlY3Rpb24gPSAnYWZ0ZXInIHwgJ2JlZm9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25hdlt0ZC1zdGVwc11bdmVydGljYWxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3RkLXN0ZXBzIHRkLXN0ZXBzLXZlcnRpY2FsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwc1ZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBzdGVwc1xuICBAQ29udGVudENoaWxkcmVuKFRkTmF2U3RlcExpbmtDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcExpbmtDb21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgX3N0ZXBMaXN0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NvbmZpZ3VyZVN0ZXBzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RlcCBsaW5lIHNlcGFyYXRvcnMgYW5kIGRpc3BsYXkgbnVtYmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBfY29uZmlndXJlU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VwYXJhdG9ycy5mb3JFYWNoKChzZXBhcmF0b3I6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IpO1xuICAgIH0pO1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2V0IHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHN0ZXAgc28gY2FuIGRpc3BsYXkgdGhhdCBudW1iZXIgaW4gY2lyY2xlXG4gICAgc3RlcHNBcnJheS5mb3JFYWNoKChzdGVwOiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHNlcGFyYXRvcjogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvciwgJ3RkLXZlcnRpY2FsLWxpbmUtd3JhcHBlcicpO1xuICAgICAgICBsZXQgc2VwYXJhdG9yQ2hpbGQ6IGFueSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzZXBhcmF0b3JDaGlsZCwgJ3RkLXZlcnRpY2FsLWxpbmUnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yLCBzZXBhcmF0b3JDaGlsZCk7XG4gICAgICAgIHRoaXMuX3NlcGFyYXRvcnMucHVzaChzZXBhcmF0b3IpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yLCBzdGVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzdGVwLm51bWJlciA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgfVxufVxuIl19