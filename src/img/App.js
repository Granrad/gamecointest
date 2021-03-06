import React from 'react';
import connect from '@vkontakte/vk-bridge';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import { View, Alert, Snackbar, Avatar, InfoRow, Panel, Spinner, SimpleCell, Progress, ModalCard, ConfigProvider, Link, Header, Cell, List, Group, ScreenSpinner, Title, ModalPageHeader, ActionSheet, RichCell, Banner, ActionSheetItem, ModalRoot, ModalPage, FormLayoutGroup, FormLayout, Input, Div, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
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
                           description={`${parseFloat(100000 - props.posts[post].balance).toFixed(0)} ?????? ???????????????? ????????????????`}
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
                first_name: '??????????????????',
                last_name: '??????????????????',
                photo_200: 'https://sun9-18.userapi.com/EK3Qd49h__0LrDnBfnoOAcnEccI_I4_k79BaRw/yDNMFdqYQ0g.jpg'
            },
            toid: null,
            insec: 0,
			errorText: null,
            bonusgroup: 1,
            clanTop: [],
            promo: null,
            activeModal: null,
            messages: [],
            ban: false,
            click6: 0,
            frSearch: "",
            click7: 0,
            tab1: 'info',
            clanSum: 0,
            bonuse1: 0,
            shopTab: 'click',
            click8: 0,
            ssumm: 0,
            activeTopTab: 'balance',
            userInfoId: 1,
            rubli: 0,
            isTopLoad: true,
            dost1: false,
            birsum: 1,
            dost2: false,
            merchantError: '',
      merchantInfo: {
        "name":"",
        "photo": "",
        "description": ""
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
            caseAllowClick: true,
            marketBuyInfo: 0,
            click: 0,
            ref_count: 0,
            ref_name: "?????? ??????????????",
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
            forDev: <Div> <Button size="xl" mode="secondary" onClick={this.genApi} > ?????????????????????????? </Button> </Div>,
            marketBalance: 10,
            userInfo: {
              "name": '?????? ??????????????',
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
            scheme: "space_gray", // ???????? ?????? ???? ???????????? ???????? - ???????????? ?????? ???? ??????????????????.
            speedtop: [],
            res: {},
            clickClanTop: [],
            top: [],
            refTop: [],
            goldTop: [],
            ban: false,
            app_token: "",
            friends_list: [],
            hashInfo: {
              "id": 0,
                  "lock": 0,
                  "sum": 0

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
        this.addBonuse = this.addBonuse.bind(this);
        this.bonusePlus = this.bonusePlus.bind(this);
        this.changeChange = this.changeChange.bind(this)
        this.promoChange = this.promoChange.bind(this);
        this.sumChange = this.sumChange.bind(this);
        this.serverOn = this.serverOn.bind(this);
        this.refka = this.refka.bind(this);
    }

    componentDidMount() {

                this.getUSD()

    if (parsedHash.ref) {
        setTimeout(() => {
        this.refka(parsedHash.ref);
        }, 2000);
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
                    console.log(e.detail.data.response.items)
                }
                    break;
                case 'VKWebAppGetUserInfoResult':

                    this.setState({ fetchedUser: e.detail.data })
                   this.connect()
                       if (window.location.hash.includes('#m')) {
                         let selectors = window.location.hash.split('_');
                         console.log(selectors)
                let id = selectors[0].replace("#m", "")
                let sum = parseFloat(selectors[1]);
                let lockSum = parseInt(selectors[2]);
                this.setState({hashInfo: {
                  "id": id,
                  "lock": lockSum,
                  "sum": sum
                }})
                if (sum > 0) {
                  this.setState({transferSum: sum})
                }
      this.getMerchantInfo(id)

    }

                     this.checkGroup();
                     connect.send('VKWebAppGetAuthToken', {"app_id": 7652467, "scope": "friends"})

        .then((data) => {
            const token = data.access_token
            console.log(token)
            this.setState({app_token: token})
            connect.send("VKWebAppCallAPIMethod", {"method": "friends.get", "request_id": "123", "params": {order: 'hints',
                    count: 5000,
                    fields: "photo_200",
                    access_token: this.state.app_token,
                    v: '5.120'}});
    })
        .catch((error) => {
                 console.log(error)
            })
                    connect.send("VKWebAppJoinGroup", {"group_id": 200231236});
                    setTimeout(() => {
                        this.closePopout()
                    }, 3000)

                    break;
                case 'VKWebAppGetFriendsResult':
                    this.setState({ toid: e.detail.data.users[0].id });
                    console.log(e.detail.data)

                    break;

                case 'VKWebAppGetFriendsFailed':
                    this.openDefault("????????????!", "???????????????? ???? ???? ?????????????? ??????????.", {
                            title: '????',
                            autoclose: true,
                        })

                    break;

                default:
                    console.log(e.detail.type);
            }

        });




        connect.send('VKWebAppGetUserInfo', {})

        .then((promoBannerProps) => {
        this.setState({ promoBannerProps });
        })

         setInterval(() => {
          if (window.socket) {
            if (this.state.activePanel === 'preloader') {
              if (this.state.balance !== 3874582483748423476) {
              this.setState({activePanel: 'home'})
            }
            }
            if (!this.state.ban) {
            this.mine()
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

            if (this.state.ban) {
                this.setState({ activePanel: 'ban' })
            }
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
            if (!this.state.ban) {
        this.setState({ toid: parsedHash.to, activeModal: 'htransfer' });
      }
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
        <h2>??????????????????????</h2>
        <p>{response.text}</p>
      </Alert>
    });
        })
        socket.on('info', (response) => {
        console.log(response)
           this.setState({ marketPrice: response.price, marketId: response.id, marketBalance: response.have })

        })
		socket.on('errorEvent', (text) => {
			this.setState({errorText: text, activePanel: "error"})
        })
		setInterval(()=>console.log(socket),1000)
       socket.on('userData', (msg) => {
           this.setState({click: msg.click,  click6: msg.click6,  mine6: msg.mine6, mine5: msg.mine5, mine4: msg.mine4, mine3: msg.mine3, mine2: msg.mine2, mine1: msg.mine1, balance: msg.balance, click1: msg.click1, click2: msg.click2, click3: msg.click3, click4: msg.click4, click5: msg.click5, mine: msg.mine, click: msg.click, reason: msg.reason, ban: msg.ban, insec: msg.second, click: msg.click, mine: msg.mine })


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
        socket.on('updateOnline', (msg) => {
            this.setState({online: msg})

        })
         socket.on('errorModal', (msg) => {
            this.setState({modaltext: msg.text, activeModal: 'socketErrorModal'})

        })
        socket.on('successModal', (msg) => {
            this.setState({modaltext: msg.text, activeModal: 'socketSuccessModal'})

        })
        socket.on('friends', (msg) => {
            this.setState({friends_list: msg})

        })

      socket.on('connect', () => {
            console.log('connected')

        })
        socket.on('disconnect', () => {
            console.log('disconnect')
        })
        socket.on('disconnectReason', (res) => {
            console.log('disconnect')
        })

    }
     thematics = () => {
      const search = this.state.search
      console.log(search)
      let result = {}

console.log(result)
this.setState({res: result})

    }
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
      this.setState({ toid: this.state.userInfoId, activeModal: 'htransfer' });
    };
    friendTransfer = (e) => {
      this.setState({ toid: e.currentTarget.dataset.to, activeModal: 'htransfer' });
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
                    <p>???????????????????? API-??????????</p>
                    <FormLayout>
      <FormLayoutGroup>
        <Input type="text" readOnly defaultValue={msg} />
         </FormLayoutGroup>
    </FormLayout>
    <Div>
       <Button size="xl" mode="secondary" onClick={() => {
                         connect.send("VKWebAppCopyText", {text: msg}) }}>??????????????????????</Button>
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
                    <h2>????????????????.</h2>
                    <p>???????????? ???? ???????????? ???????????????????? ??????????. </p>
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
set1 = (e) => {

        this.setState({ tab1: e.currentTarget.dataset.to })
    };
   fulltime = () =>  {
var time=new Date();
var newYear=new Date("nov,02,2020,12:00:00");
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



   openBase () {
    this.setState({ popout:
      <ActionSheet onClose={() => this.setState({ popout: null })}>
        <ActionSheetItem autoclose >
          ????????????????
        </ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive">
          ??????????????
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
console.log(response)
})
.catch((error) => {
console.log("ERROR CREATEUSER: "+error)
//this.offServer()
//this.setState({ activePanel: 'serveroff' })
                //this.setState({ popout: <ScreenSpinner /> });

})
}


  onSearch1Change = (e) => { this.setState({ frSearch: e.target.value }); }

    get friends () {
      const search = this.state.frSearch.toLowerCase();
      return this.state.friends_list.filter(({first_name}) => first_name.toLowerCase().indexOf(search) > -1);
    }

  merchantTransfer = (id, sum) => {
        fetch(`https://vkgamecoin.ru:9090/merchantTransfer/?uid=${this.state.fetchedUser.id}&photo=${this.state.fetchedUser.photo_100}&name=${this.state.fetchedUser.first_name}&from=${this.state.fetchedUser.id}&to=${id}&sum=${sum}`, {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Vk-Sign": window.location.search.substring(1)}
        })
            .then((response) => response.json())
            .then((response) => {
 switch (response.response[0].status) {
                    case 'ok':
this.setState({modaltext: response.response[0].sum, activeModal: 'transfsuccess2'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'transferror'})
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
             this.setState({forDev: <FormLayout><FormLayoutGroup top="ID"><Input type="text" readOnly defaultValue={response.id} /></FormLayoutGroup><FormLayoutGroup top="??????????"><Input type="text" readOnly defaultValue={response.token} /></FormLayoutGroup></FormLayout>
                    })

            })
            .catch((error) => {
                 //this.offServer()
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

    mine = () => {
        window.socket.emit('mine', {
          "vk_user_id": this.state.fetchedUser.id,
          "photo": this.state.fetchedUser.photo_100,
          "name": this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
    }

    click = (e) => {
      console.log(e)
         console.log(e.pageX)
          console.log(e.pageY)

       window.socket.emit('click', {
          "vk_user_id": this.state.fetchedUser.id,
          "now": Date.now(),
          "cordX": e.pageX,
          "cordY": e.pageY,

          "params": window.location.search.substring()
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
this.setState({modaltext: '', activeModal: 'transfsuccess'})
break;
case 'error':
this.setState({modaltext: response.response[0].error_description, activeModal: 'transferror'})
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
                        this.openDefault("??????????????!", "?????????????????? ??????????????.", {
                            title: '????',
                            autoclose: true,
                        })
                        break;
                    case 'error':
                        this.openDefault("?????????????????? ????????????.", response.response[0].error_description, {
                            title: '????',
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
          header="???????????????????????? ??????????????."
          caption="?? ?????? ???????????????????????? GC"
          actions={[{
            title: '??????????????',
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
          header="??????????????!"
          caption={this.state.modaltext}
          actions={[
            {
            title: '??????????????',
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
          header="????????????"
          caption={this.state.modaltext}
          actions={[
            {
            title: '??????????????',
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
          header="?????????????? ??????????????????!"
          caption={`?????????????? ???? ?????????? ${this.state.sum} ?????????????? ????????????????!`}
          actions={[
             {
            title: '??????????????',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }

          }]}
        >
        </ModalCard>
        <ModalCard
          id='transfsuccess2'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="?????????????? ??????????????????!"
          caption={`?????????????? ???? ?????????? ${this.state.modaltext} ?????????????? ????????????????!`}
          actions={[
             {
            title: '??????????????',
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
          header="????????????"
          caption={this.state.modaltext}
          actions={[
             {
            title: '??????????????',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }

          }]}
        >

        </ModalCard>


        </ModalCard>
        <ModalCard
          id='successbuy'
          onClose={() => this.setState({activeModal: null})}
          icon={<Icon56CheckCircleOutline style={{ color: 'var(--dynamic_green)' }} />}
          header="?????????????????? ??????????????!"

          actions={[{
            title: '??????????????',
            mode: 'primary',
            action: () => {
              this.setState({activeModal: null})
            }
          }]}
        >

        </ModalCard>
      
        
        <ModalPage
          id='bots'
          header={
            <ModalPageHeader

            >
             ????????-????????
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
        <RichCell
        disabled
        multiline
        before={<Avatar size={72} src='https://sun9-73.userapi.com/m_QVIg1DucXBhjnXOiXyC0GsFi8BZFGmMdmvqA/5sbSuvZTcSY.jpg' />}
        text="?????????? ???????????? ?? ??????????????????????!"

        actions={
          <React.Fragment>
            <Button href="https://vk.me/hr_ac" target="_blank">??????????????</Button>

          </React.Fragment>
        }
      >
       Horse Races
      </RichCell>
        </ModalPage>
        <ModalPage
          id='merchantTr'
          header={
            <ModalPageHeader

            >
             ?????????????? ?? ??????????????
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
       <Cell
      before={<Avatar src={this.state.merchantInfo.photo} />}
      multiline
      description={`${this.state.merchantInfo.description}`}

      >
      {this.state.merchantInfo.name}
      </Cell>
     <FormLayout>
      <FormLayoutGroup top="??????????">
        <Input type="number" readOnly={this.state.hashInfo.lock === "1" ? true : false} value={this.state.transferSum} onChange={(e) => this.setState({transferSum: e.target.value})} />

        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode='commerce' onClick={() => this.merchantTransfer(this.state.hashInfo.id, this.state.transferSum)}>??????????????????</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='api'
          header={
            <ModalPageHeader

            >
             ?????? ??????????????????????????
            </ModalPageHeader>
          }
         dynamicContentHeight={true}
        >
         <List>
                <Cell multiline before={<Icon28LogoVkOutline/>}>???? ?????????????????????? ?????? ?????????? ?????????????? ??????????! ?? ?????????????? ???????? ?????????? ?????????????????? ???????????????? ???? ???????????? ??????????.</Cell>
              </List>
            {this.state.forDev}
        </ModalPage>
          <ModalPage
          id='admin'
          header={
            <ModalPageHeader

            >
             ????????????????????
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
         <Group>
              <List>
                <Cell  before={<Icon28CheckCircleOutline />}>???????????? ??????????????????</Cell>
                <Cell  multiline before={<Icon28CheckCircleOutline />}>???????????? AC</Cell>
                <Cell  multiline before={<Icon28CheckCircleOutline />}>??????????????????????????</Cell>
                <Cell  multiline before={<Icon28CheckCircleOutline />}>????????????????????????????</Cell>
                  </List>
            </Group>
            <br />
                        <br />


        </ModalPage>
          
  <ModalPage
          id='verife'
          header={
            <ModalPageHeader

            >
             ??????????????????????
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
              <List>
                <Cell multiline before={<Icon28LogoVkOutline/>}>?????????????????????? ??? ??????????????, ???????????????????????????? ????, ?????? ???? ??? ?????????????? ????????????????. ???????????????? ?????? ?????????? ?????? ??????????????: 5 ?????????????????????????? ?????????????? ???? ???????????????? ?????? 10 ?? ????????????. ?????????????????????????? ???????????? ?????????????? ?????????????????????? ?????? ???????????????????? ??????????????. </Cell>
              </List>
        </ModalPage>
        <ModalPage
          id='profile'
          header={
            <ModalPageHeader

            >
             ??????????????
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
                <Cell indicator={<b>{parseFloat(this.state.balance).toFixed(3)} GC</b>} before={<Icon28RadiowavesAroundOutline/>}>????????????</Cell>
                <Cell indicator={<b>{parseFloat(this.state.mine).toFixed(3)}</b>} before={<Icon28HistoryForwardOutline />}>?????????????????????????? </Cell>
                <Cell indicator={<b>{parseFloat(this.state.click).toFixed(3)}</b>} before={<Icon28ZipOutline />}>????????</Cell>



              </List>
            </Group>
              <Div>
       <Button size="xl" mode="secondary" href="https://vk.com/game_coin_official" target="_blank">????????????</Button>
     </Div>
            <br/>
        </ModalPage>
        
        <ModalPage
          id='transfer'
          header={
            <ModalPageHeader

            >
             ??????????????
            </ModalPageHeader>
          }
          settlingHeight={80}

        >
         <List>
                <Cell multiline before={<Icon28InfoOutline/>}>?????? ???????????????? ???????????????? ?????? ?????????????????????? ???? ???? ???????????? ?????????????????? ?????? ????????????. ???????????? ????????????????????. </Cell>
              </List>
             <FormLayout>
               <FormLayoutGroup top="C???????????? ?????? ????????????????">
        <Input defaultValue={'https://vk.com/app7652467#to=' + this.state.fetchedUser.id} />
        </FormLayoutGroup>
      <FormLayoutGroup top="ID">
        <Input type="number" defaultValue={this.toid} onChange={this.idChange} />
        </FormLayoutGroup>
    </FormLayout>
     <FormLayout>
      <FormLayoutGroup top="??????????">
        <Input type="number" onChange={this.sumChange} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={this.transfer}>??????????????????</Button>
     </Div>

      <Div>
        <Button
              size="xl"
             mode="secondary"
            onClick={() => connect.send("VKWebAppGetFriends", {})}>
            ?????????????? ???? ????????????
            </Button>
             </Div>
        </ModalPage>
        <ModalPage
          id='htransfer'
          header={
            <ModalPageHeader

            >
             ??????????????
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="??????????">
        <Input type="number" onChange={this.sumChange} />
        </FormLayoutGroup>
    </FormLayout>
     <Div>
       <Button size="xl" mode="secondary" onClick={this.transfer}>??????????????????</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='newClan'
          header={
            <ModalPageHeader

            >
             ???????????????? ??????????
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="????????????????">
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
       }}>??????????????</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='clanKick'
          header={
            <ModalPageHeader

            >
             ???????????????????? ??????????????????
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
       }}>??????????????????</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='clanAdmin'
          header={
            <ModalPageHeader

            >
            ???????????? ????????????
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
       }}>????????????</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='sendClan'
          header={
            <ModalPageHeader

            >
            ?????????????? ?? ?????????? ??????????
            </ModalPageHeader>
          }
          settlingHeight={80}

        >

     <FormLayout>
      <FormLayoutGroup top="??????????">
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
       }}>??????????????????</Button>
     </Div>


        </ModalPage>
        <ModalPage
          id='clanTop'
          header={
            <ModalPageHeader

            >
            ??????
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
                <Home id="home" mine={this.state.mine} clicksec={this.state.click} addBonuse={this.addBonuse} price={this.state.price} online={this.state.online} this={this} modal={this.modal} mine={this.state.mine} snackbar={this.state.snackbar} sec={this.state.insec} click={this.click} balance={this.state.balance} openBase={this.openBase} fetchedUser={this.state.fetchedUser} go={this.go} />
                <Dop id="dop" story={this.story} addBonuse={this.addBonuse} this={this} fetchedUser={this.state.fetchedUser} bonusgroup={this.state.bonusgroup} modal={this.modal} fetchedUser={this.state.fetchedUser} go={this.go} />
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
