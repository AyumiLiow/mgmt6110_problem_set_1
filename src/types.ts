export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

export interface StudentMember {
  id: string;
  name: string;
  email: string;
  major?: string;
  initials: string;
  color: string;
  avatarBg: string;
  status: 'Ready' | 'Synced' | 'Updated';
  submittedTime: string;
}

export interface MemberHourlyStatus {
  time: string; // e.g. "09:00", "10:00"
  status: 'free' | 'busy' | 'class';
  detail?: string;
}

export interface DayScheduleRow {
  timeSlot: string; // e.g. "09:00 - 10:00"
  timeKey: string;
  monday: { [studentId: string]: 'free' | 'busy' };
  tuesday: { [studentId: string]: 'free' | 'busy' };
  wednesday: { [studentId: string]: 'free' | 'busy' };
  thursday: { [studentId: string]: 'free' | 'busy' };
  friday: { [studentId: string]: 'free' | 'busy' };
}

export interface CommonAvailableSlot {
  id: string;
  day: DayOfWeek;
  dateStr: string;
  startTime: string;
  endTime: string;
  duration: string;
  availableCount: number;
  totalMembers: number;
  meetingPlatform: string;
  notes: string;
  isOptimalChoice?: boolean;
}

export interface GroupConfig {
  id: string;
  name: string;
  moduleCode: string;
  moduleName: string;
  academicWeek: string;
  semester: string;
  university: string;
  shareCode: string;
  shareUrl: string;
  members: StudentMember[];
}

export interface MeetingSummary {
  meetingTitle: string;
  date: string;
  day: DayOfWeek;
  timeRange: string;
  duration: string;
  attendanceRate: string;
  meetingPlatform: string;
  agenda: string;
  preparationNotes: string[];
}
