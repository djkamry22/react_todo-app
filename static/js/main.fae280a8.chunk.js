(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),s=(a(16),a(17),a(2)),o=a(1),i=a(5),u=a(6),m=a(8),d=a(7),f=a(9);var p=function(e){var t=e.tasks,a=e.filterBy,n=e.currentFilter,c=e.clearCompletedAll;return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},t.filter(function(e){return!e.completed}).length," ","active items"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"All"===n&&"selected",onClick:function(){return a("All")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{className:"Active"===n&&"selected",href:"#/active",onClick:function(){return a("Active")}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{className:"Completed"===n&&"selected",onClick:function(){return a("Completed")},href:"#/completed"},"Completed")),l.a.createElement("li",null,l.a.createElement("a",{onClick:c,href:"#/clear-completed"},"Clear all completed"))))},k=function(e){var t=e.tasks,a=e.changeStatus,n=e.destroyTask;return t.map(function(e){return l.a.createElement("li",{className:e.completed&&"completed"},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(e.id),checked:e.completed,onChange:function(){return a(e.id)}}),l.a.createElement("label",{htmlFor:"todo-".concat(e.id)},e.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(e.id)}})))})},h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[],currentFilter:"All",title:"",currentIndex:0},a.writeTasks=function(e){a.state.title&&(e.preventDefault(),a.setState(function(e){return{tasks:[].concat(Object(o.a)(e.tasks),[{title:e.title,completed:!1,id:e.currentIndex}]),title:"",currentIndex:e.currentIndex+1}}))},a.changeStatus=function(e){var t=a.state.tasks.find(function(t){return t.id===e});t.completed=!t.completed,a.setState(function(e){return{tasks:Object(o.a)(e.tasks)}})},a.destroyTask=function(e){a.setState(function(t){return{tasks:t.tasks.filter(function(t){return t.id!==e})}})},a.completedAll=function(){a.setState(function(e){return{tasks:e.tasks.map(function(t){return Object(s.a)({},t,{completed:!e.tasks.every(function(e){return e.completed})})})}})},a.filterTodos=function(e){return"All"===e?a.state.tasks:"Active"===e?a.state.tasks.filter(function(e){return!e.completed}):a.state.tasks.filter(function(e){return e.completed})},a.filterBy=function(e){a.setState({currentFilter:e})},a.clearCompletedAll=function(){a.setState(function(e){return Object(s.a)({},e,{tasks:e.tasks.filter(function(e){return!e.completed})})})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:this.writeTasks},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.title,onChange:function(t){e.setState({title:t.target.value})}}))),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:this.completedAll}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},l.a.createElement(k,{tasks:this.filterTodos(this.state.currentFilter),changeStatus:this.changeStatus,destroyTask:this.destroyTask}))),l.a.createElement(p,{tasks:this.state.tasks,filterBy:this.filterBy,currentFilter:this.state.currentFilter,clearCompletedAll:this.clearCompletedAll}))}}]),t}(l.a.Component);r.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fae280a8.chunk.js.map