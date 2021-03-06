/*
Copyright 2014, KISSY v1.50
MIT Licensed
build time: Mar 31 19:26
*/
/*
 Combined modules by KISSY Module Compiler: 

 editor/plugin/undo
*/

KISSY.add("editor/plugin/undo", ["editor", "./undo/btn", "./undo/cmd", "./button"], function(S, require) {
  var Editor = require("editor");
  var Btn = require("./undo/btn");
  var cmd = require("./undo/cmd");
  require("./button");
  function undo() {
  }
  S.augment(undo, {pluginRenderUI:function(editor) {
    editor.addButton("undo", {mode:Editor.Mode.WYSIWYG_MODE, tooltip:"\u64a4\u9500", editor:editor}, Btn.UndoBtn);
    editor.addButton("redo", {mode:Editor.Mode.WYSIWYG_MODE, tooltip:"\u91cd\u505a", editor:editor}, Btn.RedoBtn);
    cmd.init(editor)
  }});
  return undo
});

