  module.exports = Object.freeze({
  TOKEN: '1312135143:AAHtKE4Bz9553OgdU3jf1EPLvjhfu39CqT8',
  ARIA_SECRET: 'pronoob',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  INDEX_DOMAIN: 'https://my.cloud11.workers.dev/', //Get it from here https://gdindex-code-builder.glitch.me/
  GDRIVE_PARENT_DIR_ID: '0AE7-MiwE83wKUk9PVA',
  SUDO_USERS: [882130858],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001403349196,-1001224267594],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 5000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@Moviesjsbot"
  },
  IS_TEAM_DRIVE: true
});
