import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nmit7fz",
        "template_ip0wplc",
        form.current,
        "rAAEVXVP3Wtig54-l"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ type: "success", message: "Message sent successfully! " });
          form.current.reset();
          setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus({ type: "error", message: "Something went wrong. Try again!" });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-[5vw] lg:px-[15vw] bg-[#030014] relative overflow-hidden">
      {/* Custom Notification Toast */}
      {status.message && (
        <div className={`fixed top-10 right-10 z-[110] px-6 py-4 rounded-2xl border backdrop-blur-xl animate-slideIn ${
          status.type === "success" ? "bg-green-500/20 border-green-500/50 text-green-400" : "bg-red-500/20 border-red-500/50 text-red-400"
        }`}>
          {status.message}
        </div>
      )}

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          GET IN <span className="text-purple-500">TOUCH</span>
        </h2>
        <div className="w-20 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto font-medium">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Side */}
        <div className="space-y-8">
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Let's collaborate</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to connect, I'll try my best to get back to you!
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4">
             <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">📧</div>
                <span>vikassharma.it25@gmail.com</span>
             </div>
             <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">📍</div>
                <span>Jaipur, India</span>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="relative bg-[#0a0a0c] p-8 md:p-10 rounded-[2.5rem] border border-white/10 space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-600/20 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn { animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </section>
  );
};

export default Contact;
