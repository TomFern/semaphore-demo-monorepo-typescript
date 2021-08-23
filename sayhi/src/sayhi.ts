import { hi } from 'shared';

export function getMessage(): string {
    return hi();
}

export function printMessage(message: string): void {
    console.log(message);
}

printMessage(getMessage());