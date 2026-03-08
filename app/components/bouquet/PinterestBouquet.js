"use client";

import { motion } from "framer-motion";
import {
  FlowerRose,
  FlowerPeony,
  FlowerTulip,
  FlowerDaisy,
} from "../flowers/FlowerSVGs";

export default function PinterestBouquet() {
  return (
    <div className="bouquetContainer" aria-hidden="true">
      <motion.div
        className="bouquet"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <FlowerRose className="flower f1" />
        <FlowerPeony className="flower f2" />
        <FlowerTulip className="flower f3" />
        <FlowerDaisy className="flower f4" />
        <FlowerRose className="flower f5" />
        <FlowerPeony className="flower f6" />
        <FlowerTulip className="flower f7" />
        <FlowerDaisy className="flower f8" />
      </motion.div>
    </div>
  );
}
