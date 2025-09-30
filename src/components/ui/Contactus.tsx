import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const ContactPage: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent dark:bg-transparent px-6 py-16 transition-colors duration-300 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
          Get in <span className="text-purple-600 dark:text-purple-400">Touch</span>
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-950 dark:text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Project Discussion"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell Me About Your Project..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-400 hover:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-500 text-white dark:text-gray-900 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info with Icons */}
        <div className="mt-10 text-center text-black dark:text-gray-300 space-y-4">
          <p className="flex items-center justify-center gap-2">
            <HiOutlineMail className="text-purple-600 dark:text-purple-400 w-5 h-5" />
            Email: <span className="text-purple-600 dark:text-purple-400">sahansudeepa589@gmail.com</span>
          </p>
          <p className="flex items-center justify-center gap-2 ">
            <HiOutlinePhone className="text-purple-600 dark:text-purple-400 w-5 h-5 " />
            Phone: <span className="text-purple-600 dark:text-purple-400 cursor-pointer ">+94 766428635</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <HiOutlineLocationMarker className="text-purple-600 dark:text-purple-400 w-5 h-5" />
            Location: <span className="text-purple-600 dark:text-purple-400">Matara, Sri Lanka</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
