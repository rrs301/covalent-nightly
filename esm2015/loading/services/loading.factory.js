/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, SkipSelf, Optional } from '@angular/core';
import { Injector } from '@angular/core';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { TdLoadingComponent, LoadingStyle } from '../loading.component';
/**
 * @record
 */
export function IInternalLoadingOptions() { }
if (false) {
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.height;
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.style;
}
/**
 * @record
 */
export function ILoadingRef() { }
if (false) {
    /** @type {?} */
    ILoadingRef.prototype.observable;
    /** @type {?} */
    ILoadingRef.prototype.componentRef;
    /** @type {?|undefined} */
    ILoadingRef.prototype.subject;
    /** @type {?|undefined} */
    ILoadingRef.prototype.times;
}
/**
 * NOTE: \@internal usage only.
 */
export class TdLoadingFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _overlay
     * @param {?} _injector
     */
    constructor(_componentFactoryResolver, _overlay, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._overlay = _overlay;
        this._injector = _injector;
    }
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @return {?}
     */
    createFullScreenComponent(options) {
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.FullScreen;
        /** @type {?} */
        let loadingRef = this._initializeContext();
        /** @type {?} */
        let loading = false;
        /** @type {?} */
        let overlayRef;
        loadingRef.observable
            .subscribe((registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new ComponentPortal(TdLoadingComponent));
                this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.startInAnimation();
                loadingRef.componentRef.changeDetectorRef.detectChanges();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
                let subs = loadingRef.componentRef.instance.startOutAnimation().subscribe(() => {
                    subs.unsubscribe();
                    loadingRef.componentRef.destroy();
                    overlayRef.detach();
                    overlayRef.dispose();
                });
            }
        });
        return loadingRef;
    }
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    createOverlayComponent(options, viewContainerRef, templateRef) {
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.Overlay;
        /** @type {?} */
        let loadingRef = this._createComponent(options);
        /** @type {?} */
        let loading = false;
        loadingRef.componentRef.instance.content = new TemplatePortal(templateRef, viewContainerRef);
        viewContainerRef.clear();
        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        loadingRef.observable
            .subscribe((registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.startOutAnimation();
            }
        });
        return loadingRef;
    }
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    createReplaceComponent(options, viewContainerRef, templateRef, context) {
        /** @type {?} */
        let nativeElement = (/** @type {?} */ (templateRef.elementRef.nativeElement));
        ((/** @type {?} */ (options))).height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.None;
        /** @type {?} */
        let loadingRef = this._createComponent(options);
        /** @type {?} */
        let loading = false;
        viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable
            .subscribe((registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                /** @type {?} */
                let index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.clear();
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
                let subs = loadingRef.componentRef.instance.startOutAnimation().subscribe(() => {
                    subs.unsubscribe();
                    // passing context so when the template is re-attached, we can keep the reference of the variables
                    /** @type {?} */
                    let cdr = viewContainerRef.createEmbeddedView(templateRef, context);
                    viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                    /**
                     * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                     * with "OnPush" change detection
                     */
                    cdr.detectChanges();
                    cdr.markForCheck();
                });
            }
        });
        return loadingRef;
    }
    /**
     * Creates a fullscreen overlay for the loading usage.
     * @return {?}
     */
    _createOverlay() {
        /** @type {?} */
        let state = new OverlayConfig();
        state.hasBackdrop = false;
        state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state);
    }
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @param {?} options
     * @return {?}
     */
    _createComponent(options) {
        /** @type {?} */
        let compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent).create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    }
    /**
     * Initialize context for loading component.
     * @return {?}
     */
    _initializeContext() {
        /** @type {?} */
        let subject = new Subject();
        return {
            observable: subject.asObservable(),
            subject: subject,
            componentRef: undefined,
            times: 0,
        };
    }
    /**
     * Maps configuration to the loading component instance.
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    _mapOptions(options, instance) {
        instance.style = options.style;
        if (options.type !== undefined) {
            instance.type = options.type;
        }
        if (options.height !== undefined) {
            instance.height = options.height;
        }
        if (options.mode !== undefined) {
            instance.mode = options.mode;
        }
        if (options.color !== undefined) {
            instance.color = options.color;
        }
    }
}
TdLoadingFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdLoadingFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Overlay },
    { type: Injector }
];
if (false) {
    /** @type {?} */
    TdLoadingFactory.prototype._componentFactoryResolver;
    /** @type {?} */
    TdLoadingFactory.prototype._overlay;
    /** @type {?} */
    TdLoadingFactory.prototype._injector;
}
/**
 * @param {?} parent
 * @param {?} componentFactoryResolver
 * @param {?} overlay
 * @param {?} injector
 * @return {?}
 */
