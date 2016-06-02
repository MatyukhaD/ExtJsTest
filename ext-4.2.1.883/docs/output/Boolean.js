Ext.data.JsonP.Boolean({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Boolean.html#Boolean' target='_blank'>Boolean.js</a></div></pre><div class='doc-contents'><p>The <code>Boolean</code> object is an object wrapper for a boolean value.</p>\n\n<p>The value passed as the first parameter is converted to a boolean value, if necessary. If value is\nomitted or is 0, -0, null, false, <code>NaN</code>, undefined, or the empty string (\"\"), the object has an\ninitial value of false. All other values, including any object or the string <code>\"false\"</code>, create an\nobject with an initial value of true.</p>\n\n<p>Do not confuse the primitive Boolean values true and false with the true and false values of the\nBoolean object.</p>\n\n<p>Any object whose value is not <code>undefined</code> or <code>null</code>, including a Boolean object whose value is false,\nevaluates to true when passed to a conditional statement. For example, the condition in the following\nif statement evaluates to true:</p>\n\n<pre><code>x = new Boolean(false);\nif (x) {\n    // . . . this code is executed\n}\n</code></pre>\n\n<p>This behavior does not apply to Boolean primitives. For example, the condition in the following if\nstatement evaluates to <code>false</code>:</p>\n\n<pre><code>x = false;\nif (x) {\n    // . . . this code is not executed\n}\n</code></pre>\n\n<p>Do not use a <code>Boolean</code> object to convert a non-boolean value to a boolean value. Instead, use Boolean\nas a function to perform this task:</p>\n\n<pre><code>x = Boolean(expression);     // preferred\nx = new Boolean(expression); // don't use\n</code></pre>\n\n<p>If you specify any object, including a Boolean object whose value is false, as the initial value of a\nBoolean object, the new Boolean object has a value of true.</p>\n\n<pre><code>myFalse = new Boolean(false);   // initial value of false\ng = new Boolean(myFalse);       // initial value of true\nmyString = new String(\"Hello\"); // string object\ns = new Boolean(myString);      // initial value of true\n</code></pre>\n\n<p>Do not use a Boolean object in place of a Boolean primitive.</p>\n\n<h1>Creating Boolean objects with an initial value of false</h1>\n\n<pre><code>bNoParam = new Boolean();\nbZero = new Boolean(0);\nbNull = new Boolean(null);\nbEmptyString = new Boolean(\"\");\nbfalse = new Boolean(false);\n</code></pre>\n\n<h1>Creating Boolean objects with an initial value of true</h1>\n\n<pre><code>btrue = new Boolean(true);\nbtrueString = new Boolean(\"true\");\nbfalseString = new Boolean(\"false\");\nbSuLin = new Boolean(\"Su Lin\");\n</code></pre>\n\n<div class=\"notice\">\nDocumentation for this class comes from <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean\">MDN</a>\nand is available under <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">Creative Commons: Attribution-Sharealike license</a>.\n</div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Boolean'>Boolean</span><br/><a href='source/Boolean.html#Boolean-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Boolean-method-constructor' class='name expandable'>Boolean</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Creates a new boolean object. ...</div><div class='long'><p>Creates a new boolean object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Either a truthy or falsy value to create the corresponding Boolean object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Boolean'>Boolean</span><br/><a href='source/Boolean.html#Boolean-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Boolean-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns a string of either \"true\" or \"false\" depending upon the value of the object. ...</div><div class='long'><p>Returns a string of either \"true\" or \"false\" depending upon the value of the object.\nOverrides the <code>Object.prototype.toString</code> method.</p>\n\n<p>The Boolean object overrides the <code>toString</code> method of the <code>Object</code> object; it does not inherit\n<code><a href=\"#!/api/Object-method-toString\" rel=\"Object-method-toString\" class=\"docClass\">Object.toString</a></code>. For Boolean objects, the <code>toString</code> method returns a string representation of\nthe object.</p>\n\n<p>JavaScript calls the <code>toString</code> method automatically when a Boolean is to be represented as a text\nvalue or when a Boolean is referred to in a string concatenation.</p>\n\n<p>For Boolean objects and values, the built-in <code>toString</code> method returns the string <code>\"true\"</code> or\n<code>\"false\"</code> depending on the value of the boolean object. In the following code, <code>flag.toString</code>\nreturns <code>\"true\"</code>.</p>\n\n<pre><code>var flag = new Boolean(true)\nvar myVar = flag.toString()\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The boolean value represented as a string.</p>\n</div></li></ul></div></div></div><div id='method-valueOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Boolean'>Boolean</span><br/><a href='source/Boolean.html#Boolean-method-valueOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Boolean-method-valueOf' class='name expandable'>valueOf</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns the primitive value of the Boolean object. ...</div><div class='long'><p>Returns the primitive value of the <code>Boolean</code> object. Overrides the <code>Object.prototype.valueOf</code> method.</p>\n\n<p>The <code>valueOf</code> method of Boolean returns the primitive value of a Boolean object or literal Boolean\nas a Boolean data type.</p>\n\n<p>This method is usually called internally by JavaScript and not explicitly in code.</p>\n\n<pre><code>x = new Boolean();\nmyVar = x.valueOf()      //assigns false to myVar\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>The primitive value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"Boolean.html#Boolean","filename":"Boolean.js"}],"linenr":1,"members":{"property":[],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Boolean","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Boolean","meta":{},"name":"toString","id":"method-toString"},{"tagname":"method","owner":"Boolean","meta":{},"name":"valueOf","id":"method-valueOf"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Boolean","singleton":false,"override":null,"inheritdoc":null,"id":"class-Boolean","mixins":[],"mixedInto":[]});