import { h } from 'preact';
import Flowers from '../routes/flowers';
import Flower from '../routes/flowers/flower';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Test of Flower', () => {

	test('Flowers render 7 items', () => {
		const context = shallow(<Flowers />);
		expect(context.find(<Flower />).length).toBe(7);
	});

});