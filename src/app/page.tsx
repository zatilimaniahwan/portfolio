"use client";
import { Menu } from "./menu";
import { TopSection } from "./topSection";
import { AboutSection } from "./aboutSection";
import { useRef } from "react";

export default function Home() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /**
   * Sets the section reference for the given id.
   * @param id - The id of the section to set the reference for.
   * @returns A function that takes an element and sets the reference for the given id.
   */
  const setSectionRef = (id: string) => (element: any) => {
    if (element) sectionRefs.current[id] = element;
  };

  /**
   * Scrolls the element associated with the given id into view with a smooth animation.
   * @param id - The id of the element to scroll into view.
   */
  const scrollIntoView = (id: string) => {
    if (sectionRefs.current[id])
      sectionRefs.current[id]!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute p-12">
        <div className="container flex items-center justify-between">
          <div>
            <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download CV</span>
            </button>
          </div>
          <Menu scrollIntoView={scrollIntoView} />
        </div>
      </div>
      <TopSection />
      <AboutSection setSectionRef={setSectionRef} />
    </main>
  );
}
