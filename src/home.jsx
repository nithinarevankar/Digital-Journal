import React, { useState,useRef } from "react";
import "./home.css";
import BookComponent from "./component/BookComponent";
import Nav from "./component/Nav";
import { motion } from "framer-motion";
import EmojiPicker from "emoji-picker-react";


export default function Hero() {
  const heroref = useRef(null)
  const [count, setCount] = useState(1); // count = sheets
  const totalPages = count * 2; // 🔥 two pages per count
  const [open, setopen] = useState(false);
  const [emoji, setemoji] = useState([]);

  const bookPages = [
    { type: "cover" },

    ...Array.from({ length: totalPages }, (_, i) => ({
      type: "page",
      number: i + 1,
      content: `Page ${i + 1}`,
    })),

    { type: "backCover" },
  ];

  const addemoji = (emojidata) => {
    setemoji((prev) => [
      ...prev,
      {
        id: Date.now(),
        emoji: emojidata.emoji,
        
      },
    ]);
  };

  return (
    <>
      <div className="hero"  >
        <div className="hero-bg"></div>

        <div className="glass-panel"ref={heroref}>
          <BookComponent pages={bookPages} />

          <Nav
            count={count}
            setCount={setCount}
            open={open}
            setopen={setopen}
            onEmojiSelect={addemoji}
            clear={()=>setemoji([])}
            
          />
        </div>

        {emoji.map((item) => (
          <motion.div
            key={item.id}
            drag
            dragMomentum={false}
            style={{
              position: "fixed",
              top: 500,
              left: 500,
              fontSize: "100px",
              zIndex: 99999,
              cursor: "grab",
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>
    </>
  );
}