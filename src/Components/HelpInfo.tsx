import React from "react";
import contactus1 from "../assets/contactus1.png"
import contactus2 from "../assets/contactus2.png"
import contactus3 from "../assets/contactus3.png"

const HelpInfo: React.FC = () => {
  return (
    <div className="max-w-md  p-6 space-y-10 text-gray-900 text-center" dir="rtl">
      {/* Section 1 */}
      <div className="flex items-center gap-2">
        <img src={contactus1 }alt="مساعدة" className="w-16 h-16" />
        <div className="text-start">
        <h3 className="text-lg font-bold">نقدم لك المساعدة</h3>
        <p className="text-gray-600">
          إذا كان لديك أي مشكلة في البلد الذي تسافر إليه سنقوم بمساعدتك في هذا الموضوع.
        </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex items-center gap-2">
        <img src={contactus2} alt="تواصل" className="w-16 h-16" />
        <div className="text-start">
        <h3 className="text-lg font-bold">للتواصل</h3>
        <p className="text-gray-600">
          يمكنك التواصل معنا عبر الفورم أو عبر البريد الإلكتروني:
          <br />
          <a href="mailto:company@mail.com" className="text-blue-500 underline">
            company@mail.com
          </a>
        </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex items-center gap-2">
        <img src={contactus3} alt="أوقات الدوام" className="w-16 h-16" />
        <div className="text-start">
        <h3 className="text-lg font-bold">أوقات الدوام</h3>
        <p className="text-gray-600">
          يمكنك التواصل معنا يوميًا أثناء أوقات الدوام من الساعة 9 صباحًا حتى 6 مساءً.
        </p>
        </div>
      </div>
    </div>
  );
};

export default HelpInfo;
