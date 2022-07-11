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
  }
}