export function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
}
/** @type {?} */
export const LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new Optional(), new SkipSelf(), TdLoadingFactory], ComponentFactoryResolver, Overlay, Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBK0IsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsUUFBUSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFHekQsT0FBTyxFQUFFLGtCQUFrQixFQUE2QyxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUduSCw2Q0FHQzs7O0lBRkMseUNBQWdCOztJQUNoQix3Q0FBcUI7Ozs7O0FBR3ZCLGlDQUtDOzs7SUFKQyxpQ0FBNEI7O0lBQzVCLG1DQUFnQzs7SUFDaEMsOEJBQXVCOztJQUN2Qiw0QkFBZTs7Ozs7QUFPakIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRTNCLFlBQW9CLHlCQUFtRCxFQUNuRCxRQUFpQixFQUNqQixTQUFtQjtRQUZuQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUN2QyxDQUFDOzs7Ozs7Ozs7SUFRTSx5QkFBeUIsQ0FBQyxPQUF5QjtRQUN4RCxDQUFDLG1CQUF5QixPQUFPLEVBQUEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDdEQsQ0FBQyxtQkFBeUIsT0FBTyxFQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxD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Q0FBQzs7QUFFRCxNQUFNLE9BQU8sd0JBQXdCLEdBQWE7O0lBRWhELE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3ZHLFVBQVUsRUFBRSxnQ0FBZ0M7Q0FDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENoYW5nZURldGVjdG9yUmVmLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdUeXBlLCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBMb2FkaW5nU3R5bGUgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGRMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbExvYWRpbmdPcHRpb25zIGV4dGVuZHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBMb2FkaW5nU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWRpbmdSZWYge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHN1YmplY3Q/OiBTdWJqZWN0PGFueT47XG4gIHRpbWVzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgbWF0ZXJpYWwgYE92ZXJsYXlgIHNlcnZpY2VzIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqIGludG8gaXQuIExldmVyYWdpbmcgdGhlIHN0YXRlIGFuZCBjb25maWd1cmF0aW9uIGZyb20gaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnKTogSUxvYWRpbmdSZWYge1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9pbml0aWFsaXplQ29udGV4dCgpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlXG4gICAgLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChUZExvYWRpbmdDb21wb25lbnQpKTtcbiAgICAgICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBzdWJzOiBTdWJzY3JpcHRpb24gPSBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydE91dEFuaW1hdGlvbigpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgIG92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIExldmVyYWdlcyBUZW1wbGF0ZVBvcnRhbHMgZnJvbSBtYXRlcmlhbCB0byBpbmplY3QgdGhlIHRlbXBsYXRlIGluc2lkZSBvZiBpdCBzbyBpdCBmaXRzXG4gICAqIHBlcmZlY3RseSB3aGVuIG92ZXJsYXlpbmcgaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlT3ZlcmxheUNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pik6IElMb2FkaW5nUmVmIHtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGVcbiAgICAuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0T3V0QW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgbG9hZGluZyBjb21wb25lbnQgZGVwZW5kaW5nIGlmIGl0IHdhcyByZWdpc3RlcmVkIG9yIHJlc29sdmVkLlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlcGxhY2VDb21wb25lbnQob3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZywgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRlbXBsYXRlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nID9cbiAgICAgIG5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCA6IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZVxuICAgIC5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3ViczogU3Vic2NyaXB0aW9uID0gbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRPdXRBbmltYXRpb24oKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAvLyBwYXNzaW5nIGNvbnRleHQgc28gd2hlbiB0aGUgdGVtcGxhdGUgaXMgcmUtYXR0YWNoZWQsIHdlIGNhbiBrZWVwIHRoZSByZWZlcmVuY2Ugb2YgdGhlIHZhcmlhYmxlc1xuICAgICAgICAgIGxldCBjZHI6IENoYW5nZURldGVjdG9yUmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuZGV0YWNoKHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldykpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE5lZWQgdG8gY2FsbCBcIm1hcmtGb3JDaGVja1wiIGFuZCBcImRldGVjdENoYW5nZXNcIiBvbiBhdHRhY2hlZCB0ZW1wbGF0ZSwgc28gaXRzIGRldGVjdGVkIGJ5IHBhcmVudCBjb21wb25lbnQgd2hlbiBhdHRhY2hlZFxuICAgICAgICAgICAqIHdpdGggXCJPblB1c2hcIiBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgICAgICAgICovXG4gICAgICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICBjZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdWxsc2NyZWVuIG92ZXJsYXkgZm9yIHRoZSBsb2FkaW5nIHVzYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBsZXQgc3RhdGU6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuICAgIHN0YXRlLmhhc0JhY2tkcm9wID0gZmFsc2U7XG4gICAgc3RhdGUucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCk7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkuY3JlYXRlKHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ2VuZXJpYyBjb21wb25lbnQgZHluYW1pY2FsbHkgd2FpdGluZyB0byBiZSBhdHRhY2hlZCB0byBhIHZpZXdDb250YWluZXJSZWYuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVDb21wb25lbnQob3B0aW9uczogSUludGVybmFsTG9hZGluZ09wdGlvbnMpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IGNvbXBSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBjb21wUmVmLmNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZExvYWRpbmdDb21wb25lbnQpLmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG4gICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBjb21wUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgcmV0dXJuIGNvbXBSZWY7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb250ZXh0IGZvciBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIHByaXZhdGUgX2luaXRpYWxpemVDb250ZXh0KCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgc3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHJldHVybiB7XG4gICAgICBvYnNlcnZhYmxlOiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgIGNvbXBvbmVudFJlZjogdW5kZWZpbmVkLFxuICAgICAgdGltZXM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIGNvbmZpZ3VyYXRpb24gdG8gdGhlIGxvYWRpbmcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfbWFwT3B0aW9ucyhvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucywgaW5zdGFuY2U6IFRkTG9hZGluZ0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICBpZiAob3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5tb2RlID0gb3B0aW9ucy5tb2RlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVJfRkFDVE9SWShcbiAgICBwYXJlbnQ6IFRkTG9hZGluZ0ZhY3RvcnksIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IpOiBUZExvYWRpbmdGYWN0b3J5IHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nRmFjdG9yeShjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG92ZXJsYXksIGluamVjdG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ0ZhY3RvcnksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdGYWN0b3J5XSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdmVybGF5LCBJbmplY3Rvcl0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==