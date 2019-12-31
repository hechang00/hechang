<template>
  <div class="wrap" ref="wrap">
    <div class="content" ref="contents" v-for="(item,index) in numLength" :key="index" :style="{'font-family':font,'font-size':fontSize + 'px','color':color,'font-weight':fontWeight,
        'background-color':backgroundColor,}" :value="value">
      <div class="item" v-for="(val,i) in itemArr" :key="i">{{val}}</div>
    </div>
  </div>
</template>
     <script>
export default {
  name: "jm-listscroll",
  props: {
    font: {
      default: "PingFang SC"
    },
    value: {
      default: "123"
    },
    
    fontSize: {
      default: 18
    },
    color: {
      default: "#303133"
    },
    fontWeight: {
      default: "normal"
    },
    backgroundColor: {
      default: ""
    },
  },
  data() {
    return {
      num:'',
      itemArr:[0,1,2,3,4,5,6,7,8,9],
      numLength:0,
      timer:[],
      loadflag:1
    };
  },
  methods: {
    initData:function(num){
      console.log('hhhh')
      let reg =  /^\d+(\.\d+)?$/
      if(!reg.test(num)) return
      this.numLength =num.split("")
      // if(!this.numLength.length) return
      let wrap = this.$refs.wrap
      wrap.style.width = (this.numLength.length*20) + 'px'
      
      let _this = this
      if(_this.numLength.length){
        _this.$nextTick(() => {
          let content = this.$refs.contents
          if(!content || !content.length){
            return
          }
          for(let j =0; j < _this.numLength.length; j ++){
            if(content[j] && content[j].style) content[j].style.transform = "translateY(" + 0 + "px)";
          }
          // 设置位移
          let distance = []; // 位移距离
          // _this.timer = []
          for(let i =0; i < _this.numLength.length; i ++){
            // content[i].style.transform = "translateY(0px)";
            // clearInterval(_this.timer[i]);
            let index = _this.numLength[i]
            distance[i] = 0
            clearInterval(_this.timer[i])
            _this.timer[i] = setInterval(function() {
              distance[i] = distance[i] - 1
              if(distance[i] < (-(index*30))) {
                clearInterval(_this.timer[i]);
                return
              }
              if(content[i] && content[i].style) content[i].style.transform = "translateY(" + distance[i] + "px)";
            }, 5);
          }
          console.log('distance=====',distance)
        })
      }
    }
  },
  // 把父组件传入的arr转化成字符串
  mounted: function() {
    console.log('mounted')
    this.num = this.value
    this.initData(this.num)
  },
  watch:{
    value(newVal,oldVal){
      this.initData(newVal)
    }
  }
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
  color: #333;
  display: flex;
  height: 30px;
  position: relative;
}

.content {
  transition: 0.9s;
  width: 20px;
  height: 300px;
}
.item{
  height: 30px;
  line-height: 30px;
  width: 20px;
  text-align: center;
}
</style>

