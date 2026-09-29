import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./BookComponent.css";

const Page = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={`page ${className}`} ref={ref} data-density="hard">
      <div className="page-inner">
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
});

export default function BookComponent({ pages = [] }) {
  return (
    <HTMLFlipBook
      width={500}
      height={580}
      size="stretch"
      minWidth={315}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="flip-book"
      flippingTime={1000}
      usePortrait={false}
      startZIndex={0}
      showPageCorners={true}
    >
      {pages.map((page, index) => {
        // 🔹 Decide content based on type
        let content = "";
        let extraClass = "";

        if (page.type === "cover") {
         
          extraClass = "cover";
        } else if (page.type === "backCover") {
          
          extraClass = "cover2";
        } else if (page.type === "page") {
          
          extraClass = index % 2 === 0 ? "page-left" : "page-right";
        }

        return (
          <Page key={index} className={extraClass}>
            {content}
          </Page>
        );
      })}
    </HTMLFlipBook>
  );
}