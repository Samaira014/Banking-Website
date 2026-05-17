import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}