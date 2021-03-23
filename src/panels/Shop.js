import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Fire from "@vkontakte/icons/dist/16/fire";
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28Send from '@vkontakte/icons/dist/28/send';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon28ZipOutline from '@vkontakte/icons/dist/28/zip_outline';
import Icon24Pin from '@vkontakte/icons/dist/24/pin';
import Icon28LocationOutline from '@vkontakte/icons/dist/28/location_outline';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28AirplayVideoOutline from '@vkontakte/icons/dist/28/airplay_video_outline';
import Icon24SkipNext from '@vkontakte/icons/dist/24/skip_next';
import Icon28Video from '@vkontakte/icons/dist/28/video';
import Icon28GiftOutline from '@vkontakte/icons/dist/28/gift_outline';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon28BombOutline from '@vkontakte/icons/dist/28/statistics_outline';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import Icon28PollSquareOutline from '@vkontakte/icons/dist/28/poll_square_outline';
import { Panel, Button, Group, Tabs, TabsItem, Div, PromoBanner, PanelHeaderBack, Avatar, Separator, PanelHeader, Footer, Search, CardGrid, Card, List, Cell, Header, Tooltip, FormStatus, FixedLayout, Epic, Tabbar, TabbarItem, Banner } from '@vkontakte/vkui';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28EmployeeOutline from '@vkontakte/icons/dist/28/employee_outline';
import Icon24UserOutline from '@vkontakte/icons/dist/24/user_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28CompassOutline from '@vkontakte/icons/dist/28/compass_outline';
import Icon28DevicesOutline from '@vkontakte/icons/dist/28/devices_outline';
import Icon28ArchiveOutline from '@vkontakte/icons/dist/28/archive_outline';
import Icon28GameOutline from '@vkontakte/icons/dist/28/game_outline';
import Icon28LinkOutline from '@vkontakte/icons/dist/28/link_outline';
import Icon28AirplayAudioOutline from '@vkontakte/icons/dist/28/airplay_audio_outline';
import Icon24ScanViewfinderOutline from '@vkontakte/icons/dist/24/scan_viewfinder_outline';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon24NarrativeFilled from '@vkontakte/icons/dist/24/narrative_filled';
import Icon12OnlineMobile from '@vkontakte/icons/dist/12/online_mobile';
import Icon28RadiowavesAroundOutline from '@vkontakte/icons/dist/28/radiowaves_around_outline';
import Icon28SafariOutline from '@vkontakte/icons/dist/28/safari_outline';
import Icon56DiamondOutline from '@vkontakte/icons/dist/56/diamond_outline';
import Icon28DrillOutline from '@vkontakte/icons/dist/28/location_outline';
import Icon24NarrativeActiveOutline from '@vkontakte/icons/dist/24/narrative_active_outline';
const Shop = props => (
  <Panel id={props.id}>
  <PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>
Улучшения
  </PanelHeader>

     <Tabs>

              <TabsItem
                selected={props.this.state.shopTab === 'click'}
                onClick={props.this.shopTab}
                data-to='click'
              >
               Клик
              </TabsItem>
               <TabsItem
                selected={props.this.state.shopTab === 'mine'}
                onClick={props.this.shopTab}
                data-to='mine'
              >
                Авто-майнинг
              </TabsItem>

            </Tabs>
   {props.this.state.shopTab === 'click' && <Group>
    <Banner
        onClick={props.buyClick1}
        before={<Avatar size={40}> <Icon28DrillOutline fill="50c878" /> </Avatar> }
        header="Тачпад"
        subheader={`+0.001/клик. • Цена: ${props.click1} GC`}
      />
        <Banner
        before={<Avatar size={40}> <Icon28DrillOutline fill="50c878" /> </Avatar> }
        onClick={props.buyClick2}
        header="Офисная мышка"
        subheader={`+0.005/клик. • Цена: ${props.click2} GC`}
      />
       <Banner
        before={<Avatar size={40}> <Icon28DrillOutline fill="50c878"  /> </Avatar> }
        onClick={props.buyClick3}
        header="Мышка из Китая"
        subheader={`+0.01/клик. • Цена: ${props.click3} GC`}
      />
       <Banner
       onClick={props.buyClick4}
      before={<Avatar size={40}> <Icon28DrillOutline fill="50c878"  /> </Avatar> }
                header="Игровая мышка"
        subheader={`+0.015/клик. • Цена: ${props.click4} GC`}
      />
       <Banner
                before={<Avatar size={40}> <Icon28DrillOutline fill="050c878 "  /> </Avatar> }
onClick={props.buyClick5}
                header="Робо-рука"
        subheader={`+0.02/клик. • Цена: ${props.click5} GC`}
      />
        <Banner
                before={<Avatar size={40}> <Icon28DrillOutline fill="50c878"  width={28} height={28} /> </Avatar> }
onClick={props.buyClick6}
        header="Автокликер"
        subheader={`+0.025/клик. • Цена: ${props.click6} GC`}
      /> {/*
        <Banner
                before={<Avatar size={40}> <Icon28DrillOutline fill="50c878"  /> </Avatar> }
onClick={props.buyClick5}
        header="Кварцовая кирка"
        subheader={`+0.50000/клик. • Цена: ${props.click5} Кристаллов `}
      /> */}
   </Group>
}
    {props.this.state.shopTab === 'mine' && <Group>

       <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="50c878" /> </Avatar> }
onClick={props.buyAuto1}
        header="Телефон"
        subheader={`+0.001/сек. • Цена: ${props.mine1} GC`}
      />
       <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="50c878" /> </Avatar> }
onClick={props.buyAuto2}
        header="Старый ноутбук"
        subheader={`+0.005/сек. • Цена: ${props.mine2} GC`}
      />
       <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="50c878" /> </Avatar> }
 onClick={props.buyAuto3}
        header="Домашний компьютер"
        subheader={`+0.01/сек. • Цена: ${props.mine3} GC`}
      />
       <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="50c878" /> </Avatar> }
onClick={props.buyAuto4}
        header="Майнинг ферма"
        subheader={`+0.015/сек. • Цена: ${props.mine4} GC`}

      />
       <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="50c878" /> </Avatar> }
onClick={props.buyAuto5}
        header="Сервер GameCoin"
        subheader={`+0.025/сек. • Цена: ${props.mine5} GC`}
      />
       <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="50c878" /> </Avatar> }
onClick={props.buyAuto6}
        header="Сервер Google"
        subheader={`+0.03/сек. • Цена: ${props.mine6} GC`}

      />

    {/*   <Banner
                       before={<Avatar size={40}> <Icon28BombOutline fill="000000" /> </Avatar> }
onClick={props.buyAuto10}
        header="Золотая буровая установка"
        subheader={`+0.20000/сек. • Цена: ${props.mine10} Кристаллов`}

      /> */}
   </Group>}
    <br />

  </Panel>
);

Shop.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
export default Shop;
