import routable from "./routable";

let slotCompMixin = {
    data(){ return {
        mixinBelongPageName: null,
    }},
    methods: {
        slotPageName: function(pageName) {
            if (window.isEditor) {
                // 渲染时检查：如果一个页面的插槽子页面树的节点指向自己，说明存在循环引用
                if (pageName == this.$store.state.currentPage) {
                    this.$notify.warning({
                        message: `${pageName}插槽页面存在循环引用，请使用其它插槽页面或解除引用。`,
                    });
                    return;
                }
                return pageName+"Slot"
            } else {
                if (!pageName) return "";
                let routeItem = routable.get(pageName);
                if (routeItem && routeItem.item) {
                  let vm = routeItem.item.component;
                  return vm;
                }
                return ""
            }
        },
        isCompExist(compID) {
            let p = this;
            while (p.$parent && !p.mixinBelongPageName) {
                p = p.$parent;
            }
            let pageName = p.mixinBelongPageName;
            if (window.isEditor) {
                let slots = this.$store.getters.visibleSlotViews(pageName);
                if(!compID) return false;
                let set = new Set(slots);
                let isExist = set.has(compID);
                return isExist;
            } else {
                if(!compID) return false;
                let set = new Set(routable.slotViews);
                let isExist = set.has(compID);
                return isExist;
            }
        },
    }
}

export default slotCompMixin;

