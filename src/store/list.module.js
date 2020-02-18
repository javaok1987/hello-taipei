import { SET_ATTRACTION_LIST, SET_ATTRACTION_LIST_SIZE } from '@/store/mutations.type';
import { FETCH_ATTRACTIONS } from '@/store/actions.type';

import * as AttractionService from '@/api/attraction';

const state = {
  form: {
    lang: 'zh-tw',
    categoryIds: '12',
    page: '1',
  },
  total: 64,
  attractionList: [
    {
      id: 418,
      name: '大稻埕慈聖宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '大稻埕慈聖宮俗稱大稻埕媽祖宮，供奉天上聖母，即俗稱的媽祖或天后，是航海的守護神，與法主宮、霞海城隍廟共稱大稻埕三大廟宇。\r\n\r\n正門上的對聯寫著：「第一門開觀音山拱秀，數千艇聚奎府水流輝」，點出慈聖宮位址今昔之變遷。同治五年(西元1866年)時，慈聖宮原本建於今日的西寧北路和民生西路交界處，廟前正是貿易對渡碼頭，可望由南向北流的淡水河岸，而八里的觀音山就橫亙在慈聖宮右前方。\r\n\r\n1910年日本官府實施市區改正，拆除廟宇，當地同安人士乃集資遷移至延平北路現址，並利用原始的樑柱與石材重建廟寺，1914年重建完成，原貌留存至今。\r\n\r\n(資料來源：臺北旅遊網&nbsp;聽廟宇說故事)',
      open_time: '',
      zipcode: '103',
      distric: '大同區',
      address: '103 臺北市大同區保安街49巷17號',
      tel: '+886-2-25539978',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.06025,
      elong: 121.51218,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2020-02-06 14:06:31 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/418',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/66073',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66074',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66075',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66076',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66065',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66067',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66071',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/66072',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 1984,
      name: '原住民文化主題公園',
      name_zh: null,
      open_status: 1,
      introduction:
        '臺北市外雙溪故宮博物院鄰近的公園，特別地規劃呈現原住民文化意象的主題風格，由本處及原住民委員會邀請各界原住民藝術家，打造更有味道的原住民文化主題公園，包括各族人像石牌、少年與狗石像搗米人像、手紋像、人紋像、及大熊像、梅花鹿像、母與子石像等作品等，讓市民在臺北市內就可以接近原住民的生活；公園入口廣場寬闊氣勢擎天，向內沿著滿佈圖騰的圖騰地磚園路步行，進到湖畔水木棧廊道區，水邊種植落羽松群及多種水生植物如野薑花及睡蓮等，沿路以石板製成的石椅、石牆及各式圖騰地磚，配合生長的爛漫恣意的各式原生植物，營造一個含有豐富生態及展現原住民生活的意象。\r\n\r\n原住民文化主題公園不僅陳列原住民的藝術作品，也介紹了臺灣平埔族、雅美族、噶瑪蘭族、賽德克族、布農族、卑南族、排灣族、魯凱族、阿美族、鄒族、邵族、賽夏族、泰雅族的文化及緣起，藉由原住民順應自然的態度及精神，讓我們得以更了解原住民的生活藝術世界，原住民主題文化公園歡迎您的到訪。\r\n\r\n文字來源／公園走透透.臺北新花漾網站',
      open_time: '',
      zipcode: '111',
      distric: '士林區',
      address: '111 臺北市士林區至善路2段221號旁',
      tel: '',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.1016,
      elong: 121.55077,
      official_site: 'https://parks.taipei/parks/m2/pkl_parks_m2C.php?sid=200',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2020-01-16 09:58:21 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/1984',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/160923',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/160924',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/160925',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/161453',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/161454',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/161455',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/161456',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/160921',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/160922',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 129,
      name: '基隆廟口',
      name_zh: null,
      open_status: 1,
      introduction:
        '聞名全台的基隆市廟口小吃已有3、40年的歷史了。位於基隆市仁三路旁的奠濟宮周圍，從愛二路至愛三路之間的仁三路，小吃種類眾多，短短3、400公尺，卻聚集了有近200個攤位，走在其間，嘴巴沒有一刻停閒，這時你會期望自己是個超級大胃王，能將這基隆廟口夜市的所有美食都能一一品嚐。\r\n\r\n夜市中每位經營的老闆都巧心創作口味和料理，用料實在而且價錢公道、色香味俱全；也難怪每天這兒都相當的熱鬧。著名小吃有鼎邊趖、天婦羅、肉羹、蚵仔煎與魯肉飯......等，應有盡有，不論是海鮮還是香烤雞肉、水果冰品，各種小吃口味道地，一路吃下來就像是走遍了整個台灣，讓人來了還想再來。除了本地人愛來這裡打打牙祭之外，觀光客也相偕而來呢!所以想要一嚐台灣的特有美食小吃，基隆廟口你可不能錯過喔！\r\n\r\n基隆廟口營業時間很長，一直到凌晨2、3點，都還可見許多小吃攤香氣騰騰；除此之外，附近也有民生用品與平價衣飾等攤販，除了祭五臟廟，也可以買到心滿意足再回家。\r\n\r\n(圖片來源:交通部觀光局台灣采風)',
      open_time: '以照各店家營業時間為主',
      zipcode: '200',
      distric: '仁愛區',
      address: '200 基隆市仁愛區基隆廟口',
      tel: '+886-2-24201122',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.12865,
      elong: 121.74284,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2020-01-15 17:54:34 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/129',
      category: [
        {
          id: 20,
          name: '北北基景點',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 144,
          name: '餐飲',
        },
        {
          id: 145,
          name: '購物',
        },
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [],
      files: [],
      links: [],
    },
    {
      id: 293,
      name: '湧蓮寺',
      name_zh: null,
      open_status: 1,
      introduction:
        '湧蓮寺廟宇建築體座落於蘆洲區街中心的得勝街與成功路口，因地屬蓮花穴而稱之為「湧蓮」。蘆洲舊日又名「和尚厝」，是因為以前的土地由僧侶所掌管，所以也稱「和尚洲」。\r\n\r\n正殿主祀南海觀世音佛祖尊像，陪祀善才、龍女、韋馱與伽藍護法，為當地信仰中心。整體建築為前半部的湧蓮寺與後半部的懋德宮合祀型態的廟宇湧蓮寺，湧蓮寺在廟宇內外裝飾主要採用剪黏泥塑、彩繪、木雕、石雕等方式，最特殊的技法是有為數不少的飛天樂伎雀替，在其他寺廟尤為罕見，在後殿懋德宮前方，裝置了佔滿壁面以鄭成功史蹟為主的青銅浮雕，這種以大片現代化式青銅浮雕裝飾的作法。\r\n\r\n門外兩側各立一尊佛教護法神，左韋馱柱杵，右伽藍持槍托塔，高度近一丈。湧蓮寺一開始只是一個小茅舍，但不過10年的時間就已經進行改建，歷經4次的修建，成為今日金碧輝煌的廟體。\r\n\r\n每年農曆9月17至19日，也就是俗稱的「佛祖出家紀念日」，湧蓮寺都會舉辦盛大慶典；尤其是9月18日，還會舉辦遶境活動，一般稱為「蘆洲大拜拜」，各地的陣頭廟宇都會參加，為蘆洲每年相當熱鬧的地方盛會。',
      open_time: '',
      zipcode: '247',
      distric: '蘆洲區',
      address: '247 新北市蘆洲區得勝街96號',
      tel: '+886-2-22818642',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.08326,
      elong: 121.47135,
      official_site: 'https://temple.lujou.com.tw/',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2020-01-15 17:53:58 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/293',
      category: [
        {
          id: 20,
          name: '北北基景點',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [],
      files: [],
      links: [],
    },
    {
      id: 65,
      name: '行天宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '行天宮是北臺灣參訪香客最多的廟宇，一天進出人數可達萬人之多。\r\n行天宮恭奉 南天文衡聖帝關恩主羽為主神、配祀 南宮孚佑帝君呂恩主洞賓、 九天司命真君張恩主單、 先天豁落靈官王恩主善、 精忠武穆王岳恩主飛、 關聖太子平、 周恩師倉，及儒釋道三教聖神仙佛。\r\n\r\n行天宮自落成以來，之所以會成為大臺北地區，甚至是整個北臺灣參訪人數最多的廟宇，除了信仰普遍受到民眾接受外，還有一些特色包括：不設功德箱、不供拜牲禮、不焚化金紙、不收受金牌、不演戲酬神不設乩扶鸞、不對外募捐及禁止商業行為。廟宇地點位於市中心，且有的寬敞的廟埕，並率先成立宗教性的財團法人機構，確立其社會公益的屬性。\r\n\r\n行天宮除了包含台北本宮與三峽、北投兩間分宮在內的宗教事業，以及成立於1995年的「財團法人行天宮文教發展促進基金會」之外，還設有兩座附設圖書館（分別位於臺北市中心與北投）以及位於三峽的恩主公醫院，其公益性可見一般，使得宗教不只撫平民眾內心，也實質的助益了民眾的日常生活。\r\n\r\n',
      open_time:
        '平日參拜時間：凌晨04:00～晚上22:00\r\n收驚時間：平時是中午11:20 ～ 晚上20:00\r\n祭星日是中午12:20 ～晚上20:00',
      zipcode: '104',
      distric: '中山區',
      address: '104 臺北市中山區民權東路2段109號',
      tel: '+886-2-25027924',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.06308,
      elong: 121.5339,
      official_site: 'http://www.ht.org.tw/',
      facebook: 'https://www.facebook.com/ht.org.tw/?ref=br_rs',
      ticket: '',
      remind:
        '*行天宮自103年8月26日起不再設置大香爐和供桌，鼓勵信眾不燒香、不備供品，用手敬拜、用心敬神。\r\n\r\n趨吉避凶－祭解項目\r\n祭解的意義，在於舉行消災法會，虔誠地誦念《南斗星君延壽真經》、《北斗星君賜福真經》，為信眾祈求元辰光彩，消災解厄，移凶化吉，運途亨通。內容包括下列四項，信眾可根據個人的需求參加：\r\n●祭　星－祈求行運安順。\r\n●祭元辰－祈求元辰光彩。\r\n●祭關限－祈求安度關卡。\r\n●掩　魂－意在護魂解厄。\r\n其他台北本宮祭解服務時間表請參考 http://www.ht.org.tw/re3-2.html',
      staytime: '',
      modified: '2019-12-27 15:39:58 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/65',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/63902',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63903',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63904',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63905',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63906',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63909',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63918',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63900',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63901',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 192,
      name: '行天宮北投分宮-忠義廟',
      name_zh: null,
      open_status: 1,
      introduction:
        '行天宮北投分宮，俗稱「忠義廟」，主祀 關聖帝君，位於台灣台北市北投區中央北路4段18巷50號，係台北市民權東路上香火鼎盛行天宮的分宮，但建廟歷史卻比台北本宮更早，原台鐵「忠義站」及現在捷運「忠義站」之站名，即因位置鄰近「忠義廟」而得名。\r\n\r\n「關帝廟行天宮」，此為昔日信眾所熟知的「九台街恩主公廟」，原位於今日台北市中山區新興國中附近。「關帝廟行天宮」香火鼎盛，後來因廟地被劃歸為學校用地，廟方不得不積極另覓廟址準備搬遷，結果於民國45年在北投嗄嘮別（今忠義山）尋獲建廟吉地。由行天宮三宮建設人 玄空師父挹注資金建設，並於民國54年5月31日慶成，展現出三殿式的大廟格局。\r\n\r\n\r\n\r\n北投行天宮廟區範圍約8公頃，廟殿建築雄偉，除附設圖書館外，區內花木扶疏、自然生態豐富，步道、庭園造景、休憩涼亭、停車場及公廁等設施規劃完善，且為市政府規劃之忠義山親山步道之起點。\r\n\r\n從山下順著階梯而上，首先映入眼簾的是一大片綠油油的青草地，庭園造景及椰林大道；再拾階往上層，穿過日、月門，方才來到北投分宮開闊的前殿。廟埕十分寬敞，紅牆與灰色的石板地，在藍天下交織出一片祥和的氛圍。穿過山門，放眼看到典雅的玉皇殿及鐘鼓樓，展現的是莊麗的建築之美。\r\n\r\n\r\n\r\n在參拜玉皇殿、後殿及三元殿之後，轉往後山方向，更可感受到寧靜的自然之美。漫步在林木蒼鬱的幽徑，或仰望綿密的修竹，或凝視歷盡滄桑的奇岩，益發覺得景緻清幽。再從右側的八百階登高，更可遠眺關渡平原和淡水河，視野相當遼闊又舒暢，是北淡線旅遊踏青、沉澱心靈的最佳景點。\r\n',
      open_time: '04:00~20:00',
      zipcode: '112',
      distric: '北投區',
      address: '112 臺北市北投區中央北路4段18巷50號',
      tel: '+886-2-28912731',
      fax: '+886-2-28933418',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.13701,
      elong: 121.47757,
      official_site: 'http://www.ht.org.tw/re1.html',
      facebook: 'https://www.facebook.com/ht.org.tw/?ref=br_rs',
      ticket: '',
      remind: '行天宮自103年8月26日起不再設置大香爐和供桌，鼓勵信眾不燒香、不備供品，用手敬拜、用心敬神。',
      staytime: '',
      modified: '2019-11-08 10:17:51 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/192',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/64438',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64439',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64440',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64441',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64442',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64443',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64444',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64446',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64447',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64448',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64449',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 63,
      name: '芝山巖惠濟宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '在惠濟宮的山腳下，可以看到一個像草原的廣場，上面有著模型的羊群，好像先民在這裡放牧一樣。循著階梯向上，經過林間，昏暗的感覺，旁邊的岩壁上長著青苔，具有古意，在途中經過一個石頭拱門，是芝山的歷史遺蹟，在其後會發覺道路開闊許多，過一個彎，豁然開朗，平坦的路面，與先前的感覺截然不同，惠濟宮，就座落其間。\r\n\r\n漳州人來到士林，也把他們的守護神「開漳聖王」一塊兒帶來了。傳說芝山原本是富豪黃善的土地，約兩百年前，其漳州府平和縣的親戚黃澄清，帶著開漳聖王的香火來到臺灣，懸掛在芝山上，傳說有神蹟出現，大家就合力湊錢，在1752年搭建了惠濟宮。不久，因祭祀觀音佛祖，又名芝山巖寺。1840年士林士紳的潘永清在芝山巖上創建了文昌祠，聘請老師教育子弟。到了1874年，3座寺廟合併在一起，從此就統稱為惠濟宮了。\r\n\r\n目前來到惠濟宮，多半是祈求考試可以順利，這裡有隻文昌筆。傳說若是摸了「文昌筆」會得到保佑，因此家長都會帶著小孩來摸文昌筆，祈求考試順利。',
      open_time: '',
      zipcode: '111',
      distric: '士林區',
      address: '111 臺北市士林區至誠路1段326巷26號',
      tel: '+886-2-28315656#1728',
      fax: '+886-2-28316178',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.1031,
      elong: 121.5308,
      official_site: '',
      facebook: 'https://www.facebook.com/hctemple5656/?fref=nf',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-17 17:08:09 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/63',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/63881',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63882',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63883',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63884',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63885',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63886',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63887',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 74,
      name: '艋舺青山宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '三國孫權的將軍張滾，治理泉州惠安有成，去世後地方建立青山宮奉祀，張滾被尊稱為青山王或靈安尊王。青山王一向被認為有可以消除瘟疫的威靈，掌握司法、賞懲善惡，配祭的神明有八司、枷將軍和鎖將軍等。\r\n\r\n艋舺青山宮已有百餘年的歷史，是一座三進的木石混合造寺廟，經歷了多次的整修，相當精美，如八角形藻井，相當可觀，整修用料也都頗有典故，如前殿的石柱與石垛，就是取自圓山神社所遺之石材。另外青山王的神像，眼神犀利，從每個角度去凝視，都會感覺不同，民眾可以來這裡親自體會。\r\n\r\n每年的農曆10月23日是青山王聖誕的日子，傳說在前兩天青山王會率領部將巡視艋舺地區的大街小巷，保佑艋舺地區人民的平安。在22日舉辦王爺神轎的夜間遶境活動熱鬧非凡，有著許多的表演活動，像是八家將、鼓陣，樂隊等，家家戶戶在路邊擺設香案和供品，這就是所謂的「艋舺大拜拜」，與大稻埕霞海城隍廟、保生大帝出巡並稱臺北市的3大廟會之一。',
      open_time: '',
      zipcode: '108',
      distric: '萬華區',
      address: '108 臺北市萬華區貴陽街2段218號',
      tel: '+886-2-23822296',
      fax: '+886-2-23116865',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.03993,
      elong: 121.49951,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-17 17:06:10 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/74',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
        {
          id: 149,
          name: '廣播服務',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/64010',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64011',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64013',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64014',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64015',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64016',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64017',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64018',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64020',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 385,
      name: '文昌宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '文昌宮文昌帝君神像，緣於日據時代中國大陸有一商人渡海來台經商，隨身伴駕而至，該商人在客居朝夕禮拜，往後因經商失敗、無心敬神禮佛，乃將神像暫置於一叢林中，一日黃昏，無意中被一婦人發現，不識為何方神祇，回去後邀集多位熱心人士迎回，其中有一老翁，認為係司人間祿籍的文昌帝君，於是在民生西路45巷營建小廟奉祀。往後信徒前來參拜祈求，多有應驗，尤以求取功名者，更能如願。\r\n\r\n為本區唯一奉祀文昌帝君之重要廟宇，香火鼎盛，每逢考季青年學子前往參拜祈求功名多有應驗。\r\n\r\n（資料來源文昌宮網站）',
      open_time: '5:00-21:00',
      zipcode: '104',
      distric: '中山區',
      address: '104 臺北市中山區民生西路45巷9號',
      tel: '+886-2-25210366',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.0592,
      elong: 121.52101,
      official_site: '',
      facebook: 'https://www.facebook.com/%E5%8F%B0%E5%8C%97%E5%B8%82%E6%96%87%E6%98%8C%E5%AE%AE-1468546530080908/',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-17 17:05:42 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/385',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/91873',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91874',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91875',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91876',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91872',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 1531,
      name: '關渡水岸公園',
      name_zh: null,
      open_status: 1,
      introduction:
        '關渡地名來自於西班牙語的「Casidor」，只因日本人發音省去「S」所以變成今日的「關渡」。關渡在古老的時代中曾經是硫磺產地和出口中心，1895年時曾為軍事要塞，設有砲台，也曾遭受過隕石的攻擊，至今仍遺留疑似殞石的殘骸在關渡國小自強分校內。\r\n\r\n關渡水岸公園佔地遼闊，有人行步道、自行車道外，關渡碼頭也是「藍色公路」的乘船地點之一，分別駛向臺北大稻埕碼頭、淡水老街、八里左岸及漁人碼頭四條路線；從關渡河濱的自行車道，亦可北上淡水漁人碼頭，南下基隆河至社子島，串聯成一路美麗的風景。\r\n\r\n在這裡，有豐富的潮間帶生態可供觀察研究，午後、黃昏、夜晚，也各有許多不同的樣貌與景緻，尤其是淡水河的沿岸風光，和八里觀音山的黃昏美景，以及入夜後碼頭上炫目的景觀燈。',
      open_time: '',
      zipcode: '112',
      distric: '北投區',
      address: '112 臺北市北投區知行路360號',
      tel: '',
      fax: '',
      email: '',
      months: '07,08,09,10,05,06',
      nlat: 25.11735,
      elong: 121.46322,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-05 13:55:28 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/1531',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
        {
          id: 17,
          name: '藍色水路',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/91783',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91784',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91785',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91786',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 221,
      name: '樟山寺',
      name_zh: null,
      open_status: 1,
      introduction:
        '興建於1931年的樟山寺，外觀樸實而穩重，寺內供奉觀世音菩薩，相傳民國初年時，一位住在樟湖附近的居民，在無意間發現一尊形似觀音菩薩的石像，於是便誠心供奉，後因祈福靈驗而信徒廣增，便由信徒斥資建廟，經過多次修建始成今貌。寺廟居高臨下，前方寬闊的廣場是眺望大台北市區的絕佳地點。附近有三條登山步道，每逢假日，登山客與香客絡繹不絕，是木柵茶區最著名的寺廟。\r\n\r\n二格山系著名寺廟除了指南宮外，就屬樟山寺最為出名，該寺埸視野極佳，台北盆地盡入眼簾，經常吸引發登山健行遊客駐足遠眺，而且附近茶園遍佈，品茶遊客不斷，已成為民遊息重要據點。\r\n\r\n以樟山寺為中心點，有三條步道呈放射狀分別通往其他遊息據點，包括飛龍山步道（往政大環山道路）、樟山寺指南國小段及救千宮步道，三條步道的起訖點都位於樟山寺廣場。飛龍步道的特色，在於整條步道中間均有塊石綿延不斷，從遠處望來，像恐龍的脊椎一樣，因而得名。連接指南國小 （指南路三段三十四巷九號之二）的步道系統，則沿途都是鐵觀音茶園，走完步道後，全身都散發茶香。救千宮步道較為陡峭，但途中在福德宮前，有一棵百年老榕樹，盤根交錯，結成一粒粒樹瘤，景象相當奇特。',
      open_time: '開放空間',
      zipcode: '116',
      distric: '文山區',
      address: '116 臺北市文山區老泉街45巷29號',
      tel: '+886-2-28812512',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 24.97299,
      elong: 121.57938,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 18:49:36 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/221',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
      ],
      target: [
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/64660',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64661',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64662',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64663',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64664',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/739',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 390,
      name: '古亭河濱公園',
      name_zh: null,
      open_status: 1,
      introduction:
        '古亭河濱公園位於永福橋至中正橋間，單車從思源街沿著自來水博物館方向騎到底就可進入園區內，斜坡道種植灌木排列出「古亭河濱公園」字樣別具巧思。夏日午 后，避開烈日，來這裡吹吹風，公園內有網球場、籃球場、溜冰場等一應具全的運動設施供市民使用。\r\n\r\n古亭河濱公園綠地廣闊，橋下有涼風習習。喜愛來此地打球的 球友都知道，這裡有兩座網球場比鄰而建，共享綠蔭庇蔭，運動時不必在烈日下曝曬，最適合用來比賽。\r\n\r\n永福橋下有攀岩練習場和兒童遊樂設施，滑梯下鋪著厚厚的保護軟墊，可見市府的貼心設計。攀岩壁面高約三米，看精力充沛的孩子們攀爬似乎不難，自己實地操作 卻有些難度，夏日帶著孩子們到這裡避暑、遊戲是很不錯的選擇。除了夏季，冬季時這裡還有整片的波斯菊花海綻放，讓人忍不住想停下腳步欣賞。這裡的自行車道 燈光、規劃都相當完善，尤其是夏日夜晚，更是許多人選擇夜騎的好地點。',
      open_time: '',
      zipcode: '100',
      distric: '中正區',
      address: '100 臺北市中正區永福橋至中正橋間',
      tel: '',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.01801,
      elong: 121.52314,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 18:48:41 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/390',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/65862',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65863',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65864',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65865',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65852',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65853',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65854',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65855',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65856',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65857',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65858',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65859',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65860',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65861',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 252,
      name: '迎風河濱公園',
      name_zh: null,
      open_status: 1,
      introduction:
        '迎風河濱公園位於基隆河大直橋至中山高速公路之間，於民國91年整建完成，佔地67公頃，公園內設有溜冰場、壘球場、足球場、棒球場、木球場、迷你高爾夫練習場等，辦過多場國際運動賽事，是一設備齊全的運動公園。\r\n\r\n迎風河濱公園最大的特色園內的「狗運動公園」，位公園的金泰段，是全臺首座「免繫犬鏈」的狗運動公園，佔地約1公頃，並分為大狗和小狗區，設置不鏽鋼圍欄、雙層門作為人犬防護措施，還有狗便清潔便利設施，以及8座休憩座椅和4座洗手足台，設備相當齊全，除了提供一般民眾家庭休閒運動的好去處外，也讓愛狗人士多了一個帶寵物遊玩的場地。',
      open_time: '全天開放',
      zipcode: '105',
      distric: '松山區',
      address: '105 臺北市松山區濱江街7號水門',
      tel: '+886-2-25702330#530',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.07435,
      elong: 121.54574,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 18:48:11 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/252',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
        {
          id: 17,
          name: '藍色水路',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
        {
          id: 63,
          name: '單車族',
        },
      ],
      service: [
        {
          id: 144,
          name: '餐飲',
        },
        {
          id: 147,
          name: '停車場',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/65131',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65132',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65135',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65141',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65144',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65145',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65146',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65155',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65127',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65129',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 226,
      name: '華中河濱公園',
      name_zh: null,
      open_status: 1,
      introduction:
        '從空中鳥瞰，新店溪在華中河濱公園這裡轉了個彎，形成大面積的氾濫平原，彎彎的地形，像極了一抹弦月，更像支迴力刀，滿眼寬闊平坦的綠草地，最適合舉辦大 型活動；這裡也是觀看夕陽、賞鳥的最佳場所：公園裡生態豐富，河裡有魚群迴流覓食，隨處可見野鳥在樹間跳躍。園內有多樣的兒童遊戲設施，還貼心的舖設細 砂，使安全無虞，設施週遭亦提供座椅，供父母可以在同時兼顧兒童活動安全下休憩，增加親子情感互動。98年起市府更在此設立了華中露營場，提供帳篷及汽車 營位供民眾申請使用，可說是全臺第一座大型的河濱露營場。\r\n\r\n當你騎乘自行車遨遊河濱公園經過華中橋下時，那裡設有園遊攤位當作自行車休憩的節點，園內攤位多樣性經營，有台灣風味小吃、童玩等，旁邊還有一座自行車練 習場，提供不同動作等級的騎乘練習，讓技術尚不熟練的小朋友或一般民眾有安全自在的練習場地，周邊設有相關解說牌，可以進一步瞭解自行車基本知識及適當的 騎乘方式。建議您應先行瀏覽解說牌說明及此處頁面所提供之騎乘基本須知相關資料，才能開心又安心的練習及騎乘自行車漫遊水岸。休息過後繼續往下游前進會經 過一段林蔭隧道，晨間有許多人們在這裡跳舞和作運動，處處充滿了活力。\r\n\r\n來此地遊玩，不一定要騎自行車。還有多種運動場，如籃球場，不只讓三五好友來場「鬥牛」，更有沙灘排球場讓您於都市中也可以在陽光、沙灘下盡情的揮灑汗 水；而不管是清晨或是夜晚時分漫步於堤頂步道，在綠蔭乘涼下或是微微星光中吹著巍巍徐風，望著眼下的青青草原，都有不同的風味。另華中一號門、二號門入口 處附有寬敞的停車場，可以調節市區停車問題。華中河濱公園附近連接馬場町紀念公園和青年公園，是情侶約會的絕佳選擇，青年公園附近也有很多的美食可供選擇。',
      open_time: '全天開放',
      zipcode: '108',
      distric: '萬華區',
      address: '108 臺北市萬華區萬大路底華中橋旁',
      tel: '',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.0154,
      elong: 121.49476,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 18:47:43 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/226',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
        {
          id: 63,
          name: '單車族',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [
        {
          id: 399,
          name: '自行車友善',
        },
      ],
      images: [
        {
          src: 'https://www.travel.taipei/image/64732',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64733',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64734',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64735',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64731',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 358,
      name: '陳德星堂',
      name_zh: null,
      open_status: 1,
      introduction:
        '陳德星堂為臺北地區陳氏大宗祠，為臺灣著名匠師陳應彬設計建造，其前殿的重簷歇山式屋頂、木結構及斗拱精美，屋簷及屋脊曲線流暢，具有很高的藝術價值；前殿石雕雙龍柱，被認為是近代臺灣較早出現「一柱雙龍」之例，對後來的寺廟興建有深遠的影響；正殿內神龕尺寸巨大，木雕豐富，以精雕的鉤欄為其特點；龕前的錫製祭具與仙人燭檯保存完整，造型精湛，為臺灣罕見之例。\r\n\r\n現今除了作為陳氏祠堂外，平日作為幼稚園使用，維護相當不錯；更獲得2014文化部第3屆國家文化資產保存獎中保存貢獻獎，值得大家走訪一探究竟。\r\n\r\n探訪陳德星堂後，亦可至鄰近且充滿濃濃臺灣味的寧夏夜市走走喲！\r\n\r\n(部份內容摘自臺北市文化局網站)',
      open_time: '',
      zipcode: '103',
      distric: '大同區',
      address: '103 臺北市大同區寧夏路27號',
      tel: '+886-2-25567150',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.05564,
      elong: 121.51592,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '除了作為陳氏祠堂外，平日作為幼稚園使用，有專人管理打掃，維護相當不錯。',
      staytime: '',
      modified: '2019-09-04 18:46:05 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/358',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/89405',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89406',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89407',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89409',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89404',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 270,
      name: '基隆河左右岸親水自行車道',
      name_zh: null,
      open_status: 1,
      introduction:
        '臺北的河濱自行車道規劃得相當完善，有提供民眾租車服務，可以一路環遊淡水河、基隆河、新店溪、景美溪，共111公里水岸的自然與人文風光，河川沿線有豐富的自然、古蹟等美麗景觀，除了提供市民休閒時的最佳去處，也能看到一個城市發展的軌跡。\r\n\r\n而圓山、大直到內湖一帶的河濱，在整治後樣貌截然不同，騰出了寬敞的行水區，成為基隆河最美的一段，也保留城市呼吸的空間。若從大稻埕疏散門(淡5號)進入大稻埕至淡水河，則能一路欣賞淡水河兩岸燈火搖曳的臺北夜景，十足浪漫迷人。\r\n\r\n從左岸的林安泰疏散門進入河濱腳踏車道，遊客可以看見紀錄著基隆河緣起，整治故事的解說牌，讓民眾在運動休閒之餘，還能瞭解基隆河長長的歷史典故。大佳河濱公園是屬於河床填土後的新生地，放眼望去盡是綠野草地，靠西之地建設成都會行綠化公園，其中以中山橋到大直橋間段的親水公園最具特色，地標「希望之泉」的噴泉設計，高達25層樓高的扇型噴泉水幕，精彩的水舞，夜晚亮麗的五彩霓虹燈光。\r\n\r\n整個河濱之地瞬間成為繽紛亮麗，背景在圓山飯店古典輝煌的紅色建築陪襯下，景緻格外好看，可以說是老少咸宜、戀愛男女朋友最佳去處。遊客若是從右岸的美堤疏散門進入，也同樣可以看見堤防壁上用圖案細說基隆河歷史故事，同樣精彩耀眼，夜遊基隆河，更可看到絢麗摩天輪及內湖科技園區的夜景，美不勝收。',
      open_time: '全天開放',
      zipcode: '116',
      distric: '文山區',
      address: '116 臺北市文山區沿淡水河、基隆河及新店溪河岸兩側向下游延伸至關渡濕地，南起景美、東至內湖',
      tel: '',
      fax: '',
      email: '',
      months: '07,02,08,03,09,04,10,05,11,06',
      nlat: 25.07642,
      elong: 121.50838,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 18:15:08 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/270',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 16,
          name: '戶外踏青',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [
        {
          id: 63,
          name: '單車族',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/65476',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65474',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65475',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 124,
      name: '清水巖祖師廟',
      name_zh: null,
      open_status: 1,
      introduction:
        '祖師廟清水巖，俗稱「祖師公廟」建竣於1937年，但其奉祀之「落鼻祖師」早在咸豐年間即有街民供奉，傳說每遇天災人禍，皆會落鼻示警預告鄉人，常為滬尾附近居民所迎奉繞境，以同治年間顯神通救石門鄉民免地震之災的神話，最為人所流傳。又傳說中法戰爭祖師爺也大顯威靈懼退法兵而獲光緒皇帝御筆所賜之「功資拯濟」匾額。一直到昭和年間才經地方士紳頭人發起建廟，於1932年在原蕭府王爺廟址破土興建。祖師廟殿宇昂，裝飾精美，名匠師黃龜理之木雕、陳天乞之交趾陶、張木成之石雕等作品充棟，可稱是淡水民藝寶庫。每逢5月初6清水祖師祭典，熱鬧滾滾，彷如外國嘉年華會。\r\n\r\n(圖片來源:交通部觀光局台灣采風)',
      open_time: '全年無休，開放時間4:30 - 21:30',
      zipcode: '251',
      distric: '淡水區',
      address: '251 新北市淡水區清水街87號',
      tel: '+886-2-26212236',
      fax: '',
      email: '',
      months: '',
      nlat: 25.1702,
      elong: 121.44104,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 18:10:00 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/124',
      category: [
        {
          id: 20,
          name: '北北基景點',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [],
      files: [],
      links: [],
    },
    {
      id: 70,
      name: '臺北天后宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '臺北天后宮，俗稱「西門町媽祖廟」，主祀天上聖母媽祖，現位於臺灣臺北市萬華區成都路上，於1746年時由郊商捐建（當時名為新興宮），與艋舺龍山寺和艋舺祖師廟並稱臺灣清領時期艋舺3大寺廟。1943年因西園路馬路拓寬，所以遭到拆除，神像寄於龍山寺。\r\n\r\n1948年，信徒將暫時寄人籬下的天上聖母神像從龍山寺迎接出來，改供奉在成都路北側近西寧南路口交叉口的「弘法寺」，原先是日據時期日本人所建立的弘法寺，戰後失火燒燬後，新興宮弘法寺的正殿改建更名為「臺灣省天后宮」，不久又改稱「臺北天后宮」，真是一段曲折的歷史。\r\n\r\n媽祖被視為海上的守護神。早期臺灣有賴海洋以維生，又有東南沿海一帶渡海來臺墾拓，碼頭處即為群眾所居，寺廟亦常築於河巷，是以各地港口多建有媽祖廟，其廟口朝向河對岸的山頭，希望保佑每個討海人及渡海移民安全。\r\n\r\n寺廟內入口處龍邊宮置有古鐘一座，由鐘上所鑄字樣可以得知可見清朝建廟之時其名即為「新興宮」，鑄造年代為1792年（乾隆57年），鑄造地為江蘇無錫。入口處虎邊則置放一座「八仙香爐行宮神龕，八仙蓮花木燭」，原為新興宮神龕，為1820年唐山師傅刻造。\r\n\r\n從1973年以來，日本高野山金剛峰寺及東京別院每年10月到12月間都輪流派遣高僧到臺北天后宮，舉行朝聖禮佛法會。臺北天后宮的主神是媽祖，陪神是弘法大師，全臺只有臺北天后宮有供奉弘法大師，因此往往吸引了許多日本觀光客專程遠道前來參拜。',
      open_time: '每日07:00~22:00(最後進場時間21:00)',
      zipcode: '108',
      distric: '萬華區',
      address: '108 臺北市萬華區成都路51號',
      tel: '+886-2-23310421',
      fax: '+886-2-23122685',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.04279,
      elong: 121.50633,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 16:39:52 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/70',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/63955',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63956',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63957',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63958',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63959',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63960',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63961',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63953',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63954',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 66,
      name: '北投普濟寺',
      name_zh: null,
      open_status: 1,
      introduction:
        '依據台北「民德寫真館」於1941年發行的《臺灣佛教名蹟寶鑑》，普濟寺與同為台北市市定古蹟的臨濟護國禪寺都是臨濟宗妙心寺派在台北的布教據點。1934年重建時，由於其信眾多為台灣總督府交通局鐵道部員工，因此以鐵道部運輸課長村上彰一之諡號「鐵真」命名為「鐵真院」，並在寺中設立「村上彰一翁碑」。1998年正式列名為市定古蹟，環境充滿寧靜、安適的氣息。\r\n\r\n寺廟採明顯的日式風格，大殿建築為單簷的歇山式面寬3開間，進深亦得3間，近正方形、屋頂向前伸出成為入口玄關、大殿內部地面抬高處鋪上塌塌米，呈現簡樸寧靜而又莊嚴肅穆的日式宗廟之美，而大殿則為高級檜木所造。\r\n\r\n本寺至今仍保有日式祭拜儀式，有別於傳統的臺灣祭拜模式，正門旁的鐘狀窗牖，深具特色，而入口玄關可看到斗拱，虹樑的精美雕刻，題有普濟寺的匾額是由于右任手書。\r\n\r\n值得一提的是，寺院左邊涼亭內恭奉一尊左手抱嬰兒、右手持禪杖的石佛，一般民眾認為佛像為「送子觀音」，佛教界人士則認為是日本「子安菩薩」，為地藏王菩薩的化身之一，吸引許多善男信女到此祈求子嗣，而湯守觀音與子安菩薩這兩座神祉，成為寺院的一大特色。\r\n\r\n\r\n\r\n',
      open_time: '每日08:00~17:00',
      zipcode: '112',
      distric: '北投區',
      address: '112 臺北市北投區溫泉路112號',
      tel: '+886-2-28914386',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.13593,
      elong: 121.51126,
      official_site: '',
      facebook: 'https://www.facebook.com/BeitouPujiTemple/',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 14:42:37 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/66',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 66,
          name: '健行族',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/63921',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63922',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63923',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63924',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63925',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63926',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63927',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63928',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 393,
      name: '臨濟護國禪寺',
      name_zh: null,
      open_status: 1,
      introduction:
        '臨濟護國禪寺是於日據時期，臨濟宗鎮南山護國寺之延伸，其山門、大雄寶殿皆為日本江戶時代佛寺之典型建築。\r\n\r\n臨濟護國禪寺創建於一九００年，於一九一一年落成，為日據初年日本僧人得庵玄秀禪師所建，當時他受第四任臺灣總督兒玉源太郎之邀來臺弘法佈教，臨濟宗為有別於曹洞宗的一支佛教宗派。\r\n\r\n護國禪寺依山傍水，附近基隆河蜿蜒流過，寺面積頗廣，格局宏整，原來包括山門、法堂、大雄寶殿及附屬方丈堂。\r\n\r\n至今大雄寶殿仍保存完好，全為木結構之歇山重簷式。山門建築屬於日本江戶時期風格。另外，寺前大砥石及寺後開山始祖墓、石雕佛像等亦具歷史文物價值。\r\n\r\n因為臨濟護國禪寺具有歷史、文化、藝術等價值，於1998依照文化資產保存法，將其訂定為直轄市定古蹟。\r\n\r\n(資料來源：臺北市政府文化局)',
      open_time: '每日8:00-17:00；\r\n八角亭8:00-16:00；\r\n大雄寶殿為初一、十五開放，需事先電話預約',
      zipcode: '104',
      distric: '中山區',
      address: '104 臺北市中山區玉門街9號',
      tel: '+886-2-25948308',
      fax: '',
      email: '',
      months: '',
      nlat: 25.07249,
      elong: 121.52086,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-09-04 14:22:21 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/393',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/89294',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89295',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89296',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89297',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89298',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 86,
      name: '臺北市孔廟',
      name_zh: null,
      open_status: 1,
      introduction:
        '臺北市孔廟於1927年興工，座落於文風丕盛的大龍峒老街裡，在臺北市政府規劃推動的都市更新下，與大龍國小、保安宮形成「廟、學、宮」的大龍峒文化園區，具有典儀場所、儒學象徵與市定古蹟等多重意涵。\r\n\r\n臺北市孔廟採曲阜本廟建築形式，樑柱門窗皆未刻字顯得樸實又莊嚴，其布局依序為萬仞宮牆、泮池、櫺星門、儀門、大成殿及崇聖祠，另外可發現孔廟裡所有的柱子、門窗和其他寺廟不同，上面都沒有聯對，據說這表示沒人敢在至聖先師孔夫子門前賣弄文章；且因為民間興築，除形制與規格外，亦加入了區域性裝飾風格，即閩南地區特有之交趾陶與剪粘裝飾，尤以交趾陶裝飾為臺灣地區孔廟建築裡較特殊的一例。\r\n\r\n大成殿裡豐富的交趾陶水車堵飾，是所有臺灣孔廟建築中獨樹一格的特色，值得細細觀賞建築之美。\r\n\r\n大成殿是孔廟的主殿，奉祀至聖先師孔子之牌位；大成殿正中央神龕奉祀至聖先師孔子牌位，上方高懸「有教無類」之黑底金字匾額，左右牆奉祀四配(復聖顏子、宗聖曾子、述聖子思、亞聖孟子)與12哲等牌位，瀰漫著莊嚴肅穆的氣息。孔廟的氣氛予人肅敬莊嚴之美，這也是中國儒家文化行事剛正之精神。\r\n\r\n孔廟雖然沒有眾多的神像與祭具，但卻擁有不少遵照古制所作的禮器與樂器，每逢9月28日釋奠典禮時表演音樂、舞蹈，並且呈獻牲、酒等祭品，以表達對於孔子的崇敬，每年都吸引了眾多國內外參觀人潮，也讓大家體驗中國傳統祭孔典禮之莊嚴氣氛。\r\n\r\n近年來，孔廟積極活化古蹟，建置了文物展示室、多媒體展示室等設施，可具體瞭解孔廟之美及各項釋奠典禮的禮器、樂器等，還設置了新奇的八俏樂器展示中心，在圖說上輕輕一按，就可以聽到這些樂器的多元聲音，有些低沉，有些清脆高昂，讓遊人在平時就可體會八俏之音，甚至建置全臺孔廟唯一的中英日韓4語導覽系統，以服務各國遊客，不僅如此，孔廟更常辦理各項結合傳統與現代藝術的創新活動，每年舉辦的大龍峒文化季系列活動，更可體驗祭禮文化與增進儒學的瞭解，更帶來參觀孔廟的新一波人潮。\r\n\r\n除此之外．在孔廟的明倫堂裡另設有4D虛擬實境劇院，將孔廟的歷史沿革與孔子的生平事蹟以高科技影像技術輔以身歷其境的特效體驗，讓觀眾瞭解孔子與孔廟的故事，除了增添趣味之外，更以嶄新的形式延續了孔廟所代表的教育意義。',
      open_time: '週二至週日(含國定假日)08:30-21:00  公休日：周一',
      zipcode: '103',
      distric: '大同區',
      address: '103 臺北市大同區大龍街275號',
      tel: '+886-2-25923934',
      fax: '+886-2-25852730',
      email: 'ct@civil.tcg.gov.tw',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.07295,
      elong: 121.5166,
      official_site: 'https://www.tctcc.taipei/',
      facebook: 'https://www.facebook.com/taipeiconfuciustemple',
      ticket: '',
      remind:
        '臺北孔廟預約申請導覽服務訊息 \r\n一、預約申請時間：導覽一週前提出申請 \r\n二、預約方式： \r\n    (一)電話預約：02-2592-3934 分機17 蘇小姐 \r\n    (二)傳真預約：02-2585-2730 \r\n    (三)電子郵件預約：cd_su6789@mail.taipei.gov.tw\r\n三、因本會導覽人力有限，且志工基於公益，免費提供導覽，目前接受機關、學校、團體等10人以上、150人以內的非營利組織預約，歡迎於參訪日前1至2週洽詢，以便安排導覽志工支援，本會將儘速確認2個月內之預約，感謝配合。',
      staytime: '',
      modified: '2019-09-04 14:21:26 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/86',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 14,
          name: '宗教信仰',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/64112',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64113',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64114',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64115',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64116',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64117',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64118',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64119',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64109',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64110',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64111',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 67,
      name: '碧山巖開漳聖王廟',
      name_zh: null,
      open_status: 1,
      introduction:
        '碧山巖位於內湖碧山上。廟內奉祀開閩民族英雄陳元光及其部屬李伯瑤、馬仁兩位將軍。陳元光在唐末開拓福建漳州地方，被視為漳州人守護神，並尊稱「開漳聖王」。\r\n\r\n碧山巖是臺灣最大開漳聖王聖王廟，香火鼎盛。傳說漳州府人士黃某攜眷渡海來臺拓墾時，見此地為難得一見之吉地，故將隨身佩帶香火懸掛於石洞膜拜後離去。而後山下一帶盜匪猖獗，打家劫舍使得該處民不聊生，西元1751年，盜匪正打算攻頂時，忽見山頂鋒芒四射，戰鼓齊鳴，原來是當時所懸香火之神石1分為3，中塊乃聖王，而兩邊石塊則為李、馬兩將軍，周圍散石滾落山下，使得匪徒棄械逃亡。\r\n\r\n附近居民聞訊至此膜拜，果然神靈賜福，於是興建石室小廟。後因香客漸眾，原石室小廟不敷大批香客膜拜，故在原址另建本殿。而後發生數次的天災，經過數次的整修後，在多數地方人士、信徒及寺廟管理委員的努力下，擴建至如今。\r\n\r\n碧山巖居高臨下，除俯瞰臺北盆地外，站在廟前平台更可見蜿蜒的淡水河，鯉魚山及梯田等等，水光山色相互呼應。而夜間時臺北101大樓、圓山大飯店等夜景之美盡收眼簾。',
      open_time: '每日08:00~17:00',
      zipcode: '114',
      distric: '內湖區',
      address: '114 臺北市內湖區碧山路24號',
      tel: '+886-2-27900657',
      fax: '+886-2-27926177',
      email: 'pkcswt55@ms62.hinet.net',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.09715,
      elong: 121.58762,
      official_site: 'http://www.pkcswt.com.tw/',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-30 14:21:06 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/67',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/63929',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63930',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63931',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63932',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63933',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 75,
      name: '劍潭古寺',
      name_zh: null,
      open_status: 1,
      introduction:
        '劍潭有一段傳奇，傳說鄭成功有一次領兵經過此潭，潭中時有蛟龍之類的水怪興風作浪，害人無數，鄭成功把腰邊佩掛的寶劍，往潭中蛟怪擲去，從此潭水平靜，而此潭也因鄭成功的擲劍平妖，而名為「劍潭」。\r\n\r\n推算劍潭古寺的年代，於臺灣府誌說「觀音寺，在八芝蘭劍潭」。按淡水廳誌記載「劍潭寺，乾隆38年，由吳廷誥等人捐建。該寺有碑記，描述僧人榮華和尚，路經此地，遇到一條蛇擋路，以卜筮占吉兇，大吉，便在此建場興寺。之後，又有白衣大士托夢指示，將有八隻舟楫從上海經過基隆，可以籌募基金，果然靈驗，劍潭寺遂成」，所以至今應該有350年以上的歷史，但日據後期被迫遷建至大直現址。入廟前有一牌樓，青綠色的瓦頂下寫著「劍潭古寺」四字，裡面的小巷道，就是劍潭古寺的原址，在這一片林園當中，園內保留著劍潭古寺舊有的廟柱及石碑，柱上殘留的許多痕跡，都是一段一段的歷史，有著濃厚的歷史感。',
      open_time: '',
      zipcode: '104',
      distric: '中山區',
      address: '104 臺北市中山區北安路805巷6號',
      tel: '+886-2-25323834、+886-2-25323362',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.08618,
      elong: 121.55536,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-29 11:40:44 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/75',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/89371',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89372',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89367',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89368',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89369',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89370',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 6,
      name: '社子島環島與二重疏洪道自行車道',
      name_zh: null,
      open_status: 1,
      introduction:
        '社子島位於基隆河與淡水河之交匯處，地質為沙洲型態，該地區處處可見稻田橫亙，菜園綠茵，展現老農村民風純樸的美麗景緻。該地區利用堤頂建設自行車道，吸引許多自行車愛好者前往，社子島沙洲沙尾可以看見基隆和與淡水河交匯波濤澎湃的景象，每當夕陽西下，金黃色落日餘暉揮灑在河面上閃閃動人，遠眺大屯山及觀音山綿延天邊的景緻，教人美不勝收。\r\n\r\n往南還可銜接百齡橋左岸自行車，這裡有許多大型的各式球場，而且經常可以看見國內外著名的球隊在此練球，騎乘之餘欣賞開闊的運動廣場人群，既充實又熱鬧。二重疏洪道環狀自行車道全長24公里，穿越堤頂道路進入公園區域，不同主題的河濱綠地，可以花上很多時間去探險。',
      open_time: '開放空間',
      zipcode: '111',
      distric: '士林區',
      address: '111 臺北市士林區延平北路七段',
      tel: '',
      fax: '',
      email: '',
      months: '07,08,03,09,04,10,05,06',
      nlat: 25.08952,
      elong: 121.50314,
      official_site: '',
      facebook: '',
      ticket: '',
      remind:
        '備註事項:\r\n1.長度：社子島9公里，二重疏洪道24公里 \r\n2.騎乘時間：社子島約40分鐘、二重疏洪道約100分鐘\r\n\r\n路況屬於平坦路段、騎乘時舒適度普通，沿途可以看見基隆河與淡水河交匯波滔景像及遠眺大屯山、觀音山的景致，但因為路程較遠，較適合體力較好者。',
      staytime: '',
      modified: '2019-08-28 17:17:20 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/6',
      category: [
        {
          id: 12,
          name: '單車遊蹤',
        },
        {
          id: 19,
          name: '親子共遊',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 63,
          name: '單車族',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
        {
          id: 147,
          name: '停車場',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/63343',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63341',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63342',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 76,
      name: '財團法人台北市關渡宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '<!--\r\n關渡宮是臺灣北部最古老的媽袓廟，其歷史背景可以追朔到清順治年間，由開山石興和尚自福建奉請聖母來臺，當時名稱為「天妃廟」，其後乾隆、道光、光緒年間多次整修，於第5次重修並遷建現址，自石興和尚來臺已有340年以上的歷史。\r\n關渡宮殿內、殿外的石牆、石柱、石獅，都雕滿了歷史故事，作品細膩壯觀。關渡宮的祭典是每年農曆3月23，元宵節和中元節普渡也是年度大事，來自各地參拜的人潮絡繹不絕。由於香火鼎盛，關渡宮不斷擴建，除聖母殿、觀音殿、文昌殿外並有古佛洞，廣渡寺、鼓樓、鐘樓等，面積廣大。\r\n\r\n另外每年元宵節，關渡宮一定會有電動花燈展出，從山下廟宇到山上後花園，大大小小的燈籠及各方精製的花燈，充滿了年節氣息，難怪每年到了這時候，滿滿都是人潮，大人帶著小孩來這裡賞燈並求平安，希望未來一年都可以順順利利。\r\n\r\n\r\n\r\n-->台北市關渡宮擁有三百多年歷史，主祀天上聖母媽祖，是北台灣地區最早的媽祖廟，而除了參拜天上聖母媽祖與諸神明外，來到這裡還可以觀賞許多珍貴的古蹟文物以及豐富的宮廟建築藝術。由於位居大屯、觀音二山的餘脈相交，臨淡水河與基隆河的滙流，風光景緻一覽無遺，每當落日餘暉，宏偉壯闊的景觀，更是令人驚嘆。\r\n\r\n\r\n\r\n\r\n&nbsp;\r\n&nbsp;\r\n\r\n\r\n\r\n附近行程推薦:推薦行程',
      open_time: '全年無休，每日6:00 - 21:00',
      zipcode: '112',
      distric: '北投區',
      address: '112 臺北市北投區知行路360號',
      tel: '+886-2-28581281',
      fax: '+886-2-2858-4022',
      email: 'kuantu.eng@msa.hinet.net',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.1177,
      elong: 121.46395,
      official_site: 'http://www.kuantu.org.tw/',
      facebook: 'https://www.facebook.com/kuantubobi?fref=nf',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-28 15:18:20 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/76',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/64043',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64045',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64046',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64049',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64052',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64053',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64054',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/64062',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 121,
      name: '淡水鄞山寺',
      name_zh: null,
      open_status: 1,
      introduction:
        '淡水的定光佛寺鄞山寺是台灣罕見的古建築。台灣在清代的寺廟史上，定光佛寺只有兩座，一是中部彰化的定光庵，另一是淡水鄞山寺，而其信徒也都是少數的閩西客家移民，兼當汀州會館，於台灣開拓史具有重要的研究性代表，目前被列為二級古蹟。\r\n\r\n鄞山寺不單擁有重要的歷史價值，它的建築在初建之後甚少受到改變，原創性很高，於台灣建築史上的研究是很難得的價值。鄞山寺建於道光二年（西元 1822 年），至今有一百八八多年。它不但是台灣開發史上非常具有研究價值的古寺，對汀州人來台開墾有具體之貢獻與史證，更由於它已經成為全台完整僅存的一座（彰化定光佛寺已非完整），淡水鄞山寺大體上完整的存了道光初年之原貌，甚至連一般寺廟都極難保存的屋脊泥塑，都還保存的相當完整，實在令人驚訝，足見當年施工之精巧。\r\n\r\n(圖片來源:交通部觀光局台灣采風)',
      open_time: '全年無休，自早上07:00~下午18:00(備註：開放時間以廟方為主)',
      zipcode: '251',
      distric: '淡水區',
      address: '251 新北市淡水區鄧公里鄧公路15號',
      tel: '+886-2-26228965',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.16925,
      elong: 121.44855,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-28 11:16:30 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/121',
      category: [
        {
          id: 20,
          name: '北北基景點',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [],
      files: [],
      links: [],
    },
    {
      id: 423,
      name: '無極天元宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '來到淡水旅遊,除了前往淡水天元宮參拜及欣賞櫻花景色之外，淡水河岸之迷人風光:如百年歷史建築、小白宮、紅毛城、緣道觀音廟、淡水紅樹林生態保護區、關渡大橋、淡水漁人碼頭等旅遊景點也是淡水必遊的景點。\r\n\r\n當然更別忘了淡水老街上的諸多美食:阿給、魚酥、魚丸、鐵蛋、糯米腸、超大霜淇淋、阿媽的酸梅湯等美食。\r\n\r\n就讓淡水的美麗風光及美食來豐富您的一日淡水之旅吧！\r\n\r\n(資料來源：淡水天元宮網頁)',
      open_time: '',
      zipcode: '251',
      distric: '淡水區',
      address: '251 新北市淡水區水源里北新路三段三十六號',
      tel: '+886-2-26212759、+886-2-26219159',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.18655,
      elong: 121.48472,
      official_site: '',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-28 11:02:50 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/423',
      category: [
        {
          id: 20,
          name: '北北基景點',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 65,
          name: '賞鳥族',
        },
        {
          id: 66,
          name: '健行族',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/91886',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91883',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91884',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/91885',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 403,
      name: '大直植福宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '大直植福宮乃大直地區居民之生活精神信仰中心(含中山區、內湖區、士林區)，也是國際觀光團寺廟建築暨文化觀光旅遊勝地之一。\r\n\r\n大直植福宮至今已有二百多年歷史，供奉道教神『福德正神』為主神，遵照道廟體制和精神，安祀配神，以宏揚道教教義、樹立民間正信、導正人心向善、淨化社會暨發揚民俗固有文化道德及辦理社會慈善公益事業為宗旨。\r\n\r\n另外大直植福宮亦供奉暨送子觀世音菩薩、天上聖母、保儀大夫、保生大帝、文昌帝君、關聖帝君、李池吳朱范五府千歲(王爺公)等神祇。全年供善信大德安奉太歲燈光明燈平安燈文昌燈財利燈祈福臻祥福慧圓滿。\r\n\r\n正月初一日：子時十一點十五分頭香，賀禧、神恩垂佑。\r\n正月初十日：新春開燈安奉『值年太歲星君、平安燈、光明燈、文昌燈、財利燈』祈福元辰光彩八節慶餘。\r\n正月十五日：天官大帝聖誕千秋，『祈安植福法會』。\r\n二月初二日：福德正神千秋，慶祝『土地公生植福聯歡』活動。暨土地公會聯誼餐會。&nbsp;\r\n二月初三日：文昌帝君梓童聖誕千秋。\r\n二月十九日：觀世音菩薩佛誕千秋。\r\n三月十五日：保生大帝吳真人聖誕千秋。\r\n三月卄三日：天上聖母聖誕千秋，『祈安植福法會』。\r\n四月初十日：保儀大夫張巡聖誕千秋。\r\n四月十七日：大直土地重劃建廟安座週年慶。\r\n四月卄六日：五府千歲李王爺聖誕千秋。\r\n四月卄七日：五府千歲范王爺聖誕千秋。\r\n六月十五日：五府千歲池王爺聖誕千秋。\r\n六月十九日：觀世音菩薩得道千秋。\r\n六月卄四日：關聖帝君聖誕千秋。\r\n七月十八日：慶讚中元『普渡法會』。\r\n七月十九日：值年太歲星君千秋。\r\n八月十五日：土地公得道飛昇、五府千歲朱王爺聖誕千秋。\r\n八月十六日：福壽會聯誼餐會。十三日起中秋乞龜活動。\r\n九月十五日：五府千歲吳王爺聖誕千秋。\r\n十月十五日：水官大帝聖誕千秋，『祈安植福法會』。\r\n十二月卄二日：年終謝燈，功德圓滿。\r\n每月初二、十六日：誦經疏文祈福，爐下第子福慧臻祥。\r\n\r\n(資料來源：大直植福宮)\r\n\r\n\r\n\r\n\r\n\r\n',
      open_time: '週一-週日:5:00-21:00',
      zipcode: '104',
      distric: '中山區',
      address: '104 臺北市中山區北安路608巷14弄1號',
      tel: '+886-2-25323316',
      fax: '',
      email: '',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.08181,
      elong: 121.55056,
      official_site: '',
      facebook: 'https://www.facebook.com/%E5%A4%A7%E7%9B%B4%E6%A4%8D%E7%A6%8F%E5%AE%AE-259530820787890/',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-28 10:35:08 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/403',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/65935',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65936',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65937',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65938',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65939',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65940',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65941',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65942',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65943',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65944',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65945',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65946',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65947',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65948',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65949',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 386,
      name: '景福宮',
      name_zh: null,
      open_status: 1,
      introduction:
        '創建於西元1875年、清光緒元年的景福宮，剛開始還只是一間兩坪大的小廟，民國50年與鄰居統一飯店交換土地重建。後來則因建築老舊，而大規模改建，於2000年開工，興建為占地兩百坪、擁有地上三層、地下三層的雄偉廟宇。\r\n\r\n重建後的景福宮，在建築雕刻上很講究，大殿前的龍柱，是用整座青斗石手工打造，廟門上的立體門神也是用整塊紅木雕刻而成。天花藻井裝飾，採一整片的「祥龍獻瑞」雕刻來裝飾，讓信眾禮拜時，一抬頭就可看見「青龍」在頂上飛舞，相當活靈活現。而三樓大殿兩旁的「十八羅漢」雕刻，更融入山水造景，讓一尊尊羅漢安座於山水畫之中，呈現宗教藝術之美。\r\n\r\n（資料來源景福宮網站）',
      open_time: '7:00~20:30',
      zipcode: '104',
      distric: '中山區',
      address: '104 臺北市中山區德惠街11號',
      tel: '+886-2-25969325',
      fax: '+886-2-25942925',
      email: 'jf@chingfu.org.tw',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.06701,
      elong: 121.52557,
      official_site: 'http://www.chingfu.org.tw',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-28 10:31:05 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/386',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/89316',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89319',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89320',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89321',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89314',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/89315',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
    {
      id: 359,
      name: '台灣基督長老教會大稻埕教會',
      name_zh: null,
      open_status: 1,
      introduction:
        '台灣基督長老教會大稻埕教會由臺灣近代史重要人物李春生先生捐地獻建，教堂坐落於大稻埕老市區，主體建築樣式據悉為李春生先生參考福建廈門一帶，西方傳教士所建之教堂，以宏揚教義，氣質典雅；以加強磚造為主結構，採質地優良的大正初年清水紅磚砌成，施工品質優良，立面佐以中西特色之藝術裝飾。\r\n\r\n\r\n因當時民風保守，禮拜堂男女分坐，並各由左、右入口進出，種種特徵事蹟，見證了十九世紀末迄廿世紀初年，臺北地區基督教發展過程。古蹟建築樣式雖模仿西方教 堂圖樣建造，但立面洗石子裝飾，仍然呈現出臺灣傳統圖案，融會中西風格，建築尺度莊重可親，有其自創特色，在臺灣近代建築中，誠屬罕見，獲古蹟界高度評 價，列為本市第一百處古蹟。教堂裡更隱藏了由25個大大小小的鐘組成「音樂鐘」，每天中午12點定時播放音樂鐘聲，7種不同的鐘聲輪流播放，如果您剛好路 過於此，不妨佇足聆聽一下喔！\r\n\r\n\r\n欣賞完大稻埕教會建築之美，也可以一同走訪鄰近的慈聖宮和小吃街哦！\r\n\r\n\r\n(部份內容摘自臺北市文化局網站)',
      open_time: '需先以電話洽詢',
      zipcode: '103',
      distric: '大同區',
      address: '103 臺北市大同區甘州街40號',
      tel: '+886-2-25539741',
      fax: '',
      email: 'ttt.church@gmail.com',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.05955,
      elong: 121.51261,
      official_site: 'http://www.tttchurch.org.tw/aboutus.html',
      facebook: '',
      ticket: '',
      remind: '',
      staytime: '',
      modified: '2019-08-28 10:25:19 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/359',
      category: [
        {
          id: 14,
          name: '宗教信仰',
        },
      ],
      target: [],
      service: [
        {
          id: 146,
          name: '公廁',
        },
      ],
      friendly: [],
      images: [
        {
          src: 'https://www.travel.taipei/image/65660',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65661',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65662',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65663',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65664',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65665',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65666',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/65667',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [],
    },
  ],
};

const getters = {
  form(state) {
    return state.form;
  },
};

const mutations = {
  [SET_ATTRACTION_LIST](state, data) {
    state.attractionList = data;
  },
  [SET_ATTRACTION_LIST_SIZE](state, total) {
    state.total = total;
  },
};

const actions = {
  async [FETCH_ATTRACTIONS]({ state, commit }) {
    console.log('fetchAttractionList');
    // const { data, total } = await AttractionService.fetchAttractionList(state.form);
    const data = await AttractionService.fetchAttractionList({
      categoryIds: state.form.categoryIds,
      page: state.form.page,
    });
    console.log(data);
    // commit(SET_ATTRACTION_LIST, data);
    // commit(SET_ATTRACTION_LIST_SIZE, total);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
