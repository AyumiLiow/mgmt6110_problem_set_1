import { CommonAvailableSlot, DayScheduleRow, GroupConfig, MeetingSummary, StudentMember } from './types';

/**
 * Single source of truth containing all invented data rows for the Singapore student group scheduler.
 * All 5 students, hourly timetables, shared link details, and common free slots are kept here.
 */

export const INVENTED_STUDENTS: StudentMember[] = [
  {
    id: 's1',
    name: 'Li Ting',
    email: 'liting.2024@smu.edu.sg',
    major: 'Business Analytics, Year 3',
    initials: 'LT',
    color: '#0284c7', // blue
    avatarBg: 'bg-sky-100 text-sky-800 border-sky-300',
    status: 'Synced',
    submittedTime: 'Today at 08:45 AM',
  },
  {
    id: 's2',
    name: 'Darren Tan',
    email: 'darren.tan.2026@smu.edu.sg',
    major: 'Information Systems, Year 2',
    initials: 'DT',
    color: '#16a34a', // green
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    status: 'Synced',
    submittedTime: 'Today at 09:12 AM',
  },
  {
    id: 's3',
    name: 'Farhan Rahim',
    email: 'farhan.rahim.2024@smu.edu.sg',
    major: 'Economics & Computing, Year 3',
    initials: 'FR',
    color: '#9333ea', // purple
    avatarBg: 'bg-purple-100 text-purple-800 border-purple-300',
    status: 'Synced',
    submittedTime: 'Today at 09:30 AM',
  },
  {
    id: 's4',
    name: 'Chloe Chen',
    email: 'chloe.chen.2025@smu.edu.sg',
    major: 'Accountancy, Year 2',
    initials: 'CC',
    color: '#ea580c', // orange
    avatarBg: 'bg-amber-100 text-amber-800 border-amber-300',
    status: 'Synced',
    submittedTime: 'Today at 10:05 AM',
  },
  {
    id: 's5',
    name: 'Marcus Wong',
    email: 'marcus.wong.2024@smu.edu.sg',
    major: 'Business Management, Year 3',
    initials: 'MW',
    color: '#0d9488', // teal
    avatarBg: 'bg-teal-100 text-teal-800 border-teal-300',
    status: 'Synced',
    submittedTime: 'Today at 10:20 AM',
  },
];

export const INVENTED_GROUP: GroupConfig = {
  id: 'grp-mgmt6110-t4',
  name: 'MGMT 6110 Project Team 4',
  moduleCode: 'MGMT 6110',
  moduleName: 'Human-AI Collaboration',
  academicWeek: 'Week 3 (Fall Semester)',
  semester: 'Academic Year 2026/27 Term 1',
  university: 'Singapore Management University (SMU)',
  shareCode: 'SMU-6110-W3-T4',
  shareUrl: 'https://mysmu-scheduler.edu.sg/join/mgmt6110-w3-t4',
  members: INVENTED_STUDENTS,
};

// 25+ detailed timetable rows showing Monday through Friday schedule state for all 5 students
export const INVENTED_WEEKLY_GRID: DayScheduleRow[] = [
  {
    timeSlot: '08:30 - 09:00',
    timeKey: '08:30',
    monday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    tuesday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'busy', s5: 'busy' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    friday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '09:00 - 09:30',
    timeKey: '09:00',
    monday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    tuesday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'busy', s5: 'busy' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'busy', s5: 'free' },
  },
  {
    timeSlot: '09:30 - 10:00',
    timeKey: '09:30',
    monday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    tuesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'busy', s5: 'busy' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'busy', s5: 'free' },
  },
  {
    timeSlot: '10:00 - 10:30',
    timeKey: '10:00',
    monday: { s1: 'busy', s2: 'free', s3: 'busy', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'busy', s5: 'busy' },
  },
  {
    timeSlot: '10:30 - 11:00',
    timeKey: '10:30',
    monday: { s1: 'busy', s2: 'free', s3: 'busy', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
  },
  {
    timeSlot: '11:00 - 11:30',
    timeKey: '11:00',
    monday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    friday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
  },
  {
    timeSlot: '11:30 - 12:00',
    timeKey: '11:30',
    monday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'free', s5: 'free' },
    tuesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    wednesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'busy' },
    thursday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    friday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '12:00 - 12:30',
    timeKey: '12:00',
    monday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Lunch All 5 Free!
    tuesday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    thursday: { s1: 'busy', s2: 'free', s3: 'busy', s4: 'busy', s5: 'free' },
    friday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '12:30 - 13:00',
    timeKey: '12:30',
    monday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Lunch All 5 Free!
    tuesday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    thursday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'free' },
    friday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '13:00 - 13:30',
    timeKey: '13:00',
    monday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'busy', s5: 'free' },
    tuesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
    thursday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'free' },
    friday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '13:30 - 14:00',
    timeKey: '13:30',
    monday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'busy', s5: 'free' },
    tuesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'free', s5: 'free' },
    wednesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Wed start of afternoon free block!
    thursday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'free' },
    friday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '14:00 - 14:30',
    timeKey: '14:00',
    monday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'free' },
    wednesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    thursday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    friday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
  },
  {
    timeSlot: '14:30 - 15:00',
    timeKey: '14:30',
    monday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'free' },
    wednesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    thursday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    friday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
  },
  {
    timeSlot: '15:00 - 15:30',
    timeKey: '15:00',
    monday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'busy', s2: 'busy', s3: 'busy', s4: 'busy', s5: 'free' },
    wednesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    friday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '15:30 - 16:00',
    timeKey: '15:30',
    monday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'busy' },
    tuesday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    wednesday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // All 5 Free!
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'busy', s5: 'free' },
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Fri afternoon free!
  },
  {
    timeSlot: '16:00 - 16:30',
    timeKey: '16:00',
    monday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    tuesday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
    thursday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Fri afternoon free!
  },
  {
    timeSlot: '16:30 - 17:00',
    timeKey: '16:30',
    monday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    tuesday: { s1: 'free', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'busy' },
    thursday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Thu late afternoon free!
    friday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Fri afternoon free!
  },
  {
    timeSlot: '17:00 - 17:30',
    timeKey: '17:00',
    monday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Mon 5pm free!
    tuesday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    thursday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Thu late afternoon free!
    friday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'free' },
  },
  {
    timeSlot: '17:30 - 18:00',
    timeKey: '17:30',
    monday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Mon 5:30pm free!
    tuesday: { s1: 'free', s2: 'free', s3: 'busy', s4: 'free', s5: 'free' },
    wednesday: { s1: 'busy', s2: 'busy', s3: 'free', s4: 'free', s5: 'free' },
    thursday: { s1: 'free', s2: 'free', s3: 'free', s4: 'free', s5: 'free' }, // Thu late afternoon free!
    friday: { s1: 'busy', s2: 'free', s3: 'free', s4: 'free', s5: 'free' },
  },
];

