import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+918796681922";
  const defaultMessage = encodeURIComponent("Hi! I have some questions about AiLeadX CRM.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mr-3 bg-white text-navy font-semibold px-4 py-2 rounded-xl shadow-lg border border-border text-sm flex items-center whitespace-nowrap"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-shadow duration-300"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.116.958 11.49.957 6.054.957 1.63 5.328 1.626 10.756c-.001 1.716.463 3.39 1.343 4.887l-.997 3.642 3.74-.977zm11.378-5.96c-.266-.134-1.57-.775-1.813-.863-.243-.088-.419-.133-.596.134-.176.265-.68.862-.833 1.039-.153.177-.307.199-.573.065-.266-.134-1.124-.413-2.143-1.32-.793-.707-1.329-1.58-1.485-1.847-.156-.266-.017-.411.117-.544.121-.119.266-.31.399-.465.134-.155.178-.266.266-.443.089-.178.045-.333-.022-.466-.067-.133-.596-1.436-.816-1.967-.215-.518-.45-.447-.618-.456-.16-.008-.343-.01-.527-.01-.184 0-.485.069-.739.347-.254.278-.971.95-.971 2.316 0 1.366.993 2.686 1.133 2.873.14.187 1.954 2.984 4.735 4.187.662.286 1.179.457 1.583.585.664.211 1.268.181 1.745.11.532-.079 1.57-.642 1.791-1.262.222-.619.222-1.15.155-1.262-.066-.112-.243-.178-.51-.311z" />
        </svg>
      </motion.a>
    </div>
  );
}
