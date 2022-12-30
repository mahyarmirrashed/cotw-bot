# Project Roadmap

Minimum viable product:

- Three different slash commands available:
  1. `/chump`: nominate a Chump of the Week
     - `user`: Who you want to chump
     - `reason`: What they did that was "chumpy"
     - Bot will then respond in the following format: `<nominator> chumped <nominee> for "<reason>".`
  2. `/champ`: nominate a Champ of the Week
     - `user`: Who you want to champ
     - `reason`: What they did that was "champy"
     - Bot will then respond in the following format: `<nominator> champed <nominee> for "<reason>".`
  3. `/vote`: vote for this week's Champ/Chump of the week
     - Subcommand for `champ` or `chump`
     - `user`: Who you are voting for
     - Respond with ephemeral message to voter about who they voted for: `You have successfuly voted <target> as <champ/chump> of the week.`
  4. `/set`: set COTW channel for sending bot messages
     - `channel`: channel to set for sending messages
- Every Monday at noon UTC, new chump/champ cycle begins
  - Database stores, on per server basis, current list of nominees for chump/champ
    - List of vote targets and reasons should be ordered based on vote time
    - Have a another list (set) of eligible candidates to be voted as this week's chump/champ
  - List of vote targets gets flushed into designated channel in server's `cotw` channel
  1. Flush all of nominations from list into channel
  2. Create set of possible candidates for chump/champ (overrides previous set)
  3. Clear nominations lists (ready for upcoming week nominations)
- Assert required permissions on each cron job (sent weekly)
  - Need ability to send messages
  - Verify existence of stored channel identifier
    - If does not exist, flush both buffers (sorry, lost all previous week nominations)
- If error occurs when sending messages in channel, set channel is cleared with error message displayed to user

Future features:

- Add ability to group reasons together under one individual on Discord server
- Add link in `README.md` for adding Discord bot to your server
