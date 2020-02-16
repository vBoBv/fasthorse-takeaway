import React, { Component } from 'react';

class ResuableMenu extends Component {
	renderMenuWith3Cols(item) {
		return (
			<div className='menu-content__menu-container-top' key={item.category}>
				<h3 className='menu-content__category'>{item.category}</h3>
				{item.foodList.map((food) => {
					return (
						<div className='menu-content__menu-item' key={food.foodTitle}>
							<h4 className='menu-content__title'>{food.foodTitle}</h4>
							<h4 className='menu-content__price'>${food.foodPrice}</h4>
							<h5 className='menu-content__description'>
								{food.foodDescription}
							</h5>
						</div>
					);
				})}
			</div>
		);
	}

	renderMenuWithDynamicCols(item) {
		return (
			<div className='menu-content__menu-block' key={item.category}>
				<h3 className='menu-content__category'>{item.category}</h3>
				{item.foodList.map((food) => {
					return (
						<div className='menu-content__menu-item' key={food.foodTitle}>
							<h4 className='menu-content__title'>{food.foodTitle}</h4>
							<h4 className='menu-content__price'>${food.foodPrice}</h4>
							<h5 className='menu-content__description'>
								{food.foodDescription}
							</h5>
						</div>
					);
				})}
			</div>
		);
	}

	renderMenu() {
		return (
			<div className='menu-content'>
				<div className='menu-content__header'>Menu</div>
				<div className='menu-content__menu-container'>
					{this.props.menuData.map((item) => {
						if (item.category === 'Entrees') {
							return this.renderMenuWith3Cols(item);
						}
						return this.renderMenuWithDynamicCols(item);
					})}
				</div>
			</div>
		);
	}

	render() {
		return this.renderMenu();
	}
}

export default ResuableMenu;
