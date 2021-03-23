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
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';
function Market(props) {
 
  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>
{props.posts[post].price !== 99 ?
   <CardGrid>
                        <Card size="l">
          <Cell before={<Avatar src={props.posts[post].photo} />} description={`100к = ${props.posts[post].price} рублей`} asideContent={<table>
                                <tr>
                                    <td>
                                    <Button onClick={props.buyMarket} data-to={props.posts[post].id}>
                                        Купить
                                        </Button>
                                    </td>
                                    
                                </tr>
                            </table>}>
                                <div
                                    className='market_walletStatsText'>{props.posts[post].name}</div>
                            </Cell>
                             </Card>
                            </CardGrid> : null}
      </div>
  );

  return (
    <div>
     
      {content}
      <br />
      <Div />
    </div>
  );
}
const Dop = props => (
	<Panel id={props.id} theme="white" separator={false} header={false}>
	<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>  
Биржа
  </PanelHeader> 
  <Search value={props.this.state.search} onChange={props.this.onSearchChange} after={null} />
  <br />
        <div><CardGrid>
                        <Card size="l">
          <Cell before={<Icon28MoneyCircleOutline/>} asideContent={<table>
                                <tr>
                                    <td>
                                    <Button onClick={props.this.modal} data-to='popol'>
                                        <div className='market_addButton'><Icon28MarketAddBadgeOutline
                                            width={24} height={24}/></div>
                                            </Button>
                                    </td>
                                    <td>
                                    <Button onClick={props.this.modal} data-to='price'>
                                        <div className='market_addButton'><Icon28SettingsOutline
                                            width={24} height={24}/></div>
                                            </Button>
                                    </td>
                                </tr>
                            </table>}>
                                <div
                                    className='market_walletStatsText'>{props.this.state.rubli} рублей</div>
                            </Cell>
                             </Card>
                            </CardGrid>
                            <br />
                            <Separator />
                            <br />
                            {props.this.state.search < 1 ? <Market posts={props.this.state.market} buyMarket={props.this.buyMarket} id={props.this.state.fetchedUser.id} />   : <Market posts={props.this.state.res} buyMarket={props.this.buyMarket} id={props.this.state.fetchedUser.id} />  }
          
                        
                            </div>
	</Panel>
);

export default Dop;