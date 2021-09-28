import React from 'react'

export default function Contact() {
    return (
        <section className="contact" id="contact">
        <div className="heading white">
            <h2>Contact Me</h2>
            <p>Feel free to leave a comment in the section below.</p>
            </div>
            <div className="content">
                <div className="contactinfo">
                    <h3>Contact Info</h3>
                    <div className="contactinfobox">
                        <div className="box">
                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg></div>
                        <div className="text1">
                                <h3>Address</h3>
                                <p>Sonatiba <br/>Batna  <br/> Algeria</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></div>
                            <div className="text1">
                                    <h3>Phone </h3>
                                    <p>+213666756487</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg></div>
                                <div className="text1">
                                        <h3>Email</h3>
                                        <p>samovitch360@gmail.com</p>
                                    </div>
                                </div>
                             </div>
                         </div>
                <div className="formbox">
                    <form>
                        <h3>Message Me</h3>
                        <input type="text" name="" placeholder="Full Name"/>
                        <input type="email" name="" placeholder="Email"/>
                        <textarea placeholder="Your Message" cols="30" rows="10"/> 
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
    </section>
    )
}
