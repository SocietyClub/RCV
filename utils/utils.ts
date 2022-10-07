import { Severity } from '../models/Enums';

/**
 * Utility for Creating a message used for the API response errors.
 *
 * @param severity
 * @param code
 * @param messageContent
 * @returns a message structure
 */
export const createMessage = (severity: Severity, code: string, messageContent: string): ErrorMessage => {
  return {
    severity,
    code,
    messageContent,
  };
};


/**
 * Util to get a Unique, human distiguishable css color style object for a given seed number
 * @param number seed
 * @returns CSS Properties object
 */
export const getBgColorStyleObject = (number: number | undefined) => {
  return { '--bg-color': selectColorHSL(number || 0) } as React.CSSProperties;
};

/**
 * Util to get a Unique, human distiguishable css HSL color for a given seed number
 * @param number seed
 * @returns CSS HSL String
 */
export const selectColorHSL = (number: number) => {
  // Use Golden Angle approximation to generate unique colors that are good for humans to distinguish
  // Golden Angles are mostly to mix hue, due to the second and seveth hues being very similar greens, we use the same
    // principle to have randomish lighting (anywhere from 50-85) to distingush the colors better
  const hue = number * 137.508;
  const light = (number * 137.508) % 35 + 50;
  return `hsl(${hue}, 100%, ${light}%)`;
}
