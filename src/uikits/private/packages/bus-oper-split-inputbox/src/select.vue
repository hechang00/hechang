<template>
  <div
    class="el-select"
    :class="[selectSize ? 'el-select--' + selectSize : '']"
    @click.stop="toggleMenu"
    v-clickoutside="handleClose">
    <div
      class="el-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }">
      <span v-if="collapseTags && selected.length">
        <el-tag
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="selected[0].hitState"
          type="info"
          @close="deleteTag($event, selected[0])"
          disable-transitions>
          <span class="el-select__tags-text">{{ selected[0].currentLabel }}</span>
        </el-tag>
        <el-tag
          v-if="selected.length > 1"
          :closable="false"
          :size="collapseTagSize"
          type="info"
          disable-transitions>
          <span class="el-select__tags-text">+ {{ selected.length - 1 }}</span>
        </el-tag>
      </span>

      <!-- 合并输入框及选中tag为一个input -->
      <input
        type="text"
        class="el-select__input el-select-ipt-jm"
        :class="[selectSize ? `is-${ selectSize }` : '']"
        :disabled="selectDisabled"
        :autocomplete="autoComplete || autocomplete"
        @focus="handleFocus"
        @blur="handleBlur1"
        @click.stop
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.stop.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @paste="handlePasteFunction"
        v-model="completeInputValue"
        @input="debouncedQueryChange"
        v-if="filterable"
        :style="{ 'flex-grow': '1', width: inputLength / (inputWidth - 32) + '%', 'max-width': inputWidth - 42 + 'px' }"
        ref="input">
    </div>
    <el-input
      ref="reference"
      v-model="selectedLabel"
      type="text"
      :placeholder="currentPlaceholder"
      :name="name"
      :id="id"
      :autocomplete="autoComplete || autocomplete"
      :size="selectSize"
      :disabled="selectDisabled"
      :readonly="readonly"
      :validate-event="false"
      :class="{ 'is-focus': visible }"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.native="debouncedOnInputChange"
      @keydown.native.down.stop.prevent="navigateOptions('next')"
      @keydown.native.up.stop.prevent="navigateOptions('prev')"
      @keydown.native.enter.prevent="selectOption"
      @keydown.native.esc.stop.prevent="visible = false"
      @keydown.native.tab="visible = false"
      @paste.native="debouncedOnInputChange"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false">
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <!-- 根据运营组需求，不显示箭头图标 -->
        <!-- <i v-show="!showClose" :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i> -->
        <i v-if="showClose" class="el-select__caret el-input__icon el-icon-circle-close" @click="handleClearClick"></i>
      </template>
    </el-input>
    <transition
      name="el-zoom-in-top"
      @before-enter="handleMenuEnter"
      @after-leave="doDestroy">
      <el-select-menu
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible && emptyText !== false">
        <!-- 选项列表 -->
        <el-scrollbar
          tag="ul"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
          ref="scrollbar"
          :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
          v-show="options.length > 0 && !loading">
          <el-option
            :value="query"
            created
            v-if="showNewOption">
          </el-option>
          <slot></slot>
        </el-scrollbar>
        <!-- 无选项时显示文本 -->
        <template v-if="emptyText && (!allowCreate || loading || (allowCreate && options.length === 0 ))">
          <slot name="empty" v-if="$slots.empty"></slot>
          <p class="el-select-dropdown__empty" v-else>
            {{ emptyText }}
          </p>
        </template>
      </el-select-menu>
    </transition>
  </div>
</template>

