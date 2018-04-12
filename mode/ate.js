ace.define("ace/mode/ate_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var AteHighlightRules = function() {
	
//	var keyWordObject = {};
//	if (ateKeywords.actions){
//		keyWordObject.action = ateKeywords.actions;
//	}
//	if (ateKeywords.delimeters){
//		keyWordObject.custom = ateKeywords.delimeters;
//	}
//	if (ateKeywords.objects){
//		keyWordObject.object = ateKeywords.objects;
//	}
//
//	var keywordMapper = this.createKeywordMapper(keyWordObject, "identifier", true);
    
	 var keywords = (
		        "select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|" +
		        "when|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|" +
		        "foreign|not|references|default|null|inner|cross|natural|database|drop|grant"
		    );

		    var builtinConstants = (
		        "true|false"
		    );

		    var builtinFunctions = (
		        "avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|" + 
		        "coalesce|ifnull|isnull|nvl"
		    );

		    var dataTypes = (
		        "int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|" +
		        "money|real|number|integer"
		    );

		    var keywordMapper = this.createKeywordMapper({
		        "support.function": builtinFunctions,
		        "keyword": keywords,
		        "constant.language": builtinConstants,
		        "storage.type": dataTypes
		    }, "identifier", true);

    this.$rules = {
        "start" : [ {
            token : "comment",
            regex : "#.*$"
        },  {
            token : "comment",
            start : "/\\*",
            end : "\\*/"
        }, {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "objectname",           // ' string
            regex : "'.*?'"
        }, {
            token : "string",           // ` string (apache drill)
            regex : "`.*?`"
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" 
        }, {
            token : "keyword.operator",
            regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
            token : "paren.lparen",
            regex : "[\\(]"
        }, {
            token : "paren.rparen",
            regex : "[\\)]"
        }, {
            token : "text",
            regex : "\\s+"
        }, {
            token : "customvariable",
            regex : "@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            caseInsensitive: true
        }]
    };
    this.normalizeRules();
};

oop.inherits(AteHighlightRules, TextHighlightRules);

exports.AteHighlightRules = AteHighlightRules;
});

ace.define("ace/mode/ate",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ate_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var AteHighlightRules = acequire("./ate_highlight_rules").AteHighlightRules;

var Mode = function() {
    this.HighlightRules = AteHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "#";
    
    this.$id = "ace/mode/ate";
}).call(Mode.prototype);

exports.Mode = Mode;

});
