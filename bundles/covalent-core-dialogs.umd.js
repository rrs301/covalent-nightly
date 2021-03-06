(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/dialog'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/cdk/drag-drop'), require('rxjs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/dialogs', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/dialog', '@angular/material/input', '@angular/material/button', '@angular/cdk/drag-drop', 'rxjs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.dialogs = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.dialog, global.ng.material.input, global.ng.material.button, global.ng.cdk.dragDrop, global.rxjs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.icon));
}(this, (function (exports, core, common, forms, dialog, input, button, dragDrop, rxjs, toolbar, tooltip, icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: dialog.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDialogTitleDirective = /** @class */ (function () {
        function TdDialogTitleDirective() {
        }
        return TdDialogTitleDirective;
    }());
    TdDialogTitleDirective.decorators = [
        { type: core.Directive, args: [{ selector: 'td-dialog-title' },] }
    ];
    var TdDialogContentDirective = /** @class */ (function () {
        function TdDialogContentDirective() {
        }
        return TdDialogContentDirective;
    }());
    TdDialogContentDirective.decorators = [
        { type: core.Directive, args: [{ selector: 'td-dialog-content' },] }
    ];
    var TdDialogActionsDirective = /** @class */ (function () {
        function TdDialogActionsDirective() {
        }
        return TdDialogActionsDirective;
    }());
    TdDialogActionsDirective.decorators = [
        { type: core.Directive, args: [{ selector: 'td-dialog-actions' },] }
    ];
    var TdDialogComponent = /** @class */ (function () {
        function TdDialogComponent() {
        }
        /**
         * @return {?}
         */
        TdDialogComponent.prototype.ngAfterContentInit = function () {
            if (this.dialogTitle.length > 1) {
                throw new Error('Duplicate td-dialog-title component at in td-dialog.');
            }
            if (this.dialogContent.length > 1) {
                throw new Error('Duplicate td-dialog-content component at in td-dialog.');
            }
            if (this.dialogActions.length > 1) {
                throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
            }
        };
        return TdDialogComponent;
    }());
    TdDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-dialog',
                    template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
                    styles: [".td-dialog-title{margin-bottom:20px;margin-top:0}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{left:16px;position:relative;top:16px}::ng-deep [dir=rtl] .td-dialog-actions{left:auto;right:16px}:host{display:block}:host .td-dialog-actions{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}:host .td-dialog-actions .td-dialog-spacer{-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{margin-left:8px;min-width:64px;padding-left:8px;padding-right:8px;text-transform:uppercase}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-left:inherit;margin-right:8px}"]
                }] }
    ];
    TdDialogComponent.propDecorators = {
        dialogTitle: [{ type: core.ContentChildren, args: [TdDialogTitleDirective, { descendants: true },] }],
        dialogContent: [{ type: core.ContentChildren, args: [TdDialogContentDirective, { descendants: true },] }],
        dialogActions: [{ type: core.ContentChildren, args: [TdDialogActionsDirective, { descendants: true },] }]
    };
    if (false) {
        /** @type {?} */
        TdDialogComponent.prototype.dialogTitle;
        /** @type {?} */
        TdDialogComponent.prototype.dialogContent;
        /** @type {?} */
        TdDialogComponent.prototype.dialogActions;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: alert-dialog/alert-dialog.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdAlertDialogComponent = /** @class */ (function () {
        /**
         * @param {?} _dialogRef
         */
        function TdAlertDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.closeButton = 'CLOSE';
        }
        /**
         * @return {?}
         */
        TdAlertDialogComponent.prototype.close = function () {
            this._dialogRef.close();
        };
        return TdAlertDialogComponent;
    }());
    TdAlertDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-alert-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{ closeButton }}</button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdAlertDialogComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef }
    ]; };
    if (false) {
        /** @type {?} */
        TdAlertDialogComponent.prototype.title;
        /** @type {?} */
        TdAlertDialogComponent.prototype.message;
        /** @type {?} */
        TdAlertDialogComponent.prototype.closeButton;
        /**
         * @type {?}
         * @private
         */
        TdAlertDialogComponent.prototype._dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: confirm-dialog/confirm-dialog.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdConfirmDialogComponent = /** @class */ (function () {
        /**
         * @param {?} _dialogRef
         */
        function TdConfirmDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
            this.isDestructive = false;
        }
        /**
         * @return {?}
         */
        TdConfirmDialogComponent.prototype.cancel = function () {
            this._dialogRef.close(false);
        };
        /**
         * @return {?}
         */
        TdConfirmDialogComponent.prototype.accept = function () {
            this._dialogRef.close(true);
        };
        return TdConfirmDialogComponent;
    }());
    TdConfirmDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-confirm-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      [color]=\"isDestructive ? 'warn' : 'accent'\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdConfirmDialogComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef }
    ]; };
    if (false) {
        /** @type {?} */
        TdConfirmDialogComponent.prototype.title;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.message;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.cancelButton;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.acceptButton;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.isDestructive;
        /**
         * @type {?}
         * @private
         */
        TdConfirmDialogComponent.prototype._dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: prompt-dialog/prompt-dialog.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdPromptDialogComponent = /** @class */ (function () {
        /**
         * @param {?} _dialogRef
         */
        function TdPromptDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
        }
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // focus input once everything is rendered and good to go
            Promise.resolve().then(( /**
             * @return {?}
             */function () {
                (( /** @type {?} */(_this._input.nativeElement))).focus();
            }));
        };
        /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
        TdPromptDialogComponent.prototype.handleInputFocus = function () {
            (( /** @type {?} */(this._input.nativeElement))).select();
        };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.cancel = function () {
            this._dialogRef.close();
        };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.accept = function () {
            this._dialogRef.close(this.value);
        };
        return TdPromptDialogComponent;
    }());
    TdPromptDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-prompt-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-input-wrapper{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}.td-dialog-input-wrapper .td-dialog-input{-ms-flex:1;box-sizing:border-box;flex:1}.td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdPromptDialogComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef }
    ]; };
    TdPromptDialogComponent.propDecorators = {
        _input: [{ type: core.ViewChild, args: ['input', { static: true },] }]
    };
    if (false) {
        /** @type {?} */
        TdPromptDialogComponent.prototype.title;
        /** @type {?} */
        TdPromptDialogComponent.prototype.message;
        /** @type {?} */
        TdPromptDialogComponent.prototype.value;
        /** @type {?} */
        TdPromptDialogComponent.prototype.cancelButton;
        /** @type {?} */
        TdPromptDialogComponent.prototype.acceptButton;
        /** @type {?} */
        TdPromptDialogComponent.prototype._input;
        /**
         * @type {?}
         * @private
         */
        TdPromptDialogComponent.prototype._dialogRef;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @record
     */
    function IDialogConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IDialogConfig.prototype.title;
        /** @type {?} */
        IDialogConfig.prototype.message;
    }
    /**
     * @record
     */
    function IAlertConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IAlertConfig.prototype.closeButton;
    }
    /**
     * @record
     */
    function IConfirmConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IConfirmConfig.prototype.acceptButton;
        /** @type {?|undefined} */
        IConfirmConfig.prototype.cancelButton;
        /** @type {?|undefined} */
        IConfirmConfig.prototype.isDestructive;
    }
    /**
     * @record
     */
    function IPromptConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IPromptConfig.prototype.value;
    }
    /**
     * @record
     * @template T
     */
    function IDraggableConfig() { }
    if (false) {
        /** @type {?} */
        IDraggableConfig.prototype.component;
        /** @type {?|undefined} */
        IDraggableConfig.prototype.config;
        /** @type {?|undefined} */
        IDraggableConfig.prototype.dragHandleSelectors;
        /** @type {?|undefined} */
        IDraggableConfig.prototype.draggableClass;
    }
    /**
     * @record
     * @template T
     */
    function IDraggableRefs() { }
    if (false) {
        /** @type {?} */
        IDraggableRefs.prototype.matDialogRef;
        /** @type {?} */
        IDraggableRefs.prototype.dragRefSubject;
    }
    var TdDialogService = /** @class */ (function () {
        /**
         * @param {?} _document
         * @param {?} _dialogService
         * @param {?} _dragDrop
         * @param {?} rendererFactory
         */
        function TdDialogService(_document, _dialogService, _dragDrop, rendererFactory) {
            this._document = _document;
            this._dialogService = _dialogService;
            this._dragDrop = _dragDrop;
            this.rendererFactory = rendererFactory;
            this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
        }
        /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         * @template T
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        TdDialogService.prototype.open = function (component, config) {
            return this._dialogService.open(component, config);
        };
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
        TdDialogService.prototype.closeAll = function () {
            this._dialogService.closeAll();
        };
        /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openAlert = function (config) {
            /** @type {?} */
            var dialogConfig = this._createConfig(config);
            /** @type {?} */
            var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
            /** @type {?} */
            var alertDialogComponent = dialogRef.componentInstance;
            alertDialogComponent.title = config.title;
            alertDialogComponent.message = config.message;
            if (config.closeButton) {
                alertDialogComponent.closeButton = config.closeButton;
            }
            return dialogRef;
        };
        /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         *     isDestructive?: boolean;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openConfirm = function (config) {
            /** @type {?} */
            var dialogConfig = this._createConfig(config);
            /** @type {?} */
            var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
            /** @type {?} */
            var confirmDialogComponent = dialogRef.componentInstance;
            confirmDialogComponent.title = config.title;
            confirmDialogComponent.message = config.message;
            if (config.acceptButton) {
                confirmDialogComponent.acceptButton = config.acceptButton;
            }
            if (config.isDestructive) {
                confirmDialogComponent.isDestructive = config.isDestructive;
            }
            if (config.cancelButton) {
                confirmDialogComponent.cancelButton = config.cancelButton;
            }
            return dialogRef;
        };
        /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openPrompt = function (config) {
            /** @type {?} */
            var dialogConfig = this._createConfig(config);
            /** @type {?} */
            var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
            /** @type {?} */
            var promptDialogComponent = dialogRef.componentInstance;
            promptDialogComponent.title = config.title;
            promptDialogComponent.message = config.message;
            promptDialogComponent.value = config.value;
            if (config.acceptButton) {
                promptDialogComponent.acceptButton = config.acceptButton;
            }
            if (config.cancelButton) {
                promptDialogComponent.cancelButton = config.cancelButton;
            }
            return dialogRef;
        };
        /**
         * Opens a draggable dialog containing the given component.
         * @template T
         * @param {?} __0
         * @return {?}
         */
        TdDialogService.prototype.openDraggable = function (_a) {
            var _this = this;
            var component = _a.component, config = _a.config, dragHandleSelectors = _a.dragHandleSelectors, draggableClass = _a.draggableClass;
            /** @type {?} */
            var matDialogRef = this._dialogService.open(component, config);
            /** @type {?} */
            var dragRefSubject = new rxjs.Subject();
            /** @type {?} */
            var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
            /** @type {?} */
            var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
            matDialogRef.afterOpened().subscribe(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var dialogElement = ( /** @type {?} */(_this._document.getElementById(matDialogRef.id)));
                /** @type {?} */
                var draggableElement = _this._dragDrop.createDrag(dialogElement);
                if (draggableClass) {
                    /** @type {?} */
                    var childComponent = dialogElement.firstElementChild;
                    _this._renderer2.addClass(childComponent, draggableClass);
                }
                if (dragHandleSelectors && dragHandleSelectors.length) {
                    /** @type {?} */
                    var dragHandles = dragHandleSelectors.reduce(( /**
                     * @param {?} acc
                     * @param {?} curr
                     * @return {?}
                     */function (acc, curr) { return __spread(acc, Array.from(dialogElement.querySelectorAll(curr))); }), []);
                    if (dragHandles.length > 0) {
                        draggableElement.withHandles(( /** @type {?} */(dragHandles)));
                    }
                }
                /** @type {?} */
                var rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
                if (rootElement) {
                    draggableElement.withRootElement(( /** @type {?} */(rootElement)));
                }
                /** @type {?} */
                var boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
                if (boundaryElement) {
                    draggableElement.withBoundaryElement(( /** @type {?} */(boundaryElement)));
                }
                dragRefSubject.next(draggableElement);
            }));
            return { matDialogRef: matDialogRef, dragRefSubject: dragRefSubject };
        };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype._createConfig = function (config) {
            /** @type {?} */
            var dialogConfig = new dialog.MatDialogConfig();
            dialogConfig.width = '400px';
            Object.assign(dialogConfig, config);
            return dialogConfig;
        };
        return TdDialogService;
    }());
    TdDialogService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    TdDialogService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: dialog.MatDialog },
        { type: dragDrop.DragDrop },
        { type: core.RendererFactory2 }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._renderer2;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._document;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._dialogService;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._dragDrop;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype.rendererFactory;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: window-dialog/window-dialog.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdWindowDialogComponent = /** @class */ (function () {
        function TdWindowDialogComponent() {
            this.docked = false;
            this.dockToggled = new core.EventEmitter();
            this.closed = new core.EventEmitter();
            this.toolbarHeight = 56;
        }
        /**
         * @return {?}
         */
        TdWindowDialogComponent.prototype.toggleDockedState = function () {
            this.dockToggled.emit(this.docked);
        };
        return TdWindowDialogComponent;
    }());
    TdWindowDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-window-dialog',
                    template: "<mat-toolbar\n  [color]=\"toolbarColor\"\n  class=\"td-window-dialog-toolbar\"\n  [style.min-height.px]=\"toolbarHeight\"\n  [style.cursor]=\"docked ? 'inherit' : 'move'\"\n>\n  <mat-toolbar-row [style.height.px]=\"toolbarHeight\">\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title td-window-dialog-title truncate\" flex>\n        {{ title }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed docking/undocking for now-->\n      <!-- <button mat-icon-button [matTooltip]=\"toggleDockedStateLabel\" (click)=\"toggleDockedState()\">\n        <mat-icon [attr.aria-label]=\"toggleDockedStateLabel\">\n          {{ docked ? 'unfold_more' : 'unfold_less' }}\n        </mat-icon>\n      </button> -->\n\n      <button\n        mat-icon-button\n        [matTooltip]=\"closeLabel\"\n        (click)=\"closed.emit()\"\n        class=\"td-window-dialog-close\"\n        [attr.data-test]=\"'close-button'\"\n      >\n        <mat-icon [attr.aria-label]=\"closeLabel\">close</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content></ng-content>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column;height:100%}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-window-dialog-title{margin-bottom:0}.td-window-dialog-close{margin-right:-8px}::ng-deep .td-window-dialog .mat-dialog-container{padding:0}"]
                }] }
    ];
    TdWindowDialogComponent.propDecorators = {
        toolbarColor: [{ type: core.Input }],
        docked: [{ type: core.Input }],
        title: [{ type: core.Input }],
        toggleDockedStateLabel: [{ type: core.Input }],
        closeLabel: [{ type: core.Input }],
        dockToggled: [{ type: core.Output }],
        closed: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        TdWindowDialogComponent.prototype.toolbarColor;
        /** @type {?} */
        TdWindowDialogComponent.prototype.docked;
        /** @type {?} */
        TdWindowDialogComponent.prototype.title;
        /** @type {?} */
        TdWindowDialogComponent.prototype.toggleDockedStateLabel;
        /** @type {?} */
        TdWindowDialogComponent.prototype.closeLabel;
        /** @type {?} */
        TdWindowDialogComponent.prototype.dockToggled;
        /** @type {?} */
        TdWindowDialogComponent.prototype.closed;
        /** @type {?} */
        TdWindowDialogComponent.prototype.toolbarHeight;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: dialogs.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIALOGS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
        TdDialogComponent,
        TdDialogTitleDirective,
        TdDialogActionsDirective,
        TdDialogContentDirective,
        TdWindowDialogComponent,
    ];
    /** @type {?} */
    var TD_DIALOGS_ENTRY_COMPONENTS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
    ];
    var CovalentDialogsModule = /** @class */ (function () {
        function CovalentDialogsModule() {
        }
        return CovalentDialogsModule;
    }());
    CovalentDialogsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        forms.FormsModule,
                        common.CommonModule,
                        dialog.MatDialogModule,
                        input.MatInputModule,
                        button.MatButtonModule,
                        toolbar.MatToolbarModule,
                        tooltip.MatTooltipModule,
                        icon.MatIconModule,
                    ],
                    declarations: [TD_DIALOGS],
                    exports: [TD_DIALOGS],
                    providers: [TdDialogService],
                },] }
    ];

    /** @enum {string} */
    var corners = {
        topRight: "topRight",
        bottomRight: "bottomRight",
        bottomLeft: "bottomLeft",
        topLeft: "topLeft",
    };
    /** @enum {string} */
    var cursors = {
        nesw: "nesw-resize",
        nwse: "nwse-resize",
    };
    /** @enum {string} */
    var verticalAlignment = {
        top: "top",
        bottom: "bottom",
    };
    /** @enum {string} */
    var horizontalAlignment = {
        right: "right",
        left: "left",
    };
    /** @type {?} */
    var cornerWidth = '16px';
    /** @type {?} */
    var offset = '0px';
    /** @type {?} */
    var minWidth = 200;
    /** @type {?} */
    var minHeight = 200;
    /**
     * @param {?} sizeString
     * @return {?}
     */
    function getPixels(sizeString) {
        return parseFloat((sizeString || '').replace('px', ''));
    }
    /**
     * @param {?} min
     * @param {?} num
     * @param {?} max
     * @return {?}
     */
    function clamp(min, num, max) {
        return Math.min(Math.max(num, min), max);
    }
    var ResizableDraggableDialog = /** @class */ (function () {
        /**
         * @param {?} _document
         * @param {?} _renderer2
         * @param {?} _dialogRef
         * @param {?} _dragRef
         */
        function ResizableDraggableDialog(_document, _renderer2, _dialogRef, _dragRef) {
            this._document = _document;
            this._renderer2 = _renderer2;
            this._dialogRef = _dialogRef;
            this._dragRef = _dragRef;
            this.cornerElements = [];
            this.pointerDownSubs = [];
            this._initialPositionReset();
            this._attachCorners();
        }
        /**
         * @return {?}
         */
        ResizableDraggableDialog.prototype.attach = function () {
            this.detach();
            this._attachCorners();
        };
        /**
         * @return {?}
         */
        ResizableDraggableDialog.prototype.detach = function () {
            var _this = this;
            this.pointerDownSubs.forEach(( /**
             * @param {?} sub
             * @return {?}
             */function (sub) { return sub.unsubscribe(); }));
            this.pointerDownSubs = [];
            this.cornerElements.forEach(( /**
             * @param {?} elem
             * @return {?}
             */function (elem) { return _this._renderer2.removeChild(_this._getDialogWrapper(), elem); }));
            this.cornerElements = [];
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._getDialogWrapper = function () {
            return (( /** @type {?} */(this._document.getElementById(this._dialogRef.id))) || {}).parentElement;
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._getViewportDimensions = function () {
            return this._getDialogWrapper().parentElement.getBoundingClientRect();
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._getDialogWrapperDimensions = function () {
            /** @type {?} */
            var dimensions = getComputedStyle(this._getDialogWrapper());
            return {
                width: getPixels(dimensions.width),
                height: getPixels(dimensions.height),
            };
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._initialPositionReset = function () {
            var _a = this._getViewportDimensions(), viewportWidth = _a.right, viewportHeight = _a.bottom;
            var _b = this._getDialogWrapperDimensions(), width = _b.width, height = _b.height;
            var _c = this._getDialogWrapper().style, originalDialogRight = _c.marginRight, originalDialogLeft = _c.marginLeft, originalDialogBottom = _c.marginBottom, originalDialogTop = _c.marginTop;
            /** @type {?} */
            var x;
            if (originalDialogLeft) {
                x = getPixels(originalDialogLeft);
            }
            else if (originalDialogRight) {
                x = viewportWidth - getPixels(originalDialogRight) - width;
            }
            else {
                x = (viewportWidth - width) / 2;
            }
            /** @type {?} */
            var y;
            if (originalDialogTop) {
                y = getPixels(originalDialogTop);
            }
            else if (originalDialogBottom) {
                y = viewportHeight - getPixels(originalDialogBottom) - height;
            }
            else {
                y = (viewportHeight - height) / 2;
            }
            // use drag ref's mechanisms for positioning instead of the dialog's
            this._dialogRef.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
            this._dragRef.setFreeDragPosition({ x: x, y: y });
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._attachCorners = function () {
            var _this = this;
            Object.values(corners).forEach(( /**
             * @param {?} corner
             * @return {?}
             */function (corner) {
                /** @type {?} */
                var element = _this._renderer2.createElement('div');
                _this.cornerElements = __spread(_this.cornerElements, [element]);
                _this._renderer2.setStyle(element, 'position', 'absolute');
                _this._renderer2.setStyle(element, 'width', cornerWidth);
                _this._renderer2.setStyle(element, 'height', cornerWidth);
                _this._renderer2.appendChild(_this._getDialogWrapper(), element);
                /** @type {?} */
                var cursor;
                /** @type {?} */
                var topBottom;
                /** @type {?} */
                var rightLeft;
                if (corner === corners.topRight) {
                    cursor = cursors.nesw;
                    topBottom = verticalAlignment.top;
                    rightLeft = horizontalAlignment.right;
                }
                else if (corner === corners.bottomRight) {
                    cursor = cursors.nwse;
                    topBottom = verticalAlignment.bottom;
                    rightLeft = horizontalAlignment.right;
                    /** @type {?} */
                    var icon = _this._renderer2.createElement('i');
                    _this._renderer2.addClass(icon, 'material-icons');
                    _this._renderer2.appendChild(icon, _this._renderer2.createText('filter_list'));
                    _this._renderer2.appendChild(element, icon);
                    _this._renderer2.setStyle(icon, 'transform', "rotate(" + 315 + "deg) translate(0px, " + offset + ")");
                    _this._renderer2.setStyle(icon, 'font-size', cornerWidth);
                }
                else if (corner === corners.bottomLeft) {
                    cursor = cursors.nesw;
                    topBottom = verticalAlignment.bottom;
                    rightLeft = horizontalAlignment.left;
                }
                else if (corner === corners.topLeft) {
                    cursor = cursors.nwse;
                    topBottom = verticalAlignment.top;
                    rightLeft = horizontalAlignment.left;
                }
                _this._renderer2.setStyle(element, topBottom, offset);
                _this._renderer2.setStyle(element, rightLeft, offset);
                _this._renderer2.setStyle(element, 'cursor', cursor);
                /** @type {?} */
                var pointerDownSub = rxjs.fromEvent(element, 'pointerdown').subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this._handleMouseDown(event, corner);
                }));
                _this.pointerDownSubs = __spread(_this.pointerDownSubs, [pointerDownSub]);
            }));
        };
        /**
         * @private
         * @param {?} event
         * @param {?} corner
         * @return {?}
         */
        ResizableDraggableDialog.prototype._handleMouseDown = function (event, corner) {
            var _this = this;
            this._renderer2.setStyle(( /** @type {?} */(this._document.body)), 'user-select', 'none');
            var _a = this._getDialogWrapperDimensions(), originalWidth = _a.width, originalHeight = _a.height;
            /** @type {?} */
            var originalMouseX = event.pageX;
            /** @type {?} */
            var originalMouseY = event.pageY;
            var _b = this._dragRef.getFreeDragPosition(), currentTransformX = _b.x, currentTransformY = _b.y;
            var _c = this._getDialogWrapper().getBoundingClientRect(), distanceFromBottom = _c.bottom, distanceFromRight = _c.right;
            var _d = this._getViewportDimensions(), viewportWidth = _d.right, viewportHeight = _d.bottom;
            /** @type {?} */
            var mouseMoveSub = rxjs.fromEvent(window, 'pointermove').subscribe(( /**
             * @param {?} e
             * @return {?}
             */function (e) {
                e.preventDefault(); // prevent highlighting of text when dragging
                // prevent highlighting of text when dragging
                /** @type {?} */
                var yDelta = clamp(0, e.pageY, viewportHeight) - originalMouseY;
                /** @type {?} */
                var xDelta = clamp(0, e.pageX, viewportWidth) - originalMouseX;
                /** @type {?} */
                var newHeight;
                /** @type {?} */
                var newWidth;
                /** @type {?} */
                var newTransformY = 0;
                /** @type {?} */
                var newTransformX = 0;
                // top right
                if (corner === corners.topRight) {
                    newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                    newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
                    newTransformX = currentTransformX;
                }
                // bottom right
                else if (corner === corners.bottomRight) {
                    newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                    newTransformY = currentTransformY;
                    newTransformX = currentTransformX;
                }
                // bottom left
                else if (corner === corners.bottomLeft) {
                    newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                    newTransformY = currentTransformY;
                    newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
                }
                // top left
                else if (corner === corners.topLeft) {
                    newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                    newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
                    newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
                }
                _this._dialogRef.updateSize(newWidth + "px", newHeight + "px");
                _this._dragRef.setFreeDragPosition({
                    x: newTransformX,
                    y: newTransformY,
                });
            }));
            /** @type {?} */
            var mouseUpSub = rxjs.merge(rxjs.fromEvent(window, 'pointerup'), rxjs.fromEvent(window, 'pointercancel')).subscribe(( /**
             * @return {?}
             */function () {
                _this._renderer2.removeStyle(( /** @type {?} */(_this._document.body)), 'user-select');
                mouseMoveSub.unsubscribe();
                mouseUpSub.unsubscribe();
            }));
        };
        return ResizableDraggableDialog;
    }());
    if (false) {
        /** @type {?} */
        ResizableDraggableDialog.prototype.cornerElements;
        /** @type {?} */
        ResizableDraggableDialog.prototype.pointerDownSubs;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._document;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._renderer2;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._dialogRef;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._dragRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-core-dialogs.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.ResizableDraggableDialog = ResizableDraggableDialog;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogService = TdDialogService;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;
    exports.ɵa = TdWindowDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-dialogs.umd.js.map
