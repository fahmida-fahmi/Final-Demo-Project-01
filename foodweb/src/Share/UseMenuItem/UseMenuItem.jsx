import { useEffect, useState } from 'react';

const UseMenuItem = () => {
    const [services, setServices] = useState([])
    const [newServices, setMenuServices] = useState([])
    const category = ['offered', 'pizza', 'soup', 'salad', 'dessert', 'drinks']
    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => {
                const menu = category.map(item => {
                    return data.filter(items => items.category === item)
                })
                setServices(menu)
                const menuWithOne = menu.splice(0,1)
                // console.log(menuWithOne);
                setMenuServices(menuWithOne)
            })
        }, [])
        // console.log(services);
    return [services, newServices];
};

export default UseMenuItem;