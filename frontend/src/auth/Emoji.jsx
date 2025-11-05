import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Picker from '@emoji-mart/react';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-toastify';  // Import toast for notifications
import "../cssStyles/emoji.css"
library.add(faLaughBeam);

function EmojiMart() {
  const [previewEmoji, setPreviewEmoji] = useState(false);
  const { config } = useAppContext();
  const isDark = config?.isDark || false;
  const [message, setMessage] = useState('');

  // Create a ref for the emoji button and emoji picker
  const emojiRef = useRef(null);
  const pickerRef = useRef(null);

  // Function to handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiRef.current && !emojiRef.current.contains(event.target) && 
        pickerRef.current && !pickerRef.current.contains(event.target)
      ) {
        setPreviewEmoji(false); // Close the emoji picker
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addEmoji = (e) => {
    let emoji = e.native || e.unified; // Handle different versions
    setMessage((prev) => prev + emoji);
    toast.success(`Selected Emoji: ${emoji}`, {  // Show toast with the emoji
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="position-relative">
      <Button
        variant="info"
        onClick={() => setPreviewEmoji(!previewEmoji)}
        className="emoji-btn"  // Add a custom class for styling
        ref={emojiRef} // Attach the button ref
      >
        <FontAwesomeIcon icon={faLaughBeam} size="2x" />
      </Button>

      {previewEmoji && (
        <div ref={pickerRef}>  {/* Attach the picker ref */}
          <Picker
            set="google"
            onEmojiSelect={addEmoji}
            theme={isDark ? 'dark' : 'light'}
            previewPosition="none"
            skinTonePosition="none"
          />
        </div>
      )}

      <div className="emoji-message">
        {message && <span>{message}</span>}
      </div>
    </div>
  );
}

export default EmojiMart;
