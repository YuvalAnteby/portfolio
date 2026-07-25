import {useEffect, useState} from 'react';

export const useTypingEffect = (content, speed = 8) => {
    const [displayedContent, setDisplayedContent] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setDisplayedContent('');
        setIsTyping(Boolean(content));
    }, [content]);

    useEffect(() => {
        if (!content || !isTyping) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplayedContent(content);
            setIsTyping(false);
            return;
        }

        if (displayedContent.length >= content.length) {
            setIsTyping(false);
            return;
        }

        const timer = setTimeout(() => {
            setDisplayedContent(content.slice(0, displayedContent.length + 1));
        }, speed);

        return () => clearTimeout(timer);
    }, [content, displayedContent, isTyping, speed]);

    return {displayedContent, isTyping, setIsTyping, setDisplayedContent};
};
