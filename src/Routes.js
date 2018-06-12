import React from 'react'
import {  Route ,  BrowserRouter , Switch} from 'react-router-dom';
import App from './App'
import Test1 from './test1'
import Index from './compents/index/index'
import Waiter from './compents/waiter/waiter'
import WaiterService from './compents/waiterService/waiterService'
//redux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

// 引入reducer
import reducer from './reducer'

// 创建一个初始化的state
var initState = {
    app:{
        selectedTab:'首页'
    },
    index : {
        city_list : [{city_name:'北京'},{city_name:'广州'},{city_name:'深圳'}],
        city_active_bgc : 0,
        show_city_list : false,
        city_name : '北京',
        service_list:[
            {img:'http://cdn.ayi800.com/image/png/wx_waple_server_list1%E6%9C%88%E5%AB%82@2x.png',text:'月嫂服务'},
            {img:'http://cdn.ayi800.com/image/png/wx_waple_server_list2%E7%A6%8F%E5%AE%A0@2x.png',text:'福宠套餐'},
            {img:'http://cdn.ayi800.com/image/png/wx_waple_server_list3%E6%9C%8D%E5%8A%A1@2x.png',text:'服务保障'},
        ],
        waiter_recommend_list:[
            {head:'http://cdn.ayi800.com/image/3418a34f62664c29d518390552d321f9.jpg',name:'高亚宁',price:'15800元/26天'},
            {head:'http://cdn.ayi800.com/image/60693ed4033bba6a098b1baf5addefd7.jpg',name:'孙玉婷',price:'15800元/26天'},
            {head:'http://cdn.ayi800.com/image/83a76282dda9c64398ac51e701b9f476.jpg',name:'张艳华',price:'15800元/26天'},
            {head:'http://cdn.ayi800.com/image/4cfa2f82f77fa14a45e588aee8c05088.jpg',name:'薛彩萍',price:'12800元/26天'},
            {head:'http://cdn.ayi800.com/image/9f8c4dc73f818021e2937150ecd0ed90.jpg',name:'彭鹏',price:'15800元/26天'},
            {head:'http://cdn.ayi800.com/image/2e69e7eeb19c935bfdb24d942bf07213.jpg',name:'侯玲珍',price:'12800元/26天'},
            {head:'http://cdn.ayi800.com/image/d4866df2663deca133cc35f99c8778c1.jpg',name:'张燕丽',price:'10800元/26天'},
            {head:'http://cdn.ayi800.com/image/67ad8446f71099f4936a8284ab4d7c47.jpg',name:'陈玉梅',price:'15800元/26天'},
            {head:'http://cdn.ayi800.com/image/41872472e4543152070931e4e70ab575.jpg',name:'吴向团',price:'12800元/26天'},
            {head:'http://cdn.ayi800.com/image/da3173870aff0db1a4c5fddaacc56fbf.jpg',name:'王晶',price:'15800元/26天'}
        ],
        show_evaluate_text : false,
        show_evaluate_active : null,
        evaluate_list:[
            {
                user_header : 'http://wx.qlogo.cn/mmopen/OU2rqvx645vv4teCh3raZxpdUp8JGEznp4ibDTyrwNHV1pTlInUGNvqCH9J4hl0LwqSKIicJWCGl9HNnSAOz8wJgnmUCldF6Cl/0',
                user_name : '彭女士',
                time : '06月2日',
                content: '我相信，人是讲究缘分的，遇到韩霞姐，是我家宝宝之福。韩姐是个特别有心的人，对宝宝也有爱心，专业知识更不用说了。26天一晃而过，万分舍不得分开。谢谢韩姐，把我家瘦小伙从4.1斤养到7.4斤胖小子。\n' +
                '1.面试甄选，爱心触动\n' +
                '在韩姐之前有一个月嫂，因发生一些事。紧急仓促之下，更换月嫂。在甄选面试人员时，韩姐的MV触动了我和宝爸，特别温柔的语气和宝宝交流，轻柔的动作。我和宝爸意愿就是要找一个专业，有早产经验和对宝宝有爱心的月嫂。面试中，韩姐不负所望，她到时，我正在面试她人，她一个动作瞬间让我有了好感。一进来就拿了一个靠枕放在我背后，让月子里的我坐姿更舒服些。后面的交流也觉得舒心。\n' +
                '2.专业，早产儿经验丰富，由细入微\n' +
                '我家宝是早产儿，不到32周出生，刚出院接回家4.1斤。韩姐非常注重几点:体重追重；观察和细心；喂药，想办法宝宝吃进去；妈妈的母乳保证。\n' +
                'A. 宝宝接回家头几天晚上，韩姐晚上几乎没合眼，观察宝宝的状态和行为习惯，早产儿尤其要注意。\n' +
                'B. 宝宝吃母乳的能力弱，韩姐坚持我亲喂，到现在宝宝亲喂很成功。跟很多宝妈交流，早4宝宝早期放弃亲喂的多，就因为宝宝吃太费劲了，吃5口，歇3口气的。正因为韩姐每次帮忙，坚持，现在宝宝亲喂和奶瓶切换自如。26天，宝宝长了3斤多。\n' +
                'C. 很多宝妈都反馈宝宝红屁股，我家宝从来不红屁屁，感谢韩姐教我照顾宝宝要三浴当家，空气浴+洗浴+日光浴。\n' +
                '出月子后。只要天气允许，韩姐就带我和宝宝下楼日光浴，溜达。\n' +
                'D. 我家纯母乳喂养，早产儿追重，需要加入母乳强化剂。吃完后果就是大便干燥。宝宝有时两三天不拉，拉屎很痛苦。韩姐用她的专业帮宝宝顺利排便。在妈妈的饮食和水果吃法配方，也起到了有助于宝宝排便。\n' +
                'E. 湿疹痱子:我家宝几乎没有，刚有苗头，就被韩姐扑灭，特别注重宝宝的冷热程度。\n' +
                '3.对乳房的经验也很丰富\n' +
                '我是多产奶型宝妈，别人担心不够吃，韩姐天天担心我堵奶。从清淡饮食结构，多次用专业技术帮我通乳，减轻了宝妈的痛苦。我是隔三差五就堵型，把韩姐愁的，每次找原因，提醒我注意保护好宝宝的粮仓。\n' +
                '4.早教经验\n' +
                '韩姐每次给宝宝洗澡后，必做抚触，被动操，精细动作，大动作。我感觉对我家早产宝宝效果非常明显，爬行，抬头等。还有黑白闪卡。\n' +
                '5.善于沟通:\n' +
                '韩姐是个有知识文化的人，和我，宝爸沟通非常愉快，经常讨论各种趣事。相处跟一家人一样！\n' +
                '6.会做饭，营养搭配均匀\n' +
                '韩姐惊喜不断，感觉就没有她不会做的。尤其那小花卷和小包子，麻花，豆腐脑等都是我的最爱。\n' +
                '哪些菜是下奶吃的，哪些菜是能控制奶爆棚的，哪些菜对宝宝促进肠胃大便干燥的，兼顾了母子二人。\n' +
                '7.勤快\n' +
                '家里就我们一家三口，韩姐把活都干了，照顾宝妈，宝宝，洗衣做饭，打扫卫生等全包揽了。\n' +
                '感谢月嫂韩霞姐，感谢有福妈妈，感谢刘婷老师！',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/c756d425fab2c7563c8382d79bf2e590.JPG',
                waiter_name:'武艳群阿姨',
                waiter_price: '12800元／26天'
            },
            {
                user_header : 'http://wx.qlogo.cn/mmopen/R9zCwLppvTpO9hibB3tkkry5jeOo2TicN4Qz8Lp8N49147aFSF0lyibe51Hdeiau4GTmA6huiaicCw8b4IbHuzwsEf8J8ZQMCMTJCd/0',
                user_name : '华女士',
                time : '05月31日',
                content: '同事推荐的有福妈妈月嫂武姐，42天相处下来都后悔自己定的时间太短。一想到武姐要下户，心理就郁闷。武姐非常细心、耐心照顾孩子，而且育儿经验和知识相当丰富。初期孩子黄疸重，我们在家租了蓝光毯照蓝光，武姐整夜整夜抱着孩子照蓝光。后期孩子肠胀气晚上总放不下，月嫂也是不厌其烦的耐心哄着，抱着。让我晚上能得到好的休息，真的很省心也很放心。武姐做饭也非常好吃。真舍不得武姐下户！有月嫂的日子真的很好！',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/a32c2ee5b69256ab59920108c3bcb60b.jpg',
                waiter_name:'周立梅阿姨',
                waiter_price: '15800元／26天'
            },
            {
                user_header : 'http://cdn.ayi800.com/timg-11.jpeg',
                user_name : '阎女士',
                time : '05月25日',
                content: '郭姐人非常好，干活细心麻利，而且非常有耐心，在宝宝晚上不睡的时候，不厌其烦的抱着哄睡，起初奶水不充足，帮助我通过好几次乳，帮我想过各种办法，非常舍不得郭姐走，生二胎还想请郭姐，选一个好的月搜是非常有必要的。',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/be48fccf80a48d722b122041908c0d01.jpg',
                waiter_name:'郭苏燕阿姨',
                waiter_price: '15800元／26天'
            },
            {
                user_header : 'http://wx.qlogo.cn/mmopen/R9zCwLppvTpO9hibB3tkkry5jeOo2TicN4Qz8Lp8N49147aFSF0lyibe51Hdeiau4GTmA6huiaicCw8b4IbHuzwsEf8J8ZQMCMTJCd/0',
                user_name : '华女士',
                time : '05月31日',
                content: '同事推荐的有福妈妈月嫂武姐，42天相处下来都后悔自己定的时间太短。一想到武姐要下户，心理就郁闷。武姐非常细心、耐心照顾孩子，而且育儿经验和知识相当丰富。初期孩子黄疸重，我们在家租了蓝光毯照蓝光，武姐整夜整夜抱着孩子照蓝光。后期孩子肠胀气晚上总放不下，月嫂也是不厌其烦的耐心哄着，抱着。让我晚上能得到好的休息，真的很省心也很放心。武姐做饭也非常好吃。真舍不得武姐下户！有月嫂的日子真的很好！',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/a32c2ee5b69256ab59920108c3bcb60b.jpg',
                waiter_name:'周立梅阿姨',
                waiter_price: '15800元／26天'
            },
            {
                user_header : 'http://wx.qlogo.cn/mmopen/OU2rqvx645vv4teCh3raZxpdUp8JGEznp4ibDTyrwNHV1pTlInUGNvqCH9J4hl0LwqSKIicJWCGl9HNnSAOz8wJgnmUCldF6Cl/0',
                user_name : '彭女士',
                time : '06月2日',
                content: '我相信，人是讲究缘分的，遇到韩霞姐，是我家宝宝之福。韩姐是个特别有心的人，对宝宝也有爱心，专业知识更不用说了。26天一晃而过，万分舍不得分开。谢谢韩姐，把我家瘦小伙从4.1斤养到7.4斤胖小子。\n' +
                '1.面试甄选，爱心触动\n' +
                '在韩姐之前有一个月嫂，因发生一些事。紧急仓促之下，更换月嫂。在甄选面试人员时，韩姐的MV触动了我和宝爸，特别温柔的语气和宝宝交流，轻柔的动作。我和宝爸意愿就是要找一个专业，有早产经验和对宝宝有爱心的月嫂。面试中，韩姐不负所望，她到时，我正在面试她人，她一个动作瞬间让我有了好感。一进来就拿了一个靠枕放在我背后，让月子里的我坐姿更舒服些。后面的交流也觉得舒心。\n' +
                '2.专业，早产儿经验丰富，由细入微\n' +
                '我家宝是早产儿，不到32周出生，刚出院接回家4.1斤。韩姐非常注重几点:体重追重；观察和细心；喂药，想办法宝宝吃进去；妈妈的母乳保证。\n' +
                'A. 宝宝接回家头几天晚上，韩姐晚上几乎没合眼，观察宝宝的状态和行为习惯，早产儿尤其要注意。\n' +
                'B. 宝宝吃母乳的能力弱，韩姐坚持我亲喂，到现在宝宝亲喂很成功。跟很多宝妈交流，早4宝宝早期放弃亲喂的多，就因为宝宝吃太费劲了，吃5口，歇3口气的。正因为韩姐每次帮忙，坚持，现在宝宝亲喂和奶瓶切换自如。26天，宝宝长了3斤多。\n' +
                'C. 很多宝妈都反馈宝宝红屁股，我家宝从来不红屁屁，感谢韩姐教我照顾宝宝要三浴当家，空气浴+洗浴+日光浴。\n' +
                '出月子后。只要天气允许，韩姐就带我和宝宝下楼日光浴，溜达。\n' +
                'D. 我家纯母乳喂养，早产儿追重，需要加入母乳强化剂。吃完后果就是大便干燥。宝宝有时两三天不拉，拉屎很痛苦。韩姐用她的专业帮宝宝顺利排便。在妈妈的饮食和水果吃法配方，也起到了有助于宝宝排便。\n' +
                'E. 湿疹痱子:我家宝几乎没有，刚有苗头，就被韩姐扑灭，特别注重宝宝的冷热程度。\n' +
                '3.对乳房的经验也很丰富\n' +
                '我是多产奶型宝妈，别人担心不够吃，韩姐天天担心我堵奶。从清淡饮食结构，多次用专业技术帮我通乳，减轻了宝妈的痛苦。我是隔三差五就堵型，把韩姐愁的，每次找原因，提醒我注意保护好宝宝的粮仓。\n' +
                '4.早教经验\n' +
                '韩姐每次给宝宝洗澡后，必做抚触，被动操，精细动作，大动作。我感觉对我家早产宝宝效果非常明显，爬行，抬头等。还有黑白闪卡。\n' +
                '5.善于沟通:\n' +
                '韩姐是个有知识文化的人，和我，宝爸沟通非常愉快，经常讨论各种趣事。相处跟一家人一样！\n' +
                '6.会做饭，营养搭配均匀\n' +
                '韩姐惊喜不断，感觉就没有她不会做的。尤其那小花卷和小包子，麻花，豆腐脑等都是我的最爱。\n' +
                '哪些菜是下奶吃的，哪些菜是能控制奶爆棚的，哪些菜对宝宝促进肠胃大便干燥的，兼顾了母子二人。\n' +
                '7.勤快\n' +
                '家里就我们一家三口，韩姐把活都干了，照顾宝妈，宝宝，洗衣做饭，打扫卫生等全包揽了。\n' +
                '感谢月嫂韩霞姐，感谢有福妈妈，感谢刘婷老师！',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/c756d425fab2c7563c8382d79bf2e590.JPG',
                waiter_name:'武艳群阿姨',
                waiter_price: '12800元／26天'
            },
            {
                user_header : 'http://wx.qlogo.cn/mmopen/R9zCwLppvTpO9hibB3tkkry5jeOo2TicN4Qz8Lp8N49147aFSF0lyibe51Hdeiau4GTmA6huiaicCw8b4IbHuzwsEf8J8ZQMCMTJCd/0',
                user_name : '华女士',
                time : '05月31日',
                content: '同事推荐的有福妈妈月嫂武姐，42天相处下来都后悔自己定的时间太短。一想到武姐要下户，心理就郁闷。武姐非常细心、耐心照顾孩子，而且育儿经验和知识相当丰富。初期孩子黄疸重，我们在家租了蓝光毯照蓝光，武姐整夜整夜抱着孩子照蓝光。后期孩子肠胀气晚上总放不下，月嫂也是不厌其烦的耐心哄着，抱着。让我晚上能得到好的休息，真的很省心也很放心。武姐做饭也非常好吃。真舍不得武姐下户！有月嫂的日子真的很好！',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/a32c2ee5b69256ab59920108c3bcb60b.jpg',
                waiter_name:'周立梅阿姨',
                waiter_price: '15800元／26天'
            },
            {
                user_header : 'http://cdn.ayi800.com/timg-11.jpeg',
                user_name : '阎女士',
                time : '05月25日',
                content: '郭姐人非常好，干活细心麻利，而且非常有耐心，在宝宝晚上不睡的时候，不厌其烦的抱着哄睡，起初奶水不充足，帮助我通过好几次乳，帮我想过各种办法，非常舍不得郭姐走，生二胎还想请郭姐，选一个好的月搜是非常有必要的。',
                evaluate_img : [{img:'http://cdn.ayi800.com/ayi800_1527671500yszl_104140922922dOwCUftV.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528078045yszl_104769922922jJJi-zTY.jpg?imageView2/1/w/74/h/57'},{img:'http://cdn.ayi800.com/ayi800_1528097567yszl_101617922922A7T-jfZc.jpg?imageView2/1/w/74/h/57'}],
                waiter_header:'http://cdn.ayi800.com/image/be48fccf80a48d722b122041908c0d01.jpg',
                waiter_name:'郭苏燕阿姨',
                waiter_price: '15800元／26天'
            },
        ]
    },
    waiter:{
        waiter_list:[
            {
                waiter_header:'http://cdn.ayi800.com/image/17934abb02a2257a8672b2ce820f5769.jpg',
                waiter_name:'张应梅',age:'42',address:'湖北省',good:"7",
                tags:['月子餐','产后操','缠腹带']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/3418a34f62664c29d518390552d321f9.jpg',
                waiter_name:'高亚宁',age:'47',address:'甘肃省',good:"1",
                tags:['月子餐','营养配餐']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/2e69e7eeb19c935bfdb24d942bf07213.jpg',
                waiter_name:'侯灵珍',age:'39',address:'山西省',good:"5",
                tags:['月子餐','产后操','缠腹带']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/da3173870aff0db1a4c5fddaacc56fbf.jpg',
                waiter_name:'王晶',age:'45',address:'黑龙江省',good:"2",
                tags:['月子餐','产后操','缠腹带']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/eec6fcc16759ccde11a005083000d58e.JPG',
                waiter_name:'杨德兰',age:'47',address:'河北省',good:"12",
                tags:['月子餐','催乳通乳']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/683ec75b06cffe3845f6c6d90f936df7.jpg',
                waiter_name:'王卫华',age:'48',address:'河北省',good:"12",
                tags:['月子餐','产后操','催乳通乳']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/d4866df2663deca133cc35f99c8778c1.jpg',
                waiter_name:'张燕丽',age:'41',address:'山西省',good:"2",
                tags:['月子餐','产后操','缠腹带']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/8be58ade8c885200f74bd95f0c73e5de.jpg',
                waiter_name:'王建敏',age:'46',address:'河北省',good:"8",
                tags:['月子餐','催乳通乳']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/485a4d1d1c0156d31c23f7fcf420cd15.jpg',
                waiter_name:'纪晓月',age:'32',address:'辽宁省',good:"5",
                tags:['儿歌歌神','手巧','沟通能力强']
            },
            {
                waiter_header:'http://cdn.ayi800.com/image/1aedf6b47bda6cccda6602c4fd2de4b5.jpg',
                waiter_name:'陈月灵',age:'47',address:'安徽省',good:"2",
                tags:['月子餐','产后操','缠腹带']
            },
        ]
    },
    youfu:{
        article_list:[
            {
                article_img:'http://cdn.ayi800.com/image/56269ff0cfcea043eb3f6a425eb0fa1b.jpg',
                article_title : '产褥期饮食注意事项你知道几个？按每周目的进食让你重回迷人身姿',
                article_time : '2018-04-16',
                article_read : 119
            },
            {
                article_img:'http://cdn.ayi800.com/image/eec48896474bf73cf9e83623a2ce6a28.jpg',
                article_title : '产后腹痛的原因以及有效的防治方法',
                article_time : '2018-03-20',
                article_read : 191
            },
            {
                article_img:'http://cdn.ayi800.com/image/98f1664b28e3a07bd8f49f8a8024416b.jpg',
                article_title : '科学坐月子很关键',
                article_time : '2018-03-16',
                article_read : 188
            },
            {
                article_img:'http://cdn.ayi800.com/image/fd705d05b9937b95baa1727c001ea1c4.jpg',
                article_title : '产后一定要卧床休息吗',
                article_time : '2018-03-14',
                article_read : 199
            },
            {
                article_img:'http://cdn.ayi800.com/image/a50adcb34443477a04b24bd564a2dc6c.jpg',
                article_title : '产妇护理的衣着要求',
                article_time : '2018-03-14',
                article_read : 209
            }
        ]
    },
    my:{
        phone_value : '',
        verification : ''
    },
    WaiterService:{
        service_flow:[
            {
                img:'http://cdn.ayi800.com/image/png/wx_waple_service_flow1%E7%94%B5%E8%AF%9D@2x.png',
                text:"电话沟通"
            },
            {
                img:'http://cdn.ayi800.com/image/png/wx_waple_service_flow2%E8%81%94%E7%B3%BB%E4%BA%BA@2x.png',
                text:"育儿嫂面试"
            },
            {
                img:'http://cdn.ayi800.com/ERP_%E5%90%88%E5%90%8C%E5%8F%B7@2x.png',
                text:"签订合同"
            },
            {
                img:'http://cdn.ayi800.com/image/png/wx_waple_service_flow4%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-%E7%BA%BF@2x.png',
                text:"上门服务"
            },
            {
                img:'http://cdn.ayi800.com/image/png/wx_waple_service_flow3%E5%A5%BD%E8%AF%84@2x.png',
                text:"服务评价"
            }
        ],
        work_list:[
            {
                time:'6:00-7:00',
                content:[
                    {
                        text1:'月嫂起床洗漱，准备早餐',
                        text2:'清理宝宝卫生、测体温、喂奶、拍嗝',
                        text3:'与宝宝亲子互动',
                        text4:'收拾厨房用具、产妇用具',
                    }
                ]
            },{
                time : '8:00-10:00',
                content:[
                    {
                        text1:'产妇恶露观察，伤口观察，做必要的清理消毒',
                        text2:'根据产妇恢复情况，做轻微形体恢复训练',
                        text3:'清理宝宝卫生、喂奶、拍嗝、给宝宝做脐带消毒',
                        text4:'给产妇准备一次加餐',
                    }
                ]
            },{
                time : '10:00-12:00',
                content:[
                    {
                        text1:'给宝宝做早教',
                        text2:'整理产妇和宝宝用具',
                        text3:'清洗衣物',
                        text4:'准备午餐',
                    }
                ]
            },{
                time : '12:00-13:00',
                content:[
                    {
                        text1:'清理宝宝卫生、喂奶、拍嗝',
                        text2:'给宝宝做早教',
                        text3:'给看黑白点卡，促进宝宝的发育',
                        text4:'哄宝宝午睡',
                    }
                ]
            },{
                time : '13:00-15:00',
                content:[
                    {
                        text1:'清理宝宝卫生，喂奶、拍嗝、给宝宝做早教',
                        text2:'产妇加餐',
                        text3:'产妇恶露观察，乳房观察',
                        text4:'伤口消毒，乳房护理等',
                    }
                ]
            },{
                time : '16:30-20:00',
                content:[
                    {
                        text1:'准备晚餐',
                        text2:'换尿布、清洗、喂奶，拍嗝',
                        text3:'收拾厨房及用具，打扫卫生',
                        text4:'给宝宝洗澡、做抚触、按摩、做脐带消毒',
                    }
                ]
            }
        ]
    }
}

// 创建store
const store = createStore(reducer,initState)


const Routes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path='/waiterservice' component={WaiterService}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default Routes;