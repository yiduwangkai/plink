(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7adc4a0a"],{"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1d0b":function(t,e,n){"use strict";var r=n("e423"),a="/mng/jobInstance/queryJobInstances/";function o(t){return Object(r["b"])(a,t)}e["a"]={queryJobInstances:o}},"38a0":function(t,e,n){"use strict";n("ac1f"),n("5319");var r=n("e423"),a="/mng/job/queryJob/",o="/mng/job/queryJobs",i="/mng/job/addJob",s="/mng/job/updateJob",c="/mng/job//deleteJob/{jobId}",l="/mng/job/deleteJobs",u="/mng/job/{jobId}/jarList",b="/mng/job/{jobId}/uploadJar",d="/mng/job/startJob/{jobId}",p="/mng/job/startJobs",f="/mng/job/reStartJob/{jobId}",g="/mng/job/reStartJobs",v="/mng/job/startJob/{jobId}",j="/mng/job/stopJobs";function h(t){return Object(r["a"])(a+t.jobId)}function m(t){return Object(r["b"])(o,t)}function y(t){return Object(r["b"])(i,t)}function x(t){return Object(r["b"])(s,t)}function I(t){return Object(r["b"])(c.replace("{jobId}",t.jobId),t)}function _(t){return Object(r["b"])(l,t.idList)}function J(t){return Object(r["a"])(u.replace("{jobId}",t.jobId))}function k(t){return Object(r["a"])(d.replace("{jobId}",t.jobId))}function O(t){return Object(r["b"])(p,t.idList)}function R(t){return Object(r["a"])(f.replace("{jobId}",t.jobId))}function E(t){return Object(r["b"])(g,t.idList)}function S(t){return Object(r["a"])(v.replace("{jobId}",t.jobId))}function w(t){return Object(r["b"])(j,t.idList)}e["a"]={UPLOAD_JAR_URL:b,queryJob:h,queryJobs:m,addJob:y,updateJob:x,deleteJob:I,deleteJobs:_,jarList:J,startJob:k,startJobs:O,restartJob:R,restartJobs:E,stopJob:S,stopJobs:w}},"3e03":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[1===t.type?n("div",[n("JobDetailCustom")],1):t._e()])},a=[],o=n("d4ec"),i=n("99de"),s=n("7e84"),c=n("262e"),l=n("9ab4"),u=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Tabs",[n("TabPane",{attrs:{label:"作业信息",name:"basic"}},[n("Divider",[t._v("基础信息")]),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("作业 ID : "+t._s(t.job.id))]),n("Col",{attrs:{span:"12"}},[t._v("作业名称 : "+t._s(t.job.name))])],1),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("作业类型 : "+t._s(t.job.type))]),n("Col",{attrs:{span:"12"}},[t._v("作业描述 : "+t._s(t.job.description))])],1),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("创建时间 : "+t._s(t.job.createTime))]),n("Col",{attrs:{span:"12"}},[t._v("更新时间 : "+t._s(t.job.updateTime))])],1),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("启动时间 : "+t._s(t.job.lastStartTime))]),n("Col",{attrs:{span:"12"}},[t._v("结束时间 : "+t._s(t.job.lastStopTime))])],1),n("Divider",[t._v("作业配置")]),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("客户端版本 : "+t._s(t.job.clientVersion))]),n("Col",{attrs:{span:"12"}},[t._v("执行文件 : "+t._s(t.job.config.jarName))])],1),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("MainClass : "+t._s(t.job.config.mainClass))]),n("Col",{attrs:{span:"12"}},[t._v("程序参数 : "+t._s(t.job.config.args))])],1),n("Divider",[t._v("运行参数")]),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"12"}},[t._v("作业并行度 : "+t._s(t.job.config.parallelism))]),n("Col",{attrs:{span:"12"}})],1)],1),n("TabPane",{attrs:{label:"作业实例",name:"job"}},[n("div",[n("Table",{ref:"selection",attrs:{stripe:"",columns:t.jobInstanceListColumns,data:t.jobInstanceList}},[n("template",{slot:"name"},[n("span",[t._v(t._s(t.job.name))])]),n("template",{slot:"type"},[n("span",[t._v(t._s(t.job.type))])]),n("template",{slot:"operator"},[n("div",[n("Button",{attrs:{type:"info",size:"small"}},[t._v(" 详情 ")])],1)])],2)],1)]),n("TabPane",{attrs:{label:"作业监控",name:"monitor",disabled:""}}),n("div",{staticStyle:{"margin-bottom":"10px",padding:"5px",background:"#f8f8f9"},attrs:{slot:"extra"},slot:"extra"},[n("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"success",size:"small"},on:{click:t.clickStart}},[t._v("启动")]),n("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"warning",size:"small"},on:{click:t.clickRestart}},[t._v("重启")]),n("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"error",size:"small"},on:{click:t.clickStop}},[t._v("停止")]),n("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"error",size:"small"},on:{click:t.clickDelete}},[t._v("删除")]),n("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"info",size:"small"},on:{click:t.clickEdit}},[t._v("编辑")])],1)],1)],1)},d=[],p=n("bee2"),f=n("38a0"),g=n("1d0b"),v=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.rt={jobId:""},t.job={config:{}},t.jobInstanceListColumns=[{type:"expand",key:"id",width:50},{title:"ID",key:"id",align:"center",width:100},{title:"名称",key:"name",align:"center",slot:"name"},{title:"类型",key:"type",align:"center",slot:"type"},{title:"创建时间",key:"createTime",align:"center"},{title:"开始时间",key:"startTime",align:"center"},{title:"结束时间",key:"stopTime",align:"center"},{title:"状态",key:"status",align:"center"},{title:"操作",fixed:"right",align:"center",slot:"operator",width:100}],t.jobInstanceList=[],t}return Object(c["a"])(e,t),Object(p["a"])(e,[{key:"clickStart",value:function(){var t=this;f["a"].startJob({jobId:this.rt.jobId}).then((function(e){t.$Notice.success({title:"启动作业成功"})})).catch((function(e){t.$Notice.warning({title:"启动作业失败",desc:e.msg})}))}},{key:"clickRestart",value:function(){var t=this;f["a"].restartJob({jobId:this.rt.jobId}).then((function(e){t.$Notice.success({title:"重启作业成功"})})).catch((function(e){t.$Notice.warning({title:"重启作业失败",desc:e.msg})}))}},{key:"clickStop",value:function(){var t=this;f["a"].stopJob({jobId:this.rt.jobId}).then((function(e){t.$Notice.success({title:"停止作业成功"})})).catch((function(e){t.$Notice.warning({title:"停止作业失败",desc:e.msg})}))}},{key:"clickDelete",value:function(){var t=this;f["a"].deleteJob({jobId:this.rt.jobId}).then((function(e){t.$Notice.success({title:"删除作业成功"}),t.$router.push({path:"/page/job/list"})})).catch((function(e){t.$Notice.warning({title:"删除作业失败",desc:e.msg})}))}},{key:"clickEdit",value:function(){this.$router.push({path:"/page/job/edit",query:{id:this.rt.jobId}})}},{key:"getJob",value:function(){var t=this;f["a"].queryJob({jobId:this.rt.jobId}).then((function(e){t.job=e})).catch((function(e){t.$Notice.error({title:e.msg})}))}},{key:"getJobInstanceList",value:function(){var t=this;g["a"].queryJobInstances({jobId:this.rt.jobId}).then((function(e){t.jobInstanceList=e.list}))}},{key:"parseRouter",value:function(){this.rt.jobId=this.$route.query.id}},{key:"mounted",value:function(){this.parseRouter(),this.getJob(),this.getJobInstanceList()}}]),e}(u["b"]);v=l["a"]([u["a"]],v);var j=v,h=j,m=n("2877"),y=Object(m["a"])(h,b,d,!1,null,"74435182",null),x=y.exports,I=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.type=1,t}return Object(c["a"])(e,t),e}(u["b"]);I=l["a"]([Object(u["a"])({components:{JobDetailCustom:x}})],I);var _=I,J=_,k=Object(m["a"])(J,r,a,!1,null,"1249b8f4",null);e["default"]=k.exports},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),o=n("7b0b"),i=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),b=Math.max,d=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){return[function(n,r){var a=c(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,a,r):e.call(String(a),n,r)},function(t,o){if(r.REPLACE_KEEPS_$0||"string"===typeof o&&-1===o.indexOf("$0")){var c=n(e,t,this,o);if(c.done)return c.value}var p=a(t),f=String(this),g="function"===typeof o;g||(o=String(o));var h=p.global;if(h){var m=p.unicode;p.lastIndex=0}var y=[];while(1){var x=u(p,f);if(null===x)break;if(y.push(x),!h)break;var I=String(x[0]);""===I&&(p.lastIndex=l(f,i(p.lastIndex),m))}for(var _="",J=0,k=0;k<y.length;k++){x=y[k];for(var O=String(x[0]),R=b(d(s(x.index),f.length),0),E=[],S=1;S<x.length;S++)E.push(v(x[S]));var w=x.groups;if(g){var $=[O].concat(E,R,f);void 0!==w&&$.push(w);var C=String(o.apply(void 0,$))}else C=j(O,f,R,E,w,o);R>=J&&(_+=f.slice(J,R)+C,J=R+O.length)}return _+f.slice(J)}];function j(t,n,r,a,i,s){var c=r+t.length,l=a.length,u=g;return void 0!==i&&(i=o(i),u=f),e.call(s,u,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>l){var b=p(u/10);return 0===b?e:b<=l?void 0===a[b-1]?o.charAt(1):a[b-1]+o.charAt(1):e}s=a[u-1]}return void 0===s?"":s}))}}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,s=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],b=c||u||l;b&&(s=function(t){var e,n,a,s,b=this,d=l&&b.sticky,p=r.call(b),f=b.source,g=0,v=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==t[b.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,g++),n=new RegExp("^(?:"+f+")",p)),u&&(n=new RegExp("^"+f+"$(?!\\s)",p)),c&&(e=b.lastIndex),a=o.call(d?n:b,v),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=b.lastIndex,b.lastIndex+=a[0].length):b.lastIndex=0:c&&a&&(b.lastIndex=b.global?a.index+a[0].length:e),u&&a&&a.length>1&&i.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),o=n("b622"),i=n("9263"),s=n("9112"),c=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),b=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=o(t),f=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=f&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!f||!g||"replace"===t&&(!l||!u)||"split"===t&&!b){var v=/./[p],j=n(p,""[t],(function(t,e,n,r,a){return e.exec===i?f&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),h=j[0],m=j[1];r(String.prototype,t,h),r(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}d&&s(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-7adc4a0a.2fd144fb.js.map