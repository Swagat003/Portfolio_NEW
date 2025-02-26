import React, { useEffect, useState } from "react";
import './css/Mouse.scss'

function Mouse({ className }) {
  const [visible, setVisible] = useState(false); 
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 10000);
  
    return;
  }, [])
  

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false); 

      if (timeoutId) clearTimeout(timeoutId);

      const newTimeoutId = setTimeout(() => {
        setVisible(true);
      }, 10000);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className={`mouse ${className} ${visible ? "visible" : "hidden"}`}>
      <div className="mouse__scroll"></div>
    </div>
  );
}

export default Mouse;
