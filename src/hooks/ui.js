import { useEffect, useState } from "react";

export function useOutsideClick(ref, callback) {
    const [isOutsideClick, setIsOutsideClick] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mouseup", handleClickOutside);
        }
    }, [ref]);

    return isOutsideClick;
}

export function useScrollToBottom(ref, contentLoading) {
    useEffect(() => {
        if (ref.current && contentLoading) {
            const element = ref.current;
            element.scrollTop = element.scrollHeight;
        }
    }, [ref, contentLoading]);
}