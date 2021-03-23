import React from 'react';
import connect from '@vkontakte/vk-bridge';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import { View, Alert, Snackbar, Avatar, InfoRow, Panel, Spinner, SimpleCell, Progress, ModalCard, ConfigProvider, Link,  Header, Cell, List, Group, ScreenSpinner, Title, ModalPageHeader, ActionSheet, RichCell, Banner, ActionSheetItem, ModalRoot, ModalPage, FormLayoutGroup, FormLayout, Input, Div, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';
import Icon28CheckSquareOutline from '@vkontakte/icons/dist/28/check_square_outline';
import Home from './panels/Home';
import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';
import Icon28ZipOutline from '@vkontakte/icons/dist/28/zip_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon56DoNotDisturbOutline from '@vkontakte/icons/dist/56/do_not_disturb_outline';
import Welcome from './panels/Welcome';
import Dop from './panels/Dop';
import Icon28RadiowavesAroundOutline from '@vkontakte/icons/dist/28/radiowaves_around_outline';
import Icon28LogoVkOutline from '@vkontakte/icons/dist/28/logo_vk_outline';
import Top from './panels/Top';
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';

import Icon56DiamondOutline from '@vkontakte/icons/dist/56/diamond_outline';
import axios, { post } from "axios";
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Transfer from './panels/Transfer';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Shop from './panels/Shop';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Ban from './panels/Ban';
import Error from './panels/error/error'
import Bonuse from './panels/Bonuse';

import ServerOff from './panels/ServerOff';

import LimitOff from './panels/LimitOff';

import User from './panels/UserInfo';
import ClanInfo from './panels/ClanInfo';

import Birzha from './panels/Birzha';
import Clan from './panels/Clan';

import History from './panels/History';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon28CheckCircleOutline from '@vkontakte/icons/dist/28/check_circle_outline';


import io from 'socket.io-client'

const queryString = require('query-string');
const crypto = require('crypto');
const parsedHash = queryString.parse(window.location.hash);

const orangeBackground = {
  backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
};

const blueBackground = {
  backgroundColor: 'var(--accent)'
};

const avatarWrapperStyle = {
      display: "flex",
      flexDirection: "row",
      paddingRight: 10
    };

    const numberStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 20,
      fontSize: 20
    };

    const avatarIconWrapper = {
      background: "var(--background_content)",
      border: "2px solid var(--background_content)",
      borderRadius: 4,
      marginLeft: 38,
      marginTop: 32
    };
function ClickTop(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {post < 3 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}>{props.posts[post].photo === null ? <Avatar size={48}><Icon56GalleryOutline height={28}/></Avatar>  : <Avatar shadow={false} size={48} src={props.posts[post].photo} />}
                    </td>
                </tr>
            </table>}
                           description={`${parseFloat(100000 - props.posts[post].balance).toFixed(0)} раз осталось кликнуть`}
                           expandable
                         >{props.posts[post].name}
