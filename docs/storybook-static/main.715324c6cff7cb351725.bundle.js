(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(module,exports,__webpack_require__){__webpack_require__("487f"),__webpack_require__("48a2"),module.exports=__webpack_require__("5d29")},3414:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ElTreeSelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("71bb");__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ElTreeSelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},"5d29":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("ac6a"),__webpack_require__("06db");var _storybook_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("7d14"),req=__webpack_require__("f330");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_2__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__("8ca4")(module))},"5fff":function(module,exports,__webpack_require__){(module.exports=__webpack_require__("2350")(!1)).push([module.i,".el-tree-select .select-option{display:none!important}[aria-disabled=true]>.el-tree-node__content{color:inherit!important;background:transparent!important;cursor:no-drop!important}.el-tree-select-popper{max-height:400px;overflow:auto}.el-tree-select-popper.disabled{display:none!important}.el-tree-select-popper .el-button--small{width:25px!important;min-width:25px!important}.el-tree-select-popper[x-placement^=bottom]{margin-top:5px}.mb10{margin-bottom:10px}.no-data{height:32px;line-height:32px;font-size:14px;color:#ccc;text-align:center}",""])},"64a4":function(module,__webpack_exports__,__webpack_require__){"use strict";var toConsumableArray=__webpack_require__("75fc"),on=(__webpack_require__("c5f6"),document.addEventListener?function(element,event,handler){element&&event&&handler&&element.addEventListener(event,handler,!1)}:function(element,event,handler){element&&event&&handler&&element.attachEvent("on"+event,handler)}),off=document.removeEventListener?function(element,event,handler){element&&event&&element.removeEventListener(event,handler,!1)}:function(element,event,handler){element&&event&&element.detachEvent("on"+event,handler)};__webpack_require__("7f7f");function each(data,callback){for(var current,children,childName=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children",i=0,len=data.length;i<len;i++)children=[],(current=data[i])[childName]&&current[childName].length>0&&(children=current[childName]),callback&&callback(current,children),children.length>0&&each(children,callback,childName)}var src_ElTreeSelectvue_type_script_lang_js_={name:"ElTreeSelect",props:{value:{type:[String,Array,Number],default:function _default(){return""}},styles:{type:Object,default:function _default(){return{}}},selectClass:{type:String,default:function _default(){return""}},popoverClass:{type:String,default:function _default(){return""}},disabled:{type:Boolean,default:function _default(){return!1}},placement:{type:String,default:function _default(){return"bottom"}},treeRenderFun:Function,selectParams:{type:Object,default:function _default(){return{clearable:!0,disabled:!1,placeholder:"请选择"}}},treeParams:{type:Object,default:function _default(){return{clickParent:!1,filterable:!1,data:[],props:{children:"children",label:"name",code:"code",value:"flowId",disabled:"disabled"}}}}},data:function data(){return{propsValue:"flowId",propsLabel:"name",propsCode:null,propsDisabled:"disabled",propsChildren:"children",data:[],keywords:"",labels:"",ids:[],selectNodes:[],visible:!1,width:150}},watch:{ids:function ids(val){void 0!==val&&this._setSelectNodeFun(val)},value:function value(val){this.ids!==val&&(this._setMultipleFun(),this.selectParams.multiple?this.ids=Object(toConsumableArray.a)(val):this.ids=""===val?[]:[val])}},computed:{popperClass:function popperClass(){var _c="el-tree-select-popper "+this.popoverClass;return this.disabled?_c+" disabled ":_c}},created:function created(){var _this$treeParams=this.treeParams,props=_this$treeParams.props,data=_this$treeParams.data;this._setMultipleFun(),this.propsValue=props.value,this.propsLabel=props.label,this.propsCode=props.code||null,this.propsDisabled=props.disabled,this.propsChildren=props.children,this.data=data.length>0?Object(toConsumableArray.a)(data):[],this.selectParams.multiple?(this.labels=[],this.ids=this.value):(this.labels="",this.ids=this.value instanceof Array?this.value:[this.value])},mounted:function mounted(){var _this=this;this._updateH(),this.$nextTick(function(){on(document,"mouseup",_this._popoverHideFun)})},methods:{_setMultipleFun:function _setMultipleFun(){var multiple=!1;this.value instanceof Array&&(multiple=!0),this.$set(this.selectParams,"multiple",multiple)},_searchFun:function _searchFun(){this.$emit("searchFun",this.keywords)},_setSelectNodeFun:function _setSelectNodeFun(ids){var _this2=this,el=this.$refs.tree;if(!el)throw new Error("找不到tree dom");var multiple=this.selectParams.multiple;if(0===ids.length||0===this.data.length)return this.labels=multiple?[]:"",void(multiple?el.setCheckedKeys([]):el.setCurrentKey(null));multiple?(el.setCheckedKeys(ids),this.propsCode?this.labels=el.getCheckedNodes().map(function(item){return item[_this2.propsCode]?item[_this2.propsLabel]+"("+item[_this2.propsCode]+")":item[_this2.propsLabel]})||[]:this.labels=el.getCheckedNodes().map(function(item){return item[_this2.propsLabel]})||[]):(el.setCurrentKey(ids[0]),el.getCurrentNode()?this.propsCode?this.labels=el.getCurrentNode()[this.propsCode]?el.getCurrentNode()[this.propsLabel]+"("+el.getCurrentNode()[this.propsCode]+")":el.getCurrentNode()[this.propsLabel]:this.labels=el.getCurrentNode()[this.propsLabel]:this.labels=""),this._updatePopoverLocationFun()},_updatePopoverLocationFun:function _updatePopoverLocationFun(){var _this3=this;setTimeout(function(){_this3.$refs.popover.updatePopper()},50)},_getEventPath:function _getEventPath(evt){var path=evt.composedPath&&evt.composedPath()||evt.path,target=evt.target;if(null!=path)return path.indexOf(window)<0?path.concat(window):path;if(target===window)return[window];return[target].concat(function getParents(node,memo){memo=memo||[];var parentNode=node.parentNode;return parentNode?getParents(parentNode,memo.concat(parentNode)):memo}(target),window)},_filterFun:function _filterFun(value,data,node){return!value||-1!==data[this.propsLabel].indexOf(value)},_treeNodeClickFun:function _treeNodeClickFun(data,node,vm){var multiple=this.selectParams.multiple,clickParent=this.treeParams.clickParent,propsValue=this.propsValue,propsChildren=this.propsChildren;if(!data[this.propsDisabled]){if(node.checked){var value=data[this.propsValue];this.ids=this.ids.filter(function(id){return id!==value})}else if(multiple)this.ids.push(data[propsValue]);else if(clickParent)this.ids=[data[propsValue]],this.visible=!1;else{var children=data[propsChildren];if(children&&0!==children.length)return!1;this.ids=[data[propsValue]],this.visible=!1}this._emitFun(),this.$emit("node-click",data,node,vm)}},_treeCheckFun:function _treeCheckFun(data,node,vm){var _this4=this;this.ids=[];var propsValue=this.propsValue;node.checkedNodes.forEach(function(item){_this4.ids.push(item[propsValue])}),this.$emit("check",data,node,vm),this._emitFun()},_selectRemoveTag:function _selectRemoveTag(tag){var _this5=this,data=this.data,propsValue=this.propsValue,propsLabel=this.propsLabel;each(data,function(item){if(item[propsLabel]===tag){var value=item[propsValue];_this5.ids=_this5.ids.filter(function(id){return id!==value})}},this.propsChildren),this.$refs.tree.setCheckedKeys(this.ids),this.$emit("removeTag",this.ids,tag),this._emitFun()},_selectClearFun:function _selectClearFun(){this.ids=[];var multiple=this.selectParams.multiple;this.$emit("input",multiple?[]:""),this.$emit("select-clear"),this._updatePopoverLocationFun()},_emitFun:function _emitFun(){var multiple=this.selectParams.multiple;this.$emit("input",multiple?this.ids:this.ids.length>0?this.ids[0]:""),this._updatePopoverLocationFun()},_updateH:function _updateH(){var _this6=this;this.$nextTick(function(){_this6.width=_this6.$refs.select.$el.getBoundingClientRect().width})},_popoverShowFun:function _popoverShowFun(val){this._updateH()},_popoverHideFun:function _popoverHideFun(e){this._getEventPath(e).some(function(list){return list.className&&"string"==typeof list.className&&-1!==list.className.indexOf("el-tree-select")})||(this.visible=!1)},treeDataUpdateFun:function treeDataUpdateFun(data){var _this7=this;this.data=data,data.length>0&&setTimeout(function(){_this7._setSelectNodeFun(_this7.ids)},300)},filterFun:function filterFun(val){this.$refs.tree.filter(val)}},components:{},beforeDestroy:function beforeDestroy(){off(document,"mouseup",this._popoverHideFun)}},componentNormalizer=(__webpack_require__("3414"),__webpack_require__("2877")),component=Object(componentNormalizer.a)(src_ElTreeSelectvue_type_script_lang_js_,function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"el-tree-select",class:_vm.selectClass},[_c("el-select",_vm._b({directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],ref:"select",staticClass:"el-tree-select-input",style:_vm.styles,attrs:{disabled:_vm.disabled,"popper-class":"select-option","popper-append-to-body":!1,filterable:!1,multiple:_vm.selectParams.multiple,title:_vm.labels},on:{"remove-tag":_vm._selectRemoveTag,clear:_vm._selectClearFun,focus:_vm._popoverShowFun},model:{value:_vm.labels,callback:function($$v){_vm.labels=$$v},expression:"labels"}},"el-select",_vm.selectParams,!1)),_c("el-popover",{ref:"popover",attrs:{placement:_vm.placement,"popper-class":_vm.popperClass,width:_vm.width,trigger:"click"},model:{value:_vm.visible,callback:function($$v){_vm.visible=$$v},expression:"visible"}},[_vm.treeParams.filterable?_c("el-input",{staticClass:"input-with-select mb10",attrs:{size:"mini"},on:{change:_vm._searchFun},model:{value:_vm.keywords,callback:function($$v){_vm.keywords=$$v},expression:"keywords"}},[_c("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1):_vm._e(),_c("el-scrollbar",{staticClass:"is-empty",attrs:{tag:"div","wrap-class":"el-select-dropdown__wrap","view-class":"el-select-dropdown__list"}},[_c("el-tree",_vm._b({directives:[{name:"show",rawName:"v-show",value:_vm.data.length>0,expression:"data.length>0"}],ref:"tree",attrs:{data:_vm.data,"node-key":_vm.propsValue,draggable:!1,"current-node-key":_vm.ids.length>0?_vm.ids[0]:"","show-checkbox":_vm.selectParams.multiple,"filter-node-method":_vm._filterFun,"render-content":_vm.treeRenderFun},on:{"node-click":_vm._treeNodeClickFun,check:_vm._treeCheckFun}},"el-tree",_vm.treeParams,!1)),0===_vm.data.length?_c("div",{staticClass:"no-data"},[_vm._v("暂无数据")]):_vm._e()],1)],1)],1)},[],!1,null,null,null);__webpack_exports__.a=component.exports},"71bb":function(module,exports,__webpack_require__){var content=__webpack_require__("5fff");"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("499e").default)("1c8c2436",content,!0,{sourceMap:!1,shadowMode:!1})},bce1:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("ac6a"),__webpack_require__("06db");var _storybook_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("7d14"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4357"),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("a026"),element_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("4587"),element_ui__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_5__),_components_src_ElTreeSelect_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("64a4");__webpack_require__("cd2e");vue__WEBPACK_IMPORTED_MODULE_4__.default.use(element_ui__WEBPACK_IMPORTED_MODULE_5___default.a,{size:"small"}),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("ref调整数据",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("通过ref传参数",function(){return{components:{ElTreeSelect:_components_src_ElTreeSelect_vue__WEBPACK_IMPORTED_MODULE_6__.a},template:'\n      <el-row>\n          <el-col :span="6">\n            <ElTreeSelect v-model="values" :styles="styles" :selectParams="selectParams" :treeParams="treeParams" ref="treeSelect" @searchFun="_searchFun"></ElTreeSelect>\n          </el-col>\n          <el-col :span="6">\n            <el-button type="primary" @click="_changeDataFun">通过ref修改下拉树数据</el-button>\n          </el-col>\n          <el-col :span="6">\n          当前选中数据ID：{{values}}\n          </el-col>\n      </el-row>\n      ',data:function data(){return{styles:{width:"300px"},values:"",selectParams:{clearable:!0,placeholder:"请输入内容"},treeParams:{clickParent:!1,filterable:!0,"check-strictly":!0,"default-expand-all":!0,"expand-on-click-node":!1,"render-content":this._renderFun,data:[{name:"节点",id:"11",child:[{name:"XXX子节点",id:"22"}]}],props:{children:"child",label:"name",disabled:"disabled",value:"id"}}}},methods:{_changeDataFun:function _changeDataFun(){this.values="1",this.$refs.treeSelect.treeDataUpdateFun([{name:"新增节点",id:"1",child:[{name:"新增XXX子节点",id:"2"}]}])},_searchFun:function _searchFun(val){this.$refs.treeSelect.filterFun(val)}}}})}.call(this,__webpack_require__("8ca4")(module))},f330:function(module,exports,__webpack_require__){var map={"./index.stories.js":"f648","./ref.stories.js":"bce1"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="f330"},f648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("c5f6");var _storybook_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7d14"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4357"),vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a026"),element_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4587"),element_ui__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_4__),_components_src_ElTreeSelect_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("64a4");__webpack_require__("cd2e");vue__WEBPACK_IMPORTED_MODULE_3__.default.use(element_ui__WEBPACK_IMPORTED_MODULE_4___default.a,{size:"small"}),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("渲染",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("通过props传参数",function(){return{components:{ElTreeSelect:_components_src_ElTreeSelect_vue__WEBPACK_IMPORTED_MODULE_5__.a},template:'\n        <el-row>\n            <el-col :span="12">\n            <ElTreeSelect v-model="values" :styles="styles" :selectParams="selectParams" :treeParams="treeParams" ref="treeSelect"></ElTreeSelect>\n            </el-col>\n            <el-col :span="12">\n            当前选中数据ID：{{values}}\n            </el-col>\n        </el-row>\n    ',props:{styles:{type:Object,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("调整样式：",{width:"500px"})},values:{type:[String,Array,Number],default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.array)("v-model配置：",[1,3])},selectParams:{type:Object,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("input参数：",{clearable:!0,placeholder:"请输入内容"})},treeParams:{type:Object,default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("下拉树参数：",{"check-strictly":!0,"default-expand-all":!0,"expand-on-click-node":!1,clickParent:!1,filterable:!0,data:[{testId:1,name:"节点1",disabled:!0,child:[{testId:111111,name:"子节点"}]},{testId:3,name:"节点3"}],props:{children:"child",label:"name",disabled:"disabled",value:"testId"}})}}}})}.call(this,__webpack_require__("8ca4")(module))}},[[0,1,2]]]);
//# sourceMappingURL=main.715324c6cff7cb351725.bundle.js.map