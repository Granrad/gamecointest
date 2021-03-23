import React from "react";
import vkConnect from "@vkontakte/vk-bridge";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Icon28MoneySendOutline from '@vkontakte/icons/dist/28/money_send_outline';
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import List from "@vkontakte/vkui/dist/components/List/List";
import Icon28EmployeeOutline from '@vkontakte/icons/dist/28/employee_outline';
import File from "@vkontakte/vkui/dist/components/File/File";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import Icon28ThumbsUpOutline from '@vkontakte/icons/dist/28/thumbs_up_outline';
import Card from "@vkontakte/vkui/dist/components/Card/Card";

import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";
import Icon28UserIncomingOutline from '@vkontakte/icons/dist/28/user_incoming_outline';
import Icon56DoNotDisturbOutline from '@vkontakte/icons/dist/56/do_not_disturb_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Icon28DoorArrowLeftOutline from '@vkontakte/icons/dist/28/door_arrow_left_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';

import Icon28CoinsOutline from '@vkontakte/icons/dist/28/coins_outline';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Send from '@vkontakte/icons/dist/24/send';
import FormStatus from "@vkontakte/vkui/dist/components/FormStatus/FormStatus";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Icon28StoryFillCircleRed from '@vkontakte/icons/dist/28/story_fill_circle_red';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import Icon24Linked from "@vkontakte/icons/dist/24/linked";

