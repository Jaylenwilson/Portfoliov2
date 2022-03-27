import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xbjwygvo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="email">
                Email Address
      </label> */}
            <div className="formheader">
                <h3 >Have a question? Please inquire below</h3>
            </div>
            <input type="text"
                id="name"
                name="name"
                placeholder="Name"
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
            />
            <input type="number"
                id="number"
                name="number"
                placeholder="Phone Number"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <input
                id="message"
                name="message"
                placeholder="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <div className="btndiv">
                <button className="submitbtn" type="submit" disabled={state.submitting}>
                    Submit
      </button>
            </div>
        </form>
    );
}

function Contact() {
    return (
        <div className="divs">
            <h1>Contact Me</h1>
            <div >
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact