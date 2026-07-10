import { Component } from '@angular/core';

@Component({
  selector: 'bot-kidspassgen',
  templateUrl: './kidspassgen.component.html',
  styleUrls: ['./kidspassgen.component.css']
})
export class KidspassgenComponent {
  threeLetterAnimals: string[] = ['cat', 'dog', 'cow', 'pig', 'fox', 'bee', 'ant', 'eel', 'emu'];
  adjectives: string[] = ['big', 'small', 'fast', 'slow', 'tall', 'short', 'brave', 'funny', 'happy'];
  colours: string[] = ['blue', 'red', 'green', 'black', 'white', 'orange', 'purple', 'gray', 'olive'];
  generatedPassphrase = '';
  generatedPassword = '';

  private getRandomItem(words: string[]): string {
    return words[Math.floor(Math.random() * words.length)];
  }

  private generateRandomPassword(length = 12): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  generatePassphrase(): void {
    const adjective = this.getRandomItem(this.adjectives);
    const colour = this.getRandomItem(this.colours);
    const animal = this.getRandomItem(this.threeLetterAnimals);
    this.generatedPassphrase = `${adjective}${colour}${animal}`;
    this.generatedPassword = '';
  }

  generatePassword(): void {
    this.generatedPassword = this.generateRandomPassword(12);
    this.generatedPassphrase = '';
  }

  copyPassphrase(): void {
    if (!this.generatedPassphrase) {
      return;
    }
    navigator.clipboard.writeText(this.generatedPassphrase);
  }

  copyPassword(): void {
    if (!this.generatedPassword) {
      return;
    }
    navigator.clipboard.writeText(this.generatedPassword);
  }
}
