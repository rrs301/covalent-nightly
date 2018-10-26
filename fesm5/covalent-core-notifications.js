import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var TdNotificationCountPositionY = {
    Top: 'top',
    Bottom: 'bottom',
    Center: 'center',
};
/** @enum {string} */
var TdNotificationCountPositionX = {
    Before: 'before',
    After: 'after',
    Center: 'center',
};
/** @type {?} */
var DEFAULT_NOTIFICATION_LIMIT = 99;
var TdNotificationCountComponent = /** @class */ (function () {
    function TdNotificationCountComponent() {
        this._notifications = 0;
        this._limit = DEFAULT_NOTIFICATION_LIMIT;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
        get: /**
         * @return {?}
         */
        function () {
            return this._positionX;
        },
        /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         */
        set: /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         * @param {?} positionX
         * @return {?}
         */
        function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        get: /**
         * @return {?}
         */
        function () {
            return this._positionY;
        },
        /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         */
        set: /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         * @param {?} positionY
         * @return {?}
         */
        function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         */
        set: /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         * @param {?} notifications
         * @return {?}
         */
        function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
        /**
         * limit?: number
         * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
         */
        set: /**
         * limit?: number
         * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
         * @param {?} limit
         * @return {?}
         */
        function (limit) {
            this._limit = limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         */
        get: /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         * @return {?}
         */
        function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         */
        get: /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         * @return {?}
         */
        function () {
            if (this._notifications > this._limit) {
                return this._limit + "+";
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         */
        get: /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         * @return {?}
         */
        function () {
            return this._notifications === true || (!isNaN((/** @type {?} */ (this._notifications))) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     */
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    TdNotificationCountComponent.prototype.ngAfterContentInit = /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    };
    /**
     * Method to check if element has any kind of content (elements or text)
     */
    /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    TdNotificationCountComponent.prototype._hasContent = /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    function () {
        if (this.content) {
            /** @type {?} */
            var contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
    TdNotificationCountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-notification-count',
                    template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"show\"\n     class=\"td-notification-count mat-{{color}}\"\n     [class.td-notification-top]=\"positionY === 'top'\"\n     [class.td-notification-bottom]=\"positionY === 'bottom'\"\n     [class.td-notification-before]=\"positionX === 'before'\"\n     [class.td-notification-after]=\"positionX === 'after'\"\n     [class.td-notification-center-y]=\"positionY === 'center'\"\n     [class.td-notification-center-x]=\"positionX === 'center'\"\n     [class.td-notification-no-count]=\"noCount\">\n  {{noCount ? '' : notificationsDisplay}}\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
                }] }
    ];
    TdNotificationCountComponent.propDecorators = {
        content: [{ type: ViewChild, args: ['content',] }],
        color: [{ type: Input }],
        positionX: [{ type: Input }],
        positionY: [{ type: Input }],
        notifications: [{ type: Input }],
        limit: [{ type: Input }],
        hideHost: [{ type: HostBinding, args: ['class.td-notification-hidden',] }]
    };
    return TdNotificationCountComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_NOTIFICATIONS = [
    TdNotificationCountComponent,
];
var CovalentNotificationsModule = /** @class */ (function () {
    function CovalentNotificationsModule() {
    }
    CovalentNotificationsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        TD_NOTIFICATIONS,
                    ],
                    exports: [
                        TD_NOTIFICATIONS,
                    ],
                },] }
    ];
    return CovalentNotificationsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentNotificationsModule, TdNotificationCountPositionY, TdNotificationCountPositionX, DEFAULT_NOTIFICATION_LIMIT, TdNotificationCountComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1ub3RpZmljYXRpb25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1jb3VudC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgICAgICAgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkge1xuICBUb3AgPSAndG9wJyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIENlbnRlciA9ICdjZW50ZXInLFxufVxuXG5leHBvcnQgZW51bSBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIHtcbiAgQmVmb3JlID0gJ2JlZm9yZScsXG4gIEFmdGVyID0gJ2FmdGVyJyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9MSU1JVDogbnVtYmVyID0gOTk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5vdGlmaWNhdGlvbi1jb3VudCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbi1jb3VudC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi1jb3VudC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5vdGlmaWNhdGlvbkNvdW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uczogbnVtYmVyIHwgYm9vbGVhbiA9IDA7XG4gIHByaXZhdGUgX3Bvc2l0aW9uWTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWTtcbiAgcHJpdmF0ZSBfcG9zaXRpb25YOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YO1xuICBwcml2YXRlIF9saW1pdDogbnVtYmVyID0gREVGQVVMVF9OT1RJRklDQVRJT05fTElNSVQ7XG5cbiAgLyoqXG4gICAqIERpdiBjb250ZW50IHdyYXBwZXIgb2YgYG5nLWNvbnRlbnRgLlxuICAgKi9cbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogXCJwcmltYXJ5XCIgfCBcImFjY2VudFwiIHwgXCJ3YXJuXCJcbiAgICogU2V0cyB0aGUgdGhlbWUgY29sb3Igb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuIERlZmF1bHRzIHRvIFwid2FyblwiXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAnd2Fybic7XG5cbiAgLyoqXG4gICAqIHBvc2l0aW9uWD86IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblggb3IgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB8IFwiY2VudGVyXCJcbiAgICogU2V0cyB0aGUgWCBwb3NpdGlvbiBvZiB0aGUgbm90aWZpY2F0aW9uIHRpcC5cbiAgICogRGVmYXVsdHMgdG8gXCJhZnRlclwiIGlmIGl0IGhhcyBjb250ZW50LCBlbHNlICdjZW50ZXInLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uWChwb3NpdGlvblg6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblgpIHtcbiAgICB0aGlzLl9wb3NpdGlvblggPSBwb3NpdGlvblg7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uWCgpOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25YO1xuICB9XG5cbiAgLyoqXG4gICAqIHBvc2l0aW9uWT86IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkgb3IgXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiXG4gICAqIFNldHMgdGhlIFkgcG9zaXRpb24gb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuXG4gICAqIERlZmF1bHRzIHRvIFwidG9wXCIgaWYgaXQgaGFzIGNvbnRlbnQsIGVsc2UgJ2NlbnRlcicuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb25ZKHBvc2l0aW9uWTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWSkge1xuICAgIHRoaXMuX3Bvc2l0aW9uWSA9IHBvc2l0aW9uWTtcbiAgfVxuICBnZXQgcG9zaXRpb25ZKCk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblk7XG4gIH1cblxuICAvKipcbiAgICogbm90aWZpY2F0aW9ucz86IG51bWJlciB8IGJvb2xlYW5cbiAgICogTnVtYmVyIGZvciB0aGUgbm90aWZpY2F0aW9uIGNvdW50LiBTaG93cyBjb21wb25lbnQgb25seSBpZiB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSBudW1iZXIgb3IgJ3RydWUnXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiBudW1iZXIgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbnM7XG4gIH1cblxuICAgLyoqXG4gICAgKiBsaW1pdD86IG51bWJlclxuICAgICogTGltaXQgZm9yIG5vdGlmaWNhdGlvbiBjb3VudC4gSWYgdGhlIG51bWJlciBvZiBub3RpZmljYXRpb25zIGlzIGdyZWF0ZXIgdGhhbiBsaW1pdCwgdGhlbiArIHdpbGwgYmUgYWRkZWQuIERlZmF1bHRzIHRvIDk5LlxuICAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBsaW1pdChsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGQtbm90aWZpY2F0aW9uLWhpZGRlbicpXG4gIGdldCBoaWRlSG9zdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuc2hvdyAmJiAhdGhpcy5faGFzQ29udGVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbXBvbmVudCBpbiBpdHMgJ25vQ291bnQnIHN0YXRlIGlmIFtub3RpZmljYXRpb25zXSBpcyBhIGJvb2xlYW4gJ3RydWUnLlxuICAgKiBNYWtlcyB0aGUgbm90aWZpY2F0aW9uIHRpcCBzaG93IHdpdGhvdXQgYSBjb3VudC5cbiAgICovXG4gIGdldCBub0NvdW50KCk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zID09PSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vdGlmaWNhdGlvbiBkaXNwbGF5IHN0cmluZyB3aGVuIGEgY291bnQgaXMgYXZhaWxhYmxlLlxuICAgKiBBbnl0aGluZyBvdmVyIDk5IGdldHMgc2V0IGFzIDk5K1xuICAgKi9cbiAgZ2V0IG5vdGlmaWNhdGlvbnNEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbnMgPiB0aGlzLl9saW1pdCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMuX2xpbWl0fStgO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucy50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIG5vdGlmaWNhdGlvbiB0aXAgb25seSB3aGVuIFtub3RpZmljYXRpb25zXSBpcyB0cnVlIG9yIGEgcG9zaXRpdmUgaW50ZWdlci5cbiAgICovXG4gIGdldCBzaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zID09PSB0cnVlIHx8ICghaXNOYU4oPGFueT50aGlzLl9ub3RpZmljYXRpb25zKSAmJiB0aGlzLl9ub3RpZmljYXRpb25zID4gMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgW3Bvc2l0aW9uWF0gYW5kIFtwb3NpdGlvblldIGhhdmUgYmVlbiBzZXQgYXMgaW5wdXRzLCBlbHNlIHVzZSBkZWZhdWx0cyBkZXBlbmRpbmcgb24gY29tcG9uZW50IGNvbnRlbnQuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wb3NpdGlvblgpIHtcbiAgICAgIHRoaXMucG9zaXRpb25YID0gdGhpcy5faGFzQ29udGVudCgpID8gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWC5BZnRlciA6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblguQ2VudGVyO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3Bvc2l0aW9uWSkge1xuICAgICAgdGhpcy5wb3NpdGlvblkgPSB0aGlzLl9oYXNDb250ZW50KCkgPyBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZLlRvcCA6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkuQ2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2hlY2sgaWYgZWxlbWVudCBoYXMgYW55IGtpbmQgb2YgY29udGVudCAoZWxlbWVudHMgb3IgdGV4dClcbiAgICovXG4gIHByaXZhdGUgX2hhc0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgbGV0IGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgcmV0dXJuIGNvbnRlbnRFbGVtZW50ICYmIChjb250ZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICEhY29udGVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkTm90aWZpY2F0aW9uQ291bnRDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1jb3VudC5jb21wb25lbnQnO1xuXG5jb25zdCBURF9OT1RJRklDQVRJT05TOiBUeXBlPGFueT5bXSA9IFtcbiAgVGROb3RpZmljYXRpb25Db3VudENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX05PVElGSUNBVElPTlMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9OT1RJRklDQVRJT05TLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudE5vdGlmaWNhdGlvbnNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztJQUlFLEtBQU0sS0FBSztJQUNYLFFBQVMsUUFBUTtJQUNqQixRQUFTLFFBQVE7Ozs7SUFJakIsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7O0FBR25CLElBQWEsMEJBQTBCLEdBQVcsRUFBRTtBQUVwRDtJQUFBO1FBUVUsbUJBQWMsR0FBcUIsQ0FBQyxDQUFDO1FBR3JDLFdBQU0sR0FBVywwQkFBMEIsQ0FBQzs7Ozs7UUFXM0MsVUFBSyxHQUFrQyxNQUFNLENBQUM7S0FvR3hEO0lBN0ZDLHNCQUNJLG1EQUFTOzs7O1FBR2I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7Ozs7Ozs7Ozs7UUFORCxVQUNjLFNBQXVDO1lBQ25ELElBQUksQ0FB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