<script type="text/babel">
  import Emitter from 'element-ui/src/mixins/emitter';
  import Focus from 'element-ui/src/mixins/focus';
  import Locale from 'element-ui/src/mixins/locale';
  import ElSelectMenu from './select-dropdown.vue';
  import debounce from 'throttle-debounce/debounce';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
  import { t } from 'element-ui/src/locale';
  import scrollIntoView from 'element-ui/src/utils/scroll-into-view';
  import { getValueByPath } from 'element-ui/src/utils/util';
  import { valueEquals, isIE, isEdge } from 'element-ui/src/utils/util';
  import NavigationMixin from './navigation-mixin';
  import { isKorean } from 'element-ui/src/utils/shared';

  export default {
    mixins: [Emitter, Locale, Focus('reference'), NavigationMixin],

    name: 'ElSelect',

    componentName: 'ElSelect',

    inject: {
      elForm: {
        default: ''
      },

      elFormItem: {
        default: ''
      }
    },

    provide() {
      return {
        'select': this
      };
    },

    computed: {
      /**
       * 输入框中的解析出的被匹配的字段
       */
      query() {
        if(this.completeInputValue == this.currentSelectLabels) return '';     
        let splitIndex = this.completeInputValue.lastIndexOf(this.splitChar);
        let myQuery = this.completeInputValue.slice(splitIndex).slice(1);
        return myQuery;
      },

      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },

      readonly() {
        return !this.filterable || this.multiple || (!isIE() && !isEdge() && !this.visible);
      },

      showClose() {
        let hasValue = this.multiple
          ? Array.isArray(this.value) && this.value.length > 0
          : this.value !== undefined && this.value !== null && this.value !== '';
        let criteria = this.clearable &&
          !this.selectDisabled &&
          this.inputHovering &&
          hasValue;
        return criteria;
      },

      // 输入框右边icon
      iconClass() {
        return this.remote && this.filterable ? '' : (this.visible ? 'arrow-up is-reverse' : 'arrow-up');
      },

      debounce() {
        return this.remote ? 300 : 0;
      },

      // 无选项时显示的文本
      emptyText() {
        if (this.loading) {
          return this.loadingText || this.t('el.select.loading');
        } else {
          if (this.remote && this.query === '' && this.options.length === 0) return false;
          if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
            return this.noMatchText || this.t('el.select.noMatch');
          }
          if (this.options.length === 0) {
            return this.noDataText || this.t('el.select.noData');
          }
        }
        return null;
      },

      showNewOption() {
        let hasExistingOption = this.options.filter(option => !option.created)
          .some(option => option.currentLabel === this.query);
        return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
      },

      selectSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },

      selectDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      },

      collapseTagSize() {
        return ['small', 'mini'].indexOf(this.selectSize) > -1
          ? 'mini'
          : 'small';
      }
    },

    components: {
      ElSelectMenu
    },

    directives: { Clickoutside },

    props: {
      orgOptions: Array, //default传来的用于本地使用的option列表
      name: String,
      id: String,
      value: {
        required: true
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      /** @Deprecated in next major version */
      autoComplete: {
        type: String,
        validator(val) {
          process.env.NODE_ENV !== 'production' &&
            console.warn('[Element Warn][Select]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
          return true;
        }
      },
      automaticDropdown: Boolean,
      size: String,
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: String,
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: {
        type: Number,
        default: 0
      },
      placeholder: {
        type: String,
        default() {
          return t('el.select.placeholder');
        }
      },
      defaultFirstOption: Boolean,
      reserveKeyword: Boolean,
      valueKey: {
        type: String,
        default: 'value'
      },
      collapseTags: Boolean,
      popperAppendToBody: {
        type: Boolean,
        default: true
      },
      splitChar: { // 选项分割符
        type: String,
        default: '|'
      }
    },

    data() {
      return {
        options: [], // 当前匹配的选项列表
        currentSelectLabels: "", // 由分割符号连接成的字段
        cachedOptions: [],
        localCacheOptions: [], 
        createdLabel: null,
        createdSelected: false,
        selected: this.multiple ? [] : {},
        inputLength: 20,
        inputWidth: 0,
        initialInputHeight: 0,
        cachedPlaceHolder: '',
        optionsCount: 0,
        filteredOptionsCount: 0,
        visible: false,
        softFocus: false,
        selectedLabel: '',
        hoverIndex: -1,
        // query: '',
        previousQuery: null,
        inputHovering: false,
        currentPlaceholder: '',
        menuVisibleOnFocus: false,
        isOnComposition: false,
        isSilentBlur: false,
        completeInputValue: '' // 输入框的全部内容
      };
    },

    watch: {
      // cachedOptions() {
      //     console.log('elenore', 'change in yunying select com folder', this.cachedOptionsTest);
      // },
      // 输入框内容发生改变
      completeInputValue(val) {
        // 支持全选删除清空
        if(val == "") {
          const value = this.multiple ? [] : '';
          this.$emit('input', value);
          this.emitChange(value);
          this.visible = false;
          this.$emit('clear');
        }

        if(this.isPaste) {
            this.completeInputValue = this.completeInputValue.concat(this.splitChar);
            this.isPaste = false;
        }

        let splitIndex = this.completeInputValue.lastIndexOf(this.splitChar);
        const orgSelected = this.selected;
        if(splitIndex > -1) {
          let orgLen = this.value.length; // 当前选中的数量
          let myRes = this.completeInputValue.slice(0, splitIndex); // 以最后一个|为界限，当前的输入值同步到选项
          let myArr = myRes.split(this.splitChar);
          let myOptions = [];
          for(let i=0;i<myArr.length;i++) {
            myOptions.push(this.getOption(myArr[i]));
          }
          // 统计原options的label数组，用于筛选出新增选项
          let orgOpt = [];
          let orgValue = [];
          for(let i=0;i<this.orgOptions.length;i++) {
              orgOpt.push(this.orgOptions[i].label);
              orgValue.push(this.orgOptions[i].value);
          }
          // 统计原选项
          let orgSel = [];
          for(let i=0;i<orgSelected.length;i++) {
              orgSel.push(orgSelected[i].currentLabel);
          }
          // 原始选项里没有的增加并设置为选中
          // 原始选项里有的但没选中的设置为选中
          for(let i=0;i<myOptions.length;i++) {
            if(orgOpt.indexOf(myOptions[i].value) == -1) {
              if(orgValue.indexOf(myOptions[i].value) == -1) {
                this.addAndSelect(myOptions[i]);
              } else {
                let newVal = myOptions[i].value;
                const value = this.value.push(newVal);
                this.$emit('input', this.value);
                this.emitChange(this.value);
                let result = [];
                if (Array.isArray(this.value)) {
                  this.value.forEach(value => {
                    let opt = this.getOption(value);
                    result.push(this.getOption(value));
                  });
                }   
                this.selected = result;
              }  
            } 
            else if(orgSel.indexOf(myOptions[i].value) == -1) {
              const optValue = this.findValue(myOptions[i].value);
              const value = this.value.push(optValue);
              this.$emit('input', this.value);
              this.emitChange(this.value);
              let result = [];
              if (Array.isArray(this.value)) {
                this.value.forEach(value => {
                  let opt = this.getOption(value);
                  result.push(this.getOption(value));
                });
              }   
              this.selected = result;
            }
          }

          // 删除不选的选项
          for(let i=0; i<orgSel.length; i++) {
            if(myArr.indexOf(orgSel[i]) == -1) {
              this.setUnselected(orgSelected[i]);
            }
          }
        }
      },

      selectDisabled() {
        this.$nextTick(() => {
          this.resetInputHeight();
        });
      },

      placeholder(val) {
        this.cachedPlaceHolder = this.currentPlaceholder = val;
      },

      // 选中的选项
      value(val, oldVal) {
        if (this.multiple) {
          this.resetInputHeight();
          if ((val && val.length > 0) || (this.$refs.input && this.query !== '')) {
            this.currentPlaceholder = '';
          } else {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
          if (this.filterable && !this.reserveKeyword) {
            // this.query = '';
            this.completeInputValue = this.currentSelectLabels;
            this.handleQueryChange(this.query); // 不知道要不要留
          }
        }
        this.setSelected();
        if (this.filterable && !this.multiple) {
          this.inputLength = 20;
        }
        if (!valueEquals(val, oldVal)) {
          this.dispatch('ElFormItem', 'el.form.change', val);
        }
      },

      visible(val) {
        if (!val) {
          this.broadcast('ElSelectDropdown', 'destroyPopper');
          if (this.$refs.input) {
            this.$refs.input.blur();
          }
          // this.query = '';
          // this.completeInputValue = this.currentSelectLabels; // 恢复会导致少一个|
          this.previousQuery = null;
          this.selectedLabel = '';
          this.inputLength = 20;
          this.menuVisibleOnFocus = false;
          this.resetHoverIndex();
          this.$nextTick(() => {
            if (this.$refs.input &&
              this.$refs.input.value === '' &&
              this.selected.length === 0) {
              this.currentPlaceholder = this.cachedPlaceHolder;
            }
          });
          if (!this.multiple) {
            if (this.selected) {
              if (this.filterable && this.allowCreate &&
                this.createdSelected && this.createdLabel) {
                this.selectedLabel = this.createdLabel;
              } else {
                this.selectedLabel = this.selected.currentLabel;
              }
              // if (this.filterable) this.query = this.selectedLabel;
              if (this.filterable) this.completeInputValue = this.currentSelectLabels.concat(this.splitChar).concat(this.selectedLabel);
            }

            if (this.filterable) {
              this.currentPlaceholder = this.cachedPlaceHolder;
            }
          }
        } else {
          this.broadcast('ElSelectDropdown', 'updatePopper');
          if (this.filterable) {
            // this.query = this.remote ? '' : this.selectedLabel;
            this.handleQueryChange(this.query);
            if (this.multiple) {
              this.$refs.input.focus();
            } else {
              if (!this.remote) {
                this.broadcast('ElOption', 'queryChange', '');
                this.broadcast('ElOptionGroup', 'queryChange');
              }

              if (this.selectedLabel) {
                this.currentPlaceholder = this.selectedLabel;
                this.selectedLabel = '';
              }
            }
          }
        }
        this.$emit('visible-change', val);
      },

      // 选项发生变化
      options(val) {
        if (this.$isServer) return;
        this.$nextTick(() => {
          this.broadcast('ElSelectDropdown', 'updatePopper');
        });
        if (this.multiple) {
          this.resetInputHeight();
        }
        let inputs = this.$el.querySelectorAll('input');
        if ([].indexOf.call(inputs, document.activeElement) === -1) {
          this.setSelected();
        }
        if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
          this.checkDefaultFirstOption();
        }
      }
    },

    methods: { 
      handleBlur1() {
        this.softFocus = false;
        if(this.completeInputValue != "" && this.completeInputValue[this.completeInputValue.length-1] != this.splitChar && this.hoverIndex == -1) {
          this.completeInputValue = this.completeInputValue.concat(this.splitChar);
        }
      },
      handlePasteFunction() {
        this.isPaste = true;
      },
      findValue(name) {
        for(let i=0; i<this.orgOptions.length; i++) {
          if(this.orgOptions[i].label == name) {
            return this.orgOptions[i].value;
          }
        }
      },
      /**
       * 增加和选中新建选项
       */
      addAndSelect(opt) {
          this.$emit('modify-options', opt);
          // const value = this.value.push(opt.label);
          // this.emitChange(value);
          let result = [];
          if (Array.isArray(this.value)) {
            this.value.forEach(value => {
              let opt = this.getOption(value);
              // result.push(this.orgOptions[this.orgOptions])
              result.push(this.getOption(value));
            });
          }
          this.selected = result;
      },

      /**
       * 反选删除的选项
       */
      setUnselected(sel) {
        let index = this.selected.indexOf(sel);
        if (index > -1 && !this.selectDisabled) {
          const value = this.value.slice();
          value.splice(index, 1);
          this.$emit('input', value);
          this.emitChange(value);
        }
      },
      
      handleComposition(event) {
        const text = event.target.value;
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          // this.handleQueryChange(text);
          this.handleQueryChange(this.query);
        } else {
          const lastCharacter = text[text.length - 1] || '';
          this.isOnComposition = !isKorean(lastCharacter);
        }
      },
      // 输入值发生变化
      handleQueryChange(val) {
        if (this.previousQuery === val || this.isOnComposition) return;
        if (
          this.previousQuery === null &&
          (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')
        ) {
          this.previousQuery = val;
          return;
        }
        this.previousQuery = val;
        this.$nextTick(() => {
          if (this.visible) this.broadcast('ElSelectDropdown', 'updatePopper');
        });
        this.hoverIndex = -1;
        if (this.multiple && this.filterable) {
          this.$nextTick(() => {
            const length = this.$refs.input.value.length * 15 + 20;
            this.inputLength = this.collapseTags ? Math.min(50, length) : length;
            this.managePlaceholder();
            this.resetInputHeight();
          });
        }
        if (this.remote && typeof this.remoteMethod === 'function') {
          this.hoverIndex = -1;
          this.remoteMethod(val);
        } else if (typeof this.filterMethod === 'function') {
          this.filterMethod(val);
          this.broadcast('ElOptionGroup', 'queryChange');
        } else {
          this.filteredOptionsCount = this.optionsCount;
          this.broadcast('ElOption', 'queryChange', val);
          this.broadcast('ElOptionGroup', 'queryChange');
        }
        if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
          this.checkDefaultFirstOption();
        }
      },

      scrollToOption(option) {
        const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
        if (this.$refs.popper && target) {
          const menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
          scrollIntoView(menu, target);
        }
        this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
      },

      handleMenuEnter() {
        this.$nextTick(() => this.scrollToOption(this.selected));
      },

      emitChange(val) {
        if (!valueEquals(this.value, val)) {
          this.$emit('change', val);
        }
      },

      getOption(value) {
        /**
         * 增加到localCacheOptions
         */
        // for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
          // let flag = 0;
          // for(let j=0; j<this.localCacheOptions.length; j++) {
          //   if(this.localCacheOptions[j].label == this.cachedOptions[i].label) {
          //     flag = 1;
          //   }
          // }
          // if(flag == 0) {
          //   this.localCacheOptions.push(this.cachedOptions[i]);
          // }
        // }

        let option;
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
        const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';
        const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]';

        for (let i = this.cachedOptions.length - 1; i >= 0; i--) {

          const cachedOption = this.cachedOptions[i];
          const isEqual = isObject
            ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
            : cachedOption.value === value;
          if (isEqual) {
            option = cachedOption;
            break;
          }
        }
        if (option) return option;
        const label = (!isObject && !isNull && !isUndefined)
          ? value : '';
        let newOption = {
          value: value,
          currentLabel: label
        };
        if (this.multiple) {
          newOption.hitState = false;
        }
        return newOption;
      },

      // 选中一个选项，先调value再调setSelect
      setSelected() {
        if (!this.multiple) {
          let option = this.getOption(this.value);
          if (option.created) {
            this.createdLabel = option.currentLabel;
            this.createdSelected = true;
          } else {
            this.createdSelected = false;
          }
          this.selectedLabel = option.currentLabel;
          this.selected = option;
          // if (this.filterable) this.query = this.selectedLabel;
          // if (this.filterable) this.completeInputValue = this.currentSelectLabels.concat(this.selectedLabel);
          return;
        }
        // 为 this.selected增加新选项
        let result = [];
        if (Array.isArray(this.value)) {
          this.value.forEach(value => {
            result.push(this.getOption(value));
          });
        }
        this.selected = result;

        // 复选时，选项以字符串的形式显示
         if(this.multiple){
              var arr = [];
              if(this.selected && this.selected.length){
                  this.selected.forEach(function(item){
                      arr.push(item.currentLabel);
                  })
              }
              this.currentSelectLabels = arr.join(this.splitChar).trim();
              // 已选选项为空时，不加|
              if(arr.length == 0) {
                this.completeInputValue = "";
              } else {
                this.completeInputValue = this.currentSelectLabels.concat(this.splitChar);
              }
         }

        this.$nextTick(() => {
          this.resetInputHeight();
        });
      },

      handleFocus(event) {
        if (!this.softFocus) {
          if (this.automaticDropdown || this.filterable) {
            this.visible = true;
            this.menuVisibleOnFocus = true;
          }
          this.$emit('focus', event);
        } else {
          this.softFocus = false;
        }
      },

      blur() {
        this.visible = false;
        this.$refs.reference.blur();
      },

      handleBlur(event) {
        setTimeout(() => {
          if (this.isSilentBlur) {
            this.isSilentBlur = false;
          } else {
            this.$emit('blur', event);
          }
        }, 50);
        this.softFocus = false;
      },

      handleClearClick(event) {
        this.deleteSelected(event);
      },

      doDestroy() {
        this.$refs.popper && this.$refs.popper.doDestroy();
      },

      handleClose() {
        this.visible = false;
      },

      toggleLastOptionHitState(hit) {
        if (!Array.isArray(this.selected)) return;
        const option = this.selected[this.selected.length - 1];
        if (!option) return;

        if (hit === true || hit === false) {
          option.hitState = hit;
          return hit;
        }

        option.hitState = !option.hitState;
        return option.hitState;
      },

      deletePrevTag(e) {
        if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
          const value = this.value.slice();
          value.pop();
          this.$emit('input', value);
          this.emitChange(value);
        }
      },

      managePlaceholder() {
        if (this.currentPlaceholder !== '') {
          this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
        }
      },

      resetInputState(e) {
        if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
        this.inputLength = this.$refs.input.value.length * 15 + 20;
        this.resetInputHeight();
      },

      resetInputHeight() {
        if (this.collapseTags && !this.filterable) return;
        this.$nextTick(() => {
          if (!this.$refs.reference) return;
          let inputChildNodes = this.$refs.reference.$el.childNodes;
          let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0];
          const tags = this.$refs.tags;
          const sizeMap = {
            medium: 36,
            small: 32,
            mini: 28
          };
          const sizeInMap = sizeMap[this.selectSize] || this.initialInputHeight || 40;
          input.style.height = this.selected.length === 0
            ? sizeInMap + 'px'
            : Math.max(
              tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
              sizeInMap
            ) + 'px';
          if (this.visible && this.emptyText !== false) {
            this.broadcast('ElSelectDropdown', 'updatePopper');
          }
        });
      },

      resetHoverIndex() {
        setTimeout(() => {
          if (!this.multiple) {
            this.hoverIndex = this.options.indexOf(this.selected);
          } else {
            if (this.selected.length > 0) {
              this.hoverIndex = Math.min.apply(null, this.selected.map(item => this.options.indexOf(item)));
            } else {
              this.hoverIndex = -1;
            }
          }
        }, 300);
      },

      handleOptionSelect(option, byClick) {
        if (this.multiple) {
          const value = (this.value || []).slice();
          const optionIndex = this.getValueIndex(value, option.value);
          if (optionIndex > -1) {
            value.splice(optionIndex, 1);
          } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
            value.push(option.value);
          }
          this.$emit('input', value);
          this.emitChange(value);
          if (option.created) {
            // this.query = '';
            // this.completeInputValue = this.currentSelectLabels;
            // this.handleQueryChange('');
            this.inputLength = 20;
          }
          if (this.filterable) this.$refs.input.focus();
        } else {
          this.$emit('input', option.value);
          this.emitChange(option.value);
          this.visible = false;
        }
        this.isSilentBlur = byClick;
        this.setSoftFocus();
        if (this.visible) return;
        this.$nextTick(() => {
          this.scrollToOption(option);
        });
      },

      setSoftFocus() {
        this.softFocus = true;
        const input = this.$refs.input || this.$refs.reference;
        if (input) {
          input.focus();
        }
      },

      getValueIndex(arr = [], value) {
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
        if (!isObject) {
          return arr.indexOf(value);
        } else {
          const valueKey = this.valueKey;
          let index = -1;
          arr.some((item, i) => {
            if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
              index = i;
              return true;
            }
            return false;
          });
          return index;
        }
      },

      toggleMenu() {
        if (!this.selectDisabled) {
          if (this.menuVisibleOnFocus) {
            this.menuVisibleOnFocus = false;
          } else {
            this.visible = !this.visible;
          }
          // if (this.visible) {
          //   (this.$refs.input || this.$refs.reference).focus();
          // }
        }
      },

      selectOption() {
        if (!this.visible) {
          this.toggleMenu();
        } else {
          if (this.options[this.hoverIndex]) {
            this.handleOptionSelect(this.options[this.hoverIndex]);
          } else {
            // enter事件补末端|
            this.completeInputValue = this.completeInputValue.concat(this.splitChar);
            this.handleQueryChange('');
          }
        }
      },

      deleteSelected(event) {
        event.stopPropagation();
        const value = this.multiple ? [] : '';
        this.$emit('input', value);
        this.emitChange(value);
        this.visible = false;
        this.$emit('clear');
      },

      deleteTag(event, tag) {
        let index = this.selected.indexOf(tag);
        if (index > -1 && !this.selectDisabled) {
          const value = this.value.slice();
          value.splice(index, 1);
          this.$emit('input', value);
          this.emitChange(value);
          this.$emit('remove-tag', tag.value);
        }
        event.stopPropagation();
      },

      onInputChange() {
        if (this.filterable && this.query !== this.selectedLabel) {
          // this.query = this.selectedLabel;
          // this.completeInputValue = this.currentSelectLabels.concat('|').concat(this.selectedLabel);
          this.handleQueryChange(this.query);
        }
      },

      onOptionDestroy(index) {
        if (index > -1) {
          this.optionsCount--;
          this.filteredOptionsCount--;
          this.options.splice(index, 1);
        }
      },

      resetInputWidth() {
        this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
      },

      handleResize() {
        this.resetInputWidth();
        if (this.multiple) this.resetInputHeight();
      },

      checkDefaultFirstOption() {
        this.hoverIndex = -1;
        // highlight the created option
        let hasCreated = false;
        for (let i = this.options.length - 1; i >= 0; i--) {
          if (this.options[i].created) {
            hasCreated = true;
            this.hoverIndex = i;
            break;
          }
        }
        if (hasCreated) return;
        for (let i = 0; i !== this.options.length; ++i) {
          const option = this.options[i];
          if (this.query) {
            // highlight first options that passes the filter
            if (!option.disabled && !option.groupDisabled && option.visible) {
              this.hoverIndex = i;
              break;
            }
          } else {
            // highlight currently selected option
            if (option.itemSelected) {
              this.hoverIndex = i;
              break;
            }
          }
        }
      },

      getValueKey(item) {
        if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
          return item.value;
        } else {
          return getValueByPath(item.value, this.valueKey);
        }
      }
    },

    created() {
      this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
      if (this.multiple && !Array.isArray(this.value)) {
        this.$emit('input', []);
      }
      if (!this.multiple && Array.isArray(this.value)) {
        this.$emit('input', '');
      }

      this.debouncedOnInputChange = debounce(this.debounce, () => {
        this.onInputChange();
      });

      this.debouncedQueryChange = debounce(this.debounce, (e) => {
        // 第一次输入字符串匹配时, query未取到, 用e.target传值
        if(this.query) {
          this.handleQueryChange(this.query);
        } else if(e.target.value.indexOf(this.splitChar) == -1){
          this.handleQueryChange(e.target.value);
        } else {
          this.handleQueryChange('');
        }
      });

      this.$on('handleOptionClick', this.handleOptionSelect);
      this.$on('setSelected', this.setSelected);
    },

    mounted() {
      if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
        this.currentPlaceholder = '';
      }
      addResizeListener(this.$el, this.handleResize);

      const reference = this.$refs.reference;
      if (reference && reference.$el) {
        const sizeMap = {
          medium: 36,
          small: 32,
          mini: 28
        };
        this.initialInputHeight = reference.$el.getBoundingClientRect().height || sizeMap[this.selectSize];
      }
      if (this.remote && this.multiple) {
        this.resetInputHeight();
      }
      this.$nextTick(() => {
        if (reference && reference.$el) {
          this.inputWidth = reference.$el.getBoundingClientRect().width;
        }
      });
      this.setSelected();
    },

    beforeDestroy() {
      if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize);
    }
  };
</script>
<style scoped>
.no-tag-text {
  user-select: all;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
}
.el-select-ipt-jm {
  margin-left: 4px;
}
/* .no-tag-text .el-select-ipt-jm{
  width: 40px !important;
} */
.no-tag-text .inner-input {
  border: none;
  outline: none;
}
</style>
