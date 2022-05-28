(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api操作"}},[t._v("#")]),t._v(" API操作")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("API操作一般是用于程序或者二次开发调用，每个接口都需要根据配置文件中的"),s("code",[t._v("AccessKeyId")]),t._v("和"),s("code",[t._v("AccessKeySecret")]),t._v("根据一定的规则计算出来"),s("code",[t._v("sig")]),t._v("值并附带在请求中，每个接口都可以根据这个逻辑直接调用，接口之间没有调用关系依赖。"),s("br"),t._v("\n每个接口调用都需要拥有全部公共参数和接口私有参数才可以使用")]),t._v(" "),s("h2",{attrs:{id:"请求流程说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求流程说明"}},[t._v("#")]),t._v(" 请求流程说明")]),t._v(" "),s("p",[t._v("1.把"),s("code",[t._v("accesskeyid")]),t._v("、"),s("code",[t._v("accesskeysecret")]),t._v("、"),s("code",[t._v("cmd")]),t._v("、"),s("code",[t._v("time")]),t._v("根据字母顺序且全部小写用键值对的形式连接在一起用"),s("code",[t._v(";")]),t._v("分割，形成原始字符串。\n2.用步骤1产生的原始字符串进行SHA1散列加密的到"),s("code",[t._v("sig")]),t._v("\n3.在请求的时候除了接口的必要参数，还在请求体中带上"),s("code",[t._v("cmd")]),t._v("、"),s("code",[t._v("time")]),t._v("、"),s("code",[t._v("accesskeyid")]),t._v("、"),s("code",[t._v("sig")]),t._v("一起提交即可")]),t._v(" "),s("p",[t._v('例：调用api/Room_Info接口\n假设accesskeyid为"1"，accesskeysecret值为"2"，那么请求体如下')]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("Request:")])]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("method: POST\npath: http://127.0.0.1:11419/api/Room_Info\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"form-data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1641149566")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cmd"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Room_Info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"566a322043b6217334bc15f4e6d18973d033aa4b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accesskeyid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("在这个请求中，用于计算sig的原始字符串就是"),s("code",[t._v("accesskeyid=1;accesskeysecret=2;cmd=room_info;time=1641149566")])]),t._v(" "),s("h2",{attrs:{id:"公共参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共参数"}},[t._v("#")]),t._v(" 公共参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("格式")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("是否必须")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("time")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",[t._v("请求发出时的UTC时间戳(注意是UTC时间不需要+8小时)，单位为秒，和服务器时间300秒以内的为有效请求(如:1626508097)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("cmd")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",[t._v("请求的API接口的接口名称(如:Room_Info)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("sig")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",[t._v("其他变量排序后按照规则拼接过后使用SHA1散列加密后得到的签名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("accesskeyid")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",[t._v("用于加密字符串的验证KeyId，存在于配置文件中需要和accesskeysecret成对的使用")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);