</Cell>
 :null}
    </div>
  );

  return (
    <div>

      {content}
    </div>
  );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'preloader',
            fetchedUser: {
                id: 521577793,
                first_name: 'Александр',
                last_name: 'Григорьев',
                photo_200: ''
            },
            toid: null,
            errortxt:"",
            insec: 0,
			errorText: null,
            bonusgroup: 1,
            clanTop: [],
            promo: null,
            activeModal: null,
            messages: [],
            ban: false,
            click6: 0,
            allcoins:0, 
            txnid:0,
            frSearch: "",
            click7: 0,
            ftr:0,
            allusers:0,
            tab1: 'info',
            clanSum: 0,
            bonuse1: 0,
            shopTab: 'click',
            click8: 0,
            ssumm: 0,
            activeTopTab: 'balance',
            activeHomeTab: 'main',
            userInfoId: 1,
            rubli: 0,
            isTopLoad: true,
            isHomeLoad: true,
            dost1: false,
            birsum: 1,
            dost2: false,
            merchantError: '',
      merchantInfo: {
        "name":"",
        "photo": "",
        "description": "",
        "code":0
      },
      usInfo: {
        "name":"",
        "photo": ""
      },
           dost3: false,
           claanInfo: {
            "error": "Hui",
              "users": {},
              "chat": []
           },
            dost4: false,
             dost5: false,
            dost6: false,
            market: {},
            dost7: false,
            kickText: "",
            users: 0,
            clanName: "",
            progressline: 0,
            spinner: null,
            activeShopTab: 'click',
            reason: '',
            modalsumres: '',
            caseAllowClick: true,
            marketBuyInfo: 0,
            click: 0,
            ref_count: 0,
            ref_name: "Хуй золотой",
            clanAccess: [322861790, 584199669, 497975031, 590452995, 298845865, 140933159, 590160602, 590351485],
            mine: 0,
            birzhaid: 0,
            sum: null,
            gold: 0,
            messageText: '',
            price: 0,
            summ: null,
            code: '',
            topme: null,
            marketPrice: 0,
            marketId: 0,
            modalsum: 0,
            forDev: <Div> <Button size="xl" mode="secondary" onClick={this.genApi} > Сгенерировать </Button> </Div>,
            marketBalance: 10,
            userInfo: {
              "name": 'Хуй золотой',
              "photo": "",
              "balance": 0,
              "click": 0,
              "mine": 0
            },
            groups: [],
            transferSum: 0,
            online: 0,
            birzha: [],
            history: [],
            searchRes: [],
            clanInfo: {
              "error": "Hui",
              "users": {},
              "chat": []
            },
            search: '',
            verify: false,
            birzhasum: 0,
            scheme: "space_gray",
            speedtop: [],
            res: {},
            clickClanTop: [],
            top: [],
            refTop: [],
            goldTop: [],
            ban: false,
            hashInfoid:0,
            app_token: "",
            friends_list: [],
            usr_list: [],
            hashInfo: {
              "id": 0,
              "code":0,
                  "lock": 0,
                  "sum": 0

            },
            hashInfo2: {
              "id": 0,
                  "lock": 0,
                  "sum": 0.01

            },
            promoid: null,
            rubli: 0,
            balance: 3874582483748423476,
            text: '',
            popout: null
        };
        this.openDefault = this.openDefault.bind(this);
        this.openCase = this.openCase.bind(this);
        this.closePopout = this.closePopout.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.caseClick = this.caseClick.bind(this);
        this.openBase = this.openBase.bind(this);
        this.idChange = this.idChange.bind(this);
        this.offServer = this.offServer.bind(this);
        this.tab = this.tab.bind(this);
        this.tab1 = this.tab1.bind(this);
        this.summChange = this.summChange.bind(this);

        this.bonusePlus = this.bonusePlus.bind(this);
        this.changeChange = this.changeChange.bind(this)
        this.promoChange = this.promoChange.bind(this);
        this.sumChange = this.sumChange.bind(this);
        this.serverOn = this.serverOn.bind(this);
        this.refka = this.refka.bind(this);
    }

    componentDidMount() {



        if (window.location.hash.includes('#ref')) {
            let selectors = window.location.hash.split('_');

            let id = selectors[0].replace("#ref", "")
        this.refka(id);
        
    }
        connect.subscribe((e) => {
        window.addEventListener('popstate', e => e.preventDefault() & this.menu(e));
        window.history.pushState( { panel: 'home' }, `home` );
            switch (e.detail.type) {
                case 'VKWebAppCallAPIMethodResult':
                if (e.detail.data.request_id === "123") {
                    window.socket.emit('friendsGetResult', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "users": e.detail.data.response.items,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })

                }
                    break;
                case 'VKWebAppGetUserInfoResult':

                    this.setState({ fetchedUser: e.detail.data })
                   this.connect()
                       if (window.location.hash.includes('#m')) {
                         let selectors = window.location.hash.split('_');

                let id = selectors[0].replace("#m", "")
                let sum = parseFloat(selectors[1]);
                let code = parseInt(selectors[2]);
                let lockSum = parseInt(selectors[3]);
                this.setState({hashInfo: {
                  "id": id,
                  "code": code,
                  "lock": lockSum,
                  "sum": sum
                }})
                if (sum > 0) {
                  this.setState({transferSum: sum})
                }
                
                           if (id != "" && sum > 0 && (isNaN(code) != true)) {

                                       this.getMerchantInfo(id)

                               
                           } else {
                               this.setState({ activeModal: "errorurl" })
                           }

      

    }
    if (window.location.hash.includes('#send')) {
                         let selectors = window.location.hash.split('_');

                let id = selectors[0].replace("#send", "")
                let sum = parseFloat(selectors[1]);
                let lockSum = parseInt(selectors[2]);
                this.setState({hashInfo2: {
                  "id": id,
                  "lock": lockSum,
                  "sum": sum
                }
                })
                if (sum > 0) {
                  this.setState({transferSum: sum})
                }
      this.getUserGetInfo(id)

    }

                     this.checkGroup();
                     connect.send('VKWebAppGetAuthToken', {"app_id": 7652467, "scope": "friends"})

        .then((data) => {
            const token = data.access_token

            this.setState({app_token: token})

            connect.send("VKWebAppCallAPIMethod", {"method": "friends.get", "request_id": "123", "params": {order: 'hints',
                    count: 5000,
                    fields: "photo_200",
                    access_token: this.state.app_token,
                    v: '5.120'}});
    })
        .catch((error) => {

            })
                    connect.send("VKWebAppJoinGroup", {"group_id": 200231236});
                    setTimeout(() => {
                        this.closePopout()
                    }, 3000)

                    break;
                case 'VKWebAppGetFriendsResult':
                    this.setState({ toid: e.detail.data.users[0].id });


                    break;

                case 'VKWebAppGetFriendsFailed':
                    this.openDefault("Ошибка!", "Возможно вы не выбрали друга.", {
                            title: 'ОК',
                            autoclose: true,
                        })

                    break;

                default:

            }

        });




        connect.send('VKWebAppGetUserInfo', {})



         setInterval(() => {
          if (window.socket) {
              if (this.state.activePanel === 'preloader' && this.state.ban == false) {
                  if (this.state.balance !== 3874582483748423476) {
                      this.setState({ activePanel: 'home' })

                  }
              } else if (this.state.ban) {
                  this.setState({ activePanel: 'ban' })
              }
            if (!this.state.ban) {
            this.mine228()
        }

          }
          this.fulltime()
        }, 1000)
         setInterval(() => {
          if (window.socket) {

          window.socket.emit('userInfo', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })


            
          }
        }, 4000)
        setTimeout(() => {
                        this.closePopout()
                    }, 1000)

    }
    connect = () => {
        window.socket = io.connect('https://vkgamecoin.ru:2222', {
            autoConnect: false,
            secure: true,
            query: {
          "vk_user_id": this.state.fetchedUser.id,
          "params": window.location.search.substring()
        },
            transports: ['websocket']
        })
        this.events(window.socket)
        window.socket.connect()
        window.socket.emit('userInfo', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
		
         
        
        setTimeout(() => {
          if (parsedHash.to) {
    }
    if (parsedHash.m) {
            if (!this.state.ban) {
        this.setState({ toid: parsedHash.to, activeModal: 'merchantTr' });
      }
    }
    if (parsedHash.profile) {
            if (!this.state.ban) {
       this.getHashUserInfo(parsedHash.profile)
      }
    }
    if (parsedHash.invite) {
            if (!this.state.ban) {
       this.setState({activeModal: 'clanInvite'})
      }
    }
        }, 3000)

    }
    events = (socket) => {
        socket.on('alert', (response) => {
           this.setState({ popout:
      <Alert
        actions={[{
          title: 'OK',
          autoclose: true,
          mode: 'cancel'
        }]}
        onClose={() => this.setState({popout: null})}
      >
        <h2>Уведомление</h2>
        <p>{response.text}</p>
      </Alert>
    });
        })
        socket.on('info', (response) => {

           this.setState({ marketPrice: response.price, marketId: response.id, marketBalance: response.have })

        })
		socket.on('errorEvent', (text) => {
			this.setState({errorText: text, activePanel: "error", balance:3874582483748423476 })
        })
       socket.on('userData', (msg) => {
           this.setState({click: msg.click, rubli: msg.rubli, dost1: msg.dost1, dost2: msg.dost2, dost3: msg.dost3, dost4: msg.dost4, dost7: msg.dost7, dost6: msg.dost6, dost5: msg.dost5, click6: msg.click6, click7: msg.click7, click8: msg.click8, mine10: msg.mine10, mine9: msg.mine9, mine8: msg.mine8, mine7: msg.mine7, mine6: msg.mine6, mine5: msg.mine5, mine4: msg.mine4, mine3: msg.mine3, mine2: msg.mine2, mine1: msg.mine1, balance: msg.balance, click1: msg.click1, click2: msg.click2, click3: msg.click3, click4: msg.click4, click5: msg.click5, mine: msg.mine, click: msg.click, gold: msg.gold, rubli: msg.rubli, reason: msg.reason, ban: msg.ban, insec: msg.second, click: msg.click, mine: msg.mine, ref_count: msg.ref_count, ref_name: msg.ref_name})


        })
        socket.on('allcoin', (msg) => {
           this.setState({allcoins: msg})


        })
        socket.on('ftr', (msg) => {
           this.setState({ftr: msg})


        })
        socket.on('allusers', (msg) => {
           this.setState({allusers: msg})


        })
       socket.on('market', (msg) => {
            this.setState({market: msg})

        })
        socket.on('kick', (msg) => {
            this.setState({kickText: msg, activePanel: "serveroff"})

        })
        socket.on('ban', (msg) => {
            this.setState({reason: msg, activePanel: "ban"})

        })
        socket.on('getUserInfo', (msg) => {
            this.setState({userInfo: msg, activePanel: 'userInfo'})

        })
        socket.on('getClanById', (msg) => {
            this.setState({claanInfo: msg, activePanel: 'claninfo'})

        })
        socket.on('updateOnline', (msg) => {
            this.setState({online: msg})

        })
        socket.on('clanInfo', (msg) => {
            this.setState({clanInfo: msg})

        })
         socket.on('errorModal', (msg) => {
            this.setState({modaltext: msg.text, activeModal: 'socketErrorModal'})

        })
        socket.on('successModal', (msg) => {
            this.setState({modaltext: msg.text, activeModal: 'socketSuccessModal'})

        })
        socket.on('clanTop', (msg) => {
            this.setState({clickClanTop: msg})

        })
        socket.on('friends', (msg) => {
            this.setState({friends_list: msg})

        })
        
        socket.on('allusr', (msg) => {
            this.setState({usr_list: msg})

        })

      socket.on('connect', () => {


        })
        socket.on('disconnect', () => {


        })
        socket.on('disconnectReason', (res) => {

          io.connect('https://vkgamecoin.ru:2222', {
            autoConnect: false,
            secure: true,
            query: {
          "vk_user_id": this.state.fetchedUser.id,
          "params": window.location.search.substring()
        },
            transports: ['websocket']
        })
        
        })

    }
     thematics = () => {
      const search = this.state.search

      let birzha = this.state.market
      let result = {}
let teams = birzha

for (let i in teams) {
  let team = teams[i]

  if (team.name.includes(search)) {

    result[i] = team
  }

}

this.setState({res: result})

    }
    fortunestart = () => {
        this.setState({ progressline: +100 });
        this.bonuseDay()
    }
    buyMarket = (e) => {
        this.setState({ marketBuyInfo:  e.currentTarget.dataset.to, activeModal: 'buy', snackbar: null })
        this.getInfo(e.currentTarget.dataset.to)
    };
    getUserInfo = (e) => {
      this.setState({userInfoId: e.currentTarget.dataset.to})
       window.socket.emit('getUserInfo', {
          "vk_user_id": this.state.fetchedUser.id,
          "id": e.currentTarget.dataset.to,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
    };
    getHashUserInfo = (id) => {
      this.setState({userInfoId: id})
       window.socket.emit('getUserInfo', {
          "vk_user_id": this.state.fetchedUser.id,
          "id": id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
    };
    usTransfer = () => {
      
      this.setState({hashInfo2: {
                  "id": this.state.userInfoId,
                  "lock": 0,
                  "sum": 0
                }})
      this.getUserGetInfo(this.state.userInfoId)
    };
    friendTransfer = (e) => {
            this.setState({hashInfo2: {
                  "id": e.currentTarget.dataset.to,
                  "lock": 0,
                  "sum": 0
                }})
      this.getUserGetInfo(e.currentTarget.dataset.to)
    };
    getInfo = (id) => {
        window.socket.emit('marketInfo', {
          "vk_user_id": this.state.fetchedUser.id,
          "id": id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
  }
  birzhasave = () => {
        window.socket.emit('changePrice', {
          "vk_user_id": this.state.fetchedUser.id,
          "tosum": this.state.birsum,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
  }
    go = (e) => {

        this.setState({ activePanel: e.currentTarget.dataset.to })
        window.history.pushState( { panel: e.currentTarget.dataset.to }, `${e.currentTarget.dataset.to}` );
        if (e.currentTarget.dataset.to === 'top') {
          this.setState({isTopLoad: true})
            this.getTop()
             this.getGoldTop()
             this.getRefTop()
             this.getClanTop()
            this.getSpeedTop()
            this.getGroupTop()
        }
        if (e.currentTarget.dataset.to === 'history') {
            this.getHistory()
        }
    };

    menu (e) {
        if(e.state) {
            this.setState( { activePanel: e.state.panel } );
        } else {
            this.setState( { activePanel: 'home', search: '' } );
            window.history.pushState( { panel: 'home' }, `home` );
        }
    }

    openDefault(title, msg, actions) {
        this.setState({
            popout:
                <Alert
                    actions={[actions]}
                    onClose={this.closePopout}
                >
                    <h2>{title}</h2>
                    <p>{msg}</p>
                </Alert>
        });
    }
     openApi(title, msg, actions) {
        this.setState({
            popout:
                <Alert
                    actions={[actions]}
                    onClose={this.closePopout}
                >
                    <h2>{title}</h2>
                    <p>Скопируйте API-токен</p>
                    <FormLayout>
      <FormLayoutGroup>
        <Input type="text" readOnly defaultValue={msg} />
         </FormLayoutGroup>
    </FormLayout>
    <Div>
       <Button size="xl" mode="secondary" onClick={() => {
                         connect.send("VKWebAppCopyText", {text: msg}) }}>Скопировать</Button>
     </Div>
                </Alert>
        });
    }
      offServer() {
        this.setState({
            popout:
                <Alert
                    onClose={this.closePopout}
                >
                    <h2>Отключен.</h2>
                    <p>Сервер не вернул корректный ответ. </p>
                </Alert>
        });
    }
    openCase(img, msg, actions) {
        this.setState({
            popout:
                <Alert
                    actions={[actions]}
                    onClose={this.closePopout}
                >
                <center><h1>Кейс открыт!</h1></center>
                    <center><img id='click' src={img} width={150} height={150} /></center>
                    <center><Title level="1" weight="bold" style={{ marginBottom: 5 }}>{msg}</Title></center>


                </Alert>
        });
    }

    closePopout() {
        this.setState({ popout: null });
    }

    closeModal() {
        this.setState({ activeModal: null });
    }

    modal = (e) => {
        this.setState({ activeModal: e.currentTarget.dataset.to })
    };

    buy = (e) => {
        this.setState({ birzhaid: e.currentTarget.dataset.to, activeModal: 'buy' })
    };

    tab = (e) => {

     this.setState({ activeTopTab: e.currentTarget.dataset.to })
    };
    seltab = (e) => {

     this.setState({ activeHomeTab: e.currentTarget.dataset.to })
     if (e.currentTarget.dataset.to == 'his') {
     this.getHistory()
     }
    };
    shopTab = (e) => {

     this.setState({ shopTab: e.currentTarget.dataset.to })
    };
set1 = (e) => {

        this.setState({ tab1: e.currentTarget.dataset.to })
    };
   fulltime = () =>  {
var time=new Date();
var newYear=new Date("jan,14,2021,15:00:00");
var totalRemains=(newYear.getTime()-time.getTime());

if (totalRemains>1){

var RemainsSec = (parseInt(totalRemains/1000));
var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));
var secInLastDay=RemainsSec-RemainsFullDays*24*3600;
var RemainsFullHours=(parseInt(secInLastDay/3600));
if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};
var secInLastHour=secInLastDay-RemainsFullHours*3600;
var RemainsMinutes=(parseInt(secInLastHour/60));
if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};
var lastSec=secInLastHour-RemainsMinutes*60;
if (lastSec<10){lastSec="0"+lastSec};
 this.setState({fulltime: `${RemainsFullHours}:${RemainsMinutes}`
})
}

else{
this.setState({fulltime: `00:00`
})
}
}
     tab1 = (e) => {
        this.setState({ activeShopTab: e.currentTarget.dataset.to })
    };
     onSearchChange = (e) => {
        this.setState({ search: e.target.value })
        this.thematics()
    };

    buyCoins = () => {
        window.socket.emit('marketbuy', {
          "vk_user_id": this.state.fetchedUser.id,
          "buyid": this.state.marketBuyInfo,
          "sum": this.state.transferSum,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
  }

    caseClick = () => {

if(this.state.caseAllowClick) {

this.setState({ caseAllowClick: false })
let number = `${Math.floor(Math.random() * (9 - 0 + 1)) + 0}${Math.floor(Math.random() * (9 - 0 + 1)) + 0}${Math.floor(Math.random() * (9 - 0 + 1)) + 0}${Math.floor(Math.random() * (9 - 0 + 1)) + 0}`.split('')

let interval = setInterval(() => {
let length = this.state.code.length
let index
if(length === 0){
index = 0
}else{
index = length
}
this.setState({ code: this.state.code + number[index] })
if(this.state.code.length > 3){
this.startSafe();
clearInterval(interval)
setTimeout(() => {
this.setState({ caseAllowClick: true, code: '' })

}, 900)
}
}, 900)
}
}
   openBase () {
    this.setState({ popout:
      <ActionSheet onClose={() => this.setState({ popout: null })}>
        <ActionSheetItem autoclose >
          Изменить
        </ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive">
          Удалить
        </ActionSheetItem>
      </ActionSheet>
    });
  }

 createUser = () => {
        window.socket.emit('userInfo', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
}
    checkGroup= () => {
fetch(`https://vkgamecoin.ru:9090/app/checkGroup/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
})
.catch((error) => {

//this.offServer()
//this.setState({ activePanel: 'serveroff' })
                //this.setState({ popout: <ScreenSpinner /> });

})
}
    caseOne = () => {
        fetch(`https://vkgamecoin.ru:9090/app/opeCaseOne/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                switch (response.status) {
                    case 'ok':
                        this.openCase(response.priz.photo, response.priz.name, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", `Недостаточно средств.`, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }


            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }
onImgChange = (e) => {
    this.setState({ file: e.target.files[0], upload: true });

     this.fileUpload(e.target.files[0]);
  }
  fileUpload = (file) => {
    this.setState({ popout: <ScreenSpinner /> });
    const url =
      "https://api.imgbb.com/1/upload?key=4fc28838a96d4befc26bee98dfbee389";
    const formData = new FormData();
    formData.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          let error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then((response) => {
        return response.data;
      })
      .then((json) => {
        this.setState({
          popout: null,
          upload: false,

        });
window.socket.emit('setClanPhoto', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": json.data.url,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })

      })
      .catch((e) => {
        this.setState({
          popout: null,
          upload: false,
          popout: (
            <Alert
              actions={[
                {
                  title: "OK",
                  autoclose: true,
                  mode: "cancel",
                },
              ]}
              onClose={() => this.setState({ popout: null })}
            >
              <h2>Ошибка!</h2>
              <p>На сервере произошла ошибка, попробуйте еще раз!</p>
            </Alert>
          ),
        });
      });
  }
  onSearch1Change = (e) => { this.setState({ frSearch: e.target.value }); }

    get friends () {
      const search = this.state.frSearch.toLowerCase();
      return this.state.friends_list.filter(({first_name}) => first_name.toLowerCase().indexOf(search) > -1);
    }
    get friends2 () {
      const search = this.state.frSearch.toLowerCase();
      return this.state.usr_list.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

  merchantTransfer = (id, sum) => {
        fetch(`https://vkgamecoin.ru:9090/merchantTransfer/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_100}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${id}&sum=${sum}&code=${this.state.hashInfo.code}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
 switch (response.response[0].status) {
                    case 'ok':
this.setState({modalsum: response.response[0].sum, activeModal: 'transfsuccess', txnid:response.response[0].txnid, hashInfoid:response.response[0].id })
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'transferror', hashInfoid:response.response[0].id})
break;

                    default: break;
                }

            })
    }
    usTransfer2 = (id, sum) => {
        fetch(`https://vkgamecoin.ru:9090/app/userTranfer/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_100}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${id}&sum=${sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
 switch (response.response[0].status) {
                    case 'ok':
this.setState({modalsum: response.response[0].sum, txnid:response.response[0].txnid, activeModal: 'transfsuccess2', })
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'transferror2'})
break;

                    default: break;
                }

            })
    }
     genApi = () => {
      this.setState({forDev: null})
        fetch(`https://vkgamecoin.ru:9090/app/genApiToken/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
             this.setState({forDev: <FormLayout><FormLayoutGroup top="ID"><Input type="text" readOnly defaultValue={response.id} /></FormLayoutGroup><FormLayoutGroup top="Токен"><Input type="text" readOnly defaultValue={response.token} /></FormLayoutGroup></FormLayout>
                    })

            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }

refka = (refkaaa) => {
fetch(`https://vkgamecoin.ru:9090/app/ref/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&ref=${refkaaa}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
}
})
.then((response) => response.json())
.then((response) => {

this.setState({ref_count: response.response[0].ref_count, ref_name: response.response[0].ref_name })
})
.catch((error) => {

// //this.offServer()
//this.setState({ activePanel: 'serveroff' })
                //this.setState({ popout: <ScreenSpinner /> });

})
}

    online = () => {
        window.socket.emit('online', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
    }


    birzha = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getUserBirzhaInfo/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

                this.setState({ birzhasum: response.response[0].user.summ })

            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    birzhaGet = () => {
        fetch(`https://vkgamecoin.ru:9090/app/birzhaGet/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

                this.setState({ birzha: response.response[0].users })

            })
            .catch((error) => {
                 //this.offServer()
                //this.setState({ activePanel: 'serveroff' })
                                //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    birzhaBuy = () => {
        fetch(`https://vkgamecoin.ru:9090/app/birzhaBuy/?uid=${this.state.fetchedUser.id}&id=${this.state.birzhaid}&sum=${this.state.summ}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {


               switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", response.response[0].status, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", `${response.response[0].error_description}`, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }

            })
            .catch((error) => {
                 //this.offServer()
               //  //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    oneBuy = () => {
        fetch(`https://vkgamecoin.ru:9090/app/tovar1/?uid=${this.state.fetchedUser.id}&id=${this.state.birzhaid}&sum=${this.state.summ}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", `Вы купили товар "Рожок". Совсем скоро, вам напишет администратор и даст промокод.`, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", `Недостаточно средств`, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }

            })
            .catch((error) => {
                 //this.offServer()
                //this.setState({ activePanel: 'serveroff' })
                                //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    twoBuy = () => {
        fetch(`https://vkgamecoin.ru:9090/app/tovar2/?uid=${this.state.fetchedUser.id}&id=${this.state.birzhaid}&sum=${this.state.summ}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", `Вы купили товар "Чизбургер". Совсем скоро, вам напишет администратор и даст промокод.`, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", `Недостаточно средств`, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }

            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    sum = () => {
        fetch(`https://vkgamecoin.ru:9090/app/birzhaAdd/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&sum=${this.state.ssumm}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {



            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    vivod = () => {
        if (this.state.rubli === 0) {
            this.openDefault("Ошибка!", "На вашем балансе нету денег.", {
                            title: 'ОК',
                            autoclose: true,
                        })
                        return
        }
        fetch(`https://vkgamecoin.ru:9090/app/birzhaVivod/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

                 switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", "Ожидайте денег на свой QIWI кошелёк.", {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }

            })
            .catch((error) => {
                  //this.offServer()
                //this.setState({ activePanel: 'serveroff' })
                                //this.setState({ popout: <ScreenSpinner /> });

            })
    }
     getMerchantInfo = (id) => {

        fetch(`https://vkgamecoin.ru:9090/merchantGetInfo/?uid=${this.state.fetchedUser.id}&id=${id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                
                    this.setState({ merchantInfo: response, activeModal: "merchantTr" })

            })

    }
    getUserGetInfo = (id) => {

        fetch(`https://vkgamecoin.ru:9090/usertrinfo/?uid=${this.state.fetchedUser.id}&id=${id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
  
                    this.setState({ usInfo: response, activeModal: "htransfer" })

            })

    }
    getHistory = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getHistory/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
         })
            .then((response) => response.json())
            .then((response) => {

                 this.setState({ history: response.response[0].history })

             })
              .catch((error) => {
                 this.offServer()
                this.setState({ activePanel: 'serveroff' })
                                this.setState({ popout: <ScreenSpinner /> });

             })
     }

    mine228 = () => {
        window.socket.emit('mineforplay', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring(1),
          "ssighdjebey37hdjwh6372816rhrjn": "randomaizer222"
        })
    }

    click = (e) => {


       window.socket.emit('clickforbuyupgrade', {
          "vk_user_id": this.state.fetchedUser.id,
          "now": Date.now(),
          "X": e.pageX,
          "Y": e.pageY,

          "params": window.location.search.substring(),
          "ssign": window.location.search.substring(1)
          
        })
    }

    getTop = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getTop/?uid=${this.state.fetchedUser.id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ top: response.users, topme: response.me, isTopLoad: false })

            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }
     getGoldTop = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getGoldTop/?uid=${this.state.fetchedUser.id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ goldTop: response.users })

            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }
     getRefTop = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getRefTop/?uid=${this.state.fetchedUser.id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ refTop: response.users })

            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }
    getClanTop = () => {
        fetch(`https://vkgamecoin.ru:9090/app/clanTop/?uid=${this.state.fetchedUser.id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ clanTop: response.users })

            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }
    getSpeedTop = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getSpeedTop/?uid=${this.state.fetchedUser.id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ speedtop: response.users, topme: response.me })

            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    getGroupTop = () => {
        fetch(`https://vkgamecoin.ru:9090/app/getGroupsTop/?uid=${this.state.fetchedUser.id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ groups: response.groups })

            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    transfer = () => {
        fetch(`https://vkgamecoin.ru:9090/app/userTranfer/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
this.setState({modaltext: '', activeModal: 'transfsuccess', usInfo:response})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'transferror', usInfo:response})
break;

                    default: break;
                }

            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    PanelHeaderButton = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click1/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", "Ускорение куплено.", {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", response.response[0].error_description, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }

            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

buyClick1 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click1/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
                 //this.setState({ activePanel: 'serveroff' })
                                 //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    buyClick2 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click2/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

             switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //  //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    buyClick3 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click3/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
 buyClick4 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click4/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                //this.offServer()
                //this.setState({ activePanel: 'serveroff' })
                                //this.setState({ popout: <ScreenSpinner /> });

            })

    }
     buyClick5 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click5/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
         buyClick6 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click6/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
         buyClick7 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click7/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
         buyClick8 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/click8/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
 buyAuto1 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine1/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
      this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }

    buyAuto2 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine2/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto3 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine3/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

              switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto4 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine4/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto5 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine5/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto6 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine6/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({ click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto7 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine7/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto8 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine8/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto9 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine9/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

              switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })

    }
buyAuto10 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/mine10/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
               this.setState({click: response.response[0].click, mine: response.response[0].mine})

               switch (response.response[0].status) {
                    case 'error':
                        this.setState({activeModal: 'nocoins'})
                        break;
                        case 'ok':
                        this.setState({activeModal: 'successbuy'})
                        break;
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
              //this.setState({ activePanel: 'serveroff' })
                              //this.setState({ popout: <ScreenSpinner /> });

            })

    }

    checkTask = () => {
        fetch(`https://vkgamecoin.ru:9090/app/checkTask1/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", "Задание выполнено! +0.1 к клику.", {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", response.response[0].error_description, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }

    checkTask1 = () => {
        fetch(`https://vkgamecoin.ru:9090/app/checkTask2/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
                        this.openDefault("Успешно!", "Задание выполнено! +0.5 к клику.", {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("Произошла ошибка.", response.response[0].error_description, {
                            title: 'ОК',
                            autoclose: true,
                        })
                        break;

                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }
    promo = () => {
        fetch(`https://vkgamecoin.ru:9090/app/promo/?uid=${this.state.fetchedUser.id}&promo=${this.state.promo}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    case 'ok':
                       this.setState({modaltext: response.response[0].description, activeModal: 'promosuccess'})
                        break;
                    case 'error':
                        this.setState({modaltext: response.response[0].error_description, activeModal: 'promoerror'})
                        break;

                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }
  bonusePlus = () => {
        fetch(`https://vkgamecoin.ru:9090/app/addBonuse/?uid=${this.state.fetchedUser.id}&promo=${this.state.promo}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${this.state.toid}&sum=${this.state.sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {

               switch (response.response[0].status) {
                    default: break;
                }
            })
            .catch((error) => {
                 //this.offServer()
               //this.setState({ activePanel: 'serveroff' })
                               //this.setState({ popout: <ScreenSpinner /> });

            })
    }


    bonuseDay = () => {
fetch(`https://vkgamecoin.ru:9090/app/bonuseDay/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: response.response[0].description, activeModal: 'fortunesuccess'})
break;
case 'error':
this.setState({activeModal: 'fortuneerror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
                //this.setState({ popout: <ScreenSpinner /> });

})
}
    serverOn() {
         this.setState({ activePanel: 'home', popout: <ScreenSpinner /> })
         setTimeout(() => {
                        this.closePopout()
                    }, 1000)
    }

    sumChange(event) {

        this.setState({ sum: event.target.value})
    }
    messageChange = (event) => {

        this.setState({ messageText: event.target.value})
    }
    clanSumChange = (event) => {

        this.setState({ clanSum: event.target.value})
    }


    summChange(event) {

        this.setState({ summ: event.target.value})
    }

    changeChange(event) {

        this.setState({ ssumm: event.target.value})
    }

    idChange(event) {

        this.setState({ toid: event.target.value})
    }

    promoChange(event) {

        this.setState({ promo: event.target.value})
    }

     openBase () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        onClose={() => this.setState({ snackbar: null })}
        before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
      >
        Test
      </Snackbar>
    });
  }
      startSafe = () => {
fetch(`https://vkgamecoin.ru:9090/app/activCase/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: response.response[0].description, activeModal: 'safesuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].description, activeModal: 'safeerror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
      startDost1 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost1/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
 startDost2 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost2/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
startDost3 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost3/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
startDost4 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost4/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
startDost5 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost5/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
startDost6 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost6/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
startDost7 = () => {
fetch(`https://vkgamecoin.ru:9090/app/dost7/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_200}&name=${this.state.fetchedUser.first_name}`, {
method: 'get',
headers: {
"Content-type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Vk-Sign": window.location.search.substring(1)
}
})
.then((response) => response.json())
.then((response) => {
switch (response.response[0].status) {
case 'ok':
this.setState({modaltext: '', activeModal: 'achivsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'achiverror'})
break;

default: break;
}
})
.catch((error) => {
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
})
}
        story() {
        let url = `https://vk.com/app7652467`
        connect.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun9-72.userapi.com/kW_nYU59Nlqkr2I7pbYkmLINA5b3UvMv0xHZ6A/2gKJzN3bjzY.jpg", "locked" : "true", "attachment" : {
            "text": "open",
            "type": "url",
            "url": url
        } });
    }
    render() {
   const modal = (
      <ModalRoot
        activeModal={this.state.activeModal}
        onClose={this.closeModal}
      >
      <ModalCard
          id='nocoins'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Недостаточно монеток."
          caption="У вас недостаточно GC"
          actions={[{
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='fortuneerror'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption="Вы уже получали ежедневный бонус сегодня. Попробуйте завтра."
         actions={[{
            title: 'Назад',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
              this.setState({activeModal: 'fortune'})
              }
            },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }

          }]}
        >

        </ModalCard>
        <ModalCard
          id='fortunesuccess'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Успешно!"
          caption={this.state.modaltext}
          actions={[{
            title: 'Назад',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
              this.setState({activeModal: 'fortune'})
              }
            },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='promosuccess'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Промокод активирован"
          caption={this.state.modaltext}
          actions={[{
            title: 'Назад',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
              this.setState({activeModal: 'promik'})
              }
            },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>

        <ModalCard
          id='promoerror'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption={this.state.modaltext}
          actions={[{
            title: 'Назад',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
              this.setState({activeModal: 'promik'})
              }
            },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
         <ModalCard
          id='clanInvite'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Приглание в клан"
          caption="Вы действительно, хотите присоединится к клану?"
          actions={[{
            title: 'Да',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
               window.socket.emit('invite', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "id": parsedHash.invite,
          "params": window.location.search.substring()
        })
              }
            },
            {
            title: 'Нет',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>

        <ModalCard
          id='achivsuccess'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Успешно!"
          caption='Достижение активировано'
          actions={[
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='achiverror'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption={this.state.modaltext}
          actions={[
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='socketSuccessModal'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Успешно!"
          caption={this.state.modaltext}
          actions={[
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='socketErrorModal'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption={this.state.modaltext}
          actions={[
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='transfsuccess'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Перевод отправлен!"
          caption={`Перевод на сумму ${this.state.modalsum} успешно выполнен!
          txnId: ${this.state.txnid}`}
          actions={[
             {
            title: 'назад',
            mode: 'danger',
            action: () => {
              this.setState({activeModal: 'merchantTr'})
              this.getMerchantInfo(this.state.hashInfoid)
            }

          },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }}]}
        >
        </ModalCard>
        <ModalCard
          id='transfsuccess2'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Перевод отправлен!"
          caption={`Перевод на сумму ${this.state.modalsum} успешно выполнен!
          txnId: ${this.state.txnid}`}
          actions={[
             {
            title: 'Назад',
            mode: 'danger',
            action: () => {
              this.setState({activeModal: 'htransfer'})

            }

          },
          {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }

          }]}
        >

        </ModalCard>
        <ModalCard
          id='transferror'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption={this.state.modaltext}
          actions={[
             {
            title: 'Назад',
            mode: 'danger',
            action: () => {
              this.setState({activeModal: 'merchantTr'})
              this.getMerchantInfo(this.state.hashInfoid)
            }

          },
          {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }

          }

          ]}
        >

        </ModalCard>
        <ModalCard
          id='errorurl'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption="Неправильно создана ссылка для перевода"
          actions={[
          {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }

          }

          ]}
        >

        </ModalCard>
        <ModalCard
          id='transferror2'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Ошибка"
          caption={this.state.modaltext}
          actions={[
             {
            title: 'Назад',
            mode: 'danger',
            action: () => {
              this.setState({activeModal: 'htransfer'})
            }

          },
          {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }


          }]}
        >

        </ModalCard>
        <ModalCard
          id='safeerror'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56DoNotDisturbOutline style={{ color: 'var(--destructive)' }} />}
          header="Упс.."
          caption={this.state.modaltext}
          actions={[{
            title: 'Назад',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
              this.setState({activeModal: 'vor'})
              }
            },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='safesuccess'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Успешно!"
          caption={this.state.modaltext}
          actions={[{
            title: 'Назад',
            mode: 'secondary',
            action: () => {
              this.setState({activeModal: null})
              this.setState({activeModal: 'vor'})
              }
            },
            {
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
        <ModalCard
          id='successbuy'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="Ускорение куплено!"

          actions={[{
            title: 'Закрыть',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
      <ModalPage
          id='promo'
          header={
            <ModalPageHeader

            >
             Кристаллы
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
         <Group header={<Header mode="secondary">Информация о кристаллах</Header>}>
              <List>
                <Cell  before={<Icon24Flash />} indicator={parseFloat(this.state.gold).toFixed(3)}>Баланс: </Cell>
                <Cell  multiline before={<Icon24Help />}>Кристаллы нужны для того, чтобы покупать экслюзивные ускорители. <br /> Кристаллы можно получить при помощи Доната. </Cell>
              </List>
            </Group>
            <Div>
            <Button size="xl" mode="secondary" href="https://vk.com/almaz_coin" target="_blank" > Приобрести </Button>
            </Div>
        </ModalPage>
        <ModalPage
          id='buy'
          header={
            <ModalPageHeader

            >
             Покупка AC
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
        <SimpleCell indicator={this.state.marketBalance}>Баланс пользователя:</SimpleCell>
        <SimpleCell indicator={this.state.marketPrice}>Цена за 100к:</SimpleCell>

     <FormLayout>
      <FormLayoutGroup top="Сумма">
        <Input type="number" onChange={(e) => this.setState({transferSum: e.target.value})} />

        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode='commerce' onClick={this.buyCoins}>Купить</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='price'
          header={
            <ModalPageHeader

            >
             Изменение цены
            </ModalPageHeader>
          }
          settlingHeight={80}
        >

     <FormLayout>
      <FormLayoutGroup top="Цена за 100к">
        <Input type="number" onChange={(e) => this.setState({birsum: e.target.value})} />

        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode='commerce' onClick={this.birzhasave}>Сохранить</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='popol'
          header={
            <ModalPageHeader

            >
             Пополнение/вывод
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
         <List>
                <Cell multiline before={<Icon28LogoVkOutline/>}>Пополнение и вывод, производятся через нашего <Link href='https://vk.me/almaz_coin'>бота</Link>, командами "пополнить" и "вывести"</Cell>
              </List>

        </ModalPage>
        <ModalPage
          id='bots'
          header={
            <ModalPageHeader

            >
             Игры
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
        <RichCell
        disabled
        multiline
        before={<Avatar size={72} src='https://sun9-6.userapi.com/impf/0PzIgd_ml2iSaPh_53QQO9MaSUEgPyhAv085ug/ZYsQIGHyU8A.jpg?size=564x564&quality=96&proxy=1&sign=f5340ace17a8d313e231c6923a76922a&type=album' />}
        text="Игровой бот"

        actions={
          <React.Fragment>
            <Button href="https://vk.me/public200783696" target="_blank">Играть</Button>

          </React.Fragment>
        }
      >
       JustGame
      </RichCell>
      <RichCell
        disabled
        multiline
        before={<Avatar size={72} src='https://sun9-3.userapi.com/impg/O0sUljVd9p0dgu_3WSM_YxiM9fPc_EkFcTAsUA/Eg_e1pB5tuk.jpg?size=707x707&quality=96&proxy=1&sign=00117c163497d4eefe0eee8132ddb9db&type=album' />}
        text="Игровой бот"

        actions={
          <React.Fragment>
                <Button href="https://vk.me/csgowheel" target="_blank" mode="commerce">Играть</Button>

          </React.Fragment>
        }
      >
       CSGOWHEEL
      </RichCell>
      <Banner onClick={this.modal} data-to="api"
                before={<Avatar size={40}> <Icon28SettingsOutline fill="green"/> </Avatar> }

        header="Для разработчиков"
        subheader="API Токен для переводов"
       

      />
        </ModalPage>
        <ModalPage
          id='merchantTr'
          header={
            <ModalPageHeader

            >
             Перевод в магазин
            </ModalPageHeader>
          }
          settlingHeight={80}
        >

      <RichCell
        before={<Avatar src={this.state.merchantInfo.photo} />}
        text={`${this.state.merchantInfo.description}`}
        caption={`код: ${this.state.hashInfo.code}`}
      >
        {this.state.merchantInfo.name}
      </RichCell>
     <FormLayout>
      <FormLayoutGroup top="Сумма">
        <Input type="number" readOnly={this.state.hashInfo.lock == 1 ? true : false} value={this.state.transferSum} onChange={(e) => this.setState({transferSum: e.target.value})} />

        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode='commerce' onClick={() => this.merchantTransfer(this.state.hashInfo.id, this.state.transferSum)}>Перевести</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='api'
          header={
            <ModalPageHeader

            >
             Для разработчиков
            </ModalPageHeader>
          }
         dynamicContentHeight={true}
        >
         <List>
                <Cell multiline before={<Icon28LogoVkOutline/>}>Не передавайте ваш токен третьим лицам! С помощью него можно совершать переводы от вашего имени.

Документация API: <a href="https://vk.cc/bXa1bx" target="_blank" > vk.cc/bXa1bx </a></Cell>
              </List>
            {this.state.forDev}
        </ModalPage>
          <ModalPage
          id='admin'
          header={
            <ModalPageHeader

            >
             Управление
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
         <Group>
              <List>
                <Cell  before={<Icon28CheckCircleOutline />}>Выдать Кристаллы</Cell>
                <Cell  multiline before={<Icon28CheckCircleOutline />}>Выдать AC</Cell>
                <Cell  multiline before={<Icon28CheckCircleOutline />}>Заблокировать</Cell>
                <Cell  multiline before={<Icon28CheckCircleOutline />}>Разблокировать</Cell>
                  </List>
            </Group>
            <br />
                        <br />


        </ModalPage>
          <ModalPage
          id='vor'
          header={
            <ModalPageHeader

            >
             Сейф
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
                    <Div style={{display: 'flex', justifyContent: 'center'}}>
                        <svg width="613" viewBox="0 0 613 391" className="safe" onClick={this.caseClick} style={{width: '60vw'}}>
                            <rect width="613" height="391" rx="40" fill="#233156"/>
                            <rect x="368" y="146" width="193" height="186" rx="20" fill="#2B3B64"/>
                            <rect x="368" y="58" width="193" height="63" rx="20" fill="#6AECD5"/>
                            <rect x="416" y="172" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="451.494" y="172" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="486.988" y="172" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="416" y="207.494" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="451.494" y="207.494" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="486.988" y="207.494" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="416" y="242.988" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="451.494" y="242.988" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="486.988" y="242.988" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="416" y="278.482" width="26.6205" height="26.6205" rx="10" fill="white"/>
                            <rect x="451.494" y="278.482" width="62.1146" height="26.6205" rx="10" fill="white"/>
                            <rect x="48" y="48" width="270" height="299" rx="20" fill="#191F40"/>
                            <rect x="34" y="259" width="29" height="19" rx="9.5" fill="#11122D"/>
                            <rect x="34" y="188" width="29" height="19" rx="9.5" fill="#11122D"/>
                            <rect x="34" y="117" width="29" height="19" rx="9.5" fill="#11122D"/>
                            <circle cx="183.318" cy="197.591" r="63.7727" fill="#EDEDF0"/>
                            <circle cx="183.318" cy="197.591" r="40.7727" fill="#233156"/>
                            <circle cx="183.318" cy="197.591" r="26.1364" fill="#11122D"/>
                            <line x1="154.166" y1="166.125" x2="140.86" y2="152.818" stroke="#C2C4C9" strokeWidth="3"/>
                            <line x1="214.784" y1="168.439" x2="228.091" y2="155.132" stroke="#C2C4C9" strokeWidth="3"/>
                            <line x1="228.091" y1="240.049" x2="214.784" y2="226.743" stroke="#C2C4C9" strokeWidth="3"/>
                            <line x1="140.86" y1="242.364" x2="154.166" y2="229.057" stroke="#C2C4C9" strokeWidth="3"/>
                            <text x="392" y="101" width="193" height="63" rx="25">{this.state.code}</text>
                        </svg>
                    </Div>
        </ModalPage>
<ModalPage
          id='promik'
          header={
            <ModalPageHeader

            >
             Активация промокода
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
        <FormLayout>
      <FormLayoutGroup top="Промокод">
        <Input type="text" onChange={this.promoChange} />
         </FormLayoutGroup>
    </FormLayout>
    <Div>
       <Button size="xl" mode="secondary" onClick={this.promo}>Активировать</Button>
     </Div>
        </ModalPage>
        <ModalPage
          id='fortune'
          header={
            <ModalPageHeader

            >
             Фортуна
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
        <Div>
         <InfoRow>
            <Progress value={this.state.progressline} />
          </InfoRow>
          </Div>
              <List>
                <Cell multiline description="В Фортуне можно получить много разных призов. Какие, мы не знаем. Они выпадают случайно. :) " before={<Icon28ArticleOutline/>}></Cell>
              </List>
                <Div>
       <Button size="xl" mode="secondary" onClick={this.fortunestart} >Крутить</Button>
     </Div>
        </ModalPage>
  <ModalPage
          id='verife'
          header={
            <ModalPageHeader

            >
             Верификация
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
              <List>
                <Cell multiline before={<Icon28LogoVkOutline/>}>Верификация — процесс, подтверждающий то, что Вы — честный продавец. Получить его можно при наличии: 5 положительных отзывах на странице или 10 в группе. Администрация вправе забрать верификацию без объяснения причины. </Cell>
              </List>
        </ModalPage>
        <ModalPage
          id='profile'
          header={
            <ModalPageHeader

            >
             Профиль
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
          <div style={{marginBottom: 0,display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Avatar src={this.state.fetchedUser.photo_200} size={80}/>
            <h1 className="hh1">{`${this.state.fetchedUser.first_name} ${this.state.fetchedUser.last_name}`}</h1>
          </div>
          <Group >
              <List>
                <Cell indicator={<b>{parseFloat(this.state.balance).toFixed(3)} GC</b>} before={<Icon28RadiowavesAroundOutline/>}>Баланс</Cell>
                <Cell indicator={<b>{parseFloat(this.state.mine).toFixed(3)}</b>} before={<Icon28HistoryForwardOutline />}>Автоматически </Cell>
                <Cell indicator={<b>{parseFloat(this.state.click).toFixed(3)}</b>} before={<Icon28ZipOutline />}>Клик</Cell>



              </List>
            </Group>
              <Div>
       <Button size="xl" mode="secondary" href="https://vk.com/game_coin_official" target="_blank">Помощь</Button>
     </Div>
            <br/>
        </ModalPage>
        <ModalPage
          id='ref'
          header={
            <ModalPageHeader

            >
             Реф.система
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
         <Group description="За каждого, кто перешел по Вашей ссылке Вы получите: 25.000 GC." header={<Header mode="secondary">Информация</Header>}>
              <List>
                <Cell before={<Icon28UserOutline />} indicator={this.state.ref_name}>Пригласил</Cell>
                <Cell before={<Icon28GhostOutline />} indicator={this.state.ref_count}>Приглашено</Cell>
              </List>
            </Group>
        <FormLayout>
      <FormLayoutGroup top="Ссылка для приглашения">
        <Input type="text" defaultValue={'https://vk.com/app7652467#ref=' + this.state.fetchedUser.id} />
         </FormLayoutGroup>
    </FormLayout>
      <Div>
       <Button size="xl" mode="secondary" onClick={() => {
                         connect.send("VKWebAppCopyText", {text: 'https://vk.com/app7652467#ref=' + this.state.fetchedUser.id}); }}>Скопировать</Button>
     </Div>
               {/*<Div>
       <Button size="xl" mode="secondary" onClick={() => {
                         connect.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun1-47.userapi.com/IIHLXUsdgHZ6oUemw7ud5Hb_o0ZOOwmUXPgRzg/egx56pPwkrs.jpg", "locked" : "true", "attachment" : {
            "text": "open",
            "type": "url",
            "url": 'https://vk.com/app7652467#ref=' + this.state.fetchedUser.id
        } }); }} >В историю</Button>
     </Div>*/}
        </ModalPage>
        <ModalPage
          id='transfer'
          header={
            <ModalPageHeader

            >
             Перевод
            </ModalPageHeader>
          }
          settlingHeight={80}

        >
         <List>
                <Cell multiline before={<Icon28InfoOutline/>}>При переводе аккаунту без верификации мы не сможем отследить Ваш платеж. Будьте аккуратнее. </Cell>
              </List>
             <FormLayout>
               <FormLayoutGroup top="Cссылка для перевода">
        <Input defaultValue={'https://vk.com/app7652467#to=' + this.state.fetchedUser.id} />
        </FormLayoutGroup>
      <FormLayoutGroup top="ID">
        <Input type="number" defaultValue={this.toid} onChange={this.idChange} />
        </FormLayoutGroup>
    </FormLayout>
     <FormLayout>
      <FormLayoutGroup top="Сумма">
        <Input type="number" onChange={this.sumChange} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={this.transfer}>Перевести</Button>
     </Div>

      <Div>
        <Button
              size="xl"
             mode="secondary"
            onClick={() => connect.send("VKWebAppGetFriends", {})}>
            Выбрать из друзей
            </Button>
             </Div>
        </ModalPage>
        <ModalPage
          id='htransfer'
          header={
            <ModalPageHeader

            >
             Перевод
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
       <Cell
      before={<Avatar src={this.state.usInfo.photo} />}
      multiline

      >
      Перевод игроку: {this.state.usInfo.name}
      </Cell>
     <FormLayout>
      <FormLayoutGroup top="Сумма">
        <Input type="number"  value={this.state.transferSum} onChange={(e) => this.setState({transferSum: e.target.value})} />

        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode='commerce' onClick={() => this.usTransfer2(this.state.hashInfo2.id, this.state.transferSum)}>Перевести</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='htransfer2'
          header={
            <ModalPageHeader

            >
             Перевод
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="Сумма">
        <Input type="number" onChange={this.sumChange} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={this.transfer}>Перевести</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='newClan'
          header={
            <ModalPageHeader

            >
             Создание клана
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="Название">
        <Input type="text" onChange={(e) => this.setState({clanName: e.target.value})} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={() => {
         window.socket.emit('createClan', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.clanName,
          "params": window.location.search.substring()
        })
       }}>Создать</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='clanKick'
          header={
            <ModalPageHeader

            >
             Исключение участника
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="ID">
        <Input type="number" onChange={(e) => this.setState({clanName: e.target.value})} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={() => {
         window.socket.emit('clanKick', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "id": this.state.clanName,
          "params": window.location.search.substring()
        })
       }}>Исключить</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='clanAdmin'
          header={
            <ModalPageHeader

            >
            Выдача админа
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="ID">
        <Input type="number" onChange={(e) => this.setState({clanName: e.target.value})} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={() => {
         window.socket.emit('clanAdmin', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "id": this.state.clanName,
          "params": window.location.search.substring()
        })
       }}>Выдать</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='sendClan'
          header={
            <ModalPageHeader

            >
            Перевод в казну клана
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="Сумма">
        <Input type="number" onChange={(e) => this.setState({clanSum: e.target.value})} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={() => {
         window.socket.emit('sendClanBalance', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "sum": this.state.clanSum,
          "params": window.location.search.substring()
        })
       }}>Отправить</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='clanTop'
          header={
            <ModalPageHeader

            >
            Топ
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

    <ClickTop posts={this.state.clickClanTop} />

        </ModalPage>
      </ModalRoot>
      );
        return (

            <View popout={this.state.popout} modal={modal} activePanel={this.state.activePanel}>
            <Panel id='preloader' separator={false}>
        <Spinner
          size='medium'
          className='Preloader'
        />

      </Panel>
                <Home id="home"  history={this.state.history} set={this.seltab} tab={this.state.activeHomeTab} top={this.state.top} mine={this.state.mine} clicksec={this.state.click}  price={this.state.price} online={this.state.online} this={this} modal={this.modal} mine={this.state.mine} snackbar={this.state.snackbar} sec={this.state.insec} click={this.click} balance={this.state.balance} openBase={this.openBase} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Dop id="dop" story={this.story}  this={this} fetchedUser={this.state.fetchedUser} bonusgroup={this.state.bonusgroup} modal={this.modal} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Ban id="ban" fetchedUser={this.state.fetchedUser} reason={this.state.reason} modal={this.modal} go={this.go} />
                <History id="history" history={this.state.history} on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Top id="top" this={this} modal={this.modal} promoBannerProps={this.state.promoBannerProps} groups={this.state.groups} speedtop={this.state.speedtop} set={this.tab} tab={this.state.activeTopTab} top={this.state.top} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Shop id="shop" this={this} gold={this.state.gold} balance={this.state.balance} set={this.tab1} tab={this.state.activeShopTab} promoBannerProps={this.state.promoBannerProps}  buyClick6={this.buyClick6} buyClick7={this.buyClick7} buyClick8={this.buyClick8} modal={this.modal} click6={this.state.click6} click7={this.state.click7} click8={this.state.click8} mine1={this.state.mine1} mine2={this.state.mine2} mine3={this.state.mine3} mine4={this.state.mine4} mine5={this.state.mine5} mine6={this.state.mine6} mine7={this.state.mine7} mine8={this.state.mine8} mine9={this.state.mine9} mine10={this.state.mine10} click1={this.state.click1} click2={this.state.click2} click3={this.state.click3} click4={this.state.click4} click5={this.state.click5}  mine={this.state.mine} click={this.state.click} buyClick1={this.buyClick1} buyClick2={this.buyClick2} buyClick3={this.buyClick3} buyClick4={this.buyClick4} buyClick5={this.buyClick5} buyAuto1={this.buyAuto1}  buyAuto2={this.buyAuto2}  buyAuto3={this.buyAuto3}  buyAuto4={this.buyAuto4}  buyAuto5={this.buyAuto5} buyAuto6={this.buyAuto6}  buyAuto7={this.buyAuto7}  buyAuto8={this.buyAuto8}  buyAuto9={this.buyAuto9} buyAuto10={this.buyAuto10} top={this.state.top} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Transfer id="transfer" this={this} fetchedUser={this.state.fetchedUser} transfer={this.transfer} sumChange={this.sumChange} idChange={this.idChange} toid={this.state.toid} go={this.go} balance={this.state.balance} online={this.state.online} click={this.click} />
                <LimitOff id="limitoff" on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
                <User id="userInfo" this={this} on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
                <ClanInfo id="claninfo" this={this} on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Clan id="clan" this={this} on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
                <ServerOff id="serveroff" this={this} on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Welcome id="welcome" users={this.state.users} online={this.state.online} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Birzha id="birzha" this={this} users={this.state.users} online={this.state.online} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Bonuse id="bonuse" this={this} startDost7={this.startDost7} startDost3={this.startDost3} startDost4={this.startDost4} startDost5={this.startDost5} startDost6={this.startDost6} startDost2={this.startDost2} startDost1={this.startDost1} bonuse1={this.state.bonuse1} story={this.story} on={this.serverOn} fetchedUser={this.state.fetchedUser} go={this.go} />
				<Error id="error" text={this.state.errorText} scheme={this.state.scheme}/>
            </View>

        );
    }
}

export default App;
