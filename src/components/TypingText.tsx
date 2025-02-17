// libs
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface TypingEffectProps {
  messages: string[];
}

const TypingText = styled.div`
  display: inline-block;
  text-decoration: underline;
`;

const TypingEffect: React.FC<TypingEffectProps> = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [displayedMessage, setDisplayedMessage] = useState<string>("");
  const currentMessage = messages[currentMessageIndex];

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const typeMessage = (message: string, index: number) => {
      if (index < message.length) {
        setDisplayedMessage((prev) => prev + message[index]);
        typingTimeout = setTimeout(() => typeMessage(message, index + 1), 100);
      }
    };

    if (currentMessage) {
      setDisplayedMessage("");
      typeMessage(currentMessage, 0);
    }

    const messageTimeout = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, currentMessage.length * 100 + 1000);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(messageTimeout);
    };
  }, [currentMessage, messages, currentMessageIndex]);

  return (
    <span>
      <TypingText>{displayedMessage}</TypingText>
    </span>
  );
};

export default TypingEffect;
