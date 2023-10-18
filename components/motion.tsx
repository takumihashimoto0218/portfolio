import { motion } from "@framer/motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>This is a page with transition</h1>
    </motion.div>
  );
};

export default Page;
