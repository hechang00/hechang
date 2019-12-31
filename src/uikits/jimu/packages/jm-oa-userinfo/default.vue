<template>
  <div :class="userInfoClass" @click="click">
    <img :src="oaAvatar" :style="{'width': size,'height': size,'-webkit-border-radius': size,'-moz-border-radius': size,'border-radius': size}" class="avatar-l" />
    <div :style="{'height':gap, 'width':gap}"></div>
    <el-tooltip :disabled="!disabled" :content="oaUserName">
      <div class="wrap"
        :style="{'white-space': isNowrap ? 'normal' : 'nowrap','word-break':isNowrap?'break-all':'normal','overflow': 'hidden','text-overflow':'ellipsis','line-clamp': lineClamp,'-webkit-box-orient': 'vertical','font-family':font,'font-size':fontSize + 'px','color':color,'font-weight':fontWeight,'text-align':textAlign,'letter-spacing':letterSpacing + 'px','line-height':newLineHeight + 'px','background-color':backgroundColor,'opacity':opacity/100,'text-shadow':(x==0&&y==0&&blurValue==0)?'none':(x+'px '+y+'px '+blurValue+'px '+shadowColor),'font-style':fontStyle,'text-decoration':textDecoration}"
        :value="oaUserName" v-html="oaUserName">
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oaUserName: "",
      oaAvatar: ""
    };
  },
  props: ['size', 'mode', 'gap', "fontSize","color","fontWeight","textAlign","letterSpacing","newLineHeight","font","backgroundColor","opacity","x","y","blurValue","shadowColor","fontStyle","textDecoration","disabled","isNowrap","lineClamp","url","windowName"],
  mounted() {
    console.log("请求用户信息", document.cookie);
    let cookies = document.cookies;
    this.oaUserName = this.getCookie("mk_user_name") || "ponyma";
    this.oaAvatar = `http://dayu.oa.com/avatars/${this.oaUserName}/profile.jpg`;
  },
  computed: {
    userInfoClass() {
      return this.mode == 'vertical' ? 'userInfoVertical': 'userInfoHorizontal';
    },
  },
  methods: {
    click(e) {
      this.$emit("click");
    },    
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  }
};
</script>
<style>
.wrap {
  display: inline-block;
}
.userInfoVertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userInfoHorizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.avatar-l {
    width: 64px;
    height: 64px;
    -webkit-border-radius: 64px;
    -moz-border-radius: 64px;
    border-radius: 64px;
}
</style>
