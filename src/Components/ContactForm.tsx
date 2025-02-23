import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup.string().email("البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب"),
  subject: yup.string().required("الموضوع مطلوب"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema), 
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://re7lty-2.digital-vision-solutions.com/api/contact",
        data
      );

      if (response.status === 200) {
        toast.success("تم إرسال النموذج بنجاح!");
        reset(); 
      } else {
        toast.error("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("فشل إرسال البيانات. تحقق من الاتصال بالإنترنت.");
    }
  };

  return (
    <div dir="rtl" className="bg-[#FFE7AC] p-6 rounded-lg w-full max-w-md shadow-[12px_12px_0_rgba(0,0,0,1)]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/*   */}
        <div>
          <label className="block font-semibold text-right mb-2">الاسم</label>
          <input
            {...register("name")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46368B] bg-white"
            placeholder="يرجى تسجيل اسمك الكامل"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* email   */}
        <div>
          <label className="block font-semibold text-right mb-2">البريد الإلكتروني</label>
          <input
            {...register("email")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46368B] bg-white"
            placeholder="سجل بريدك الشخصي"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* subject  */}
        <div>
          <label className="block font-semibold text-right mb-2">الموضوع</label>
          <textarea
            {...register("subject")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46368B] bg-white"
            placeholder="ما هو السؤال أو المشكلة التي لديك؟"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
        </div>

        {/* submit  */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-1/2 bg-black text-white py-2 rounded-md transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
          }`}
        >
          {isSubmitting ? "جارٍ الإرسال..." : "أرسل الرسالة"}
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
