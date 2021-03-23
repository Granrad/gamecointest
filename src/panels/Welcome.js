import React from "react";
import vkConnect from "@vkontakte/vk-bridge";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

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
import Icon56DiamondOutline from '@vkontakte/icons/dist/56/diamond_outline';
import Icon24Linked from "@vkontakte/icons/dist/24/linked";

const Welcome = props => (
	<Panel id={props.id}>
	 <Placeholder
            icon={<Icon56DiamondOutline />}
            header="Пора прощаться."
            stretched
            action={<Button size="xl" href="https://vk.com/" target="_blank">Перейти</Button>}
          >
            К сожалению, мини-приложение больше не работает. 
          </Placeholder>
	</Panel>
);

export default Welcome;