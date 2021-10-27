import { useState } from "react"


const Contactus = () => {

    const [name, setName] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")

    /**validations states */
    const [namevalidate, setNamevalidate] = useState(false);
    const [lnamevalidate, setLnamevalidate] = useState(false);
    const [emailvalidate, setEmailvalidate] = useState(false);
    const [numbervalidate, setNumbervalidate] = useState(false);
    const [messagevalidate, setMessagevalidate] = useState(false);

    const getFormData = (e) => {
        let Name = e.target.value;
        let Lname = e.target.value;
        let Email = e.target.value;
        let Number = e.target.value;
        let Message = e.target.value;

        if (Name == null && Lname == null && Email == null && Number == null && Message == null) {
            setNamevalidate(true)
            setLnamevalidate(true)
            setEmailvalidate(true)
            setNumbervalidate(true)
            setMessagevalidate(true)
        }

        console.log(name, lname, email, number, message)
        e.preventDefault()
        setNamevalidate(true)
    }

    return (
        <div className="contactus">
            <div className="container">
                <div className="contact-form">
                    <span className="contact-text">Contact Us</span>
                    <form onSubmit={getFormData}>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" className="inpt" placeholder="John" onChange={(e) => setName(e.target.value)} />
                                {namevalidate ? <span style={{ color: "red" }}>Required Field</span> : null}
                            </div>
                            <div className="col-lg-6">
                                <input type="text" className="inpt" placeholder="Doe" onChange={(e) => setLname(e.target.value)} />
                                {lnamevalidate ? <span style={{ color: "red" }}>Required Field</span> : null}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="email" className="inpt" placeholder="Johndoe@example.com" onChange={(e) => setEmail(e.target.value)} />
                                {emailvalidate ? <span style={{ color: "red" }}>Required Field</span> : null}
                            </div>
                            <div className="col-lg-6">
                                <input type="text" className="inpt" placeholder="123-456-789" onChange={(e) => setNumber(e.target.value)} />
                                {numbervalidate ? <span style={{ color: "red" }}>Required Field</span> : null}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <textarea className="message" rows="4" onChange={(e) => setMessage(e.target.value)}></textarea>
                                {messagevalidate ? <span style={{ color: "red" }}>Required Field</span> : null}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <button type="submit" className="btn-sbmit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus;