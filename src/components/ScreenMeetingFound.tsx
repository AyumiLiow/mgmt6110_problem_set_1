import React, { useState } from 'react';
import {
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Users,
  Copy,
  Check,
  Share2,
  Download,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  BookmarkCheck,
} from 'lucide-react';
import {
  INVENTED_CONFIRMED_MEETING,
  INVENTED_STUDENTS,
  INVENTED_AVAILABLE_SLOTS,
} from '../data';
import { CommonAvailableSlot } from '../types';

interface ScreenMeetingFoundProps {
  onGoToSlots: () => void;
  onGoToGroup: () => void;
  selectedSlotOverride?: CommonAvailableSlot | null;
}

export const ScreenMeetingFound: React.FC<ScreenMeetingFoundProps> = ({
  onGoToSlots,
  onGoToGroup,
  selectedSlotOverride,
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [calendarDownloaded, setCalendarDownloaded] = useState(false);
  const [activeSlot, setActiveSlot] = useState(
    selectedSlotOverride
      ? {
          day: selectedSlotOverride.day,
          date: `${selectedSlotOverride.day}, ${selectedSlotOverride.dateStr}`,
          timeRange: `${selectedSlotOverride.startTime} – ${selectedSlotOverride.endTime} (SGT)`,
          duration: selectedSlotOverride.duration,
          meetingPlatform: selectedSlotOverride.meetingPlatform,
        }
      : {
          day: INVENTED_CONFIRMED_MEETING.day,
          date: INVENTED_CONFIRMED_MEETING.date,
          timeRange: INVENTED_CONFIRMED_MEETING.timeRange,
          duration: INVENTED_CONFIRMED_MEETING.duration,
          meetingPlatform: INVENTED_CONFIRMED_MEETING.meetingPlatform,
        }
  );

  const handleCopySummary = () => {
    const text = `📅 *MGMT 6110 Group Meeting Confirmed!*
🗓️ Day: ${activeSlot.date}
⏰ Time: ${activeSlot.timeRange} (${activeSlot.duration})
💻 Platform: Virtual via Zoom
👥 Attendees: All 5 members confirmed free (Li Ting, Darren, Farhan, Chloe, Marcus)
📝 Agenda: Finalize MGMT 6110 Problem Set 1 AI collaboration framework & divide presentation slides.

Scheduled via Student Group Scheduler.`;

    navigator.clipboard?.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleDownloadCalendar = () => {
    // Generate clean iCalendar .ics format for mobile / desktop calendar apps
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//StudentGroupScheduler//SMU//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:mgmt6110-meeting-${Date.now()}@smu.edu.sg
DTSTAMP:20260907T000000Z
DTSTART:20260916T060000Z
DTEND:20260916T080000Z
SUMMARY:MGMT 6110 Project Team 4 Meeting
DESCRIPTION:Finalize Problem Set 1 AI collaboration framework and presentation slides. All 5 members attending via Zoom.
LOCATION:Virtual via Zoom
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MGMT6110_Team4_Meeting.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCalendarDownloaded(true);
    setTimeout(() => setCalendarDownloaded(false), 3000);
  };

  const alternateSlots = INVENTED_AVAILABLE_SLOTS.filter(
    (slot) => !slot.isOptimalChoice
  ).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-emerald-600 text-white rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Common Meeting Time Found
          </span>
          <span className="text-xs font-medium text-emerald-100 hidden sm:inline">
            100% Attendance Rate
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Common Meeting Time Found!
        </h2>
        <p className="text-sm sm:text-base text-emerald-100 mt-1 max-w-xl">
          The app identified the optimal meeting window where all 5 students are completely free with zero calendar clashes.
        </p>
      </div>

      {/* Main Found Meeting Card (Readable at arm's length on a phone) */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border-2 border-emerald-500 shadow-md space-y-6">
        {/* Badge & Title */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Agreed Group Timing
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5">
              {INVENTED_CONFIRMED_MEETING.meetingTitle}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            5/5 Students Free (100%)
          </div>
        </div>

        {/* Date & Time Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Date & Day</span>
              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {activeSlot.date}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Time & Duration</span>
              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {activeSlot.timeRange}
              </p>
              <span className="text-xs font-medium text-slate-600">({activeSlot.duration} uninterrupted block)</span>
            </div>
          </div>
        </div>

        {/* Meeting Format & Agenda */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-500">Meeting Format</span>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                Virtual via Zoom
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                All meetings are conducted virtually. Link will be shared in group chat.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
              <BookmarkCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-500">Meeting Objectives</span>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {INVENTED_CONFIRMED_MEETING.agenda}
              </p>
            </div>
          </div>
        </div>

        {/* All 5 Attending Members */}
        <div className="border-t border-slate-100 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Confirmed Free Attendees (All 5)
            </span>
            <span className="text-xs font-semibold text-emerald-600">Zero Schedule Conflicts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {INVENTED_STUDENTS.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/70"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${student.avatarBg}`}
                  >
                    {student.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{student.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{student.major.split(',')[0]}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" /> Free
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* Action Buttons: WhatsApp/Telegram Share & Calendar Export */}
        <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row gap-3">
          <button
            id="btn-copy-meeting-summary"
            type="button"
            onClick={handleCopySummary}
            className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              copiedSummary
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-[0.98]'
            }`}
          >
            {copiedSummary ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary for WhatsApp/Telegram'}</span>
          </button>

          <button
            id="btn-download-ics"
            type="button"
            onClick={handleDownloadCalendar}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-slate-900 hover:bg-black text-white transition-all cursor-pointer shadow-xs active:scale-[0.98]"
          >
            {calendarDownloaded ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
            <span>{calendarDownloaded ? 'Saved (.ics)!' : 'Add to Calendar (.ics)'}</span>
          </button>
        </div>
      </div>

      {/* Alternative Common Slots Found */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-900">
            Alternative 100% Free Slots Found (Backup Options)
          </h4>
          <button
            id="btn-view-all-slots"
            type="button"
            onClick={onGoToSlots}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            View all 7 free slots
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {alternateSlots.map((slot) => (
            <div
              key={slot.id}
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-2 hover:border-blue-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-800">{slot.day}</span>
                  <span className="font-bold text-emerald-600 text-[11px]">5/5 Free</span>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {slot.startTime} – {slot.endTime}
                </p>
                <p className="text-[11px] text-blue-700 font-semibold mt-1 flex items-center gap-1">
                  <Video className="w-3 h-3" /> Virtual via Zoom
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveSlot({
                    day: slot.day,
                    date: `${slot.day}, ${slot.dateStr}`,
                    timeRange: `${slot.startTime} – ${slot.endTime} (SGT)`,
                    duration: slot.duration,
                    meetingPlatform: slot.meetingPlatform,
                  });
                }}
                className="w-full py-1.5 text-center text-xs font-bold text-blue-600 hover:text-blue-700 bg-white border border-slate-200 rounded-lg cursor-pointer"
              >
                Switch to this slot
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Screen Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
        <button
          type="button"
          onClick={onGoToSlots}
          className="font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Available Time Slots
        </button>

        <button
          type="button"
          onClick={onGoToGroup}
          className="font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
        >
          Manage group & schedules →
        </button>
      </div>
    </div>
  );
};