// High-confidence common available time slots where all 5 students have confirmed zero conflicts
export const INVENTED_AVAILABLE_SLOTS: CommonAvailableSlot[] = [
  {
    id: 'slot-1',
    day: 'Wednesday',
    dateStr: '16 Sep 2026',
    startTime: '14:00',
    endTime: '16:00',
    duration: '2 hours',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'Optimal prime slot. No students have back-to-back classes before or after.',
    isOptimalChoice: true,
  },
  {
    id: 'slot-2',
    day: 'Thursday',
    dateStr: '17 Sep 2026',
    startTime: '10:30',
    endTime: '12:00',
    duration: '1.5 hours',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'Morning session. All 5 members free right before lunch break.',
    isOptimalChoice: false,
  },
  {
    id: 'slot-3',
    day: 'Friday',
    dateStr: '18 Sep 2026',
    startTime: '15:30',
    endTime: '17:00',
    duration: '1.5 hours',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'End of week group review. Everyone is free post-lecture.',
    isOptimalChoice: false,
  },
  {
    id: 'slot-4',
    day: 'Tuesday',
    dateStr: '15 Sep 2026',
    startTime: '10:30',
    endTime: '12:00',
    duration: '1.5 hours',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'Pre-lunch slot. Chloe and Darren finish accounting lecture at 10:15 AM.',
    isOptimalChoice: false,
  },
  {
    id: 'slot-5',
    day: 'Thursday',
    dateStr: '17 Sep 2026',
    startTime: '16:30',
    endTime: '18:00',
    duration: '1.5 hours',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'Casual late-afternoon working session before evening seminars.',
    isOptimalChoice: false,
  },
  {
    id: 'slot-6',
    day: 'Monday',
    dateStr: '14 Sep 2026',
    startTime: '17:00',
    endTime: '18:00',
    duration: '1 hour',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'Quick check-in to divide Problem Set 1 research areas.',
    isOptimalChoice: false,
  },
  {
    id: 'slot-7',
    day: 'Monday',
    dateStr: '14 Sep 2026',
    startTime: '12:00',
    endTime: '12:30',
    duration: '0.5 hour',
    availableCount: 5,
    totalMembers: 5,
    meetingPlatform: 'Virtual via Zoom',
    notes: 'Informal lunch timing where everyone indicated open availability.',
    isOptimalChoice: false,
  },
];

// The confirmed consensus meeting time found by the app (Screen 3)
export const INVENTED_CONFIRMED_MEETING: MeetingSummary = {
  meetingTitle: 'MGMT 6110 Problem Set 1 & Team Alignment',
  day: 'Wednesday',
  date: 'Wednesday, 16 September 2026',
  timeRange: '2:00 PM – 4:00 PM (SGT)',
  duration: '2 hours',
  attendanceRate: '5 of 5 Students Free (100%)',
  meetingPlatform: 'Virtual via Zoom',
  agenda: 'Finalize Problem Set 1 AI collaboration framework, divide case write-up sections, and rehearse Week 4 presentation talking points.',
  preparationNotes: [
    'Li Ting: Bring laptop with shared Google Docs template',
    'Darren & Marcus: Bring research notes on Human-AI interaction models',
    'Chloe & Farhan: Collate team survey responses and case study data',
    'All: Join virtually via Zoom with webcam and microphone ready',
  ],
};
