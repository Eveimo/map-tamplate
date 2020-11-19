<template>
    <!--    <h1>Map</h1>-->
    <div id="map" style="width: 100%; height: 100%;"></div>
</template>

<script>

  export default {
    name: 'Map',
    data() {
      return {
        map: null,
        areaShipData: [],
        // ciLayer: undefined
      }
    },
    watch: {
      areaShipData(val) {
        console.log('数据改变', val)

        // this.ciLayer.redraw()
        // let ShipDataImgMap = (time) => {
        //
        //   let date = new Date().getTime() / 1000
        //
        //   if ((date - time) <= 300)/* 5分钟以内更新 */{
        //     return { imgName: 'aim1.png', sizeWidth: 13, sizeHeight: 22 }
        //   }
        //   if (300 < (date - time) && (date - time) < 1800)/* 5分钟-30分钟以内更新 */{
        //     return { imgName: 'aim2.png', sizeWidth: 13, sizeHeight: 22 }
        //   }
        //
        //   return { imgName: 'aim3.png', sizeWidth: 13, sizeHeight: 22 } /* 30分钟以上更新 */
        // }
        // let ciLayer = L.canvasIconLayer({}).addTo(this.map)
        // let x = 0
        // for (let i of val) {
        //
        //   // x++
        //   var lat = i.lat
        //   var lng = i.lon
        //
        //   var icon = L.icon({
        //     iconUrl: require('../assets/' + ShipDataImgMap(i.time).imgName),
        //     iconSize: [11, 18],
        //     iconAnchor: [10, 9]
        //   })
        //   var marker = L.marker([lat, lng], {
        //     icon: icon
        //   }).bindPopup('I Am ' + i) //绑定气泡窗口
        //   marker.signal = 'ship'
        //  ciLayer.addLayer(marker)
        // }
      }
    },
    mounted() {

      // console.log(1231)
      this.mapInit()
      // this.service.post('/user/login',{
      //   password: "b0e0ec7fa0a89577c9341c16cff870789221b310a02cc465f464789407f83f377a87a97d635cac2666147a8fb5fd27d56dea3d4ceba1fc7d02f422dda6794e3c",
      //   username: "guest"
      // }).then(res=>{
      //   console.log(res)
      // })

    },
    methods: {

      mapInit() {
        this.map = L.map('map', {
          //参考坐标系
          crs: L.CRS.EPSG3857,
          //不添加属性说明控件
          attributionControl: false,
          //显示中心
          center: [30.86337661743164, 122.9453125],
          //最小显示等级
          minZoom: 0,

          //最大显示等级
          maxZoom: 16,
          //当前显示等级
          zoom: 11,
          //限制显示地理范围
          maxBounds: [[-90, -180], [90, 180]],
          preferCanvas: true
        })
        var tiles = L.tileLayer('http://218.205.125.142:8001/{z}/{x}/{y}.png').addTo(this.map)
        //加载ArcGIS瓦片
        //
        this.map.on('movestart', (e) => {
          //弹框提示
          console.log('地图移动开始！')
          this.loadShipData()
        })
        this.map.on('zoomed', (e) => {
          //弹框提示
          console.log('地图级数改变！')
          this.loadShipData()
        })

      },
      getMapBounds() {
        let bs = this.map.getBounds()   //获取可视区域
        let bssw = bs.getSouthWest()   //可视区域左下角
        let bsne = bs.getNorthEast()   //可视区域右上角
        // console.log(bssw,bsne)
        return {
          neLat: bsne.lat,
          swLat: bssw.lat,
          swLon: bssw.lng,
          neLon: bsne.lng
        }
      },
      loadShipData() {
        let swne = this.getMapBounds()

        // console.log(swne)
        // this.service.post('/map/getRegionShip',{
        //   param:{
        //     neLat:swne['neLat'],
        //     neLon:swne['neLon'],
        //     swLat:swne['swLat'],
        //     swLon:swne['swLon'],
        //   }
        // }).then(res=>{
        //   // console.log(res)
        //   this.areaShipData=res.data
        // })


      }
    }
  }
</script>

<style scoped>

</style>
