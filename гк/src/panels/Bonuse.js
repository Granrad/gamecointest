import React from "react";
import vkConnect from "@vkontakte/vk-bridge";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormStatus from "@vkontakte/vkui/dist/components/FormStatus/FormStatus";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Icon28StoryFillCircleRed from '@vkontakte/icons/dist/28/story_fill_circle_red';
import Icon24Linked from "@vkontakte/icons/dist/24/linked";

const Bonuse = props => (
	<Panel id={props.id}>
	<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>  
Достижения
  </PanelHeader>
   <FormLayout>
      <FormStatus header="" mode="valid">
      Выполняй Достижения и получай Бонусы за то, что играешь.
      </FormStatus>
    </FormLayout>
    <Group header={<Header mode="secondary">Баланс</Header>}>
      <Banner
        onClick={props.startDost1}
        header={`Накопить 100 000 AC ${props.this.state.dost1 ? '(Выполнено)' : ""}`}
        subheader="+ 1 кристалл"
        asideMode="expand"
      />
       <Banner
        onClick={props.startDost2}
        header={`Накопить 500 000 AC ${props.this.state.dost2 ? '(Выполнено)' : ""}`}
        subheader="+ 5 кристаллов"
        asideMode="expand"
      />
       <Banner
        onClick={props.startDost3}
        header={`Накопить 1 000 000 AC ${props.this.state.dost3 ? '(Выполнено)' : ""}`}
        subheader="+ 10 кристаллов"
        asideMode="expand"
      />
          </Group>
        <Group header={<Header mode="secondary">Кристаллы</Header>}>
      <Banner
      onClick={props.startDost4}
        header={`Накопить 10 кристаллов ${props.this.state.dost4 ? '(Выполнено)' : ""}`}
        subheader="+ 10 000 AC"
        asideMode="expand"
      />
       
       <Banner
       onClick={props.startDost5}
        header={`Накопить 100 кристаллов ${props.this.state.dost5 ? '(Выполнено)' : ""}`}
        subheader="+ 100 000 AC"
        asideMode="expand"
      />
          </Group> 
          <Group header={<Header mode="secondary">Рефералы</Header>}>
      <Banner
      onClick={props.startDost6}
        header={`Привлечь 100 человек ${props.this.state.dost6 ? '(Выполнено)' : ""}`}
        subheader="+ 100 000 AC"
        asideMode="expand"
      />
       
       
          </Group> 
           <Group header={<Header mode="secondary">Экосистемные</Header>}>
      <Banner
      onClick={props.startDost7}
        header={`Подписатся на группу ${props.this.state.dost7 ? '(Выполнено)' : ""}`}
        subheader="+ 10 000 AC"
        asideMode="expand"
      />

          </Group> 
  
	</Panel>
);

export default Bonuse;