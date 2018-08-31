import { h } from 'preact';
import Flower from '../flower';
import { shallow } from 'preact-render-spy';
import render from 'preact-render-to-json';

const mockData = [
	{
		id: 'flower5',
		name: 'Koffing',
		description: 'Description',
		color: '#EE6055',
		info: 'Info'
	}
];

describe('Initial Test of Flower', () => {

	let wrapper, wrapperEmpty;

	beforeEach(() => {
		wrapperEmpty = shallow(
			<Flower />
		);

		wrapper = shallow(
			<Flower flower={mockData[0]} />
		);
	});

	xit('Does not render without flower-data', () => {
		expect(wrapperEmpty.length).toEqual(0);
	});

	it('Renders correctly', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('Has correct name and text', () => {
		expect(wrapper.find('h1').text()).toBe('Koffing');
		expect(wrapper.find('.flowerDesc').text()).toBe('Description');
	});

	it('Has correct initial UI', () => {
		const tree = render(<Flower flower={mockData[0]} />);
		expect(tree).toMatchSnapshot();
	});

	it('Show info when open: true', () => {
		expect((wrapper.find('.plus')).length).toEqual(1);

		wrapper.setState({ open: true });
		expect((wrapper.find('.info')).length).toEqual(1);
	});

	it('Show selectedFlower when selected: true', () => {
		expect((wrapper.find('.plus')).length).toEqual(1);

		wrapper.setState({ selected: true });
		expect((wrapper.find('.selectedFlower')).length).toEqual(1);
	});

	it('Calling handleFold will set open: true', () => {
		expect((wrapper.find('.plus')).length).toEqual(1);

		(wrapper.find('.plus')).simulate('click');
		expect((wrapper.find('.info')).length).toEqual(1);
	});

	it('Calling handleClick will set selected: true', () => {
		expect((wrapper.find('.plus')).length).toEqual(1);

		(wrapper.find('.container')).simulate('click');
		expect((wrapper.find('.selectedFlower')).length).toEqual(1);
	});
});