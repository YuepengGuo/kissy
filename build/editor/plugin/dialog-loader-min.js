/*
Copyright 2014, KISSY v1.50
MIT Licensed
build time: Mar 31 19:20
*/
KISSY.add("editor/plugin/dialog-loader",["editor","overlay"],function(c,f){var d=f("editor"),e=f("overlay"),a,g={loading:function(b){a||(a=new e({x:0,width:6===c.UA.ie?c.require("dom").docWidth():"100%",y:0,zIndex:d.baseZIndex(d.ZIndexManager.LOADING),prefixCls:b+"editor-",elCls:b+"editor-global-loading"}));a.set("height",c.require("dom").docHeight());a.show();a.loading()},unloading:function(){a.hide()}};return{useDialog:function(b,a,f,d){b.focus();var e=b.get("prefixCls");b.getControl(a+"/dialog")?
setTimeout(function(){b.showDialog(a,d)},0):(g.loading(e),c.use("editor/plugin/"+a+"/dialog",function(c,e){g.unloading();b.addControl(a+"/dialog",new e(b,f));b.showDialog(a,d)}))}}});
