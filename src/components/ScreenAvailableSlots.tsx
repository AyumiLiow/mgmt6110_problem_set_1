import React, { useState } from 'react';
import { Clock, Video, Sparkles, ArrowRight, Check, Filter } from 'lucide-react';
import { INVENTED_AVAILABLE_SLOTS, INVENTED_STUDENTS } from '../data';
import { CommonAvailableSlot } from '../types';

interface ScreenAvailableSlotsProps {
  onSelectSlot: (slot: CommonAvailableSlot) => void;
  onGoToGroup: () => void;
}

export const ScreenAvailableSlots: React.FC<ScreenAvailableSlotsProps> = ({
  onSelectSlot,
  onGoToGroup,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [minDuration, setMinDuration] = useState<string>('All');

  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const filteredSlots = INVENTED_AVAILABLE_SLOTS.filter((slot) => {
    if (selectedDay !== 'All' && slot.day !== selectedDay) return false;
    if (minDuration === '1.5hr+' && (slot.duration === '1 hour')) return false;
    if (minDuration === '2hr' && slot.duration !== '2 hours') return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Screen Title & High-level Context */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SCREEN 1: All 5 Students Available
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Singapore Time (SGT)
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Common Free Time Slots This Week
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1">
          Automatically calculated by comparing the full weekly timetables of all 5 team members.
        </p>

        {/* Member Avatar Summary Row */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Group members:</span>
            <div className="flex -space-x-1.5 overflow-hidden">
              {INVENTED_STUDENTS.map((student) => (
                <span
                  key={student.id}
                  title={`${student.name} (${student.major})`}
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ring-2 ring-white ${student.avatarBg}`}
                >
                  {student.initials}
                </span>
              ))}
            </div>
            <span className="text-xs font-medium text-slate-700 ml-1">
              (5 of 5 free in all listed slots)
            </span>
          </div>

          <button
            id="btn-view-member-schedules"
            type="button"
            onClick={onGoToGroup}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
          >
            View member schedules in Screen 2
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <span>Filter by Day:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {days.map((day) => (
            <button
              id={`filter-day-${day.toLowerCase()}`}
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                selectedDay === day
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="font-semibold text-slate-600">Duration:</span>
          {['All', '1.5hr+', '2hr'].map((dur) => (
            <button
              id={`filter-duration-${dur}`}
              key={dur}
              type="button"
              onClick={() => setMinDuration(dur)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                minDuration === dur
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {dur === 'All' ? 'Any Length' : dur}
            </button>
          ))}
          <span className="text-slate-400 ml-auto">
            Showing {filteredSlots.length} available {filteredSlots.length === 1 ? 'slot' : 'slots'}
          </span>
        </div>
      </div>

      {/* Slots List */}
      <div className="space-y-4">
        {filteredSlots.map((slot) => (
          <div
            key={slot.id}
            id={`slot-card-${slot.id}`}
            className={`relative bg-white rounded-2xl p-5 border transition-all hover:shadow-md ${
              slot.isOptimalChoice
                ? 'border-blue-400 ring-2 ring-blue-100'
                : 'border-slate-200'
            }`}
          >
            {/* Top Badge Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                  {slot.day}, {slot.dateStr}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  {slot.availableCount}/{slot.totalMembers} Students Free
                </span>
              </div>

              {slot.isOptimalChoice && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Highest Recommended
                </span>
              )}
            </div>

            {/* Time and Duration */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {slot.startTime} – {slot.endTime}
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {slot.duration}
                </span>
              </div>

              <div className="text-xs font-medium text-slate-500">
                All 5 members have 0 clashes
              </div>
            </div>

            {/* Format & Notes */}
            <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <Video className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold text-blue-950">Virtual via Zoom</span>
              </div>
              <p className="text-xs text-slate-500 italic pl-6">
                "{slot.notes}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <span>Free members:</span>
                <span className="font-medium text-slate-700">Li Ting, Darren, Farhan, Chloe, Marcus</span>
              </div>

              <button
                id={`btn-select-slot-${slot.id}`}
                type="button"
                onClick={() => onSelectSlot(slot)}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  slot.isOptimalChoice
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs active:scale-[0.98]'
                    : 'bg-slate-900 hover:bg-black text-white active:scale-[0.98]'
                }`}
              >
                <span>Confirm This Meeting Time</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {filteredSlots.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 p-6">
            <p className="text-sm font-semibold text-slate-700">No slots match your selected filter.</p>
            <button
              type="button"
              onClick={() => { setSelectedDay('All'); setMinDuration('All'); }}
              className="mt-2 text-xs font-semibold text-blue-600 underline cursor-pointer"
            >
              Reset filters to see all 7 free slots
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
