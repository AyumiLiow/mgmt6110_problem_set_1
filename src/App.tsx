/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScreenAvailableSlots } from './components/ScreenAvailableSlots';
import { ScreenCreateAndShare } from './components/ScreenCreateAndShare';
import { ScreenMeetingFound } from './components/ScreenMeetingFound';
import { CommonAvailableSlot } from './types';
import { Clock, Share2, Users, Info } from 'lucide-react';
import { INVENTED_GROUP } from './data';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<1 | 2 | 3>(1);
  const [selectedSlotOverride, setSelectedSlotOverride] = useState<CommonAvailableSlot | null>(null);

  const handleSelectSlotFromScreen1 = (slot: CommonAvailableSlot) => {
    setSelectedSlotOverride(slot);
    setCurrentScreen(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchScreen = (screen: 1 | 2 | 3) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans pb-24 sm:pb-12">
      {/* Persistent Sticky Top Header */}
      <Header
        currentScreen={currentScreen}
        onSelectScreen={handleSwitchScreen}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-5">
        {/* Context & Week 3 Student Banner */}
        <div className="mb-4 px-3.5 py-2.5 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-blue-900 gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-medium">
              <strong>MGMT 6110 Human-AI Collaboration:</strong> 5-student group scheduling prototype (Week 3).
            </span>
          </div>
          <span className="hidden sm:inline font-mono font-bold text-blue-700 shrink-0">
            {INVENTED_GROUP.shareCode}
          </span>
        </div>

        {/* Screen 1: Available Time Slots */}
        {currentScreen === 1 && (
          <ScreenAvailableSlots
            onSelectSlot={handleSelectSlotFromScreen1}
            onGoToGroup={() => handleSwitchScreen(2)}
          />
        )}

        {/* Screen 2: Create Group, Share Link, Member Availability Matrix & Timing Finder */}
        {currentScreen === 2 && (
          <ScreenCreateAndShare
            onGoToMeetingFound={() => handleSwitchScreen(3)}
            onGoToSlots={() => handleSwitchScreen(1)}
          />
        )}

        {/* Screen 3: Common Meeting Time Found */}
        {currentScreen === 3 && (
          <ScreenMeetingFound
            selectedSlotOverride={selectedSlotOverride}
            onGoToSlots={() => handleSwitchScreen(1)}
            onGoToGroup={() => handleSwitchScreen(2)}
          />
        )}
      </main>

      {/* Persistent Mobile Bottom Navigation Bar (Thumb-friendly on phones at arm's length) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-4 z-40 sm:hidden shadow-lg">
        <div className="flex items-center justify-around">
          <button
            id="mobile-nav-screen-1"
            type="button"
            onClick={() => handleSwitchScreen(1)}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              currentScreen === 1
                ? 'text-blue-600 scale-105'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Clock className="w-5 h-5" />
            <span>1. Free Slots</span>
          </button>

          <button
            id="mobile-nav-screen-2"
            type="button"
            onClick={() => handleSwitchScreen(2)}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              currentScreen === 2
                ? 'text-blue-600 scale-105'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Share2 className="w-5 h-5" />
            <span>2. Group & Link</span>
          </button>

          <button
            id="mobile-nav-screen-3"
            type="button"
            onClick={() => handleSwitchScreen(3)}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              currentScreen === 3
                ? 'text-blue-600 scale-105'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>3. Meeting Found</span>
          </button>
        </div>
      </div>
    </div>
  );
}
