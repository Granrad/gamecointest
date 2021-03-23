import React from "react";
import vkConnect from "@vkontakte/vk-bridge";
import Icon28ArrowRightSquareOutline from '@vkontakte/icons/dist/28/arrow_right_square_outline';
import { Panel, Button, Group, PanelHeaderButton, PanelHeaderBack, Banner, Gallery, Div, Avatar, Separator, Link, Counter, CardScroll, PanelHeader, Footer, Search, CardGrid, Card, List, Cell, Header, Tooltip, FormStatus, FixedLayout, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';

import Icon28BillheadOutline from '@vkontakte/icons/dist/28/billhead_outline';
import Icon28CoinsOutline from '@vkontakte/icons/dist/28/coins_outline';
import Icon24Linked from "@vkontakte/icons/dist/24/linked";
import Icon28AllCategoriesOutline from '@vkontakte/icons/dist/28/all_categories_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28MarketLikeOutline from '@vkontakte/icons/dist/28/market_like_outline';
import Icon28MagicWandOutline from '@vkontakte/icons/dist/28/magic_wand_outline';
import Icon28InboxOutline from '@vkontakte/icons/dist/28/inbox_outline';
import Icon28StoryFillCircleRed from '@vkontakte/icons/dist/28/story_fill_circle_red';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28StatisticsOutline from '@vkontakte/icons/dist/28/statistics_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28GiftOutline from '@vkontakte/icons/dist/28/gift_outline';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';
import { Icon28UsersCircleFillBlue } from '@vkontakte/icons';
const Dop = props => (
	<Panel id={props.id} theme="white" separator={false} header={false}>
	<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>  
Другое
  </PanelHeader> 
  
  <div><Group header={
        <Header
     
     
    
        >
          Игры и боты
        </Header>
      }>
      <CardScroll style={{ paddingBottom: 5 }}>


   <div>
<div style={{ flexShrink: 0, width: 80, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 12 }}>
        <a href="https://vk.me/csgowheel" target="_blank"><Avatar src='https://sun9-3.userapi.com/impg/O0sUljVd9p0dgu_3WSM_YxiM9fPc_EkFcTAsUA/Eg_e1pB5tuk.jpg?size=707x707&quality=96&proxy=1&sign=00117c163497d4eefe0eee8132ddb9db&type=album' shadow={false} mode="app" size={64} style={{ marginBottom: 5 }}></Avatar></a>
         CSGOwheel
        </div>
          </div>
          

         
      </CardScroll>
      </Group>
    </div>
        {/*
  <Banner onClick={props.go} data-to="clan"
                before={<Avatar size={40}> <Icon28TargetOutline fill="#3f8ae0" /> </Avatar> }


        header="Ваш клан"
        subheader="Информация о вашем клане"

      />  
        <Banner onClick={props.modal} data-to="promo"
                before={<Avatar size={40}> <Icon28CoinsOutline fill="#3f8ae0" /> </Avatar> }


        header="Кристаллы"
        subheader="Приобретай кристаллы, чтобы покупать дополнительные ускорители. "

      />	
    <Banner onClick={props.modal} data-to="ref"
                before={<Avatar size={40}> <Icon28UserAddOutline fill="#3f8ae0" /> </Avatar> }


        header="Реферальная система"
        subheader="Приглашай друзей и получай дополнительные GC"

        /> 
  <Banner onClick={props.go} data-to="transfer"
                before={<Avatar size={40}> <Icon28ArrowRightSquareOutline fill="#3f8ae0"/> </Avatar> }

        header="Перевести"
        subheader="Перевод другому пользователю "

      />
      
      <Banner onClick={props.go} data-to="birzha"
                before={<Avatar size={40}> <Icon28MarketLikeOutline fill="#3f8ae0"/> </Avatar> }

        header="Биржа"
        subheader="Попкупай и продавай AC"

      />
        <Banner onClick={props.modal} data-to="promik"
                before={<Avatar size={40}> <Icon28InboxOutline fill="#3f8ae0"/> </Avatar> }

        header="Промокод"
        subheader="Активируй промокод и получи на свой счет дополнительные AC. "

      /> */}
      <Banner onClick={props.go} data-to="history"
                before={<Avatar size={40}> <Icon28StatisticsOutline fill="#3f8ae0"/> </Avatar> }

        header="История переводов"
        subheader="Контролируй свои финансы."

            />  {/*
     <Banner onClick={props.modal} data-to="fortune"
                before={<Avatar size={40}> <Icon28FireOutline fill="#3f8ae0"/> </Avatar> }

        header="Ежедневная фортуна"
        subheader="Крути рулетку, получай призы. "

      />
      
        <Banner onClick={props.modal} data-to="vor"
                before={<Avatar size={40}> <Icon28KeyboardBotsOutline fill="#3f8ae0"/> </Avatar> }

        header="Сейф"
        subheader="Взломай сейф и выиграй AC, но, будь осторожен, если тебя поймают, то заберут часть AC."

      />
       <Banner onClick={props.addBonuse}
                before={<Avatar size={40}> <Icon28MagicWandOutline fill="#3f8ae0"/> </Avatar> }

        header="Рекламный Бонус"
        subheader="Посмотри рекламу и получи Бонус"

      />
      <Banner onClick={props.go} data-to="bonuse"
                before={<Avatar size={40}> <Icon28BillheadOutline fill="#3f8ae0"/> </Avatar> }

        header="Достижения"
        subheader="Выполняй цели и получай Бонусы!"

      /> */}
       <Banner onClick={props.modal} data-to="api"
                before={<Avatar size={40}> <Icon28SettingsOutline fill="#3f8ae0"/> </Avatar> }

        header="Для разработчиков"
        subheader="API Токен для переводов"
       

        />
        <Link to="https://vk.com/game_coin_official" target="_blank" onClick={(event) => { event.preventDefault(); window.open("https://vk.com/game_coin_official"); }} ><Banner
            before={<Avatar size={40}> <Icon28UsersCircleFillBlue fill="green" /> </Avatar>}

            header={`Наша официальная группа`}
            subheader="Да, да, именно официальная :)"

            style={{ textDecoration: "none" }}
        /></Link>
      
      
       
       {/* <FixedLayout vertical="bottom">
          <Group>
  <Banner
        before={<Avatar><Icon28StoryFillCircleRed /></Avatar>}
        actions={
          <React.Fragment>
            <Button size="xl" mode="commerce" onClick={props.story}>Поделиться</Button>
          </React.Fragment>
        }
      />
       </Group>
         </FixedLayout> */}
      {/* <Banner
                before={<Avatar size={40}> <Icon28RecentOutline fill="#3f8ae0"/> </Avatar> }

        header="Кристальная фортуна"
        subheader="Скоро..."

      />*/}
      {/* <Banner
        mode="image"
        size="m"
        header="3000 AC за подписку"
        subheader={<span>Подпишись на официальное<br />сообщество AlmazCoin</span>}
        background={
          <div
            style={{
              backgroundColor: '#5271ff',
              backgroundImage: 'url(https://sun1-98.userapi.com/x2yZu9_viIIAIq-f_BV_ZLabdI1WI3qJN4BGYw/6_b7R5lae7A.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: '102%',
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        actions={<Button mode="overlay_primary" size="l">Подписаться</Button>}
      /> */}
	</Panel>
);

export default Dop;