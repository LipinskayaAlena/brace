ace.define("ace/theme/ate",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {
"use strict";

exports.isDark = false;
exports.cssText = ".ace_editor, .ace_editor * {\
font-family:  'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;\
font-size:15px;\
color:inherit;\
}\
.ace-ate .ace_gutter {\
background: #ebebeb;\
border-right: 1px solid rgb(159, 159, 159);\
color: rgb(136, 136, 136);\
}\
.ace-ate .ace_print-margin {\
width: 1px;\
background: #ebebeb;\
}\
.ace-ate {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-ate .ace_fold {\
background-color: rgb(60, 76, 114);\
}\
.ace-ate .ace_cursor {\
color: black;\
}\
.ace-ate .ace_storage,\
.ace-ate .ace_keyword,\
.ace-ate .ace_variable {\
color: rgb(127, 0, 85);\
}\
.ace-ate .ace_action {\
color: rgb(255, 0, 0);\
font-weight: 600;\
}\
.ace-ate .ace_object {\
color: rgb(0, 150, 0);\
font-weight: 600;\
}\
.ace-ate .ace_custom {\
color: rgb(0, 188, 255);\
font-weight: 600;\
}\
.ace-ate .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-ate .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-ate .ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-ate .ace_string {\
color: rgb(42, 0, 255);\
}\
.ace-ate .ace_customvariable {\
color: rgb(20, 238, 100);\
}\
.ace-ate .ace_objectname {\
color: rgb(166, 76, 151);\
}\
.ace-ate .ace_comment {\
color: rgb(113, 150, 130);\
}\
.ace-ate .ace_comment.ace_doc {\
color: rgb(63, 95, 191);\
}\
.ace-ate .ace_comment.ace_doc.ace_tag {\
color: rgb(127, 159, 191);\
}\
.ace-ate .ace_constant.ace_numeric {\
color: darkblue;\
}\
.ace-ate .ace_tag {\
color: rgb(25, 118, 116);\
}\
.ace-ate .ace_type {\
color: rgb(127, 0, 127);\
}\
.ace-ate .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-ate .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-ate .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-ate .ace_meta.ace_tag {\
color:rgb(25, 118, 116);\
}\
.ace-ate .ace_invisible {\
color: #ddd;\
}\
.ace-ate .ace_entity.ace_other.ace_attribute-name {\
color:rgb(127, 0, 127);\
}\
.ace-ate .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0);\
}\
.ace-ate .ace_active-line {\
background: rgb(232, 242, 254);\
}\
.ace-ate .ace_gutter-active-line {\
background-color : #DADADA;\
}\
.ace-ate .ace_marker-layer .ace_selected-word {\
border: 1px solid rgb(181, 213, 255);\
}\
.ace-ate .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}";

exports.cssClass = "ace-ate";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
