import ItemCount from './ItemCount.jsx'
import '../../../src/index.css'
const ItemDetail = ({item}) => {
    return (
        <div className='container-detail'>
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    {item.description}
                </p>
                <ItemCount stock={10} initial={0} />
            </div>
        </div>
    )
}


export default ItemDetail;