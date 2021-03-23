import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-bridge';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Fire from "@vkontakte/icons/dist/16/fire";
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28GameOutline from '@vkontakte/icons/dist/28/game_outline';
import Icon24SkipNext from '@vkontakte/icons/dist/24/skip_next';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon28LogoVk from '@vkontakte/icons/dist/28/logo_vk';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon28WalletOutline from '@vkontakte/icons/dist/28/wallet_outline';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon56FireOutline from '@vkontakte/icons/dist/56/fire_outline';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import {
    Panel,
    Button,
    Group,
    Div,
    Placeholder,
    Separator,
    FormLayoutGroup,
    FormLayout,
    Avatar,
    PanelHeader,
    Input,
    PanelHeaderBack,
    CardScroll,
    PanelHeaderButton,
    Gallery,
    Gradient,
    Banner,
    Search,
    InfoRow,
    Progress,
    List,
    Cell,
    Header,
    Tooltip,
    FormStatus,
    CardGrid,
    Card
} from '@vkontakte/vkui';
const gradient = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'

const Trans = props => (
    <Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>Перевод</PanelHeader>
		<Search onChange={props.this.onSearch1Change} after={null}/>
          {props.this.state.frSearch == "" &&
            <List>
              {props.this.friends.map(post => 
    			<Cell multiline before={<Avatar shadow={false} size={48} src={post.photo_200} />}
                	description={`Баланс: ${parseFloat(post.balance).toFixed(3)} GC`}
                    onClick={props.this.friendTransfer}
                    data-to={post.id}>
                {post.first_name} {post.last_name}
				</Cell>

    		   )}
            </List>
          }
          {props.this.state.frSearch != "" &&
            <List>
              {props.this.friends2.map(post => 
    			<Cell multiline before={<Avatar shadow={false} size={48} src={post.photo} />}
                	description={`Баланс: ${parseFloat(post.balance).toFixed(3)} GC`}
                    onClick={props.this.friendTransfer}
                    data-to={post.id}>
                {post.name}
				</Cell>

    		   )}
            </List>
          }


	</Panel>
);

Trans.propTypes = {
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

export default Trans;
