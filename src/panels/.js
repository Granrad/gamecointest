import React from "react";
import vkConnect from "@vkontakte/vk-bridge";

import { Panel, Button, Group, Div, Footer, Placeholder, RichCell, Avatar, PanelHeader, FormLayoutGroup, FormLayout, Input, PanelHeaderBack, CardScroll, PanelHeaderButton, Gallery, Gradient, Banner, Search, InfoRow, Progress, List, Cell, Header, Tooltip, FormStatus, CardGrid, Card } from '@vkontakte/vkui';

import Icon24Linked from "@vkontakte/icons/dist/24/linked";

function Blog(props) {

  const content = Object.keys(props.posts).map((post) =>
    <div key={post.user_id}>

    {props.posts[post].operation === 'in' ? <RichCell multiline
        before={<Avatar size={48} src={props.posts[post].from_photo} />}
        after={`+ ${parseFloat(props.posts[post].sum).toFixed(3)} GC`}


      >
       Перевод от {props.posts[post].from_name}
      </RichCell> : null} {props.posts[post].operation === 'to' ? <RichCell multiline
        before={<Avatar size={48} src={props.posts[post].to_photo} />}

        after={`- ${parseFloat(props.posts[post].sum).toFixed(3)} GC `}



      >
       	Перевод {props.posts[post].to_name}
      </RichCell> : null}
      {props.posts[post].operation === 'merchant_in' ? <RichCell multiline
        before={<Avatar size={48} src={props.posts[post].from_photo} />}

        after={`- ${parseFloat(props.posts[post].sum).toFixed(3)} GC`}


      >
       Перевод от магазина {props.posts[post].from_name}
      </RichCell> : null} {props.posts[post].operation === 'merchant_to' ? <RichCell multiline
        before={<Avatar size={48} src={props.posts[post].to_photo} />}

        after={`+ ${parseFloat(props.posts[post].sum).toFixed(3)} GC`}


      >
        Перевод в магазин {props.posts[post].to_name}
      </RichCell> : null}
      {props.posts[post].operation === 'merchant_in' ? <RichCell multiline
        before={<Avatar size={48} src={props.posts[post].from_photo} />}

        after={`- ${parseFloat(props.posts[post].sum).toFixed(3)} GC`}


      
  	</div>
  );

  return (
    <div>

      {content}
    </div>
  );
}


const History = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={() => window.history.back()} />}>История</PanelHeader>
		<Blog posts={props.history} />
	</Panel>
);

export default History;
