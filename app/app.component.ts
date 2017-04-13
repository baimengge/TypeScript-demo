import {Component} from 'angular2/core';　// 组件注解

// 在类上面添加注解，使用 @ 作为前缀进行注解(@Component 告诉Angular这个类是一个组件。)
@Component({
	// 参数
	selector:'my-app',　// 一个 css 选择器， 这里表示选择 html 标签为 my-app的元素。
	template:'<h1>My First Angular 2 App</h1>' // 控制这个组件的视图， 告诉Angular怎么去渲染这个视图
})
export class AppComponent {} // 定义了一个类（空组件类）