/**
 * Bin collection reminder service
 * Designed for local authority / community use
 *
 * Author: Saleem Shaik
 */

type BinCollection = {
  binType: string;
  day: string;
  frequency: string;
};

export class ReminderService {
  generateReminder(collection: BinCollection): string {
    return `Reminder: ${collection.binType} bin will be collected on ${collection.day}.`;
  }
}

