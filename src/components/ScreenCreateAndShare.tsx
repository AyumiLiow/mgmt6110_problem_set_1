import React, { useState } from 'react';
import {
  Users,
  Copy,
  Check,
  Share2,
  Calendar,
  Sparkles,
  QrCode,
  ArrowRight,
  RefreshCw,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { INVENTED_GROUP, INVENTED_STUDENTS, INVENTED_WEEKLY_GRID } from '../data';
import { DayOfWeek } from '../types';

interface ScreenCreateAndShareProps {
  onGoToMeetingFound: () => void;
  onGoToSlots: () => void;
}

export const ScreenCreateAndShare: React.FC<ScreenCreateAndShareProps> = ({
  onGoToMeetingFound,
  onGoToSlots,
}) => {
  // Group creation / editing state
  const [groupName, setGroupName] = useState(INVENTED_GROUP.name);
  const [moduleCode, setModuleCode] = useState(INVENTED_GROUP.moduleCode);
  const [academicWeek, setAcademicWeek] = useState(INVENTED_GROUP.academicWeek);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Link copy feedback
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [showQr, setShowQr] = useState(false);

  // Availability matrix view state
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('Wednesday');
  const [highlightMemberId, setHighlightMemberId] = useState<string>('all');
  const [isScanning, setIsScanning] = useState(false);
  const [foundHighlight, setFoundHighlight] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(INVENTED_GROUP.shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyInviteMessage = () => {
    const message = `Hey team! Join our ${groupName} (${moduleCode}) scheduling link: ${INVENTED_GROUP.shareUrl} to find when all 5 of us are free this week!`;
    navigator.clipboard?.writeText(message);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleUpdateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleRunTimingFinder = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setFoundHighlight(true);
      setSelectedDay('Wednesday');
    }, 700);
  };

  const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200 mb-2">
          <Users className="w-3.5 h-3.5" />
          SCREEN 2: Group Setup & Availability Matrix
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Group Management & Team Availability
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Create your university group, share the link with all 5 members, and let the app pinpoint where schedules align.
        </p>
      </div>

      {/* SECTION 1: Create / Edit Group */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Create / Configure Group
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
            5 Students Enrolled
          </span>
        </div>

        <form onSubmit={handleUpdateGroup} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="group-name" className="block text-xs font-bold text-slate-700 mb-1">
                Group Project Name
              </label>
              <input
                id="group-name"
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                required
              />
            </div>

            <div>
              <label htmlFor="module-code" className="block text-xs font-bold text-slate-700 mb-1">
                Module Code & Name
              </label>
              <input
                id="module-code"
                type="text"
                value={moduleCode}
                onChange={(e) => setModuleCode(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="academic-week" className="block text-xs font-bold text-slate-700 mb-1">
                Scheduling Target
              </label>
              <input
                id="academic-week"
                type="text"
                value={academicWeek}
                onChange={(e) => setAcademicWeek(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Institution
              </label>
              <input
                type="text"
                value={INVENTED_GROUP.university}
                disabled
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-600 font-medium cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-500">
              {savedSuccess ? (
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Group settings updated successfully!
                </span>
              ) : (
                'Pre-configured for Week 3 Problem Set 1 submission'
              )}
            </span>

            <button
              id="btn-save-group"
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Save Group Settings
            </button>
          </div>
        </form>
      </div>

      {/* SECTION 2: Share Link to Group */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Share Group Link with Classmates
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Direct Access Code
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Send this link to your 5 group members. Once members open the link, their university timetables automatically sync with the group matrix.
        </p>

        {/* Share Link Bar */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
          <div className="flex-1 flex items-center px-3 py-2 text-xs sm:text-sm font-mono text-slate-800 break-all select-all">
            {INVENTED_GROUP.shareUrl}
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              id="btn-copy-group-link"
              type="button"
              onClick={handleCopyLink}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                copiedLink
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Copied Link!' : 'Copy Link'}</span>
            </button>

            <button
              id="btn-toggle-qr"
              type="button"
              onClick={() => setShowQr(!showQr)}
              title="Show QR Code"
              className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick QR Code Preview */}
        {showQr && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="inline-block p-3 bg-white rounded-lg border border-slate-300 shadow-xs">
              <div className="w-36 h-36 border-4 border-slate-900 border-dashed rounded-md flex flex-col items-center justify-center p-2 text-center bg-slate-100">
                <QrCode className="w-12 h-12 text-slate-700 mb-1" />
                <span className="text-[10px] font-mono text-slate-600 font-bold leading-tight">
                  {INVENTED_GROUP.shareCode}
                </span>
                <span className="text-[9px] text-slate-500 mt-0.5">Scan to sync availability</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Share code: <span className="font-mono font-bold text-slate-900">{INVENTED_GROUP.shareCode}</span>
            </p>
          </div>
        )}

        {/* Group Chat Share Helper */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            Tip: Share directly to your WhatsApp or Telegram project group.
          </div>
          <button
            id="btn-copy-chat-message"
            type="button"
            onClick={handleCopyInviteMessage}
            className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedText ? 'Copied invite message!' : 'Copy invite text for group chat'}</span>
          </button>
        </div>
      </div>

      {/* SECTION 3: All 5 Group Members' Availability Status */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                All Group Members' Availability
              </h3>
              <p className="text-xs text-slate-500">
                5 of 5 university classmates submitted their schedules
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            100% Synced
          </span>
        </div>

        {/* 5 Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {INVENTED_STUDENTS.map((member) => (
            <div
              key={member.id}
              id={`member-card-${member.id}`}
              className={`p-3 rounded-xl border transition-all ${
                highlightMemberId === member.id
                  ? 'border-blue-500 bg-blue-50/50 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border ${member.avatarBg}`}
                >
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {member.name}
                    </h4>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {member.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate font-mono">{member.email}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{member.submittedTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter / Highlight Controls */}
        <div className="flex items-center gap-2 pt-2 text-xs flex-wrap">
          <span className="font-semibold text-slate-600">Inspect member schedule:</span>
          <button
            id="filter-member-all"
            type="button"
            onClick={() => setHighlightMemberId('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer ${
              highlightMemberId === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All 5 Combined
          </button>
          {INVENTED_STUDENTS.map((m) => (
            <button
              id={`filter-member-${m.id}`}
              key={m.id}
              type="button"
              onClick={() => setHighlightMemberId(m.id)}
              className={`px-2 py-1 rounded-lg font-semibold cursor-pointer ${
                highlightMemberId === m.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {m.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 4: App Finds Timing Availability & Interactive Timetable Grid */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                App Finds Timing Availability
              </h3>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Automated overlap engine analyzes 5 student timetables to spot mutual free slots.
            </p>
          </div>

          <button
            id="btn-run-timing-finder"
            type="button"
            onClick={handleRunTimingFinder}
            disabled={isScanning}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Scanning 5 Timetables...' : 'Run Timing Availability Finder'}</span>
          </button>
        </div>

        {/* Found Highlight Alert */}
        {foundHighlight && (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <Check className="w-4 h-4" />
                Timing Availability Found!
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 mt-0.5">
                Highest overlap detected on <span className="font-bold">Wednesday, 2:00 PM – 4:00 PM (14:00 - 16:00)</span> where all 5 students have 0 clashes.
              </p>
            </div>
            <button
              id="btn-go-to-found-meeting"
              type="button"
              onClick={onGoToMeetingFound}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shrink-0 flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>View Meeting Found (Screen 3)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Day Selector for Timetable View */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
          <div className="flex gap-1.5">
            {days.map((day) => (
              <button
                id={`btn-day-tab-${day.toLowerCase()}`}
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500 shrink-0">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              All 5 Free
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              3-4 Free
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              0-2 Free
            </span>
          </div>
        </div>

        {/* Timetable Matrix Rows */}
        <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
          <div className="bg-slate-50 px-3 py-2 flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Time Slot ({selectedDay})</span>
            <span>Availability Across 5 Students</span>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
            {INVENTED_WEEKLY_GRID.map((row) => {
              const dayKey = selectedDay.toLowerCase() as 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
              const dayObj = row[dayKey];

              // Count free
              let freeCount = 0;
              INVENTED_STUDENTS.forEach((student) => {
                if (dayObj[student.id] === 'free') freeCount++;
              });

              const isAllFree = freeCount === 5;
              const isSelectedStudentFree =
                highlightMemberId === 'all'
                  ? isAllFree
                  : dayObj[highlightMemberId] === 'free';

              return (
                <div
                  key={row.timeKey}
                  className={`px-3 py-2 flex items-center justify-between text-xs transition-colors ${
                    isAllFree
                      ? 'bg-emerald-50/70 hover:bg-emerald-100/70'
                      : freeCount >= 3
                      ? 'bg-amber-50/30 hover:bg-amber-50/60'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${isAllFree ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span className={`font-mono font-bold ${isAllFree ? 'text-emerald-900 font-extrabold' : 'text-slate-700'}`}>
                      {row.timeSlot}
                    </span>
                    {isAllFree && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-200 text-emerald-900">
                        ALL 5 FREE!
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Visual dot for each member */}
                    <div className="flex gap-1">
                      {INVENTED_STUDENTS.map((student) => {
                        const status = dayObj[student.id];
                        const isStudentTarget = highlightMemberId === 'all' || highlightMemberId === student.id;
                        return (
                          <span
                            key={student.id}
                            title={`${student.name}: ${status === 'free' ? 'Free' : 'Busy/Class'}`}
                            className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center transition-opacity ${
                              isStudentTarget ? 'opacity-100' : 'opacity-30'
                            } ${
                              status === 'free'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-300 text-slate-700'
                            }`}
                          >
                            {student.initials[0]}
                          </span>
                        );
                      })}
                    </div>

                    <span
                      className={`font-semibold text-xs min-w-[55px] text-right ${
                        isAllFree
                          ? 'text-emerald-700 font-bold'
                          : freeCount >= 3
                          ? 'text-amber-700'
                          : 'text-slate-400'
                      }`}
                    >
                      {freeCount}/5 Free
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Link to Screen 1 and Screen 3 */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <button
            type="button"
            onClick={onGoToSlots}
            className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            ← See all 7 100% available slots in Screen 1
          </button>

          <button
            type="button"
            onClick={onGoToMeetingFound}
            className="font-bold text-slate-800 hover:text-black flex items-center gap-1 cursor-pointer"
          >
            View confirmed common meeting time in Screen 3 →
          </button>
        </div>
      </div>
    </div>
  );
};
