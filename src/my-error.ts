class MessageService {
  get(code: number) {
    return `${code} # Fetch some message with translation`;
  }
}
export class CustomError {
  constructor(public code: number, public message: string) {}
}
class AdvanceError {
  private messsageService = new MessageService();

  private getMessage(code: number) {
    return this.messsageService.get(code);
  }

  private getError(code: number) {
    const message = this.getMessage(code);
    return new CustomError(code, message);
  }

  getCustomError() {
    return this.getError(123);
  }
}

export const numberOrError = (type: number): number | CustomError => {
  if (type === 1) {
    const error = new AdvanceError();
    return error.getCustomError();
  }
  return type;
};
