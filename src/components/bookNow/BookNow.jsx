import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";

const BookNow = () => {

    const initialFormValue = { yourName: "", email: "", date: null, totalPeople: "", message: "" };
    const [formValue, setFormValue] = useState(initialFormValue);


    const InputChange = (InputName, InputValue) => {
        setFormValue((FormValues) => ({...FormValues, [InputName]: InputValue}));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(ValidationHelper.IsEmpty(formValue.yourName)) {
            toast.error('Name is required!');
            return;
        } else if(!ValidationHelper.IsEmail(formValue.email)){
            toast.error('Valid email is required!');
            return;
        }else if(ValidationHelper.IsNull(formValue.date)){
            toast.error('Date is required!');
            return;
        }else if(ValidationHelper.IsEmpty(formValue.totalPeople)){
            toast.error('People number is required!');
            return;
        }else if(ValidationHelper.IsEmpty(formValue.message)){
            toast.error('Message is required!');
            return;
        }

        console.log(JSON.stringify(formValue));
        toast.success('Form submitted successfully!');
        setFormValue(initialFormValue);
    }



    return (
        <section className="book">
            <div className="container">
                <div className="book-text d-flex align-items-center">
                    <div className="box"></div>
                    <h5>Book Now</h5>
                </div>
                <h2>Book Your Table</h2>
                <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <div className="form-box">
                    <form onSubmit={formSubmit}>
                        <div className="input1">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <input value={formValue.yourName} onChange={(e)=>InputChange("yourName", e.target.value)} type="text" className='form-control' placeholder='Your Name *'/>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <input value={formValue.email} onChange={(e)=>InputChange("email", e.target.value)} type="text" className='form-control' placeholder='Your Email'/>
                                </div>
                            </div>
                        </div>
                        <div className="input2">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="date-picker-wrapper"
                                         style={{position: 'relative', display: 'inline-block'}}>
                                        <DatePicker
                                            selected={formValue.date ? new Date(formValue.date) : null}
                                            onChange={(date)=>InputChange("date", date)}
                                            placeholderText="Reservation Date"
                                            dateFormat="yyyy-MM-dd"
                                            className="form-control"
                                            id="icon-date-input"
                                            showMonthYearDropdown
                                        />
                                        <span
                                            onClick={() => document.querySelector('#icon-date-input').focus()}
                                        >
                                            <i className="bi bi-calendar3"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <input value={formValue.totalPeople} onChange={(e)=>InputChange("totalPeople", e.target.value)} type="number" className='form-control' placeholder='Total People'/>
                                </div>
                            </div>
                        </div>
                        <div className="input3">
                            <div className="row">
                                <div className="col-12">
                                    <textarea value={formValue.message} onChange={(e)=>InputChange("message", e.target.value)} className="form-control" rows="3" placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="button-text">
                            <button>book now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookNow;