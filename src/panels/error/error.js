import { Button, Card, Div, Gallery, Panel, PanelHeader, Spinner, View } from '@vkontakte/vkui';
import React from 'react';

import './style.css';

import imgStick128Light from './img/128_light.png';
import imgStick128Gray from './img/128_gray.png';


export default class error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'text': props.text,
        }

        this.buttonReload = () =>{
            window.location.reload();
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            
                <Panel id={this.props.id} separator={false} >
                    <div className="mainContentError">
                        {this.props.scheme == "bright_light"?<img className="errorStick" src={imgStick128Light}/> :<img className="errorStick" src={imgStick128Gray}/>}
                        <p className="mainTextError">{this.state.text}</p>
                        <Button className="mainButtonError" onClick={() => this.buttonReload()}>Перезагрузить сервис</Button>
                        <p className="footer">With love <a className="footerURL" href="https://vk.com/temajm" target="_blank">@temajm</a></p>
                    </div>
                </Panel>
            
        );
    }
}