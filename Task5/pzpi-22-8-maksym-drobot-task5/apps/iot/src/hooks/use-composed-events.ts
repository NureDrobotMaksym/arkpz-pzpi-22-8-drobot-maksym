export function useComposedEvents<E>(
  initialEvent?: (event: E) => void,
  currentEvent?: (event: E) => void,
) {
  return (event: E) => {
    initialEvent?.(event);
    currentEvent?.(event);
  };
}
