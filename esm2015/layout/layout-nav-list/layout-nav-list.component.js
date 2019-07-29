/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
export class TdLayoutNavListComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '350px';
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         */
        this.containerAutosize = false;
    }
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutNavListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav-list',
                template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav\n      #sidenav\n      position=\"start\"\n      [mode]=\"mode\"\n      [opened]=\"opened\"\n      [disableClose]=\"disableClose\"\n      [style.max-width]=\"sidenavWidth\"\n      [style.min-width]=\"sidenavWidth\"\n    >\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span\n          *ngIf=\"icon || logo || toolbarTitle\"\n          class=\"td-layout-nav-list-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n        >\n          <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>\n",
                styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"]
            }] }
];
/** @nocollapse */
TdLayoutNavListComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional }] }
];
TdLayoutNavListComponent.propDecorators = {
    sidenav: [{ type: ViewChild, args: [MatSidenav, { static: true },] }],
    toolbarTitle: [{ type: Input, args: ['toolbarTitle',] }],
    icon: [{ type: Input, args: ['icon',] }],
    logo: [{ type: Input, args: ['logo',] }],
    color: [{ type: Input, args: ['color',] }],
    mode: [{ type: Input, args: ['mode',] }],
    opened: [{ type: Input, args: ['opened',] }],
    sidenavWidth: [{ type: Input, args: ['sidenavWidth',] }],
    containerAutosize: [{ type: Input, args: ['containerAutosize',] }],
    navigationRoute: [{ type: Input, args: ['navigationRoute',] }]
};
if (false) {
    /** @type {?} */
    TdLayoutNavListComponent.prototype.sidenav;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.toolbarTitle;
    /**
     * icon?: string
     * icon name to be displayed before the title
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.icon;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.logo;
    /**
     * color?: string
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.color;
    /**
     * mode?: 'side', 'push' or 'over'
     *
     * The mode or styling of the sidenav.
     * Defaults to "side".
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.mode;
    /**
     * opened?: boolean
     * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
     * Defaults to "true".
     *
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.opened;
    /**
     * sidenavWidth?: string
     *
     * Sets the "width" of the sidenav in either "px" or "%"
     * Defaults to "350px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.sidenavWidth;
    /**
     * containerAutosize?: boolean
     *
     * Sets "autosize" of the sidenav-container.
     * Defaults to "false".
     *
     * See documentation for more info and potential performance risks.
     *
     * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.containerAutosize;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and toolbarTitle.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.navigationRoute;
    /**
     * @type {?}
     * @private
     */
    TdLayoutNavListComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC1uYXYtbGlzdC9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLDJCQUEyQixDQUFDO0FBUzlFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFrR25DLFlBQWdDLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROzs7Ozs7O1FBcEUvQixVQUFLLEdBQVcsU0FBUyxDQUFDOzs7Ozs7Ozs7O1FBVzNCLFNBQUksR0FBNkIsTUFBTSxDQUFDOzs7Ozs7Ozs7O1FBV3RDLFdBQU0sR0FBWSxJQUFJLENBQUM7Ozs7Ozs7OztRQVVqQixpQkFBWSxHQUFXLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFZMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBd0JiLENBQUM7Ozs7OztJQVhuRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBS0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBSUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQUtNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUtNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFLTSxLQUFLO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQWxJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFFOUIsd3BEQUErQzs7YUFDaEQ7Ozs7WUFWUSxNQUFNLHVCQTZHQSxRQUFROzs7c0JBakdwQixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFPdEMsS0FBSyxTQUFDLGNBQWM7bUJBTXBCLEtBQUssU0FBQyxNQUFNO21CQVFaLEtBQUssU0FBQyxNQUFNO29CQVFaLEtBQUssU0FBQyxPQUFPO21CQVdiLEtBQUssU0FBQyxNQUFNO3FCQVdaLEtBQUssU0FBQyxRQUFROzJCQVVkLEtBQUssU0FBQyxjQUFjO2dDQVlwQixLQUFLLFNBQUMsbUJBQW1COzhCQU96QixLQUFLLFNBQUMsaUJBQWlCOzs7O0lBaEZ4QiwyQ0FBNkQ7Ozs7Ozs7SUFPN0QsZ0RBQTRDOzs7Ozs7SUFNNUMsd0NBQTRCOzs7Ozs7OztJQVE1Qix3Q0FBNEI7Ozs7Ozs7O0lBUTVCLHlDQUEwQzs7Ozs7Ozs7Ozs7SUFXMUMsd0NBQXVEOzs7Ozs7Ozs7OztJQVd2RCwwQ0FBd0M7Ozs7Ozs7Ozs7SUFVeEMsZ0RBQXNEOzs7Ozs7Ozs7Ozs7SUFZdEQscURBQStEOzs7Ozs7O0lBTy9ELG1EQUFrRDs7Ozs7SUFpQnRDLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJTGF5b3V0VG9nZ2xhYmxlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1uYXYtbGlzdCcsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgSUxheW91dFRvZ2dsYWJsZSB7XG4gIEBWaWV3Q2hpbGQoTWF0U2lkZW5hdiwgeyBzdGF0aWM6IHRydWUgfSkgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICAvKipcbiAgICogdG9vbGJhclRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiB0b29sYmFyLlxuICAgKi9cbiAgQElucHV0KCd0b29sYmFyVGl0bGUnKSB0b29sYmFyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiAnc2lkZScsICdwdXNoJyBvciAnb3ZlcidcbiAgICpcbiAgICogVGhlIG1vZGUgb3Igc3R5bGluZyBvZiB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJzaWRlXCIuXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnbW9kZScpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdzaWRlJztcblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuIFVzZSB0aGlzIGJpbmRpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJ0cnVlXCIuXG4gICAqXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJykgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogc2lkZW5hdldpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIFwid2lkdGhcIiBvZiB0aGUgc2lkZW5hdiBpbiBlaXRoZXIgXCJweFwiIG9yIFwiJVwiXG4gICAqIERlZmF1bHRzIHRvIFwiMzUwcHhcIi5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdzaWRlbmF2V2lkdGgnKSBzaWRlbmF2V2lkdGg6IHN0cmluZyA9ICczNTBweCc7XG5cbiAgLyoqXG4gICAqIGNvbnRhaW5lckF1dG9zaXplPzogYm9vbGVhblxuICAgKlxuICAgKiBTZXRzIFwiYXV0b3NpemVcIiBvZiB0aGUgc2lkZW5hdi1jb250YWluZXIuXG4gICAqIERlZmF1bHRzIHRvIFwiZmFsc2VcIi5cbiAgICpcbiAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mbyBhbmQgcG90ZW50aWFsIHBlcmZvcm1hbmNlIHJpc2tzLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2L3NpZGVuYXYubWQjcmVzaXppbmctYW4tb3Blbi1zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckF1dG9zaXplJykgY29udGFpbmVyQXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHRvb2xiYXJUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgRVNDYCBzaG91bGQgY2xvc2UgdGhlIHNpZGVuYXZcbiAgICogU2hvdWxkIG9ubHkgY2xvc2UgaXQgZm9yIGBwdXNoYCBhbmQgYG92ZXJgIG1vZGVzXG4gICAqL1xuICBnZXQgZGlzYWJsZUNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdzaWRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LnRvZ2dsZSghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxufVxuIl19