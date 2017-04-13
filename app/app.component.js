System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // 在类上面添加注解，使用 @ 作为前缀进行注解(@Component 告诉Angular这个类是一个组件。)
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    // 组件注解
                    core_1.Component({
                        // 参数
                        selector: 'my-app',
                        template: '<h1>My First Angular 2 App</h1>' // 控制这个组件的视图， 告诉Angular怎么去渲染这个视图
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); // 定义了一个类（空组件类）
        }
    }
});
//# sourceMappingURL=app.component.js.map