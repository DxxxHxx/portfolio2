import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-10 h-10 bg-red-700 rounded-md"
      />
    </div>
  );
}
