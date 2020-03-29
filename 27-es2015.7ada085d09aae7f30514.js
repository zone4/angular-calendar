(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{TJm9:function(n,a,s){"use strict";s.r(a),a.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n"},"V+EM":function(n,a,s){"use strict";s.r(a),a.default='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},fgcY:function(n,a,s){"use strict";s.r(a),a.default='<mwl-calendar-day-view\n  [viewDate]="viewDate"\n  [events]="events"\n  [dayStartHour]="9"\n  [dayEndHour]="17"\n>\n</mwl-calendar-day-view>\n'},oZqw:function(n,a,s){"use strict";s.r(a),a.default='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n  [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n  [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  [<span class="hljs-attribute">dayStartHour</span>]=<span class="hljs-value">"9"</span>\n  [<span class="hljs-attribute">dayEndHour</span>]=<span class="hljs-value">"17"</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n'},utaN:function(n,a,s){"use strict";s.r(a),a.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Day;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n"},wtPl:function(n,a,s){"use strict";s.r(a),a.default='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarView } from <span class="hljs-string">\'angular-calendar\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Day;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n'},yW9z:function(n,a,s){"use strict";s.r(a),s.d(a,"sources",(function(){return e}));const e=[{filename:"component.ts",contents:{raw:s("utaN"),highlighted:s("wtPl")}},{filename:"template.html",contents:{raw:s("fgcY"),highlighted:s("oZqw")}},{filename:"module.ts",contents:{raw:s("TJm9"),highlighted:s("V+EM")}}]}}]);