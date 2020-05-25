(this["webpackJsonpcalendar-scheduler"]=this["webpackJsonpcalendar-scheduler"]||[]).push([[0],{123:function(e,t,n){e.exports=n(136)},128:function(e,t,n){},129:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(128),n(19)),l=n(13),s=n(21),d=n(22),u=n(23),p=n(42),m=n(172),h=(n(129),n(45)),f=n(25),v=n(106),E=n(137),O=n(177),g=n(169),b=n(17),y=n(164),R=n(174),D=n(75),P=n(168),j=n(14),N=n(173),C=n(178),M=n(162),k=(n(163),"p"),L=n(103),w=n.n(L);function x(e){return v.a(e,k)}function S(e,t){var n=e.getDate(),r=e.getMonth(),a=e.getYear(),o=t.getHours(),c=t.getMinutes();return new Date(a,r,n,o,c)}function T(e,t){return w.a.filter(e,{selectedDate:t})}function _(e){return e.sort((function(e,t){return M.a(e.reminderDate,t.reminderDate)}))}var I=Object(y.a)((function(e){return{container:{padding:"10px"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:400},datePickers:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(2),width:150},button:{marginTop:e.spacing(2)}}})),A=function(e){var t=I(),n=a.a.useState(""),r=Object(b.a)(n,2),o=r[0],c=r[1],i=a.a.useState(new Date),l=Object(b.a)(i,2),s=l[0],d=l[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={id:"id"+(1e3*Math.random()).toString(),selectedDate:e.selectedDate,reminderDate:s,text:o,time:x(s)};e.addReminder(n),e.closePopOver()},className:t.container,noValidate:!0,autoComplete:"off"},a.a.createElement(C.a,{required:!0},a.a.createElement("div",{className:"row"},a.a.createElement(R.a,{required:!0,type:"text",id:"standard-basic",className:t.textField,margin:"normal",onChange:function(e){var t=e.target.value;c(t)}})),a.a.createElement("div",{className:"row"},a.a.createElement(j.a,{utils:D.a},a.a.createElement("div",{className:"col-md-6"},a.a.createElement(N.a,{className:t.datePickers,id:"time-picker",label:"Time picker",value:s,onChange:function(t){var n=S(e.selectedDate,t);d(n)},KeyboardButtonProps:{"aria-label":"change time"}})))),a.a.createElement("div",{className:"row"},a.a.createElement(P.a,{type:"submit",color:"primary",className:t.button},"Add"))))},z="SELECT_DATE",H="GET_CURRENT_MONTH",B="OPEN_POP_OVER",q="CLOSE_POP_OVER",F="OPEN_REMINDER_LIST",V="CLOSE_REMINDER_LIST",J="SET_ANCHOR_EL",K="ADD_REMINDER",W="EDIT_REMINDER",G="DELETE_REMINDER";function U(e){return{type:z,payload:e}}function Y(){return{type:q,payload:!1}}function $(){return{type:V,payload:!1}}function Q(e){return{type:K,payload:e}}var X=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClose=function(){n.props.closePopOver()},n.handleClose=n.handleClose.bind(Object(f.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.openPopOver,r=e.closePopOver,o=e.anchorEl,c=e.selectedDate,i=e.addReminder,l=n?"simple-popover":void 0;return a.a.createElement("div",null,a.a.createElement(O.a,{id:l,open:n,anchorEl:o,onClose:this.handleClose,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},a.a.createElement(g.a,{className:t.typography},"Add Reminder for",a.a.createElement("br",null),a.a.createElement("b",null,v.a(c,"PP"))),a.a.createElement(A,{className:t.typography,selectedDate:c,closePopOver:r,addReminder:i})))}}]),t}(a.a.Component),Z=Object(h.a)((function(e){var t=e.calendar;return{selectedDate:t.selectedDate,currentMonth:t.currentMonth,openedPopOver:t.openedPopOver,anchorEl:t.anchorEl}}),(function(e){return{selectDate:function(t){return e(U(t))},closePopOver:function(){return e(Y())},addReminder:function(t){return e(Q(t))}}}))(Object(E.a)({typography:{padding:"10px"}})(X)),ee=function(e){return a.a.createElement("div",{className:"header row flex-middle"},a.a.createElement("div",{className:"col col-start"},a.a.createElement("div",{className:"icon",onClick:e.prevMonth},"chevron_left")),a.a.createElement("div",{className:"col col-center"},a.a.createElement("span",null,e.currentMonth?v.a(e.currentMonth,"MMMM yyyy"):null)),a.a.createElement("div",{className:"col col-end",onClick:e.nextMonth},a.a.createElement("div",{className:"icon"},"chevron_right")))},te=n(89),ne=n(86),re=function(e){for(var t=[],n=te.a(e.currentMonth),r=0;r<7;r++)t.push(a.a.createElement("div",{className:"col col-center",key:r},v.a(ne.a(n,r),"EEEE")));return a.a.createElement("div",{className:"days row"},t)},ae=n(87),oe=n(88),ce=n(90),ie=n(170),le=n(102),se=n(4),de=n(81),ue=n(104),pe=n.n(ue),me=n(139),he=Object(y.a)((function(e){return{root:{"& > svg":{margin:e.spacing(2)}},iconHover:{"&:hover":{color:de.a[800]},zIndex:10,fontSize:30,position:"relative"}}})),fe=function(e){for(var t=he(),n=e.currentMonth,r=e.selectedDate,o=e.onDateClick,c=e.onClickPopOver,i=e.onClickReminderList,l=e.reminders,s=ae.a(n),d=oe.a(s),u=te.a(s),p=ce.a(d),m=[],h=[],f=u,E="";f<=p;){for(var O=function(e){E=v.a(f,"d");var n=f;h.push(a.a.createElement("div",{className:"col cell ".concat(ie.a(f,s)?le.a(f,r)?"selected":"":"disabled"),key:f,onClick:function(e){o(se.a(n)),c(e)}},T(l,f).length>0?a.a.createElement(me.a,{onClick:function(e){o(se.a(n)),i(e)}},a.a.createElement(pe.a,{className:t.iconHover,color:"error"})):null,a.a.createElement("span",{className:"number"},E),a.a.createElement("span",{className:"bg"},E))),f=ne.a(f,1)},g=0;g<7;g++)O();m.push(a.a.createElement("div",{className:"row",key:f},h)),h=[]}return a.a.createElement("div",{className:"body"},m)},ve=n(77),Ee=n(176),Oe=n(171),ge=n(105),be=n.n(ge),ye=Object(y.a)((function(e){return{container:{padding:"10px"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:400},datePickers:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(2),width:150},button:{marginTop:e.spacing(2),zIndex:10}}})),Re=function(e){var t=ye(),n=a.a.useState(""),r=Object(b.a)(n,2),o=r[0],c=r[1],i=a.a.useState(new Date),l=Object(b.a)(i,2),s=l[0],d=l[1];a.a.useEffect((function(){d(e.reminder.reminderDate)}),[e.reminder.reminderDate]);var u=function(t){t.preventDefault();var n={id:e.reminder.id,selectedDate:e.reminder.selectedDate,reminderDate:s,text:o,time:x(s)};e.editReminder(n),e.closeReminderList()};return a.a.createElement("form",{onSubmit:u,className:t.container,noValidate:!0,autoComplete:"off"},a.a.createElement(C.a,{required:!0},a.a.createElement("div",{className:"row"},a.a.createElement(R.a,{placeholder:e.reminder.text,required:!0,type:"text",id:"standard-basic",className:t.textField,margin:"normal",onChange:function(e){var t=e.target.value;c(t)}})),a.a.createElement("div",{className:"row"},a.a.createElement(j.a,{utils:D.a},a.a.createElement("div",{className:"col-md-6"},a.a.createElement(N.a,{className:t.datePickers,id:"time-picker",label:"Time picker",value:s,onChange:function(t){console.log(t);var n=S(e.reminder.selectedDate,t);d(n)},KeyboardButtonProps:{"aria-label":"change time"}})))),a.a.createElement("div",{className:"row"},a.a.createElement(P.a,{type:"submit",color:"primary",className:t.button,onClick:u},"Edit"),a.a.createElement(P.a,{type:"submit",color:"secondary",className:t.button,onClick:function(t){t.preventDefault();var n={id:e.reminder.id,selectedDate:e.reminder.selectedDate,reminderDate:s,text:o,time:x(s)};e.deleteReminder(n),e.closeReminderList()}},"Delete"))))},De=Object(y.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})),Pe=function(e){var t=De(),n=a.a.useState(!1),r=Object(b.a)(n,2),o=r[0],c=r[1];a.a.useEffect((function(){_(e.reminders)}));return a.a.createElement("div",{className:t.root},e.reminders.map((function(n,r){return a.a.createElement(Ee.a,{expanded:o==="panel"+n.id,onChange:(i="panel"+n.id,function(e,t){c(!!t&&i)}),key:r},a.a.createElement(Oe.a,{expandIcon:a.a.createElement(be.a,null),"aria-controls":"panel"+n.id+"bh-content",id:"panel"+n.id+"bh-header"},a.a.createElement(g.a,{className:t.heading},n.text)),a.a.createElement(Re,{reminder:n,editReminder:e.editReminder,deleteReminder:e.deleteReminder,closeReminderList:e.closeReminderList}));var i})))},je=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClose=function(){n.props.closeReminderList()},n.handleClose=n.handleClose.bind(Object(f.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.closePopOver()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.openedReminderList,r=e.anchorEl,o=e.selectedDate,c=e.reminders,i=e.editReminder,l=e.deleteReminder,s=e.closeReminderList,d=n?"simple-popover":void 0;return a.a.createElement("div",null,a.a.createElement(O.a,{id:d,open:n,anchorEl:r,onClose:this.handleClose,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},a.a.createElement(g.a,{className:t.typography},"Reminders for:",a.a.createElement("br",null),a.a.createElement("b",null,v.a(o,"PP"))),a.a.createElement(Pe,{reminders:_(T(c,o)),editReminder:i,deleteReminder:l,closeReminderList:s})))}}]),t}(r.Component),Ne=Object(ve.b)((function(e){var t=e.calendar,n=t.selectedDate,r=t.currentMonth,a=t.openedReminderList,o=t.anchorEl;return{selectedDate:n,currentMonth:r,openedReminderList:a,openedPopOver:t.openedPopOver,anchorEl:o,reminders:e.reminder.reminders}}),(function(e){return{selectDate:function(t){return e(U(t))},closeReminderList:function(){return e($())},addReminder:function(t){return e(Q(t))},editReminder:function(t){return e(function(e){return{id:e.id,type:W,payload:e}}(t))},deleteReminder:function(t){return e(function(e){return{id:e.id,type:G,payload:e}}(t))},closePopOver:function(){return e(Y())}}}))(Object(E.a)({typography:{padding:"10px"}})(je)),Ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).onDateClick=function(e){n.props.selectDate(e)},n.onClickPopOver=function(e){n.props.setAnchorEl(e.currentTarget),n.props.openPopOver()},n.onClickReminderList=function(e){return e.stopPropagation(),n.props.setAnchorEl(e.currentTarget),n.props.openReminderList(),n.props.closePopOver(),!1},n.nextMonth=function(){var e=p.a(n.props.currentMonth,1);n.props.getCurrentMonth(e)},n.prevMonth=function(){var e=m.a(n.props.currentMonth,1);n.props.getCurrentMonth(e)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedDate,n=e.currentMonth,r=e.reminders;return a.a.createElement("div",{className:"calendar"},a.a.createElement(ee,{currentMonth:n,prevMonth:this.prevMonth,nextMonth:this.nextMonth}),a.a.createElement(re,{currentMonth:n}),a.a.createElement(fe,{currentMonth:n,selectedDate:t,reminders:r,onDateClick:this.onDateClick,onClickPopOver:this.onClickPopOver,onClickReminderList:this.onClickReminderList}),a.a.createElement(Z,{openPopOver:this.props.openedPopOver,closePopOver:this.props.closePopOver,anchorEl:this.props.anchorEl}),a.a.createElement(Ne,{openReminderList:this.props.openedReminderList,closeReminderList:this.props.closeReminderList,closePopOver:this.props.closePopOver,anchorEl:this.props.anchorEl}))}}]),t}(a.a.Component),Me=Object(h.a)((function(e){var t=e.calendar;return{selectedDate:t.selectedDate,currentMonth:t.currentMonth,openedPopOver:t.openedPopOver,openedReminderList:t.openedReminderList,anchorEl:t.anchorEl,reminders:e.reminder.reminders}}),(function(e){return{selectDate:function(t){return e(U(t))},getCurrentMonth:function(t){return e(function(e){return{type:H,payload:e}}(t))},openPopOver:function(){return e({type:B,payload:!0})},closePopOver:function(){return e(Y())},openReminderList:function(){return e({type:F,payload:!0})},closeReminderList:function(){return e($())},setAnchorEl:function(t){return e({type:J,payload:t})}}}))(Ce);var ke=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=n(48),we={selectedDate:new Date,currentMonth:new Date,openedPopOver:!1,openedReminderList:!1,anchorEl:null},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object.assign({},e,{selectedDate:t.payload});case H:return Object.assign({},e,{currentMonth:t.payload});case B:case q:return Object.assign({},e,{openedPopOver:t.payload});case F:case V:return Object.assign({},e,{openedReminderList:t.payload});case J:return Object.assign({},e,{anchorEl:t.payload});default:return e}},Se=n(9),Te=n(38);function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach((function(t){Object(Se.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ae={reminders:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object.assign({},e,{reminders:[].concat(Object(Te.a)(e.reminders),[t.payload])});case W:return Object.assign({},e,{reminders:e.reminders.map((function(e){return e.id===t.id?Ie({},e,{},t.payload):e}))});case G:return Object.assign({},e,{reminders:e.reminders.filter((function(e){return e.id!==t.id}))});default:return e}},He=Object(Le.b)({calendar:xe,reminder:ze}),Be=Object(Le.c)(He);c.a.render(a.a.createElement(ve.a,{store:Be},a.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.934225b7.chunk.js.map