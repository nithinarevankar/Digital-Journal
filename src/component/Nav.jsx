import "./nav.css";
import { ChevronUp, ChevronDown, Smile,Eraser ,Camera} from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export default function Nav({
  count,
  setCount,
  open,
  setopen,
  onEmojiSelect,
  clear,
  

}) {
  const handleemoji = (emojiData) => {
    onEmojiSelect(emojiData);
    setopen(false);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <button onClick={() => setCount((c) => Math.min(10, c + 1))}>
          <ChevronUp size={16}></ChevronUp>
        </button>

        <span className="page-count">{count}</span>

        <button onClick={() => setCount((c) => Math.max(1, c - 1))}>
          <ChevronDown size={16}></ChevronDown>
        </button>

        <button
          onClick={() => {
            setopen(!open);
          }}
        >
          <Smile size={16} strokeWidth={2} />
        </button>
          <button onClick={clear}><Eraser size={16} strokeWidth={2} /></button>
          
        {open && (
          <div className="emo">
            <EmojiPicker onEmojiClick={handleemoji} />
          </div>
        )}
      </div>
    </div>
  );
}