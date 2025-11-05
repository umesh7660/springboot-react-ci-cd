import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const IDLE_TIMEOUT = 15 * 60 * 1000; // 15 minutes

const useIdleLogout = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        sessionStorage.removeItem("userData"); // Remove session data
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login"); // Redirect to login page
      }, IDLE_TIMEOUT);
    };

    const eventHandler = () => resetTimer();
    const events = ["mousemove", "keydown", "scroll", "click"];

    events.forEach((event) => window.addEventListener(event, eventHandler));

    resetTimer(); // Initialize the timer

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach((event) => window.removeEventListener(event, eventHandler));
    };
  }, [navigate]);

  return null;
};

export default useIdleLogout;
