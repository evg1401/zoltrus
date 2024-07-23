export type Validate = {
    valid: boolean;
    errors: { id: string | number; errorMessages: string[] }[];
  };