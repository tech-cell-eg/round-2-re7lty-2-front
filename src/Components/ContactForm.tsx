import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
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
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (fieldName: keyof FormData, value: string) => {
    validationSchema
      .validateAt(fieldName, { [fieldName]: value })
      .then(() => {
        setErrors((prev) => ({ ...prev, [fieldName]: "" }));
      })
      .catch((error) => {
        setErrors((prev) => ({ ...prev, [fieldName]: error.message }));
      });
  };

  const handleBlur = (fieldName: keyof FormData, value: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    validateField(fieldName, value);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    toast.success("تم إرسال النموذج بنجاح!");
  };

  return (
    <div dir="rtl" className="bg-[#FFE7AC] p-6 rounded-lg w-full max-w-md shadow-[12px_12px_0_rgba(0,0,0,1)]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-semibold text-right mb-2">الاسم</label>
          <input
            {...register("name")}
            onBlur={(e) => handleBlur("name", e.target.value)}
            onChange={(e) => {
              setValue("name", e.target.value);
              validateField("name", e.target.value);
            }}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46368B] bg-white"
            placeholder="يرجى تسجيل اسمك الكامل"
          />
          {touched.name && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-semibold text-right mb-2">البريد الإلكتروني</label>
          <input
            {...register("email")}
            onBlur={(e) => handleBlur("email", e.target.value)}
            onChange={(e) => {
              setValue("email", e.target.value);
              validateField("email", e.target.value);
            }}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46368B] bg-white"
            placeholder="سجل بريدك الشخصي"
          />
          {touched.email && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label className="block font-semibold text-right mb-2">الموضوع</label>
          <textarea
            {...register("subject")}
            onBlur={(e) => handleBlur("subject", e.target.value)}
            onChange={(e) => {
              setValue("subject", e.target.value);
              validateField("subject", e.target.value);
            }}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46368B] bg-white"
            placeholder="ما هو السؤال أو المشكلة التي لديك؟"
          />
          {touched.subject && errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-1/2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          أرسل الرسالة
        </button>
      </form>

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
