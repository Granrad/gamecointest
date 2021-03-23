import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Fire from "@vkontakte/icons/dist/16/fire";
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon28UserOutgoingOutline from '@vkontakte/icons/dist/28/user_outgoing_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Ican24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28Send from '@vkontakte/icons/dist/28/send';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon24SkipNext from '@vkontakte/icons/dist/24/skip_next';
import Icon12Fire from '@vkontakte/icons/dist/12/fire';
import Icon28GiftOutline from '@vkontakte/icons/dist/28/gift_outline';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon28SafariOutline from '@vkontakte/icons/dist/28/safari_outline';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Linked from '@vkontakte/icons/dist/24/linked';
import Icon24MarketOutline from '@vkontakte/icons/dist/24/market_outline';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon28MarketAddBadgeOutline from '@vkontakte/icons/dist/28/market_add_badge_outline';
import Icon20WorkOutline from '@vkontakte/icons/dist/20/work_outline';
import Icon28CoinsOutline from '@vkontakte/icons/dist/28/coins_outline';
import Icon28ScanViewfinderOutline from '@vkontakte/icons/dist/28/scan_viewfinder_outline';
import Icon28MoneySendOutline from '@vkontakte/icons/dist/28/money_send_outline';
import Icon28WaterDropOutline from '@vkontakte/icons/dist/28/water_drop_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat';
import { Panel, Button, Group, PanelHeaderButton, CellButton, PanelHeaderContent, Gallery, Div, Avatar, Separator, Link, Counter, CardScroll, PanelHeader, Footer, Search, CardGrid, Card, List, Cell, Header, Tooltip, FormStatus, FixedLayout, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import './assets/css/bootstrap.css';
import Icon28ArrowRightSquareOutline from '@vkontakte/icons/dist/28/arrow_right_square_outline';
import Icon24StorefrontOutline from '@vkontakte/icons/dist/24/storefront_outline';
import './assets/css/style.css';
import '@vkontakte/vkui/dist/vkui.css';

const Home = props => (
	<Panel id={props.id} separator={false}>
        <PanelHeader><PanelHeaderContent before={<Avatar src={props.fetchedUser.photo_200} size={36} onClick={props.modal} data-to="profile" />} status={`Онлайн: ${props.online}`}>
            GameCoin
              </PanelHeaderContent></PanelHeader>
              <div className="topgir"></div>

                        <div class='inn' className="inn">
                          {/*<Div>
                        <div className='ProfileTab__user-data-timer'>{props.this.state.fulltime}</div>
                        </Div> */}
                        
                          <Div className='balance'>

                            <p>Ваш счёт</p>
                            <h1>
                               {parseFloat(props.balance).toFixed(3)}
                            </h1>
                             <p>
                             +{parseFloat(props.clicksec).toFixed(3)}/клик &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +{parseFloat(props.mine).toFixed(3)}/сек
                            </p>
                        </Div>
                                           <center>
                            <div onClick={props.go} data-to="top" className='da_div'>
                                <div id='da_div_transfer'
                                     className='da_divContent'>
                                    <div className='da_content'><Icon28Users3Outline/></div>
                                </div>
                                <div onClick={props.go} data-to="top" className='da_contentText'>ТОП</div>
                            </div>
<div onClick={props.go} data-to="transfer" className='da_div'>
                                <div id='da_div_send'
                                     className='da_divContent'>
                                    <div className='da_content'><Icon28UserOutgoingOutline/></div>
                                </div>
                                <div onClick={props.go} data-to="transfer" className='da_contentText'>ПЕРЕВЕСТИ</div>
                            </div>
                            <div onClick={props.go} data-to="shop" className='da_div'>
                                <div id='da_div_rating'
                                     className='da_divContent'>
                                    <div className='da_content'><Icon28MarketAddBadgeOutline/></div>
                                </div>
                                <div onClick={props.go} data-to="shop" className='da_contentText'>МАГАЗИН</div>
                            </div>

                            <div onClick={props.go} data-to="dop" className='da_div'>
                                <div id='da_div_get'
                                     className='da_divContent'>
                                    <div className='da_content'><Icon28SafariOutline/></div>
                                </div>
                                <div onClick={props.go} data-to="dop" className='da_contentText'>ДРУГОЕ</div>
                            </div>
                             </center>
	 </div>





    <Div className="MainPage__clickcoin">
            <Div className="MainPage__clickcoin-inner" onClick={props.click}>

            </Div>
          </Div>

	</Panel>

);

Home.propTypes = {
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

export default Home;
