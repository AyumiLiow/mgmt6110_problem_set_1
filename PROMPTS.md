# PROMPTS.md - [teamup]
**Student:** Ayumi Liow · **Course:** MGMT 6110 · **Problem Set 1**
**User sentence:** A [university student] opens this screen to [to see when their group can meet], and knows it worked when [time slots where everyone is available].
**Live link:** [https://mgmt6110-problem-set-1.vercel.app/]

---

## Prompt 1 - the master prompt
```
ROLE: You are a senior front-end developer building a React web app.

GOAL: Build the front end of [a student scheduling app], a web product for [university students, singapore, 5 students]. Their job on this
product is [automatically finds when everyone is free this week]. Screens:
[SCREEN 1: time slots where everyone is available
[SCREEN 2: create a group, share link to group (all group memeber's availability appears on the app, app finds timing availability
[SCREEN 3: common meeting time found

OUTPUT: A running app. Keep every invented value in ONE data file of its own, with
at least [N] rows, so the screen looks real. One component per screen or section.
Move between screens without reloading the page. Readable on a phone at arm's
length. When you are done, list the files you created and what each one holds.

GUARDRAILS: Screens and invented data only. Do NOT call the Gemini API or any
other model. Do NOT call any outside service or fetch from any URL. No database,
no login, no user accounts, no analytics. No features I did not list. No real
company's name, logo, or trademark. Invented names and numbers only, nothing
confidential.

CONTEXT: Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU.
Built in Google AI Studio, shared as a link, and opened on a phone by classmates
in Week 3. I am not a programmer: when you make a choice I did not specify, say
so in one line rather than burying it.
```
**What came back:** A running app, 9 files, preview loaded. It also an interactive filter and calendar export that I never asked for.
**What I changed next and why:** Master prompt. 

---

## Prompt 2 - Virtual Meeting 
```
remove the location option. all meetings are conducted virtually via Zoom. change nothing else.
```
**What came back:** Correct, 4 file touched. Meeting platform edit to display "Virtual via Zoom".
**What I changed next and why:**  Removed the "Location" options on the available time slots, based on the assumption that all group meetings are conducted online. 

---

## Prompt 3 - Headers, meeting duration
```
change the title: common free time slots this week. change nothing else.
change "Automatically calculated by comparing the full weekly timetables of all 5 team members." to
"See when your friends are free. Find a time that works." change nothing else.
add duration options of: 0.5hr and 1hr. remove 2hr. change nothing else.
```
**What came back:** Correct, 2 file touched. Duration filter options updated. 
**What I changed next and why:** Virtual group meetings typically lasts 0.5 - 1.5 hours. Any more than 1.5 hours, meeting becomes sub-optimal and less productive. 

---

## Prompt 3 - Screen headers, minor edits
```
Screen 1:
change the header "common free time slots this week" to "This Week's Time Slots". change nothing else.
Screen 2:
under student info, remove the "course, year", and replace with SMU email address (eg. darren.tan.2026@smu.edu.sg)
```
**What came back:** Correct, 4 files touched. Header updated. Generated standardized SMU email addresses for remaining group members following the format of my example (first.last.year@smu.edu.sg), which is helpful. 
**What I changed next and why:** Student information of "Course" and "Year of Studies" is less relevant for the meeting and unrelated to scheduling since students are taking the same module. 
---

## Prompt 4 - Minor edits 
```
remove section. change nothing else.

```
**What came back:** Correct, 1 file touched. 
**What I changed next and why:** minor aesthetic edit, too wordy. 

---

## Prompt 5 - More minor edits
```
add a subheading below this header.
with the text
"See when your friends are free. Find a time that works." change nothing else.
```
**What came back:** Correct, 1 files touched. Sub-header updated. 
**What I changed next and why:** More description to the header of "This Week's Time Slots", to give users a better understanding of the app's objective. 

---

## Prompt 6 - Title edit (main app header) 
```
change to "Group Meeting Scheduler". change nothing else.
remove "Screen 1". keep screen headers as "Free Slots", "Group & Link ", and Meeting Found". Change nothing else.

Remove "SCREEN 1". Keep as "All 5 Students Available". Same for the rest of the screens. Change nothing else.
remove "in screen 2". change nothing else.

remove section. change nothing else.
```
**What came back:** Correct, 1 files touched. Header title updated. Navigation labels cleaned. 
**What I changed next and why:** Removed placeholders eg. "Screen 1", to keep interface more simple and digestible for users. 
