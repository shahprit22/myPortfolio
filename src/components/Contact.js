import React from 'react'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {FaWpforms, FaSmile, FaArrowAltCircleDown} from 'react-icons/fa'
import {ImSad2} from 'react-icons/im'
import emailjs from 'emailjs-com'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ErrorToast = () => {
    return(
    <div>
        <div className="flex">Something went wrong <ImSad2 /></div>
        <div>Please contact me throught Mobile or Email</div>
    </div>
    );
}

const SuccessToast = () => {
    return(
    <div>
        <div className="flex">Thank You for contacting me <FaSmile /></div>
        <div>will revert back soon!!!</div>
    </div>
    );
}

toast.configure();
function Contact() {
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailService', 'template_d1dr0bm', e.target, 'user_5bbzZ8Ck3o7VCeKw9zskb')
      .then((result) => {
          toast.success(<SuccessToast />, {position: toast.POSITION.BOTTOM_LEFT, autoClose:8000})
          console.log(result.text);
      }, (error) => {
        toast.error(<ErrorToast />,{position: toast.POSITION.BOTTOM_LEFT, autoClose:8000})
        console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div>
            <div className="h-14 bg-gray-700 text-gray-50"></div>
            <div className="bg-gray-700 text-gray-50 pt-4 pb-4">
                <h1 className="pt-2 pl-3 font-extrabold uppercase text-3xl">Contact Details</h1>
                <div className="pl-4 pt-2 italic">
                    <div className="flex items-baseline">
                        <AiOutlinePhone />
                        <div className="ml-1">
                            <p>+91 9510386671</p>
                        </div>
                    </div>
                    <div className="flex items-baseline">
                        <AiOutlineMail />
                        <div className="ml-2">
                            <p>pritshah@2501@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-baseline">
                        <FaWpforms />
                        <div className="ml-2">
                            <p>You can also contact using below <span className="font-bold">Contact Form</span></p>
                        </div>
                        <div className="pl-2 transform scale-150 text-xl animate-bounce"><FaArrowAltCircleDown /></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 border-4 m-2">
                <div className="text-xl font-bold">Contact Form</div>
                <form onSubmit={sendEmail} className="mt-2 space-y-2 flex flex-col items-center">
                    <div className="space-x-4">
                        <label>Name: </label>
                        <input type="text" name="username" className="pl-2 border-2" required placeholder="Name" />
                    </div>
                    <div className="space-x-5">
                        <label>Email: </label>
                        <input type="email" name="email" className="pl-2 border-2" required placeholder="Email" />
                    </div>
                    <div className="space-x-2">
                        <label>Subject: </label>
                        <input type="text" name="subject" className="pl-2 border-2" required placeholder="Subject" />
                    </div>
                    <div className="space-x-0">
                        <label>Message: </label>
                        <textarea type="textarea" name="message" className="pl-2 border-2" required placeholder="Enter Message here..."></textarea>
                    </div>
                    <div className="form-group">
                        <button className="border-2 text-gray-900 border-gray-900 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-900 hover:text-gray-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
