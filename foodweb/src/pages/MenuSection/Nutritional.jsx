import React from 'react';

const Nutritional = ({item}) => {

    return (
        <div>
            1.{item.calories}
            2.{item.protein}
            3.{item.carbohydrates}
            4.{item.fat}
            5.{item.fiber}
        </div>
    );
};

export default Nutritional;