import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';

const BooknowModal = ({booking, setBooking}) => {
    const {user} = useContext(AuthProvider);
    const {name, resale} = booking;
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            user: name,
            email,
            item,
            price,
            location,
            phone
        }
        console.log(booking);
        setBooking(null);
    }
    return (
        <>
            <input type="checkbox" id="booknow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booknow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="name" className="input w-full input-bordered" />
                        <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="email" className="input w-full input-bordered" />
                        <input name='item' defaultValue={name} readOnly type="text" placeholder="item-name" className="input w-full input-bordered" />
                        <input name='price' defaultValue={resale} readOnly type="text" placeholder="price" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="location" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="phone" className="input w-full input-bordered" />
                        <br/>
                        <input type='submit' className='btn btn-success w-full' value='Submit'/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BooknowModal;