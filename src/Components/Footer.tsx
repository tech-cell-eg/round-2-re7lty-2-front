import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer dir='rtl' className='bg-[#191919] p-5 '>
<div className=' flex flex-col md:flex-rocontainer mx-auto flex flex-col md:flex-row md:justify-between  md:text-startw'>
      <div className=' mb-6 md:mb-0 text-start space-y-2'>
          <div className="text-xl font-bold text-white"> رحلاتي <span className="text-yellow-400">.</span></div>
          <p className='text-[#797979] max-w-xs'>شركة متخصصة في مجال السياحة والسفر
            نقدم خدمات تأمين الرحلات والحجوزات
            والفيز لكل أنحاء العالم.</p>
        </div>
      <div dir='rtl' className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        
        
          <div><h4 className="text-white font-semibold mb-2">حول</h4>
            <ul className="space-y-2 text-[#797979] text-sm">
              {[
                                  { name: "الشركة", to: "#" },
                                  { name: "من نحن؟", to: "#" },
                                  { name: "فرص العمل", to: "#" },
                                  { name: "المدونة ", to: "#" },
                                  { name: "اتصل بنا", to: "#" },
                              ].map((item, index) => (
                                  <li className="hover:text-yellow-400 active:text-yellow-400 cursor-pointer" key={index}>
                                      <Link
                                          to={item.to}
                                          smooth={true}
                                          duration={500}
                                          style={{ color: "inherit", textDecoration: "none" }}
                                          className="text-white cursor-pointer hover:text-yellow-400 transition"
                                      >
                                          {item.name}
                                      </Link>
                                  </li>
                              ))}
              
            </ul></div>
          <div>
            <h4 className="text-white font-semibold mb-2">خدماتنا</h4>
            <ul className="space-y-2 text-[#797979] text-sm">
            {[
                                  { name: "بطاقات الطيران", to: "#" },
                                  { name: "الرحلات البحرية", to: "#" },
                                  { name: "الفنادق ", to: "#" },
                                  { name: "الرحلات البرية ", to: "#" },
                                  { name: "تأمين الفيزا", to: "#" },
                              ].map((item, index) => (
                                  <li className="hover:text-yellow-400 active:text-yellow-400 cursor-pointer" key={index}>
                                      <Link
                                          to={item.to}
                                          smooth={true}
                                          duration={500}
                                          style={{ color: "inherit", textDecoration: "none" }}
                                          className="text-white cursor-pointer hover:text-yellow-400 transition"
                                      >
                                          {item.name}
                                      </Link>
                                  </li>
                              ))}
            </ul>
        </div>
        
          <div>
            <h4 className="text-white font-semibold mb-2">الحجوزات</h4>
            <ul className="space-y-2 text-[#797979] text-sm">
            {[
                                  { name: "العروض الجديدة", to: "#" },
                                  { name: "تأكد من حجزك", to: "#" },
                                  { name: "الاشتراكات ", to: "#" },
                                  { name: "طرق السفر ", to: "#" },
                              ].map((item, index) => (
                                  <li className="hover:text-yellow-400 active:text-yellow-400 cursor-pointer" key={index}>
                                      <Link
                                          to={item.to}
                                          smooth={true}
                                          duration={500}
                                          style={{ color: "inherit", textDecoration: "none" }}
                                          className="text-white cursor-pointer hover:text-yellow-400 transition"
                                      >
                                          {item.name}
                                      </Link>
                                  </li>
                              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">الموقع</h4>
            <ul className="space-y-2 text-[#797979] text-sm">
            {[
                                  { name: "سياسة الخصوصية", to: "#" },
                                  { name: "شروط الاستخدام", to: "#" },
                                  { name: "إبلاغ عن مشكلة", to: "#" },
                                  { name: "تواصل معنا ", to: "#" },
                              ].map((item, index) => (
                                  <li className="hover:text-yellow-400 active:text-yellow-400 cursor-pointer" key={index}>
                                      <Link
                                          to={item.to}
                                          smooth={true}
                                          duration={500}
                                          style={{ color: "inherit", textDecoration: "none" }}
                                          className="text-white cursor-pointer hover:text-yellow-400 transition"
                                      >
                                          {item.name}
                                      </Link>
                                  </li>
                              ))}
            </ul>
          </div>


      </div>
      
    </div>
    <div  className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-[#797979]">
           2023 جميع الحقوق محفوظة لموقع
          <span className="text-yellow-500 font-semibold">
            {" "}
            للمصمم أحمد سكماري
          </span>
        </p>

        {/*  social media icon  */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          
        <div  className=" flex items-center justify-center text-white cursor-pointer hover:text-yellow-400 transition p-2 border border-[#797979] rounded h-10 w-10 ">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </div>
         
          <div  className=" flex text-white cursor-pointer hover:text-yellow-400 transition p-2 border border-[#797979] rounded h-10 w-10 items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
         
          <div className=" flex items-center justify-center text-white cursor-pointer hover:text-yellow-400 transition p-2 border border-[#797979] rounded h-10 w-10">
          <FontAwesomeIcon icon={faSquareFacebook} size="lg" />
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer