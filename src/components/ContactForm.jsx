import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    time: "",
  };

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { elementRef, hasAnimated } = useAnimateOnScroll();
  const [formData, setFormData] = useState(initialState);

  const templateParams = { ...formData, time: new Date().toISOString() };

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!SERVICE_ID || !TEMPLATE_ID) {
      toast.error("Email service is not woriking, Please try again later");
      setIsSubmitting(false);
      setFormData(initialState);
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      toast.success("Message Sent Successfully");
      setFormData(initialState);
    } catch {
      toast.error("An error occurred, Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transform transition-all duration-1000`}
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="font-nunito mb-2 block text-sm font-bold text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              disabled={isSubmitting}
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-nunito mb-2 block text-sm font-bold text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              disabled={isSubmitting}
              required
            ></input>
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="font-nunito mb-2 block text-sm font-bold text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            value={formData.subject}
            disabled={isSubmitting}
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="message"
            className="font-nunito mb-2 block text-sm font-bold text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
            disabled={isSubmitting}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-400 to-red-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-102 hover:from-red-500 hover:to-red-700 hover:shadow-lg disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-700 disabled:hover:scale-100"
          disabled={isSubmitting}
        >
          <RiSendPlaneFill size={24} />
          <span className="font-nunito text-lg font-bold text-white">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
