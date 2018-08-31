import { h, Component } from 'preact';
import style from './style';

export default class Prompt extends Component {
	handleOK = e => {
		this.props.confirmFunction();
	};

	render({ flower }) {

		let disabledButtonColor = 'lightgrey';
		let buttonColor = '#2d9b91';

		const ConfirmationButton = (
			<button
				class={style.ok_button}
				style={
					this.isDisabled
						? { backgroundColor: disabledButtonColor }
						: { backgroundColor: buttonColor }
				}
				disabled={this.isDisabled}
				type="button"
				onClick={this.handleOK}
			>
				OK
		  </button>
		);

		return (
			<div>
				<div class={style.overlay} />
				<div class={style.main}>
					<button class={style.exit}>×</button>
					<span class={style.info}>Chosen flower: </span>
					{ConfirmationButton}
				</div>
			</div>
		);
	}
}