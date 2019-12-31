<template>
  <el-date-picker
    v-if="pickerOptions.shortcuts&&pickerOptions.shortcuts.length>0"
    v-model="modelValue"
    :type="dateType"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endplaceholder"
    :format="format"
    :readonly="readonly"
    :disabled="disabled"
    :editable="editable"
    :time-arrow-control="timeArrowControl"
    :placeholder="placeholder"
    :clearable="clearable"
    :align="align"
    :size="size"
    :value-format="valueFormat"
    :picker-options="pickerOptions"
    :default-time="localDefaultTime"
    @change="change"
    @blur="blur"
    @focus="focus"
  ></el-date-picker>
  <el-date-picker
    v-else
    v-model="modelValue"
    :type="dateType"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endplaceholder"
    :format="format"
    :readonly="readonly"
    :disabled="disabled"
    :editable="editable"
    :time-arrow-control="timeArrowControl"
    :placeholder="placeholder"
    :clearable="clearable"
    :align="align"
    :size="size"
    :value-format="valueFormat"
    :default-time="localDefaultTime"
    @change="change"
    @blur="blur"
    @focus="focus"
  ></el-date-picker>
</template>

<script>
export default {
  props: {
    value: {
      default: ""
    },
    dateType: {
      default: "date"
    },
    rangeSeparator: {
      default: ""
    },
    startPlaceholder: {
      default: ""
    },
    endplaceholder: {
      default: ""
    },
    placeholder: {
      default: "选择日期"
    },
    format: {
      default: ""
    },
    valueFormat: {
      default: ""
    },
    align: {
      default: "left"
    },
    size: {
      default: "large"
    },
    clearable: {
      default: true
    },
    shortcuts: {
      default: function() {
        return [];
      }
    },
    readonly: {
      default: false
    },
    disabled: {
      default: false
    },
    editable: {
      default: true
    },
    timeArrowControl: {
      default: false
    },
    rangeDefaultTime: {
      default: function() {
        return [];
      }
    },
    defaultTime: {
      default: ""
    }
  },
  computed: {
    localDefaultTime: {
      get() {
        if (
          this.dateType === "daterange" ||
          this.dateType === "datetimerange"
        ) {
          return this.rangeDefaultTime;
        } else {
          return this.defaultTime;
        }
      }
    },
    pickerOptions: {
      get() {
        return {
          shortcuts: this.getShortCuts(this.dateType)
        };
      }
    },
    modelValue: {
      get() {
        var _v = this.value;
        if (this.dateType == "daterange" || this.dateType == "datetimerange") {
          if (_v instanceof Array) {
          } else {
            if (_v) {
              _v = new Array(_v, _v);
            } else {
              _v = [];
            }
          }
        } else {
          if (_v instanceof Array) {
            _v = this.value.length > 0 ? this.value[0] : null;
          }
          if (this.valueFormat === "" && !(_v instanceof Date)) {
            _v = null;
          } else if (
            this.valueFormat !== "" &&
            this.valueFormat !== "timestamp" &&
            typeof _v != "string"
          ) {
            _v = "";
          } else if (
            this.valueFormat === "timestamp" &&
            typeof _v != "number"
          ) {
            _v = null;
          }
        }
        return _v;
      },
      set(curVal) {
        this.$emit("input", curVal);
      }
    }
  },
  watch: {
    valueFormat() {
      this.$emit("input", "");
    }
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    },
    blur(event) {
      this.$emit("blur", event);
    },
    focus(event) {
      this.$emit("focus", event);
    },
    getShortCuts(dataType) {
      let result = [];
      let shortcuts = this.shortcuts;
      let _this = this;
      if (Array.isArray(shortcuts)) {
        for (let i = 0; i < shortcuts.length; i++) {
          let shortcutsItem = shortcuts[i];
          let itemObj = {};
          itemObj.text = shortcutsItem.text;
          if (dataType === "daterange" || dataType === "datetimerange") {
            itemObj.onClick = function(picker) {
              const start = new Date();
              const end = new Date();
              // let endTime = end.getTime() + _this.getDayTimeStamp(shortcutsItem.endTime,shortcutsItem.unit);
              start.setTime(
                start.getTime() +
                  _this.getDayTimeStamp(
                    shortcutsItem.startTime,
                    shortcutsItem.unit
                  )
              );
              end.setTime(
                end.getTime() +
                  _this.getDayTimeStamp(
                    shortcutsItem.endTime,
                    shortcutsItem.unit
                  )
              );
              if (
                shortcutsItem.fixedTimePoint &&
                _this.rangeDefaultTime &&
                _this.rangeDefaultTime.length > 1
              ) {
                let startArray = _this.rangeDefaultTime[0].split(":");
                if (startArray.length === 3) {
                  start.setHours(startArray[0]);
                  start.setMinutes(startArray[1]);
                  start.setSeconds(startArray[2]);
                }
                let endArray = _this.rangeDefaultTime[1].split(":");
                if (endArray.length === 3) {
                  end.setHours(endArray[0]);
                  end.setMinutes(endArray[1]);
                  end.setSeconds(endArray[2]);
                }
              }
              picker.$emit("pick", [start, end]);
            };
          } else {
            itemObj.onClick = function(picker) {
              const date = new Date();
              date.setTime(
                date.getTime() +
                  _this.getDayTimeStamp(
                    shortcutsItem.startTime,
                    shortcutsItem.unit
                  )
              );
              if (_this.defaultTime) {
                let timeArray = _this.defaultTime.split(":");
                if (shortcutsItem.fixedTimePoint && timeArray.length === 3) {
                  date.setHours(timeArray[0]);
                  date.setMinutes(timeArray[1]);
                  date.setSeconds(timeArray[2]);
                }
              }
              picker.$emit("pick", date);
            };
          }
          result.push(itemObj);
        }
      }
      return result;
    },
    getDayTimeStamp(time, unit) {
      if (!isNaN(time)) {
        if (!unit) {
          return 1000 * time;
        }
        if (unit === "day") {
          return 3600 * 1000 * 24 * time;
        } else if (unit === "hour") {
          return 3600 * 1000 * time;
        } else if (unit === "minute") {
          return 60 * 1000 * time;
        } else if (unit === "second") {
          return 1000 * time;
        }
      } else {
        return 0;
      }
    }
  }
};
</script>