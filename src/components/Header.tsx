import React from 'react';
import { Calendar, Users, CheckCircle2, Share2, Clock } from 'lucide-react';
import { INVENTED_GROUP } from '../data';

interface HeaderProps {
  currentScreen: 1 | 2 | 3;
  onSelectScreen: (screen: 1 | 2 | 3) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onSelectScreen }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-3">
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                  Student Group Scheduler
                </h1>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {INVENTED_GROUP.academicWeek}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {INVENTED_GROUP.moduleCode} {INVENTED_GROUP.moduleName} • {INVENTED_GROUP.university}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              5/5 Members Synced
            </span>
          </div>
        </div>

        {/* Screen Switcher Navigation (Mobile Friendly) */}
        <nav className="flex items-center justify-between gap-1 pt-2.5" aria-label="Screen Navigation">
          <button
            id="nav-screen-1"
            type="button"
            onClick={() => onSelectScreen(1)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              currentScreen === 1
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 active:bg-slate-200'
            }`}
          >
            <Clock className="w-4 h-4 shrink-0" />
            <span className="truncate">Screen 1: Free Slots</span>
          </button>

          <button
            id="nav-screen-2"
            type="button"
            onClick={() => onSelectScreen(2)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              currentScreen === 2
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 active:bg-slate-200'
            }`}
          >
            <Share2 className="w-4 h-4 shrink-0" />
            <span className="truncate">Screen 2: Group & Link</span>
          </button>

          <button
            id="nav-screen-3"
            type="button"
            onClick={() => onSelectScreen(3)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              currentScreen === 3
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 active:bg-slate-200'
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span className="truncate">Screen 3: Meeting Found</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
