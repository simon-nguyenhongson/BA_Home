// Barrel. The Figma-materialized implementations live in ./_impl/p1..p5.js so that no
// single file exceeds ~400 KB — large files get rejected by design-system importers.
// Public API is unchanged: the wrapper components in this folder still do
//   import { Foo } from "./_impl.js";
export * from "./_impl/p1.js";
export * from "./_impl/p2.js";
export * from "./_impl/p3.js";
export * from "./_impl/p4.js";
export * from "./_impl/p5.js";
