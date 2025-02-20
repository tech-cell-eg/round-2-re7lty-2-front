import ContactForm from "./ContactForm"
import HelpInfo from "./HelpInfo"

function ContactUsSection() {
    return (
        <div dir="rtl" className="mt-25 mb-10 mx-5">
            {/* Title Section */}
            <div className="mb-10 ms-2 md:ms-15" >
                <h3 className="text-gray-500 text-md md:text-2xl font-semibold"> هل لديك سؤال؟</h3>
                <h2 className=" text-2xl md:text-5xl font-bold mt-2">يسعدنا التواصل معك </h2>
            </div>
            {/* Cards Container */}
            <div id="contact" className="flex flex-col md:flex-row justify-center gap-5 items-center">
                <ContactForm />
                <HelpInfo />
            </div>
        </div>
    )
}

export default ContactUsSection