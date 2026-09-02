import * as React from "react";

/**
 * Carousel dot — active, inactive, hover.
 *
 * Source: Figma layer "Carousel/Slick" (node 6292:14967).
 */
export interface CarouselSlickProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "inactive" | "hover" | "active";
}

export declare function CarouselSlick(props: CarouselSlickProps): JSX.Element;
