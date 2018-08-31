import { h, Component } from 'preact';
import style from './style';

import Flower from './flower';
import Prompt from '../prompt';
import flowers from './mockData.json';

export default class Flowers extends Component {
	state = {
		prompt: false
	};

	handleClick = e => {
		this.setState({ prompt: !this.state.prompt });
	};

	handleOK = e => {
		this.setState({ prompt: false });
	};

	render() {

		return (
			<div class={style.root}>
				{this.state.prompt ? <Prompt flower={flowers.entities[0]} confirmFunction={this.handleOK} /> : null}
				{
					flowers.entities.map(flower => <Flower flower={flower} selectFunction={this.handleClick} />)
				}
			</div >
		);
	}
}

