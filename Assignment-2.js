const EventEmitter=require('events');
const studentTracker = new EventEmitter();
studentTracker.on('login', (studentName) => {
  console.log(`[Event: login] ${studentName} logged successfully`);
});
studentTracker.on('assignment', (studentName, subject) => {
  console.log(`[Event: assignment] ${studentName} - assignment submitted for ${subject}`);
});
studentTracker.on('logout', (studentName) => {
  console.log(`[Event: logout] ${studentName} logged out`);
});
studentTracker.on('exit', () => {
  console.log(`[Event: exit] existing application`);
  process.exit(0);
});
const student = 'Ishansh';
studentTracker.emit('login', student);
studentTracker.emit('assignment', student, 'Computer Science');
studentTracker.emit('logout', student);
studentTracker.emit('exit');