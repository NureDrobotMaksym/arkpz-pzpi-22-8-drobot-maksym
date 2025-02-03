/**
 * This file provides utility functions to handle element positioning.
 *
 * This includes:
 * - shifting the element when it overflows the parent container;
 * - flipping it;
 * - offsetting it from the anchor element;
 * - positioning the indicator.
 */

/**
 * Considerations:
 *
 * - update the position when an overflow ancestor is scrolled;
 * - update the position when an overflow ancestor is resized;
 * - update the position when either the reference or floating elements resized;
 * - update the position of the floating element if the reference element moved on the screen as the result of layout shift.
 */

type Rectangle = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type Placement = "l" | "t" | "r" | "b";
type Alignment = "s" | "c" | "e";

/**
 *
 * @param anchor
 * @param content
 * @param placement
 * @param alignment
 */
export function position(anchor: Rectangle, content: Rectangle, placement: Placement, alignment: Alignment) {
  let x = 0;
  let y = 0;

  switch (placement) {
    case "l":
      x = -content.w;
      break;
    case "t":
      y = -content.h;
      break;
    case "r":
      x = anchor.w;
      break;
    case "b":
      y = anchor.h;
      break;
  }

  const horizontal = placement === "t" || placement === "b";

  switch (alignment) {
    case "s":
      if (horizontal) {
        x = 0;
      } else {
        y = 0;
      }
      break;
    case "c":
      if (horizontal) {
        x = anchor.w / 2 - content.w / 2;
      } else {
        y = anchor.h / 2 - content.h / 2;
      }
      break;
    case "e":
      if (horizontal) {
        x = anchor.w - content.w;
      } else {
        y = anchor.h - content.h;
      }
      break;
  }

  return { x, y };
}

/**
 *
 * @param anchor
 * @param content
 * @param placement
 * @param offset
 */
export function offset(anchor: Rectangle, content: Rectangle, placement: Placement, offset: number) {
  let x = 0;
  let y = 0;

  switch (placement) {
    case "l":
      x = -offset;
      break;
    case "t":
      y = -offset;
      break;
    case "r":
      x = offset;
      break;
    case "b":
      y = offset;
      break;
  }

  return { x, y };
}

/**
 *
 * @param content
 * @param viewport
 * @param padding
 */
export function shift(content: Rectangle, viewport: Rectangle, padding: number) {
  let x = 0;
  let y = 0;

  const overflow = compute_overflow(content, viewport);

  if (overflow.l !== overflow.r) {
    if (overflow.l) x = viewport.x + padding;
    if (overflow.r) x = viewport.x + viewport.w - content.w - padding;
  }

  if (overflow.t !== overflow.b) {
    if (overflow.t) y = viewport.y + padding;
    if (overflow.b) y = viewport.y + viewport.h - content.h - padding;
  }

  return { x, y };
}

/**
 *
 * @param content
 * @param viewport
 * @param placement
 */
export function flip(content: Rectangle, viewport: Rectangle, placement: Placement): Placement {
  const overflow = compute_overflow(content, viewport);

  if (overflow.l && placement === "l" && !overflow.r) return "r";
  if (overflow.r && placement === "r" && !overflow.l) return "l";
  if (overflow.t && placement === "t" && !overflow.b) return "b";
  if (overflow.b && placement === "b" && !overflow.t) return "t";

  return placement;
}

/**
 *
 * @param anchor
 * @param content
 * @param callback
 */
export function observe(anchor: Element, content: Element, callback: () => void) {
  const observer = new ResizeObserver(() => {
    callback();
  });

  observer.observe(anchor);
  observer.observe(content);

  return () => {
    observer.disconnect();
  }
}

export function update(anchor: Element, content: Element) {
  // Convert elements to rectangles
}

// Utility functions

function compute_overflow(content: Rectangle, viewport: Rectangle) {
  return {
    l: content.x < viewport.x,
    t: content.y < viewport.y,
    r: content.x + content.w > viewport.x + viewport.w,
    b: content.y + content.h > viewport.y + viewport.h
  };
}

