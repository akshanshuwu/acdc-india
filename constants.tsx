
import { Translation } from './types';

export const TRANSLATIONS: Record<'en' | 'hi', Translation> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "One stop solution for all your digital needs",
      subtitle: "Professional photocopying, mobile repairs, and digital services in Bhopal. Fast, reliable, and trusted by thousands.",
      cta: "Explore Services",
      trust: "Trusted by 5000+ Locals in Bhopal",
    },
    services: {
      title: "Our Expertise",
      subtitle: "State-of-the-art technology to ensure your work is done perfectly.",
      categories: [
        {
          id: '1',
          title: "Photocopy & Print",
          description: "High-speed laser printing and xerox services.",
          iconName: "Printer",
          priceRange: "Starts ₹2/page",
          features: ["A4/A3 Size", "Color & B/W", "Bulk Discounts"]
        },
        {
          id: '2',
          title: "Mobile Repair",
          description: "Expert diagnosis and repair for all smartphones.",
          iconName: "Smartphone",
          priceRange: "Free Diagnosis",
          features: ["Screen Replacement", "Battery Issues", "Water Damage"]
        },
        {
          id: '3',
          title: "Lamination & Binding",
          description: "Protect your valuable documents instantly.",
          iconName: "FileCheck",
          priceRange: "Starts ₹20",
          features: ["ID Card Lamination", "Spiral Binding", "Soft Binding"]
        },
        {
          id: '4',
          title: "Passport Photos",
          description: "Urgent passport size photographs within 5 minutes.",
          iconName: "Camera",
          priceRange: "₹50 / 8 copies",
          features: ["White Background", "Matte Finish", "High Quality"]
        },
        {
          id: '5',
          title: "Online Services",
          description: "Form filling, money transfer, and digital assistance.",
          iconName: "Globe",
          priceRange: "Service Charge Applicable",
          features: ["Govt. Forms", "Aadhar Print", "Money Transfer"]
        }
      ]
    },
    about: {
      title: "About ACDC India",
      subtitle: "Serving Bhopal Since 2018",
      description: "We started with a simple mission: to provide accessible, high-quality digital and repair services to our local community. Over the years, we've grown from a small shop to a trusted service hub, combining technical expertise with a customer-first approach. We believe in transparency, speed, and precision.",
      features: [
        {
          title: "Expert Technicians",
          description: "Our team consists of certified professionals with years of hands-on experience in mobile diagnostics and repair."
        },
        {
          title: "Premium Quality",
          description: "Whether it's the paper we print on or the spare parts we use, we never compromise on quality."
        },
        {
          title: "Community Trust",
          description: "We are proud to be the go-to service point for students, professionals, and businesses in Indrapuri."
        }
      ]
    },
    testimonials: {
      title: "Client Stories",
      subtitle: "Don't just take our word for it.",
      reviews: [
        {
          id: '1',
          name: "Rahul Sharma",
          role: "Engineering Student",
          content: "The best place in Indrapuri for project binding and printing. They understood my urgent requirement and delivered within an hour. The print quality is crisp!",
          rating: 5
        },
        {
          id: '2',
          name: "Priya Patel",
          role: "Small Business Owner",
          content: "I rely on ACDC for all my business stationery needs. Their rates are competitive and the staff is incredibly polite and professional.",
          rating: 5
        },
        {
          id: '3',
          name: "Amit Verma",
          role: "Local Resident",
          content: "Fixed my iPhone screen which was completely shattered. The touch response is perfect now, just like original. Highly recommended for mobile repairs.",
          rating: 4
        }
      ]
    },
    contact: {
      title: "Visit Our Store",
      address: "Shop No. 12, Main Market Road, Indrapuri, Bhopal, MP 462021",
      phone: "+91 70897 86533",
      email: "support@acdcindia.com",
      cta_whatsapp: "Chat on WhatsApp",
      form_title: "Send a Message",
      send_btn: "Send Inquiry"
    },
    footer: {
      rights: "ACDC India Services. All rights reserved.",
      disclaimer: "Authorized Service Point"
    }
  },
  hi: {
    nav: {
      home: "होम",
      services: "सेवाएं",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
    },
    hero: {
      title: "आपकी सभी डिजिटल जरूरतों का एकमात्र समाधान",
      subtitle: "भोपाल में पेशेवर फोटोकॉपी, मोबाइल मरम्मत और डिजिटल सेवाएं। तेज, विश्वसनीय और हजारों द्वारा विश्वसनीय।",
      cta: "सेवाएं देखें",
      trust: "भोपाल में ५०००+ ग्राहकों का भरोसा",
    },
    services: {
      title: "हमारी विशेषज्ञता",
      subtitle: "यह सुनिश्चित करने के लिए अत्याधुनिक तकनीक कि आपका काम पूरी तरह से हो।",
      categories: [
        {
          id: '1',
          title: "फोटोकॉपी और प्रिंट",
          description: "हाई-स्पीड लेजर प्रिंटिंग और ज़ेरॉक्स सेवाएं।",
          iconName: "Printer",
          priceRange: "शुरू ₹२/पृष्ठ",
          features: ["A4/A3 साइज", "रंगीन और B/W", "थोक छूट"]
        },
        {
          id: '2',
          title: "मोबाइल मरम्मत",
          description: "सभी स्मार्टफोन के लिए विशेषज्ञ निदान और मरम्मत।",
          iconName: "Smartphone",
          priceRange: "निःशुल्क जांच",
          features: ["स्क्रीन रिप्लेसमेंट", "बैटरी समस्याएं", "वोटर डैमेज"]
        },
        {
          id: '3',
          title: "लेमिनेशन और बाइंडिंग",
          description: "अपने मूल्यवान दस्तावेजों को सुरक्षित रखें।",
          iconName: "FileCheck",
          priceRange: "शुरू ₹२०",
          features: ["आईडी कार्ड लेमिनेशन", "स्प सर्पिल बाइंडिंग", "सॉफ्ट बाइंडिंग"]
        },
        {
          id: '4',
          title: "पासपोर्ट फोटो",
          description: "५ मिनट के भीतर तत्काल पासपोर्ट साइज फोटो।",
          iconName: "Camera",
          priceRange: "₹५० / ८ प्रतियां",
          features: ["सफेद बैकग्राउंड", "मैट फिनिश", "उच्च गुणवत्ता"]
        },
        {
          id: '5',
          title: "ऑनलाइन सेवाएं",
          description: "फॉर्म भरना, पैसे ट्रांसफर करना और डिजिटल सहायता।",
          iconName: "Globe",
          priceRange: "सेवा शुल्क लागू",
          features: ["सरकारी फॉर्म", "आधार प्रिंट", "मनी ट्रांसफर"]
        }
      ]
    },
    about: {
      title: "ACDC इंडिया के बारे में",
      subtitle: "२०१८ से भोपाल की सेवा में",
      description: "हमने एक साधारण मिशन के साथ शुरुआत की: अपने स्थानीय समुदाय को सुलभ, उच्च-गुणवत्ता वाली डिजिटल और मरम्मत सेवाएं प्रदान करना। पिछले कुछ वर्षों में, हम एक छोटी दुकान से एक विश्वसनीय सेवा केंद्र बन गए हैं।",
      features: [
        {
          title: "विशेषज्ञ तकनीशियन",
          description: "हमारी टीम में प्रमाणित पेशेवर शामिल हैं जिन्हें मोबाइल निदान और मरम्मत में वर्षों का अनुभव है।"
        },
        {
          title: "प्रीमियम गुणवत्ता",
          description: "चाहे वह कागज हो जिस पर हम प्रिंट करते हैं या स्पेयर पार्ट्स जिनका हम उपयोग करते हैं, हम गुणवत्ता से कभी समझौता नहीं करते हैं।"
        },
        {
          title: "समुदाय का भरोसा",
          description: "हमें इंद्रपुरी में छात्रों, पेशेवरों और व्यवसायों के लिए पसंदीदा सेवा केंद्र होने पर गर्व है।"
        }
      ]
    },
    testimonials: {
      title: "ग्राहक कहानियां",
      subtitle: "सिर्फ हमारी बात पर विश्वास न करें।",
      reviews: [
        {
          id: '1',
          name: "राहुल शर्मा",
          role: "इंजीनियरिंग छात्र",
          content: "प्रोजेक्ट बाइंडिंग और प्रिंटिंग के लिए इंद्रपुरी में सबसे अच्छी जगह। उन्होंने मेरी तत्काल आवश्यकता को समझा और एक घंटे के भीतर काम पूरा कर दिया।",
          rating: 5
        },
        {
          id: '2',
          name: "प्रिया पटेल",
          role: "व्यवसायी",
          content: "मैं अपनी सभी व्यावसायिक स्टेशनरी आवश्यकताओं के लिए ACDC पर निर्भर हूं। उनकी दरें प्रतिस्पर्धी हैं और कर्मचारी बहुत ही विनम्र और पेशेवर हैं।",
          rating: 5
        },
        {
          id: '3',
          name: "अमित वर्मा",
          role: "स्थानीय निवासी",
          content: "मेरा iPhone स्क्रीन ठीक किया जो पूरी तरह से टूट गया था। टच रिस्पॉन्स अब बिल्कुल सही है, बिल्कुल ओरिजिनल जैसा।",
          rating: 4
        }
      ]
    },
    contact: {
      title: "हमारी दुकान पर आएं",
      address: "दुकान नंबर १२, मुख्य बाजार रोड, इंद्रपुरी, भोपाल, म.प्र. ४६२०२१",
      phone: "+९१ ९८७६५ ४३२१०",
      email: "support@acdcindia.com",
      cta_whatsapp: "व्हाट्सएप पर चैट करें",
      form_title: "संदेश भेजें",
      send_btn: "पूछताछ भेजें"
    },
    footer: {
      rights: "ACDC इंडिया सर्विसेज। सर्वाधिकार सुरक्षित।",
      disclaimer: "अधिकृत सेवा केंद्र"
    }
  }
};

export const CONTACT_INFO = {
  phone: "917089786533",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.155842891234!2d77.47808!3d23.21977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4139ece1a32d%3A0x62e7e203039b8c78!2sACDC%20INDIA%20SERVICES%20AND%20TRADERS!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
};
