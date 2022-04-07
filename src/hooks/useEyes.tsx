import useMousePosition from "./useMousePosition";

export function useEyes() {
  const mousePosition = useMousePosition({ includeTouch: true });
  let xPos = mousePosition.x ? mousePosition.x * 0.1 : 0;
  let yPos = mousePosition.y ? (mousePosition.y * 0.1) * -1 : 0;

  if (xPos > 100) {
    xPos = 100;
  }

  if (xPos < 0) {
    xPos = 0;
  }

  if (yPos > 0) {
    yPos = 0;
  }

  if (yPos < -50) {
    yPos = -50;
  }

  return {
    xPos,
    yPos
  }
}

export default useEyes;
