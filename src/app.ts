/**
 * Application entry point (conceptual)
 * Technical Lead: Saleem Shaik
 */

import { ReminderService } from './services/reminder.service';
import schedule from './data/bin-schedule.sample.json';

const service = new ReminderService();

schedule.collections.forEach((collection) => {
  console.log(service.generateReminder(collection));
});

