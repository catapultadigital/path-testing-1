export enum PassErrors {
  SHORT = 'Pass is too short',
  NO_UPPER_CASE = 'Upper case letter required',
  NO_LOWER_CASE = 'Lower case letter required',
}

export interface CheckResult {
  valid: boolean,
  reasons: PassErrors[],
};

export class PassChecker {
  public verify(pass: string): CheckResult {
    const reasons: PassErrors[] = [];
    if (pass.length < 8) {
      return {
        valid: false,
        reasons: [...reasons, PassErrors.SHORT]
      };
    };
    if (pass === pass.toLowerCase()) {
      return {
        valid: false,
        reasons: [...reasons, PassErrors.NO_UPPER_CASE]
      };
    };
    if (pass === pass.toUpperCase()) {
      return {
        valid: false,
        reasons: [...reasons, PassErrors.NO_LOWER_CASE]
      };
    };

    return {
      valid: true,
      reasons: []
    };
  }
};