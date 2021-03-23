import React from "react";
import vkConnect from "@vkontakte/vk-bridge";
import Icon28ArrowRightSquareOutline from '@vkontakte/icons/dist/28/arrow_right_square_outline';
import { Panel, Button, Group, Avatar, PanelHeaderButton, PanelHeaderBack, FormLayoutGroup, FormLayout, Input, Gallery, Div, Tabs, TabsItem, Banner, Spinner, Title, PopoutWrapper, Separator, PanelHeader, Counter, Footer, Search, CardGrid, Card, List, Cell, Header, Tooltip, FormStatus, FixedLayout, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';

import Icon28BillheadOutline from '@vkontakte/icons/dist/28/billhead_outline';
import Icon28CoinsOutline from '@vkontakte/icons/dist/28/coins_outline';
import Icon24Linked from "@vkontakte/icons/dist/24/linked";
import Icon28AllCategoriesOutline from '@vkontakte/icons/dist/28/all_categories_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28MagicWandOutline from '@vkontakte/icons/dist/28/magic_wand_outline';
import Icon28InboxOutline from '@vkontakte/icons/dist/28/inbox_outline';
import Icon28StoryFillCircleRed from '@vkontakte/icons/dist/28/story_fill_circle_red';
import Icon28MarketAddBadgeOutline from '@vkontakte/icons/dist/28/market_add_badge_outline';
import Icon28StatisticsOutline from '@vkontakte/icons/dist/28/statistics_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28GiftOutline from '@vkontakte/icons/dist/28/gift_outline';
import Icon28RadiowavesAroundOutline from '@vkontakte/icons/dist/28/radiowaves_around_outline';

import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';
import Icon28ZipOutline from '@vkontakte/icons/dist/28/zip_outline';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';

const Dop = props => (
	<Panel id={props.id} theme="white" separator={false} header={false}>
	<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="top" />}>  
Информация о пользователе
  </PanelHeader> 
  <br />
  <center>

                <div>
                    <Avatar
                        size={128}
                        shadow={false}
                        src={props.this.state.userInfo.photo}
                    />

                    <h1>{props.this.state.userInfo.name}</h1>
               </div>

            </center>
            <Group >
              <List>
                <Cell indicator={<b>{parseFloat(props.this.state.userInfo.balance).toFixed(3)} GC</b>} before={<Icon28RadiowavesAroundOutline/>}>Баланс</Cell>
                <Cell indicator={<b>{parseFloat(props.this.state.userInfo.mine).toFixed(3)}</b>} before={<Icon28HistoryForwardOutline />}>Автоматически </Cell>
                <Cell indicator={<b>{parseFloat(props.this.state.userInfo.click).toFixed(3)}</b>} before={<Icon28ZipOutline />}>Клик</Cell>
              </List>
            </Group> 

            <Div>
       <Button size="xl" mode="commerce" onClick={props.this.usTransfer}>Перевести GC</Button><br />
            <Button size="xl" mode="commerce" onClick={(event) => { event.preventDefault(); window.open(`https://vk.com/id${props.this.state.userInfo.id}`); }}>Посмотреть Профиль</Button>
     </Div>
	</Panel>
);

export default Dop;