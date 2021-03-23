import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-bridge';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Fire from "@vkontakte/icons/dist/16/fire";
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon28CubeBoxOutline from '@vkontakte/icons/dist/28/cube_box_outline';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon12OnlineVkmobile from '@vkontakte/icons/dist/12/online_vkmobile';
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';
import Icon28GameOutline from '@vkontakte/icons/dist/28/game_outline';
import Icon12OnlineMobile from "@vkontakte/icons/dist/12/online_mobile";
import Icon24SkipNext from '@vkontakte/icons/dist/24/skip_next';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon12Verified from '@vkontakte/icons/dist/12/verified';
import Icon12Fire from '@vkontakte/icons/dist/12/fire';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon28WalletOutline from '@vkontakte/icons/dist/28/wallet_outline';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import { Panel, Button, Tabs, Separator, PromoBanner, Spinner, TabsItem, FixedLayout, HorizontalScroll, Group, Div, Input, Avatar, RichCell, PanelHeader, PanelHeaderBack, CardScroll, PanelHeaderButton, Gallery, Gradient, Banner, Search, InfoRow, Progress, List, Cell, Header, Tooltip, FormStatus, CardGrid, Card } from '@vkontakte/vkui';
const gradient = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
const avatarWrapperStyle = {
      display: "flex",
      flexDirection: "row",
      paddingRight: 10
    };

   const utils = {
    sp: (int) => {
        int = int.toString();
        return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join(',').split('').reverse().join('');
    },

    rn: (int, fixed) => {
        if (int === null) return null;
        if (int === 0) return '0';
        fixed = (!fixed || fixed < 0) ? 0 : fixed;
        let b = (int).toPrecision(2).split('e'),
            k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
            c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3)).toFixed(1 + fixed),
            d = c < 0 ? c : Math.abs(c),
            e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

        e = e.replace(/e/g, '');
        e = e.replace(/\+/g, '');
        e = e.replace(/Infinity/g, 'ДОХЕРА');

        return e;
    },

    gi: (int) => {
        int = int.toString();

        let text = ``;
        for (let i = 0; i < int.length; i++) {
            text += `${int[i]}⃣`;
        }

        return text;
    },
    decl: (n, titles) => {
        return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
    },
    random: (x, y) => {
        return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
    },
    pick: (array) => {
        return array[utils.random(array.length - 1)];
    }
}

    const avatarIconWrapper = {
      background: "var(--background_content)",
      border: "2px solid var(--background_content)",
      borderRadius: 4,
      marginLeft: 38,
      marginTop: 32
    };
function Blog(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {post < 50 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}>{props.posts[post].online ? <Avatar  shadow={false} size={48} src={props.posts[post].photo}>
                    <div style={avatarIconWrapper}>
                      <Icon12OnlineMobile fill="green" />
                    </div>
                  </Avatar> : <Avatar shadow={false} size={48} src={props.posts[post].photo} />}

                    </td>
                </tr>
            </table>}
                           description={`${parseFloat(props.posts[post].balance).toFixed(3)} GC`}
                           expandable
                          onClick={props.getUserInfo} data-to={props.posts[post].id}>{props.posts[post].name}
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
function Ref(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {post < 100 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}>{props.posts[post].online ? <Avatar  shadow={false} size={48} src={props.posts[post].photo}>
                    <div style={avatarIconWrapper}>
                      <Icon12OnlineMobile fill="green" />
                    </div>
                  </Avatar> : <Avatar shadow={false} size={48} src={props.posts[post].photo} />}

                    </td>
                </tr>
            </table>}
                           description={`Пригласил ${parseFloat(props.posts[post].balance).toFixed(0)} человек`}
                           expandable
                          onClick={props.getUserInfo} data-to={props.posts[post].id}>{props.posts[post].name}
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
function Gold(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {post < 100 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}>{props.posts[post].online ? <Avatar  shadow={false} size={48} src={props.posts[post].photo}>
                    <div style={avatarIconWrapper}>
                      <Icon12OnlineMobile fill="green" />
                    </div>
                  </Avatar> : <Avatar shadow={false} size={48} src={props.posts[post].photo} />}

                    </td>
                </tr>
            </table>}
                           description={`${parseFloat(props.posts[post].balance).toFixed(3)} кристаллов`}
                           expandable
                          onClick={props.getUserInfo} data-to={props.posts[post].id}>{props.posts[post].name}
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
function Clan(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {post < 100 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}>{props.posts[post].photo === null ? <Avatar size={48}><Icon56GalleryOutline height={28}/></Avatar>  : <Avatar shadow={false} size={48} src={props.posts[post].photo} />}
                    </td>
                </tr>
            </table>}
                           description={`${props.posts[post].win} побед`}
                           expandable onClick={() => {
                             window.socket.emit('getClanById', {

          "id": props.posts[post].id,
          "params": window.location.search.substring()
        })
                           }}
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

