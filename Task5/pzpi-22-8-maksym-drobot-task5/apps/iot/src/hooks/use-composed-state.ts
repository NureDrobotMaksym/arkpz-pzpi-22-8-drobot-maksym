/**
 * The idea here is to support both internally and externally managed state. State is managed internally if the value property and the change property is not passed. If at least one of those properties are passed the state is managed externally.
 */

export function useComposedState<T>(
  {
    value,
    defaultValue,
    onValueChange
  }: {
    value?: T | undefined;
    defaultValue?: T | undefined;
    onValueChange?: (value: T) => void;
  }
): [T | undefined, (value: T) => void] {


  if (value || onValueChange) {
    return [value, onValueChange!];
  } else {
    return [defaultValue!, onValueChange!];
  }
}

