# PROMPTS.md - [teamup]
**Student:** [Ayumi Liow] · **Course:** MGMT 6110 · **Problem Set 1**
**User sentence:** A [university student] opens this screen to [to see when their group can meet], and knows it worked when [time slots where everyone is available].
**Live link:** [https://mgmt6110-problem-set-1.vercel.app/]

---

## Prompt 1 - the master prompt
```
ROLE: ...
GOAL: ...
OUTPUT: ...
GUARDRAILS: ...
CONTEXT: ...
```
**What came back:** A running app, 7 files, preview loaded. It also added a
settings page I never asked for.
**What I changed next and why:** Added "no settings page" to the Guardrails, because
a missing guardrail is why it appeared.

---

## Prompt 2 - fix the empty state
```
When the list has no rows, show "Nothing due today" instead of an empty table.
Change nothing else.
```
**What came back:** Correct, one file touched.
**What I changed next and why:** Nothing. Moved to the next item on the Goal list.

---

## Prompt 3 - [and so on, one entry per prompt, in order]


# master prompt

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

# additional prompts

remove the location option. all meetings are conducted virtually via Zoom. change nothing else.

change the title: common free time slots this week. change nothing else.
change "Automatically calculated by comparing the full weekly timetables of all 5 team members." to
"See when your friends are free. Find a time that works." change nothing else.
add duration options of: 0.5hr and 1hr. remove 2hr. change nothing else.

Screen 1:
change the header "common free time slots this week" to "This Week's Time Slots". change nothing else.
Screen 2:
under student info, remove the "course, year", and replace with SMU email address (eg. darren.tan.2026@smu.edu.sg)

remove section. change nothing else.

add a subheading below this header.
with the text
"See when your friends are free. Find a time that works." change nothing else.

change to "Group Meeting Scheduler". change nothing else.
remove "Screen 1". keep screen headers as "Free Slots", "Group & Link ", and Meeting Found". Change nothing else.

Remove "SCREEN 1". Keep as "All 5 Students Available". Same for the rest of the screens. Change nothing else.
remove "in screen 2". change nothing else.

remove section. change nothing else.
