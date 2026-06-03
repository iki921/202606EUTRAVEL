const cities = [
  {
    id: "rome",
    name: "罗马",
    region: "Lazio",
    x: 52,
    y: 48,
    note: "古迹密度高，适合按片区安排步行路线。",
    spots: [
      {
        id: "colosseum",
        name: "斗兽场",
        x: 59,
        y: 49,
        image: "./assets/colosseum.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "罗马古迹核心，建议和古罗马广场、帕拉蒂尼山放在同一天。",
        duration: "2-3 小时",
        booking: "建议预约",
        area: "古罗马区",
        tags: ["必去", "需要预约", "排队久"],
        links: [
          ["官方开放时间/购票", "https://colosseo.it/en/visit/orari-e-biglietti/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Colosseum%20Rome"],
          ["攻略搜索", "https://www.google.com/search?q=Colosseum+Rome+travel+guide"]
        ]
      },
      {
        id: "roman-forum",
        name: "古罗马广场",
        x: 48,
        y: 54,
        image: "./assets/roman-forum.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "古罗马政治和公共生活遗址，和斗兽场联票动线最顺。",
        duration: "1.5-2.5 小时",
        booking: "建议预约",
        area: "古罗马区",
        tags: ["遗址", "联票", "步行友好"],
        links: [
          ["官方开放时间/购票", "https://colosseo.it/en/visit/orari-e-biglietti/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Roman%20Forum%20Rome"],
          ["攻略搜索", "https://www.google.com/search?q=Roman+Forum+Rome+travel+guide"]
        ]
      },
      {
        id: "pantheon",
        name: "万神殿",
        x: 38,
        y: 42,
        image: "./assets/pantheon.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "市中心动线友好，适合和纳沃纳广场、特雷维喷泉一起走。",
        duration: "45-75 分钟",
        booking: "热门时段预约",
        area: "历史中心",
        tags: ["经典", "雨天可去", "步行友好"],
        links: [
          ["官方信息", "https://www.direzionemuseistataliroma.beniculturali.it/istituti/pantheon/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Pantheon%20Rome"],
          ["攻略搜索", "https://www.google.com/search?q=Pantheon+Rome+travel+guide"]
        ]
      },
      {
        id: "trevi",
        name: "特雷维喷泉",
        x: 48,
        y: 35,
        image: "./assets/trevi.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "罗马最热门喷泉之一，清晨或深夜更适合拍照和停留。",
        duration: "20-45 分钟",
        booking: "无需预约",
        area: "历史中心",
        tags: ["免费", "拍照", "人多"],
        links: [
          ["官方旅游信息", "https://www.turismoroma.it/en/places/trevi-fountain"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Trevi%20Fountain%20Rome"],
          ["攻略搜索", "https://www.google.com/search?q=Trevi+Fountain+Rome+travel+guide"]
        ]
      },
      {
        id: "vatican",
        name: "梵蒂冈博物馆",
        x: 27,
        y: 31,
        image: "./assets/vatican.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "西斯廷礼拜堂和拉斐尔房间是重点，建议单独安排半天。",
        duration: "3-4 小时",
        booking: "强烈建议预约",
        area: "梵蒂冈",
        tags: ["博物馆", "必去", "需要预约"],
        links: [
          ["官方网站", "https://www.museivaticani.va/content/museivaticani/en.html"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Vatican%20Museums"],
          ["攻略搜索", "https://www.google.com/search?q=Vatican+Museums+Rome+travel+guide"]
        ]
      }
    ]
  },
  {
    id: "florence",
    name: "佛罗伦萨",
    region: "Tuscany",
    x: 48,
    y: 34,
    note: "美术馆和教堂集中，预约和闭馆日要提前核对。",
    spots: [
      {
        id: "uffizi",
        name: "乌菲兹美术馆",
        x: 48,
        y: 48,
        image: "./assets/uffizi.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "文艺复兴重点场馆，适合预留完整半天，并提前看重点展厅。",
        duration: "2.5-4 小时",
        booking: "强烈建议预约",
        area: "阿诺河北岸",
        tags: ["博物馆", "必去", "需要预约"],
        links: [
          ["官方购票", "https://www.uffizi.it/en/tickets"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Uffizi%20Gallery%20Florence"],
          ["攻略搜索", "https://www.google.com/search?q=Uffizi+Gallery+Florence+travel+guide"]
        ]
      },
      {
        id: "duomo-fi",
        name: "圣母百花大教堂",
        x: 55,
        y: 36,
        image: "./assets/duomo-fi.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "城市第一视觉中心，登顶、钟楼、洗礼堂可以按体力拆分。",
        duration: "1.5-3 小时",
        booking: "登顶需预约",
        area: "主教座堂广场",
        tags: ["地标", "登高", "拍照"],
        links: [
          ["官方信息", "https://duomo.firenze.it/en/home"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Florence%20Duomo"],
          ["攻略搜索", "https://www.google.com/search?q=Florence+Duomo+travel+guide"]
        ]
      },
      {
        id: "accademia",
        name: "学院美术馆",
        x: 62,
        y: 28,
        image: "./assets/accademia.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "以米开朗基罗《大卫》闻名，热门时段排队很明显。",
        duration: "1.5-2 小时",
        booking: "建议预约",
        area: "San Marco",
        tags: ["博物馆", "大卫", "需要预约"],
        links: [
          ["官方网站", "https://www.galleriaaccademiafirenze.it/en/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Galleria%20dell%27Accademia%20Florence"],
          ["攻略搜索", "https://www.google.com/search?q=Accademia+Gallery+Florence+travel+guide"]
        ]
      },
      {
        id: "ponte-vecchio",
        name: "老桥",
        x: 42,
        y: 58,
        image: "./assets/ponte-vecchio.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "阿诺河上的经典地标，黄昏前后适合串联河岸散步。",
        duration: "20-45 分钟",
        booking: "无需预约",
        area: "阿诺河",
        tags: ["免费", "拍照", "步行节点"],
        links: [
          ["官方旅游信息", "https://www.destinationflorence.com/en/details/3192-ponte-vecchio"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Ponte%20Vecchio%20Florence"],
          ["攻略搜索", "https://www.google.com/search?q=Ponte+Vecchio+Florence+travel+guide"]
        ]
      },
      {
        id: "pitti",
        name: "皮蒂宫",
        x: 35,
        y: 66,
        image: "./assets/pitti.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "宫殿、美术馆和波波里花园可组合，适合放在河对岸半日线。",
        duration: "2-4 小时",
        booking: "建议核对票务",
        area: "Oltrarno",
        tags: ["宫殿", "花园", "半日线"],
        links: [
          ["官方信息", "https://www.uffizi.it/en/pitti-palace"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Pitti%20Palace%20Florence"],
          ["攻略搜索", "https://www.google.com/search?q=Pitti+Palace+Florence+travel+guide"]
        ]
      }
    ]
  },
  {
    id: "venice",
    name: "威尼斯",
    region: "Veneto",
    x: 60,
    y: 20,
    note: "桥多路窄，适合按岛区和水上交通规划。",
    spots: [
      {
        id: "doge",
        name: "总督宫",
        x: 61,
        y: 41,
        image: "./assets/doge.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "圣马可广场核心景点，适合和圣马可大教堂连在一起。",
        duration: "1.5-2.5 小时",
        booking: "建议预约",
        area: "圣马可",
        tags: ["宫殿", "历史", "雨天可去"],
        links: [
          ["官方博物馆", "https://palazzoducale.visitmuve.it/en/home/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Doge%27s%20Palace%20Venice"],
          ["攻略搜索", "https://www.google.com/search?q=Doge%27s+Palace+Venice+travel+guide"]
        ]
      },
      {
        id: "st-mark",
        name: "圣马可大教堂",
        x: 68,
        y: 36,
        image: "./assets/st-mark.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "威尼斯最重要宗教建筑，热门入口建议提前看预约和着装要求。",
        duration: "45-90 分钟",
        booking: "建议预约",
        area: "圣马可",
        tags: ["地标", "教堂", "需要预约"],
        links: [
          ["官方网站", "https://www.basilicasanmarco.it/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=St%20Mark%27s%20Basilica%20Venice"],
          ["攻略搜索", "https://www.google.com/search?q=St+Mark%27s+Basilica+Venice+travel+guide"]
        ]
      },
      {
        id: "rialto",
        name: "里亚托桥",
        x: 42,
        y: 35,
        image: "./assets/rialto.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "经典步行节点，清晨或晚间更舒服，适合作为路线中转点。",
        duration: "20-40 分钟",
        booking: "无需预约",
        area: "大运河",
        tags: ["免费", "拍照", "步行节点"],
        links: [
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Rialto%20Bridge%20Venice"],
          ["攻略搜索", "https://www.google.com/search?q=Rialto+Bridge+Venice+travel+guide"]
        ]
      },
      {
        id: "grand-canal",
        name: "大运河",
        x: 47,
        y: 50,
        image: "./assets/grand-canal.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "第一次到威尼斯建议坐水上巴士看一段大运河，空间感会清楚很多。",
        duration: "40-90 分钟",
        booking: "交通票即可",
        area: "大运河",
        tags: ["水上交通", "拍照", "入门路线"],
        links: [
          ["官方交通信息", "https://actv.avmspa.it/en/content/prices"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Grand%20Canal%20Venice"],
          ["攻略搜索", "https://www.google.com/search?q=Grand+Canal+Venice+travel+guide"]
        ]
      },
      {
        id: "guggenheim",
        name: "佩姬古根海姆美术馆",
        x: 34,
        y: 58,
        image: "./assets/guggenheim.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "现代艺术收藏很集中，适合在圣马可之外安排一段安静室内时间。",
        duration: "1.5-2 小时",
        booking: "建议核对票务",
        area: "Dorsoduro",
        tags: ["美术馆", "雨天可去", "安静"],
        links: [
          ["官方网站", "https://www.guggenheim-venice.it/en/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Peggy%20Guggenheim%20Collection%20Venice"],
          ["攻略搜索", "https://www.google.com/search?q=Peggy+Guggenheim+Collection+Venice+travel+guide"]
        ]
      }
    ]
  },
  {
    id: "milan",
    name: "米兰",
    region: "Lombardy",
    x: 43,
    y: 17,
    note: "城市大、交通强，适合把购物、建筑、博物馆分开安排。",
    spots: [
      {
        id: "duomo-mi",
        name: "米兰大教堂",
        x: 51,
        y: 43,
        image: "./assets/duomo-mi.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "米兰最重要地标，屋顶视角很值得，天气好时优先安排。",
        duration: "1.5-2.5 小时",
        booking: "建议预约",
        area: "Duomo",
        tags: ["地标", "登高", "需要预约"],
        links: [
          ["官方信息", "https://www.duomomilano.it/en/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Duomo%20di%20Milano"],
          ["攻略搜索", "https://www.google.com/search?q=Duomo+di+Milano+travel+guide"]
        ]
      },
      {
        id: "galleria",
        name: "埃马努埃莱二世拱廊",
        x: 58,
        y: 39,
        image: "./assets/galleria.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "紧邻大教堂，适合作为米兰市中心步行线的一站。",
        duration: "20-45 分钟",
        booking: "无需预约",
        area: "Duomo",
        tags: ["免费", "建筑", "购物"],
        links: [
          ["官方旅游信息", "https://www.yesmilano.it/en/see-and-do/venues/galleria-vittorio-emanuele-ii"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Galleria%20Vittorio%20Emanuele%20II%20Milan"],
          ["攻略搜索", "https://www.google.com/search?q=Galleria+Vittorio+Emanuele+II+Milan+travel+guide"]
        ]
      },
      {
        id: "last-supper",
        name: "最后的晚餐",
        x: 33,
        y: 46,
        image: "./assets/last-supper.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "达芬奇名作参观名额紧张，必须把预约作为优先事项。",
        duration: "30-60 分钟",
        booking: "必须预约",
        area: "Santa Maria delle Grazie",
        tags: ["必去", "名额少", "需要预约"],
        links: [
          ["官方信息", "https://cenacolovinciano.org/en/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=The%20Last%20Supper%20Milan"],
          ["攻略搜索", "https://www.google.com/search?q=The+Last+Supper+Milan+travel+guide"]
        ]
      },
      {
        id: "sforza",
        name: "斯福尔扎城堡",
        x: 40,
        y: 30,
        image: "./assets/sforza.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "城堡、公园和博物馆组合轻松，适合和布雷拉或大教堂区衔接。",
        duration: "1.5-3 小时",
        booking: "建议核对票务",
        area: "Centro Storico",
        tags: ["城堡", "公园", "博物馆"],
        links: [
          ["官方网站", "https://www.milanocastello.it/en"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Sforza%20Castle%20Milan"],
          ["攻略搜索", "https://www.google.com/search?q=Sforza+Castle+Milan+travel+guide"]
        ]
      },
      {
        id: "brera",
        name: "布雷拉美术馆",
        x: 42,
        y: 32,
        image: "./assets/brera.jpg",
        imageCredit: "Wikimedia Commons",
        summary: "比大教堂区安静，适合和布雷拉街区散步组合。",
        duration: "1.5-2.5 小时",
        booking: "建议核对票务",
        area: "Brera",
        tags: ["博物馆", "街区", "雨天可去"],
        links: [
          ["官方信息", "https://pinacotecabrera.org/en/"],
          ["Google Maps", "https://www.google.com/maps/search/?api=1&query=Pinacoteca%20di%20Brera"],
          ["攻略搜索", "https://www.google.com/search?q=Pinacoteca+di+Brera+travel+guide"]
        ]
      }
    ]
  }
];

const cityMapMeta = {
  rome: {
    lat: 41.9028,
    lng: 12.4964,
    zoom: 12,
    transport: "罗马适合地铁 + 步行组合；古罗马区可串联，梵蒂冈建议单独半天。"
  },
  florence: {
    lat: 43.7696,
    lng: 11.2558,
    zoom: 13,
    transport: "佛罗伦萨老城景点很集中，优先步行；从火车站到主教座堂约 10-15 分钟步行。"
  },
  venice: {
    lat: 45.4408,
    lng: 12.3155,
    zoom: 13,
    transport: "威尼斯核心交通是步行 + 水上巴士；行李多时优先看 vaporetto 站点。"
  },
  milan: {
    lat: 45.4642,
    lng: 9.19,
    zoom: 12,
    transport: "米兰适合地铁串联，大教堂、斯福尔扎、布雷拉可步行，最后的晚餐需预留换乘时间。"
  }
};

const spotMapMeta = {
  "colosseum": [41.8902, 12.4922, "地铁 B 线 Colosseo 站；可步行串联古罗马广场。"],
  "roman-forum": [41.8925, 12.4853, "从斗兽场步行约 8-12 分钟；建议同一张联票同日安排。"],
  "pantheon": [41.8986, 12.4769, "周边以公交和步行为主；适合串联纳沃纳广场、特雷维喷泉。"],
  "trevi": [41.9009, 12.4833, "Barberini 或 Spagna 地铁站步行可达；清晨更适合拍照。"],
  "vatican": [41.9065, 12.4536, "地铁 A 线 Ottaviano 站；从老城过来需单独预留交通时间。"],
  "uffizi": [43.7687, 11.2559, "从主教座堂步行约 8-10 分钟；适合与老桥同线。"],
  "duomo-fi": [43.7731, 11.256, "从 Santa Maria Novella 火车站步行约 10-15 分钟。"],
  "accademia": [43.7768, 11.2585, "从主教座堂步行约 8 分钟；预约时段要留出排队时间。"],
  "ponte-vecchio": [43.7679, 11.2531, "步行为主；黄昏可沿阿诺河走到米开朗基罗广场方向。"],
  "pitti": [43.7652, 11.2501, "过老桥后步行可达；适合和波波里花园放同半天。"],
  "doge": [45.4337, 12.3404, "靠近 San Marco/Vallaresso 水上巴士站；圣马可广场景点可一起排。"],
  "st-mark": [45.4346, 12.3397, "水上巴士到 San Marco 周边；旺季进入广场动线会变慢。"],
  "rialto": [45.438, 12.3359, "Rialto 水上巴士站附近；可作为从圣马可到市场区的步行节点。"],
  "grand-canal": [45.4375, 12.3335, "坐 1 号线水上巴士看大运河很直观，适合作为初到威尼斯的交通体验。"],
  "guggenheim": [45.4309, 12.3318, "Accademia 水上巴士站步行可达；适合安排在 Dorsoduro 半日线。"],
  "duomo-mi": [45.4641, 9.1919, "地铁 M1/M3 Duomo 站；可步行串联拱廊和斯卡拉。"],
  "galleria": [45.4657, 9.19, "紧邻米兰大教堂；适合作为大教堂前后顺路点。"],
  "last-supper": [45.4659, 9.1709, "地铁 M1 Conciliazione 或 Cadorna 换乘步行；务必按预约时间到达。"],
  "sforza": [45.4705, 9.1797, "地铁 Cairoli/Cadorna 可达；可步行接布雷拉街区。"],
  "brera": [45.472, 9.1881, "从斯福尔扎城堡或大教堂区步行可达；街区适合慢逛。"]
};

const state = {
  cityId: null,
  spotId: null,
  plan: JSON.parse(localStorage.getItem("italy-plan") || "[]"),
  saved: JSON.parse(localStorage.getItem("italy-saved") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const italyMap = $("#italyMap");
const cityGrid = $("#cityGrid");
const spotList = $("#spotList");
const panelTitle = $("#panelTitle");
const currentScope = $("#currentScope");
const planCount = $("#planCount");
const dialog = $("#spotDialog");
let travelMap;
let markerLayer;

function handleImageError(image) {
  image.classList.add("image-fallback");
  image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%235d6f45' stop-opacity='.34'/%3E%3Cstop offset='1' stop-color='%23b85f3f' stop-opacity='.3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='320' height='220' fill='%23e7dfd2'/%3E%3Ccircle cx='105' cy='94' r='52' fill='url(%23g)'/%3E%3Cpath d='M42 170c55-58 96-56 141 0 28-33 54-38 95 0z' fill='%23809268' opacity='.55'/%3E%3C/svg%3E";
}

function applyTravelMeta() {
  cities.forEach((city) => {
    Object.assign(city, cityMapMeta[city.id]);
    city.spots.forEach((spot) => {
      const [lat, lng, transit] = spotMapMeta[spot.id];
      Object.assign(spot, {
        lat,
        lng,
        transit,
        routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=transit`
      });
    });
  });
}

function findCity(id = state.cityId) {
  return cities.find((city) => city.id === id);
}

function findSpot(id = state.spotId) {
  return cities.flatMap((city) => city.spots.map((spot) => ({ ...spot, city }))).find((spot) => spot.id === id);
}

function saveState() {
  localStorage.setItem("italy-plan", JSON.stringify(state.plan));
  localStorage.setItem("italy-saved", JSON.stringify(state.saved));
  planCount.textContent = `${state.plan.length} 个景点已加入行程`;
}

function renderMap() {
  italyMap.className = "italy-map leaflet-map";
  if (!travelMap) {
    travelMap = L.map(italyMap, {
      zoomControl: true,
      attributionControl: true
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(travelMap);
    markerLayer = L.layerGroup().addTo(travelMap);
  }

  markerLayer.clearLayers();
  if (!state.cityId) {
    travelMap.setView([42.7, 12.6], 5);
    cities.forEach((city) => {
      L.circleMarker([city.lat, city.lng], {
        radius: 10,
        color: "#25221d",
        weight: 2,
        fillColor: "#b85f3f",
        fillOpacity: 0.92
      })
        .addTo(markerLayer)
        .bindTooltip(`${city.name} · ${city.region}`, { direction: "top" })
        .on("click", () => selectCity(city.id));
    });
    currentScope.textContent = "意大利总览";
    setTimeout(() => travelMap.invalidateSize(), 0);
    return;
  }

  const city = findCity();
  travelMap.setView([city.lat, city.lng], city.zoom);

  city.spots.forEach((spot) => {
    L.circleMarker([spot.lat, spot.lng], {
      radius: spot.id === state.spotId ? 11 : 8,
      color: "#fffdf8",
      weight: 2,
      fillColor: spot.id === state.spotId ? "#b85f3f" : "#447b8f",
      fillOpacity: 0.95
    })
      .addTo(markerLayer)
      .bindTooltip(spot.name, { direction: "top" })
      .on("click", () => openSpot(spot.id));
  });
  currentScope.textContent = `${city.name}城市地图`;
  setTimeout(() => travelMap.invalidateSize(), 0);
}

function renderCities() {
  cityGrid.innerHTML = "";
  cities.forEach((city) => {
    const card = document.createElement("button");
    card.className = "city-card";
    card.type = "button";
    card.innerHTML = `<h3>${city.name}</h3><p>${city.note}</p><p class="transport-note">${city.transport}</p>`;
    card.addEventListener("click", () => selectCity(city.id));
    cityGrid.appendChild(card);
  });
}

function renderSpots() {
  const city = findCity();
  spotList.innerHTML = "";
  if (!city) return;
  city.spots.forEach((spot) => spotList.appendChild(createSpotCard(spot, city)));
}

function createSpotCard(spot, city) {
  const card = document.createElement("article");
  card.className = "spot-card";
  card.innerHTML = `
    <img class="spot-thumb" src="${spot.image}" alt="${spot.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <header>
      <div>
        <h3>${spot.name}</h3>
        <p>${city.name} · ${spot.area} · ${spot.duration}</p>
      </div>
      <button class="text-button" type="button">详情</button>
    </header>
    <div class="tag-row">${spot.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  `;
  card.querySelector("img").addEventListener("error", (event) => handleImageError(event.currentTarget));
  card.querySelector("button").addEventListener("click", () => openSpot(spot.id));
  return card;
}

function selectCity(cityId) {
  state.cityId = cityId;
  state.spotId = null;
  const city = findCity();
  panelTitle.textContent = `${city.name}景点`;
  cityGrid.hidden = true;
  spotList.hidden = false;
  $("#backToCities").hidden = false;
  renderMap();
  renderSpots();
}

function openSpot(spotId) {
  state.spotId = spotId;
  const spot = findSpot(spotId);
  if (!spot) return;
  $("#dialogPhoto").classList.remove("image-fallback");
  $("#dialogPhoto").src = spot.image;
  $("#dialogPhoto").alt = spot.name;
  $("#dialogPhotoCredit").textContent = `图片：${spot.imageCredit}`;
  $("#dialogCity").textContent = `${spot.city.name} · ${spot.area}`;
  $("#dialogTitle").textContent = spot.name;
  $("#dialogSummary").textContent = spot.summary;
  $("#dialogFacts").innerHTML = `
    <div class="fact"><span>建议时长</span><strong>${spot.duration}</strong></div>
    <div class="fact"><span>预约</span><strong>${spot.booking}</strong></div>
    <div class="fact wide"><span>交通</span><strong>${spot.transit}</strong></div>
  `;
  $("#dialogTags").innerHTML = spot.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  $("#dialogLinks").innerHTML = [
    ["公共交通路线", spot.routeUrl],
    ...spot.links
  ].map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}<span>↗</span></a>`).join("");
  $("#addToPlan").textContent = state.plan.includes(spot.id) ? "已加入行程" : "加入行程";
  $("#saveSpot").textContent = state.saved.includes(spot.id) ? "已收藏" : "收藏";
  renderMap();
  dialog.showModal();
}

function renderPlan() {
  const dayPlan = $("#dayPlan");
  dayPlan.innerHTML = "";
  $("#emptyPlan").hidden = state.plan.length > 0;
  state.plan.forEach((spotId, index) => {
    const spot = findSpot(spotId);
    if (!spot) return;
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `<h3>Day 1 · ${index + 1}. ${spot.name}</h3><p>${spot.city.name} · ${spot.duration} · ${spot.booking}</p><p class="transport-note">${spot.transit}</p>`;
    item.addEventListener("click", () => openSpot(spot.id));
    dayPlan.appendChild(item);
  });
}

function renderSaved() {
  const list = $("#savedList");
  list.innerHTML = "";
  $("#emptySaved").hidden = state.saved.length > 0;
  state.saved.forEach((spotId) => {
    const spot = findSpot(spotId);
    if (spot) list.appendChild(createSpotCard(spot, spot.city));
  });
}

function resetToCities() {
  state.cityId = null;
  state.spotId = null;
  panelTitle.textContent = "选择城市";
  cityGrid.hidden = false;
  spotList.hidden = true;
  $("#backToCities").hidden = true;
  renderMap();
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    $(`#${button.dataset.panel}Panel`).classList.add("active");
    renderPlan();
    renderSaved();
  });
});

$("#backToCities").addEventListener("click", resetToCities);
$("#resetView").addEventListener("click", resetToCities);
$("#closeDialog").addEventListener("click", () => dialog.close());
$("#dialogPhoto").addEventListener("error", (event) => handleImageError(event.currentTarget));
$("#clearPlan").addEventListener("click", () => {
  state.plan = [];
  saveState();
  renderPlan();
});

$("#addToPlan").addEventListener("click", () => {
  if (!state.plan.includes(state.spotId)) state.plan.push(state.spotId);
  saveState();
  renderPlan();
  $("#addToPlan").textContent = "已加入行程";
});

$("#saveSpot").addEventListener("click", () => {
  if (!state.saved.includes(state.spotId)) state.saved.push(state.spotId);
  saveState();
  renderSaved();
  $("#saveSpot").textContent = "已收藏";
});

applyTravelMeta();
renderCities();
renderMap();
renderPlan();
renderSaved();
saveState();
