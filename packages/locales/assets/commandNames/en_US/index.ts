export default {
  // Ping
  ping: 'ping',

  // AFK
  afk: 'afk on | off',
  'afk/on': 'on',
  'afk/off': 'off',
  'afk/reason': 'reason',

  // Poll
  poll: 'poll',
  'poll/create': 'create',
  'poll/create/permanent': 'permanent',
  'poll/create/option1': 'option1',
  'poll/create/option2': 'option2',
  'poll/create/option3': 'option3',
  'poll/create/option4': 'option4',
  'poll/create/option5': 'option5',
  'poll/create/option6': 'option6',
  'poll/create/option7': 'option7',
  'poll/create/option8': 'option8',
  'poll/create/option9': 'option9',

  // Help
  help: 'help',

  // User
  user: 'user avatar | info | banner',
  'user/info': 'info',
  'user/avatar': 'avatar',
  'user/banner': 'banner',
  'user/info/user': 'user',
  'user/avatar/user': 'user',
  'user/banner/user': 'user',

  // Server
  server: 'server avatar | icon | banner',
  'server/info': 'info',
  'server/icon': 'icon',
  'server/banner': 'banner',

  // Bot
  bot: 'bot info | convidar | votar',
  'bot/invite': 'invite',
  'bot/vote': 'vote',

  // Text
  text: 'text emojify | vaporwave | claps | invert',
  'text/name': 'text',
  'text/claps': 'claps',
  'text/invert': 'invert',

  // Config
  config: 'config | suggestions',
  'config/suggestions': 'suggestions',

  // Suggestions
  suggestions: 'suggestions',
  suggestion: 'suggestion | send | edit | accept | deny',
  'suggestion/name': 'suggestion',
  'suggestion/send': 'send',
  'suggestion/edit': 'edit',
  'suggestion/accept': 'accept',
  'suggestion/accept/reason': 'reason',
  'suggestion/deny': 'deny',
  'suggestion/deny/reason': 'reason',

  // Ban
  ban: 'ban user | info | list',
  'ban/name': 'ban',
  'ban/user': 'user',
  'ban/delete_messages': 'delete_messages',
  'ban/delete_messages/day': 'day',
  'ban/delete_messages/days': 'days',
  'ban/reason': 'reason',
  'ban/info': 'info',
  'ban/info/user': 'user',
  'ban/remove': 'remove',
  'ban/remove/user': 'user',
  'ban/remove/reason': 'reason',
  'ban/list': 'list',

  // Wikipedia
  wikipedia: 'wikipedia',
  'wikipedia/search': 'search',

  // Mute
  mute: 'mute',
  'mute/user': 'user',
  'mute/time': 'time',
  'mute/time/minute': 'minute',
  'mute/time/minutes': 'minutes',
  'mute/time/day': 'day',
  'mute/time/days': 'days',
  'mute/time/hour': 'hour',
  'mute/time/hours': 'hours',
  'mute/reason': 'reason',

  // Kick
  kick: 'kick',
  'kick/user': 'user',
  'kick/reason': 'reason',

  // Animal
  animal: 'animal dog | koala | bunny | cat | duck | fox',
  'animal/dog': 'dog',
  'animal/koala': 'koala',
  'animal/bunny': 'bunny',
  'animal/cat': 'cat',
  'animal/duck': 'duck',
  'animal/fox': 'fox',

  // Giveaway
  giveaway: 'giveaway',
  'giveaway/create': 'create',
  'giveaway/create/title': 'title',
  'giveaway/create/winners': 'winners',
  'giveaway/create/duration': 'duration',
  'giveaway/create/description': 'description',
  'giveaway/create/channel': 'channel',
  'giveaway/end': 'end',
  'giveaway/end/id': 'id_giveaway',

  // Lockdown
  lockdown: 'lockdown',
  'lockdown/enable': 'enable',
  'lockdown/disable': 'disable',
  'lockdown/schedule': 'schedule',
  'lockdown/schedule/unlockdown': 'unlock',
  'lockdown/schedule/unlockdown/duration': 'duration',

  // Reminder
  remind: 'remind',
  'remind/create': 'create',
  'remind/create/description': 'description',
  'remind/create/duration': 'duration',
  'remind/delete': 'delete',
  'remind/delete/reminder': 'reminder',
  'remind/info': 'info',
  'remind/info/reminder': 'reminder',

  // Button Roles
  buttonroles: 'buttonroles',
  'buttonroles/create': 'create',
  'buttonroles/create/type': 'type',
  'buttonroles/create/choice/add': 'Add - Just add the role to the user',
  'buttonroles/create/choice/remove': 'Remove - Just remove the user role',
  'buttonroles/create/choice/toggle': 'Toggle - Add or Remove User roles',
  'buttonroles/create/choice/danger': 'Red',
  'buttonroles/create/choice/primary': 'Blue',
  'buttonroles/create/choice/secondary': 'Gray',
  'buttonroles/create/choice/success': 'Green',
  'buttonroles/create/embed/description': 'description',
  'buttonroles/create/button/label': 'label',
  'buttonroles/create/role': 'role',
  'buttonroles/create/role2': 'role2',
  'buttonroles/create/role3': 'role3',
  'buttonroles/create/role4': 'role4',
  'buttonroles/create/role5': 'role5'
} as const;
