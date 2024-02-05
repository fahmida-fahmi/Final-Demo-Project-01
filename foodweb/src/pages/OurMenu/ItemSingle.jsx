import ServiceCard from '../MenuSection/ServiceCard';
import Button from '../../Share/Button/Button';
import MenuBanner from '../../Share/MenuBanner/MenuBanner';
import banner from '../../../assets/home/chef-service.jpg'
import { Link, useParams } from 'react-router-dom';


const ItemSingle = ({ services }) => {
    const { category } = useParams();

    if (!services || services.length === 0) {
        // Handle the case when services is empty or undefined
        return <p>No services available.</p>;
    }

    return (
        <div className='mb-20'>
            <MenuBanner banner={banner} name={services[0].category}></MenuBanner>
            <div className='w-2/3 mx-auto grid grid-cols-2 gap-10 mb-10'>
                {services.map((item) => (
                    <ServiceCard key={item._id} service={item}></ServiceCard>
                ))}
            </div>
            <Link to={`/ourShop/${category}`}>
                <Button button={'order your favorite food'}></Button>
            </Link>
        </div>
    );
};

export default ItemSingle;


// export default ItemSingle;