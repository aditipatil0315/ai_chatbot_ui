// import { useEffect, useRef } from "react";

// export default function useAutoScroll(dependencies) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.scrollTop = ref.current.scrollHeight;
//     }
//   }, [dependencies]);

//   return ref;
// }


import { useEffect, useRef, useState } from "react";

export default function useAutoScroll({ smooth, content }) {
  const scrollRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const disableAutoScroll = () => setAutoScrollEnabled(false);

  useEffect(() => {
    if (autoScrollEnabled) {
      scrollToBottom();
    }
  }, [content]);

  return { scrollRef, isAtBottom, autoScrollEnabled, scrollToBottom, disableAutoScroll };
}

