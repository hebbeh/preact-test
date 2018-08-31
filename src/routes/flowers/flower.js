import { h, Component } from 'preact';
import style from './style';
import { FaPlusCircle } from 'react-icons/fa';

export default class Flower extends Component {
	state = {
		selected: false,
		open: false
	};

	handleClick = e => {
		this.setState({ selected: !this.state.selected });
	};

	handleInfo = e => {
		this.props.selectFunction();
	};

	handleFold = e => {
		this.setState({ open: !this.state.open });
	};

	render({ flower }) {
		if (flower === undefined || flower === null) {
			return null;
		}

		const divStyle = {
			border: '36px solid ' + flower.color
		};

		const SelectedFlower = this.state.selected ? <div class={style.selectedFlower} /> : <div class={style.flower} style={divStyle} />;

		const PotentialFold = this.state.open ? (<div class={style.info} onClick={this.handleInfo}>
			<p class={style.flowerDesc}>{flower.info}</p>
		</div >) : null;

		return (
			<div class={style.home} >
				<div class={style.container} onClick={this.handleClick}>
					<div class={style.flowerText}>
						<h1>{flower.name}</h1>
						<p class={style.flowerDesc}>{flower.description}</p>
						<span className={style.plus} onClick={this.handleFold}><FaPlusCircle /></span>
					</div>
					{SelectedFlower}
				</div >
				{PotentialFold}
			</div>
		);
	}
}