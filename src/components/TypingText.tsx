// libs
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface TypingEffectProps {
  messages: string[];
}

const TypingText = styled.div`
  display: inline-block;
  border-bottom: 1px solid #333333;
  border-right: 3px solid #333333;
`;

const TypingEffect: React.FC<TypingEffectProps> = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [displayedMessage, setDisplayedMessage] = useState<string>("");
  const currentMessage = messages[currentMessageIndex];

  useEffect(() => {
    // loop for messages infinite
    // if current message is display success, delete each word and after delete all typing next message
    const interval = setInterval(() => {
      if (displayedMessage === currentMessage) {
        let index = displayedMessage.length;
        const deleteInterval = setInterval(() => {
          if (index === 0) {
            clearInterval(deleteInterval);
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          } else {
            setDisplayedMessage((prev) => prev.slice(0, -1));
            index--;
          }
        }, 100);
      } else {
        setDisplayedMessage((prev) => currentMessage.slice(0, prev.length + 1));
      }
    }, 200);
    return () => clearInterval(interval);
  }, [currentMessage, displayedMessage, messages]);

  return (
    <span>
      <TypingText>{displayedMessage}</TypingText>
    </span>
  );
};

export default TypingEffect;
