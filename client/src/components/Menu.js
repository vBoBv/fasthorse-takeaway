import React from "react";

const Menu = ({
    topCategory,
    topTitle,
    topPrice,
    topDescription,
    category,
    title,
    price,
    description
}) => {
    return (
        <div className='menu-content'>
            <div className='menu-content__header'>Menu</div>

            {/* <div className='menu-content__menu-container-top'>
                <h3 className='menu-content__category'>{topCategory}</h3>
                <div className='menu-content__menu-item' key={topCategory}>
                    <h4 className='menu-content__title'>{topTitle}</h4>
                    <h4 className='menu-content__price'>${topPrice}</h4>
                    <h5 className='menu-content__description'>
                        {topDescription}
                    </h5>
                </div>
            </div> */}

            <div className='menu-content__menu-container'>
                <div className='menu-content__menu-block'>
                    <h3 className='menu-content__category'>{category}</h3>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>{title}</h4>
                        <h4 className='menu-content__price'>${price}</h4>
                        <h5 className='menu-content__description'>
                            {description}
                        </h5>
                    </div>
                </div>
            </div>

            {/* Spread all 2 col */}
            {/* <div className='menu-content__menu-container-top'>
                <h3 className='menu-content__category'>Entrees</h3>
                <div className='menu-content__menu-item'>
                    <h4 className='menu-content__title'>Bread Basket</h4>
                    <h4 className='menu-content__price'>$8.9</h4>
                    <h5 className='menu-content__description'>
                        Angus beef w/ lettuce, tomato, beetroot, pineapple ring
                        and edd, served with chips
                    </h5>
                </div>
                <div className='menu-content__menu-item'>
                    <h4 className='menu-content__title'>Bread Basket</h4>
                    <h4 className='menu-content__price'>$8.9</h4>
                    <h5 className='menu-content__description'>
                        Angus beef w/ lettuce, tomato, beetroot, pineapple ring
                        and edd, served with chips
                    </h5>
                </div>
                <div className='menu-content__menu-item'>
                    <h4 className='menu-content__title'>Bread Basket</h4>
                    <h4 className='menu-content__price'>$8.9</h4>
                    <h5 className='menu-content__description'>
                        Angus beef w/ lettuce, tomato, beetroot, pineapple ring
                        and edd, served with chips
                    </h5>
                </div>
            </div> */}

            {/* //Automatically */}
            {/* <div className='menu-content__menu-container'>
                <div className='menu-content__menu-block'>
                    <h3 className='menu-content__category'>Entrees</h3>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                </div>

                
                <div className='menu-content__menu-block'>
                    <h3 className='menu-content__category'>Entrees</h3>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                </div>
                
                <div className='menu-content__menu-block'>
                    <h3 className='menu-content__category'>Entrees</h3>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                </div>
                
                <div className='menu-content__menu-block'>
                    <h3 className='menu-content__category'>Entrees</h3>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                </div>
                
                <div className='menu-content__menu-block'>
                    <h3 className='menu-content__category'>Entrees</h3>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                    <div className='menu-content__menu-item'>
                        <h4 className='menu-content__title'>Bread Basket</h4>
                        <h4 className='menu-content__price'>$8.9</h4>
                        <h5 className='menu-content__description'>
                            Angus beef w/ lettuce, tomato, beetroot, pineapple
                            ring and edd, served with chips
                        </h5>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Menu;