const Bonuse = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>  
Клан
  </PanelHeader>
   {props.this.state.clanInfo.error != null ? <div><Placeholder
            icon={<Icon56DoNotDisturbOutline />}
            action={<Button size="l" mode="commerce" onClick={props.this.modal} data-to='newClan'>Создать клан</Button>}
            stretched
          >
            {props.this.state.clanInfo.error}
          </Placeholder>

          </div> : <div>
     <Tabs>
     <HorizontalScroll>
              <TabsItem
                selected={props.this.state.tab1 === 'info'}
                onClick={props.this.set1}
                data-to='info'
              >
               Информация
              </TabsItem>
              <TabsItem
                selected={props.this.state.tab1 === 'members'}
                onClick={props.this.set1}
                data-to='members'
              >
                Состав клана
              </TabsItem>
              <TabsItem
                selected={props.this.state.tab1 === 'bitv'}
                onClick={props.this.set1}
                data-to='bitv'
              >
                Битва
              </TabsItem>
              {props.this.state.clanInfo.isAdminInClan && <TabsItem
                selected={props.this.state.tab1 === 'shop'}
                onClick={props.this.set1}
                data-to='shop'
              >
                Магазин
              </TabsItem> }
              {props.this.state.clanInfo.isAdminInClan && <TabsItem
                selected={props.this.state.tab1 === 'manage'}
                onClick={props.this.set1}
                data-to='manage'
              >
                Управление
              </TabsItem> }
              <TabsItem
                selected={props.this.state.tab1 === 'chat'}
                onClick={props.this.set1}
                data-to='chat'
              >
                Чат
              </TabsItem>
               
              </HorizontalScroll>
            </Tabs>
            {props.this.state.tab1 === 'info' ? <div>
            <br />
          
            {props.this.state.clanInfo.photo == null ? <center><Avatar size={72}><Icon56GalleryOutline height={32}/></Avatar></center> : <center><Avatar size={72} src={props.this.state.clanInfo.photo}></Avatar></center>}
     <center><h2>{props.this.state.clanInfo.name}</h2></center>
      <Group >
              <List>
                <Cell onClick={props.this.modal} data-to='sendClan' indicator={<b>{parseFloat(props.this.state.clanInfo.balance).toFixed(3)} AC</b>} before={<Icon28CoinsOutline/>}>Баланс</Cell>
                <br />
                <Cell indicator={<b>{parseFloat(props.this.state.clanInfo.voin).toFixed(0)}</b>} before={<Icon28EmployeeOutline/>}>Рыцарей</Cell>
                <Cell indicator={<b>{parseFloat(props.this.state.clanInfo.luchiki).toFixed(0)}</b>} before={<Icon28EmployeeOutline/>}>Лучников</Cell>
              </List>
            </Group> 
            <Div>
            <Button size="xl" before={<Icon28DoorArrowLeftOutline />} mode="destructive" onClick={() => {
              window.socket.emit('clanLeave', {
          "vk_user_id": props.this.state.fetchedUser.id,
          "photo": props.this.state.fetchedUser.photo_100,
          "name": props.this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
            }}>Покинуть клан</Button>
            </Div>
     </div>
     : null}
     {props.this.state.tab1 === 'bitv' ? <div>

     {!props.this.state.clanInfo.banClicks && <div><Div>
      <div class="clanBottom">
      <div class="fund">
      <div class="title">Главный приз</div>
      <div class="count">5 000 000 коинов</div>
      </div><div class="cLine">
      <div class="cLine2">
      </div>
      </div>
     
      </div></Div> <Div className='balance'>

                            <p>Осталось кликов</p>
                            <h1>
                               {parseFloat(props.this.state.clanInfo.clicks).toFixed(0)}
                            </h1>
                
                        </Div>
                       <Div>
      
       <Button size="xl" before={<Icon28FavoriteOutline />} onClick={props.this.modal} data-to='clanTop'>Топ</Button>

       </Div>
                           {!props.this.state.clanInfo.banClicks && <FixedLayout vertical="bottom" >

    <Div className="MainPage__clickcoin">
            <Div className="MainPage__clickcoin-inner" onClick={(e) => {
              window.socket.emit('clanClick', {
          "vk_user_id": props.this.state.fetchedUser.id,
          "now": Date.now(),
          "cordX": e.pageX,
          "cordY": e.pageY,
          "params": window.location.search.substring()
        })
            }}>
           
            </Div>
          </Div>
                    </FixedLayout>}
                    </div> }
                    {props.this.state.clanInfo.banClicks && <div><Placeholder
            icon={<center><Avatar size={72} src="https://i.ibb.co/7z2YKz3/IMG-20201031-WA0001.jpg"></Avatar></center>}
            header="А уже все! Все, все, все. А надо было раньше"
            stretched
          >
           Победителем стал клан "𝙵𝚒𝚛𝚜𝚝$𝚚𝚞𝚊𝚍". Новая битва уже скоро!
          </Placeholder>

          </div>}
     </div> : null}
     {props.this.state.tab1 === 'members' ? <div>
     
      
      {Object.keys(props.this.state.clanInfo.users).map((post) =>
    <div key={post.user_id}>
  
    <Cell multiline before={<Avatar shadow={false} size={48} src={props.this.state.clanInfo.users[post].photo} />}
                           description={`Вложил в казну: ${props.this.state.clanInfo.users[post].inBalance} AC`}
                           
                           
                 >{props.this.state.clanInfo.users[post].name}  (ID: {props.this.state.clanInfo.users[post].id}{props.this.state.clanInfo.users[post].isOwner && props.this.state.clanInfo.users[post].isAdmin && ' ,Создатель'} {!props.this.state.clanInfo.users[post].isOwner && props.this.state.clanInfo.users[post].isAdmin && ' ,Администратор'})
</Cell>

    </div>
  )}
{props.this.state.clanInfo.isAdminInClan &&
      <Cell onClick={() => vkConnect.send("VKWebAppShare", {"link": `https://vk.com/app7330773#invite=${props.this.state.clanInfo.owner}`})} multiline description={`Вы можете пригласить других игроков в клан.`} before={<Avatar shadow={false} size={48}><Icon28AddCircleOutline fill='var(--accent)' /></Avatar>}>Пригласить в клан</Cell>
      }
     </div>
     : null}
     {props.this.state.tab1 === 'shop' ? <div>
     
      
     {props.this.state.clanInfo.isAdminInClan &&<div> <Banner
            onClick={() => {
               window.socket.emit('clanBuy1', {
          "vk_user_id": props.this.state.fetchedUser.id,
          "photo": props.this.state.fetchedUser.photo_100,
          "name": props.this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
            }}
        before={<Avatar size={40}> <Icon28EmployeeOutline fill="572800 " /> </Avatar> }
        header="Рыцарь"
        subheader={`Цена: 100.000 AC`}
      />
      <Banner
       onClick={() => {
               window.socket.emit('clanBuy2', {
          "vk_user_id": props.this.state.fetchedUser.id,
          "photo": props.this.state.fetchedUser.photo_100,
          "name": props.this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
            }}
        before={<Avatar size={40}> <Icon28EmployeeOutline fill="738595 " /> </Avatar> }
        header="Лучник"
        subheader={`Цена: 300.000 AC`}
      /></div>}
      
      
     </div>
     : null}
     {props.this.state.tab1 === 'manage' ? <div>
     
     <Div>
      
       <Button size="xl" before={<Icon28DoorArrowLeftOutline />} mode="commerce" onClick={props.this.modal} data-to='clanKick'>Исключить участника</Button>
     <br />
       <Button size="xl" before={<Icon28UserIncomingOutline />} onClick={props.this.modal} data-to='clanAdmin'>Выдать администратора</Button>
       <br />
       <Button size="xl" before={<Icon28MoneySendOutline />}  onClick={() => {
               window.socket.emit('clanWithdraw', {
          "vk_user_id": props.this.state.fetchedUser.id,
          "photo": props.this.state.fetchedUser.photo_100,
          "name": props.this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
            }}>Вывести из казны</Button>
       <br />
       <File
                  top="Установить аватарку"
                  type="image"
                  onChange={props.this.onImgChange}
                  before={<Icon28PictureOutline />}
                  controlSize="xl"
                  mode="secondary"
                />
       
     </Div>
      
     </div>
     : null}
     {props.this.state.tab1 === 'chat' ? <div>
      {Object.keys(props.this.state.clanInfo.chat).map((post) =>
    <div key={post.user_id}>
  <Div>
 <div class="all_message_wrapp">
 <div style={{display: 'flex'}}>
 <div class="message_avatar">
 <img rel="message_photo" src={props.this.state.clanInfo.chat[post].photo} />
 </div>
 <div class="message_wrapp">
 <div class="message_title" style={{color: "#000"}}>{props.this.state.clanInfo.chat[post].name}
 <div class="flash">
 </div>
 </div>
 <div class="message_text" style={{color: "#000"}}>{props.this.state.clanInfo.chat[post].text}</div>
</div>
</div>
</div>
</Div> 
    
    </div>
  )}
      <br />
  <br />
  <Div />
      <FixedLayout vertical="bottom">
<Cell
asideContent={
<Button onClick={() => {
  window.socket.emit('sendClanMessage', {
          "vk_user_id": props.this.state.fetchedUser.id,
          "photo": props.this.state.fetchedUser.photo_100,
          "text": props.this.state.messageText,
          "name": props.this.state.fetchedUser.first_name,
          "params": window.location.search.substring()
        })
}}
>
<Icon24Send />
</Button>
}
>
<Input name="message" placeholder="Ваше сообщение" onChange={props.this.messageChange} /> </Cell>
</FixedLayout>
</div>
     : null}
     </div>}

	</Panel>
);

export default Bonuse;