import React, {useState, useEffect} from 'react';
import "../styles/details.css";
import stuffs from '../data/all_products';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar"



export default function Home(){
    const { details } = useParams();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    
    useEffect(() => {
      const all_index = stuffs.length - 1;
  
      for (let i = 0; i <= all_index; i++) {
        if (stuffs[i].name === details) {
          setImage(stuffs[i].img);
          setName(stuffs[i].name);
          setDesc(stuffs[i].desc);
          setPrice(stuffs[i].price);
          break;
        }
      }
    }, [details]);


    
    function send_handle() {
        const num = 2348088981691; 
        
        const message = `Hi, I am interested in the ${name}.\n\nHere is the image: ${image}`;
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappLink = `https://wa.me/${num}?text=${encodedMessage}`;
        const win = window.open(whatsappLink, '_blank');
      
        // Uncomment the following line if you want to focus on the new window
        // win.focus();
    }
        




    return(
        <>
        <Navbar/>
        {
                <div className='container mt-5'>
                <div className='row mb-5'>
                    <div className='col-sm-6'>
                        <div id="big_div">
                            <img src={image} id='big' alt="big"/>
                        </div>   
                    </div>
                    <div className='col-sm-6 p-5' id='ada'>
                        <h1 id='title'>{name}</h1>
                        <p id='desc'> {desc}</p>
                        <div className='price_div'>
                        <h2 className='price'><span>$</span>{price}</h2>
                            </div>           
    
                        <div className='cart row'>                           
                            <div className='col-sm-6'>
                                <div className='fake_button'  onClick={send_handle}>
                                    <i  className='fa fa-shopping-cart'></i>
                                    <p>Buy This Item</p>
                                </div>
                            </div>
                                    <div class="popup"><span class="popuptext" id="myPopup">{name} has been added to cart</span></div>
                            </div>  
                    </div>
    
                </div>
    
            </div>
        }

        </>    
)

}