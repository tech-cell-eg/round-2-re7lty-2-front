import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import services1 from "../assets/services1.png"
import services2 from "../assets/services2.png"
import services3 from "../assets/services3.png"

import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"



export const trips = [
    {
        id: 1,
        name: "اسطنبول",
        cost: 1500,
        image: card1,
        number_of_days: 5
    },
    {
        id: 2,
        name: "دبي",
        cost: 2500,
        image: card2,
        number_of_days: 3
    },
    {
        id: 3,
        name: "القاهرة",
        cost: 1250,
        image: card3,
        number_of_days: 3
    },
    {
        id: 4,
        name: "الرياض",
        cost: 1550,
        image: card4,
        number_of_days: 2
    },
    {
        id: 5,
        name: "اسطنبول",
        cost: 1500,
        image: card1,
        number_of_days: 5
    },
    {
        id: 6,
        name: "دبي",
        cost: 2500,
        image: card2,
        number_of_days: 3
    },
    {
        id: 7,
        name: "القاهرة",
        cost: 1250,
        image: card3,
        number_of_days: 3
    },
    {
        id: 8,
        name: "الرياض",
        cost: 1550,
        image: card4,
        number_of_days: 2
    },
]
export const services = [
    {
        img: services1,
        service: "دليل سياحي",
        desc1:"نقدم لك خدمات الإرشاد السياحي لبناء",
        desc2: "خطط سفر مميزة."

    },
    {
        img: services2,
        service: "حجوزات فندقية",
        desc1: "لا تقلق حول مكان إقامتك فنحن نهتم.",
        desc2:"بكامل الحجوزات الخاصة بك."
    },
    {
        img: services3,
        service: "رحلات ميدانية",
        desc1: "لن تكون إجازتك مملة معنا فهنا الكثير",
        desc2: "من الخطط والرحلات المختلفة."
    }
]
// Static pricing plans
export const plans = [
    {
      id:1,
        price: 260,
        title: "خطة الاقتصادية",
        description: "تقدم لك إقامة فاخرة بأسعار تناسب الميزانية وأفضل الخدمات",
        features: [
          " بطاقات سفر في الدرجة الاقتصادية",
          " حجز فندق ثلاث نجوم",
          " وجبات فاخرة يومية",
        ],
      },
    {
      id:2,
      price: 520,
      title: "خطة عائلية",
      description: "هذه الخطة مناسبة جدًا إن كنت ترغب في قضاء إجازة مع العائلة",
      features: [
        " بطاقات سفر في الدرجة الأولى",
        " حجز فندق أربع نجوم",
        " رحلات سياحية بشكل يومي",
      ],
    },
    {
      id:3,
        price: 850,
        title: "خطة رجال الأعمال",
        description: "نقدم لك إمكانية زيارة بلدان العالم بأقل التكاليف الممكنة وبأفضل الخدمات",
        features: [
          " بطاقات سفر لدرجة رجال الأعمال",
          " حجز فندق خمس نجوم",
          " متابعة خاصة لرحلاتك",
        ],
      },

  ];

// Sample Testimonials Data
export const testimonials = [
    {
      name: "أسامة الأبيض",
      image:person1,
      rating: 5,
      feedback: "يمكنني القول أنني قمت باختيار رحلة عائلة على الباخرة، وكان التفاعل رائعًا وخطة السفر ممتازة جدًا ومريحة."
    },
    {
      name: "طاهر عبد اللطيف",
      image: person2,
      rating: 5,
      feedback: "تقدم شركتكم خدمات مناسبة جدًا لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جدًا من مشاكل الحجوزات."
    },
    {
      name: "محمد الأحمد",
      image: person3,
      rating: 5,
      feedback: "كانت تجربة مميزة مع خدمات رائعة قمت بأفضل إجازة لي من مدة طويلة، أنصح بالتعامل مع شركتكم دائمًا."
    },
    {
      name: "أسامة الأبيض",
      image: person2,
      rating: 5,
      feedback: "يمكنني القول أنني قمت باختيار رحلة عائلة على الباخرة، وكان التفاعل رائعًا وخطة السفر ممتازة جدًا ومريحة."
    },
    {
      name: "طاهر عبد اللطيف",
      image: person1,
      rating: 5,
      feedback: " م شركتكم خدمات مناسبة جدًا لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جدًا من مشاكل الحجوزات."
    },
    {
      name: "محمد الأحمد",
      image: person3,
      rating: 5,
      feedback: "كانت تجربة مميزة مع خدمات رائعة قمت بأفضل إجازة لي من مدة طويلة، أنصح بالتعامل مع شركتكم دائمًا."
    }
  ];