import {Injectable} from '@angular/core';
import { AppSettings } from 'src/app/app-settings';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    constructor() {}

    /**
     * Set token
     * @param token: Token value
     */
    setToken(token: string): void {
        localStorage.setItem(`${AppSettings.PREFIX}Authorization`, token);
    }

    /**
     * Get token
     */
    getToken(): string {
        return localStorage.getItem(`${AppSettings.PREFIX}Authorization`);
    }

    /**
     * Set name
     * @param name: Name value
     */
    setName(name: string): void {
        localStorage.setItem(`${AppSettings.PREFIX}name`, name);
    }

    /**
     * Get name
     */
    getName(): string {
        return localStorage.getItem(`${AppSettings.PREFIX}name`);
    }

    /**
     * Set lastname
     * @param lastname: Name value
     */
    setLastname(lastname: string): void {
        localStorage.setItem(`${AppSettings.PREFIX}lastname`, lastname);
    }

    /**
     * Get lastname
     */
    getLastname(): string {
        return localStorage.getItem(`${AppSettings.PREFIX}lastname`);
    }

    /**
     * Set email
     * @param email: Email value
     */
    setEmail(email: string): void {
        localStorage.setItem(`${AppSettings.PREFIX}email`, email);
    }

    /**
     * Get email
     */
    getEmail(): string {
        return localStorage.getItem(`${AppSettings.PREFIX}email`);
    }

    /**
     * Clean localStorage
     */
    cleanStorage(): void {
        localStorage.clear();
    }
}
