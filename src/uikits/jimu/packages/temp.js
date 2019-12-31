import jimu from './jimu'

var setTemp = function(key,value){
    if(!key){
        return;
    }
    var state = jimu.modules.routable.store.state;
    if(!state.$tempDatas){
        state.$tempDatas = {};
    }
    state.$tempDatas[key] = value;
}

var getTemp = function(key){
    if(!key){
        return;
    }
    var state = jimu.modules.routable.store.state;
    if(!state.$tempDatas){
        state.$tempDatas = {};
    }
    return state.$tempDatas[key];
}

export default {
    get: getTemp,
    set: setTemp
}