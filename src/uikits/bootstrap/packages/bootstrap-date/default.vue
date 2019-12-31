<template>
  <div class="form-group" v-if="isInline">
    <date-picker :config="{
        format:format,useCurrent:useCurrent,showTodayButton:showTodayButton,inline:inline,sideBySide:sideBySide,locale:locale
        }" v-model="modelValue"></date-picker>
    <p class="help-block">
      {{dateInline}}
    </p>
  </div>


  <div class="form-group" v-else>
    <div class="input-group">
      <date-picker
        :config="{
        format:format,useCurrent:useCurrent,showTodayButton:showTodayButton,inline:inline,sideBySide:sideBySide,allowInputToggle:allowInputToggle,locale:locale
        }" v-model="modelValue" @dp-show="showDatePickResult" @dp-change="listenToChangeEvent" :placeholder="placeholder" :wrap="wrap"></date-picker>
      <div class="input-group-append" v-show="iconType !='none'">
        <button class="btn btn-primary datepickerbutton" type="button" title="Toggle">
          <i class="far" :class="iconType"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';

// import "bootstrap/dist/css/bootstrap.css";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/solid.css";


export default {
  data() {
    return {
      date: new Date(),
      dateWrap: null,
      dateModal: moment(),
      dateValidate: null,
      time: null,
      dateLocale: moment(),
      dateInline: moment().toString(),
      startDate: null,
      endDate: null
    };
  },
  components: {
    datePicker
  },
  props: {
    value: {
        default: ''
    },
    format: {
        default: 'YYYY-MM-DD'
    },
    useCurrent: {
        default: true
    },
    allowInputToggle: {
        default: false
    },
    wrap: {
        default: false
    },
    inline: {
        default: false
    },
    isInline: {
        default: false
    },
    sideBySide: {
        default: false
    },
    showTodayButton: {
        default: false
    },
    iconType: {
        default: 'fa-calendar'
    },
    locale: {
        default: 'zh-cn'
    },
    placeholder: {
        default: ''
    }
},

  computed: {
    modelValue: {
      get() {
        return this.value || new Date()
      },
      set(curVal) {
        this.$emit("input", curVal);
      }
    }
  },
  methods: {
    showDatePickResult: function() {

    },
    listenToChangeEvent(...args) {
      console.log('listen To dp.change event - ', ...args)
    },
  },
};
</script>
<style lang="scss">
/* 在这里撰写 SCSS */
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";
@import "bootstrap/scss/_root.scss";
@import "bootstrap/scss/_type.scss";
@import "bootstrap/scss/_grid.scss";
@import "bootstrap/scss/_forms.scss";
@import "bootstrap/scss/_buttons.scss";
@import "bootstrap/scss/_dropdown.scss";
@import "bootstrap/scss/_input-group.scss";

</style>