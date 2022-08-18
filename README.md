# WoT-Missing-Damage-SE-Widget
A StreamElements overlay which calculates missing dmg towards a desired dpg goal in World of Tanks.

## Install guide
1. Open your stream overlay and create a new Custom widget in Static / Custom section.
2. In widget settings open editor and paste the contents of source files in corresponding tabs.
   - [widget.html](widget.html) -> HTML
   - [widget.css](widget.css) -> CSS
   - [widget.js](widget.js) -> JS
   - [widget.json](widget.json) -> FIELDS
3. Resize and customize the widget container; fill in the required fields.
   - Find out tank ID as a part of a corresponding tankopedia link, ex.: https://worldoftanks.eu/en/tankopedia/57937-GB98_T95_FV4201_Chieftain/
   - Find out user ID as a part corresponding player page link, ex.: https://worldoftanks.eu/en/community/accounts/511769278-zelvoun222/
4. Get yourself a WG API ID.
   - Head to https://developers.wargaming.net/ and create yourself a new mobile application.
   - Copy your generated app ID.
