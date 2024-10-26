// // AutoSlideshow.tsx
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const images = [
//   "/img1.jpg",
//   "/img2.jpg",
//   "/img3.jpg",
//   "/img4.jpg",
// ];

// const AutoSlideshow: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       {images.map((src, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Image
//             src={src}
//             alt={`Slide ${index + 1}`}
//             layout="fill"
//             objectFit="cover"
//             quality={75}
//             priority={index === currentIndex}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AutoSlideshow;
