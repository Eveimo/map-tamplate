export  default {
  removeLayer(signal)/*删除指定标记图层*/{
    this.map.eachLayer((layer)=>{
      // console.log(layer)
      if(layer.signal===signal){
        // console.log(layer)
        this.map.removeLayer(layer)
      }
    });
  },
  getLayers()/*获取所有图层*/{
    let arr=[]
    this.map.eachLayer(function(layer){
      // console.log(layer)
      arr.push(layer)
    });
    return arr
  }
}