function Blog1(props) {

    const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {post < 50 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}><Avatar shadow={false} size={48} src={props.posts[post].photo} />
                    </td>
                </tr>
            </table>}
                           description={`${parseFloat(props.posts[post].balance).toFixed(3)} GC`}
                           expandable
                          onClick={props.getUserInfo} data-to={props.posts[post].id}>{props.posts[post].name}
</Cell> : null}
    </div>
    );

  return (
    <div>

      {content}
    </div>
  );
}

function Blog2(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

     {post < 50 ? <Cell className='ratingMyCell' before={<table className='table'>
                <tr>
                    <td>
                        <div className='ratingPosition'>{Number(post) + 1}</div>
                    </td>
                    <td style={{position: 'relative'}}><Avatar shadow={false} size={48} src={props.posts[post].photo} />
                    </td>
                </tr>
            </table>}
                           description={`${parseFloat(props.posts[post].balance).toFixed(3)} GC`}
                           expandable
              onClick={(event) => {
                  event.preventDefault(); window.open(`https://vk.com/public${props.posts[post].id}`); }}>{props.posts[post].name}</Cell> : null}
       <FixedLayout vertical="bottom">
         <Div>
       <Button size="xl" mode="commerce" onClick={() => connect.send("VKWebAppAddToCommunity", {})}>Добавить в группу</Button>
     </Div>
        </FixedLayout>
    </div>
  );

  return (
    <div>

      {content}
    </div>
  );
}

const Top = props => (
  <Panel id={props.id} >
    <PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>Топ</PanelHeader>
    <Tabs>
    <HorizontalScroll>
              <TabsItem
                selected={props.tab === 'balance'}
                onClick={props.set}
                data-to='balance'
              >
               Баланс
              </TabsItem>

              <TabsItem
                selected={props.tab === 'speed'}
                onClick={props.set}
                data-to='speed'
              >
                Скорость
              </TabsItem>

              <TabsItem
                selected={props.tab === 'groups'}
                onClick={props.set}
                data-to='groups'
              >
                Группы
              </TabsItem>



              </HorizontalScroll>
            </Tabs>

                          <Separator />

             <List>
  
              </List>
              <Separator />

    {props.tab === 'balance' && <div>
    {props.this.state.isTopLoad ? <div><br /><Spinner
          size='large'
        /> </div>: <Blog posts={props.top} getUserInfo={props.this.getUserInfo} pos={props.pos} /> }
        </div>}
    {props.tab === 'speed' && <div>

    {props.this.state.isTopLoad ? <div><br /><Spinner
          size='large'
        /> </div> : <Blog1 posts={props.speedtop} getUserInfo={props.this.getUserInfo} pos={props.pos} /> }

        </div>}
        {props.tab === 'clans' && <div>

    {props.this.state.isTopLoad ? <div><br /><Spinner
          size='large'
        /> </div> : <Clan posts={props.this.state.clanTop} getUserInfo={props.this.getUserInfo} pos={props.pos} /> }

        </div>}
         {props.tab === 'ref' && <div>

    {props.this.state.isTopLoad ? <div><br /><Spinner
          size='large'
        /> </div> : <Ref posts={props.this.state.refTop} getUserInfo={props.this.getUserInfo} pos={props.pos} /> }

        </div>}
         {props.tab === 'gold' && <div>

    {props.this.state.isTopLoad ? <div><br /><Spinner
          size='large'
        /> </div> : <Gold posts={props.this.state.goldTop} getUserInfo={props.this.getUserInfo} pos={props.pos} /> }

        </div>}
        {props.tab === 'groups' && <div>

    {props.this.state.isTopLoad ? <div><br /><Spinner
          size='large'
        /> </div> : <Blog2 posts={props.groups} pos={props.pos} /> }

        </div>}

    </Panel>
);

Top.propTypes = {
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

export default Top;
