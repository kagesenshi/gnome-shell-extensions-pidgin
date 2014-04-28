/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

/*
 * Pidgin GnomeShell Integration.
 *
 * Credits to the author of Gajim extension as this extension code was modified
 * from it.
 * 
 * Merges in code from the Pidgin Persistent Notification extension: https://github.com/githubnemo/Pidgin-Persistent-Notification/
 *
 */

/** Taken from php.js **/
function get_html_translation_table (table, quote_style) {
    var entities = {},
        hash_map = {},
        decimal = 0,
        symbol = '';
    var constMappingTable = {},
        constMappingQuoteStyle = {};
    var useTable = {},
        useQuoteStyle = {};

    // Translate arguments
    constMappingTable[0] = 'HTML_SPECIALCHARS';
    constMappingTable[1] = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: " + useTable + ' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';


    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }

    return hash_map;
}

/** Taken from php.js **/
function html_entity_decode (string, quote_style) {

    var hash_map = {},
        symbol = '',
        tmp_str = '',
        entity = '';
    tmp_str = string.toString();

    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }

    delete(hash_map['&']);
    hash_map['&'] = '&amp;';

    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(entity).join(symbol);
    }
    tmp_str = tmp_str.split('&#039;').join("'");

    return tmp_str;
}

const Me = imports.misc.extensionUtils.getCurrentExtension();
const DBusIface = Me.imports.dbus;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Lang = imports.lang;
const St = imports.gi.St;
const Main = imports.ui.main;
const MessageTray = imports.ui.messageTray;
const Shell = imports.gi.Shell;
const TelepathyClient = imports.ui.components.telepathyClient;
const Tp = imports.gi.TelepathyGLib;
const PURPLE_MESSAGE_SYSTEM = 0x4;
const PURPLE_CONV_UPDATE_UNSEEN = 4;
const ICON_SIZE = MessageTray.Source.prototype.SOURCE_ICON_SIZE;

const Gettext = imports.gettext.domain('gnome-shell-extensions');
const _ = Gettext.gettext;
//let UserMenuButton = imports.ui.main.panel.statusArea.userMenu;

function wrappedText(text, sender, timestamp, direction) {
    let currentTime = (Date.now() / 1000);
    let type = Tp.ChannelTextMessageType.NORMAL;

    if (timestamp == null) {
        timestamp = currentTime;
    }

    text = _fixText(text);
    if (text.substr(0, 3) == '/me' && direction != TelepathyClient.NotificationDirection.SENT) {
        text = text.substr(4);
        type = Tp.ChannelTextMessageType.ACTION;
    }

    return {
        text: text,
            messageType: type,
            sender: sender,
            timestamp: timestamp,
            direction: direction
    };
}

function _fixText(text) {
    // remove all tags
    let _text = text.replace(/<\/?[^>]+(>|$)/g, "");
    _text = _text.replace(/&lt;/g, "<");
    _text = _text.replace(/&gt;/g, ">");
    _text = _text.replace(/&apos;/g, "'");
    _text = _text.replace(/&quot;/g, "\"");
    _text = _text.replace(/&amp;/g, "&");

    return _text;
}

function Source(client, account, author, initialMessage, conversation, flag) {
    this._init(client, account, author, initialMessage, conversation, flag);
}

Source.prototype = {
    __proto__: MessageTray.Source.prototype,

    _init: function(client, account, author, initialMessage, conversation, flag) {
        let proxy = client.proxy();
        this._client = client;
        this._author = author;
        this._authors = {};
        this._authors[author] = true;
        this._account = account;
        this._conversation = conversation;
        this._blockedMsg = [account, author, initialMessage, conversation, flag];
        this._iconUri = null;
        this._presence = 'online';
        this._chatState = Tp.ChannelChatState.ACTIVE;
        this._pendingMessages = [];
        this._isChat = false;
        proxy.PurpleConversationGetTitleRemote(this._conversation, Lang.bind(this, this._async_set_title));
    },

    _async_set_title: function (title) {
        title = title[0];
        let proxy = this._client.proxy();
        this.title = _fixText(title);
        if(this._isChat)
            proxy.PurpleConvChatRemote(this._conversation, Lang.bind(this, this._async_set_conversation_id));
        else
            proxy.PurpleConvImRemote(this._conversation, Lang.bind(this, this._async_set_conversation_id));
    },

    /**conversation_id : is a conversation_im or conversation_chat **/
    _async_set_conversation_id: function (conversation_id) {
        this._conversation_id = conversation_id;
        this._get_icon_begin();
    },

    _get_icon_begin : function() {
        this._get_icon_end();
    },

    _get_icon_end: function () {
        this._start();
    },

    _start: function () {

        this._notification = new TelepathyClient.ChatNotification(this);
        this._notification.setUrgency(MessageTray.Urgency.HIGH);

        let proxy = this._client.proxy();
        MessageTray.Source.prototype._init.call(this, this.title);

        this._setSummaryIcon(this.createNotificationIcon());

        Main.messageTray.add(this);
        this.pushNotification(this._notification);

        this._notification.connect('clicked', Lang.bind(this, this._flushAttention));
        this.connect('summary-item-clicked', Lang.bind(this, this._flushAttention));

        //display Blocked Message
        this._onDisplayedMessage("","",this._blockedMsg);
        this._blockedMsg = null;

        this._connectSignals();

        this._deleteConversationId = proxy.connectSignal('DeletingConversation', Lang.bind(this, this._onDeleteConversation));
        this._conversationUpdatedId = proxy.connectSignal('ConversationUpdated', Lang.bind(this, this._onConversationUpdated));

        this.notify();
    },

    destroy: function () {
        let proxy = this._client.proxy();
        proxy.disconnectSignal(this._deleteConversationId);
        proxy.disconnectSignal(this._conversationUpdatedId);
        MessageTray.Source.prototype.destroy.call(this);
    },

    setChatState: function (state) {
        if (state != this._chatState) {
            this._chatState = state;
            let proxy = this._client.proxy();
            let pidginstate = 0;
            if (state == Tp.ChannelChatState.PAUSED) {
                pidginstate = 1;
            } else if (state == Tp.ChannelChatState.COMPOSING) {
                pidginstate = 2;
            }
            // no idea why i didnt see typing state, but lets leave this here for now
            // xiehuc: disable here, for chatroom message
            //proxy.PurpleConvImSetTypingStateRemote(this._conversation_id, pidginstate);
        }
    },

    _flushAttention: function () {
        let proxy = this._client.proxy();
        proxy.PurpleConversationUpdateRemote(this._conversation, 4);
        this._flushPendingMessages();
    },

    _onConversationUpdated: function (emitter, conversation, flags) {
        if (conversation != this._conversation) return;

        const PURPLE_CONV_UPDATE_UNSEEN = 4;
        if(flags & PURPLE_CONV_UPDATE_UNSEEN) {
            this._flushPendingMessages();
            this._removePersistentNotification();
        }
    },

    createNotificationIcon: function() {
        let iconBox = new St.Bin({ style_class: 'avatar-box' });
        iconBox._size = ICON_SIZE;

        if (!this._iconUri) {
            iconBox.child = new St.Icon({ icon_name: 'avatar-default',
                //icon_type: St.IconType.FULLCOLOR,
                icon_size: iconBox._size 
            });
        } else {
            let textureCache = St.TextureCache.get_default();
            let scale = 1;
            iconBox.child = textureCache.load_uri_async(this._iconUri, iconBox._size, iconBox._size, scale);
        }
        return iconBox;
    },

    createIcon: function() {
        let iconBox = new St.Bin();
        iconBox.child = new St.Icon({ icon_name: 'avatar-default', icon_size: 24 });
        return iconBox;
    },

    createSecondaryIcon: function() {
        let iconBox = new St.Bin();
        iconBox.child = new St.Icon({ style_class: 'secondary-icon' });
        iconBox.child.icon_name = 'user-available';
        return iconBox;
    },

    // /usr/share/gnome-shell/js/ui/messageTray.js
    // /usr/share/gnome-shell/js/ui/components/telepathyClient.js
    getSecondaryIcon: function() {
        let iconName = 'user-available';
        return new Gio.ThemedIcon({ name: iconName });
    },


    open: function(notification) {
        let proxy = this._client.proxy();
        proxy.PurpleConversationPresentRemote(this._conversation);
    },

    notify: function () {
        let proxy = this._client.proxy();
        proxy.PurpleConversationHasFocusRemote(this._conversation, Lang.bind(this, this._async_notify));
    },

    _async_notify: function (stats) {
        if (!stats || stats == 0) {
            this._notification.scrollTo(St.Side.BOTTOM);
            MessageTray.Source.prototype.notify.call(this, this._notification);
        }
    },

    respond: function(text) {
        let proxy = this._client.proxy();
        let _text = GLib.markup_escape_text(text, -1);
        if(this._isChat)
            proxy.PurpleConvChatSendRemote(this._conversation_id, _text);
        else
            proxy.PurpleConvImSendRemote(this._conversation_id, _text);
        this._flushAttention();
    },

    _onDeleteConversation: function(emitter, conversation) {
        if (conversation != this._conversation) return;
        this.destroy();
    },


    _addPersistentNotification: function() {
        //UserMenuButton._iconBox.add_style_class_name('pidgin-notification');
    },

    _removePersistentNotification: function() {
        //UserMenuButton._iconBox.remove_style_class_name('pidgin-notification');
    },

    /*
       _onConversationUpdated: function(emitter, _conv, flags) {
       if(flags & PURPLE_CONV_UPDATE_UNSEEN) {
       this._removePersistentNotification();
       }
       },
       */
    _addPendingMessage: function (message) {
        this._pendingMessages.push(message);
        this._updateCount();
        this._addPersistentNotification();
    },

    _updateCount: function () {
        //this._setCount(this._pendingMessages.length, this._pendingMessages.length > 0);
        //this.countUpdated();
    },

    _flushPendingMessages: function() {
        this._pendingMessages = [];
        this._updateCount();
    }

}


function ImSource(client, account, author, initialMessage, conversation, flag) {
    this._init(client, account, author, initialMessage, conversation, flag);
}

ImSource.prototype = {
    __proto__ : Source.prototype,

    _init : function(client, account, author, initialMessage, conversation, flag) {
        Source.prototype._init.call(this, client, account, author, initialMessage, conversation, flag);
        this._isChat = false;
    },

    _connectSignals : function() {
        let proxy = this._client.proxy();
        this._buddyStatusChangeId = proxy.connectSignal('BuddyStatusChanged', Lang.bind(this, this._onBuddyStatusChange));
        this._buddySignedOffId = proxy.connectSignal('BuddySignedOff', Lang.bind(this, this._onBuddySignedOff));
        this._buddySignedOnId = proxy.connectSignal('BuddySignedOn', Lang.bind(this, this._onBuddySignedOn));
        this._messageDisplayedId = proxy.connectSignal('DisplayedImMsg', Lang.bind(this, this._onDisplayedMessage));
    },

    destroy : function() {
        let proxy = this._client.proxy();
        proxy.disconnectSignal(this._buddyStatusChangeId);
        proxy.disconnectSignal(this._buddySignedOffId);
        proxy.disconnectSignal(this._buddySignedOnId);
        proxy.disconnectSignal(this._messageDisplayedId);
        Source.prototype.destroy.call(this);
    },

    _get_icon_begin : function() {
        let proxy = this._client.proxy();
        proxy.PurpleFindBuddyRemote(this._account, this._author, Lang.bind(this, this._async_set_author_buddy))
    },

    _async_set_author_buddy: function (author_buddy) {
        let proxy = this._client.proxy();
        this._author_buddy = author_buddy;
        proxy.PurpleBuddyGetIconRemote(this._author_buddy, Lang.bind(this, this._async_get_icon));
    },

    _async_get_icon: function(iconobj) {
        let proxy = this._client.proxy();
        if (iconobj && iconobj != 0) 
            proxy.PurpleBuddyIconGetFullPathRemote(iconobj, Lang.bind(this, this._async_get_icon_path));
        else
            this._get_icon_end();
    },

    _async_get_icon_path: function(iconpath) {
        if(iconpath)
            this._iconUri = 'file://' + iconpath;
        this._get_icon_end();
    },

    _onBuddyStatusChange: function (emitter, buddy, old_status_id, new_status_id) {
        if (!this.title) return;

        let self = this;

        let proxy = this._client.proxy();

        if (buddy != this._author_buddy) return;

        let presenceInfo = {};

        let notify_presence = function () {

            let presence = presenceInfo.presence;
            let message = presenceInfo.message;
            if (self._presence == presence) return;

            let title = self.title;
            let presenceMessage, shouldNotify;
            if (presence == "away") {
                presenceMessage = _("%s is away.").format(title);
            } else if (presence == "available") {
                presenceMessage = _("%s is available.").format(title);
            } else if (presence == "dnd") {
                presenceMessage = _("%s is busy.").format(title);
            } else {
                return;
            }

            self._presence = presence;

            if (message)
                presenceMessage += ' <i>(' + _fixText(message) + ')</i>';

            self._notification.appendPresence(presenceMessage, false);
        };

        let set_presence_message = function (message) {
            presenceInfo.message = message;
            notify_presence();
        };
        let set_presence = function (presence) {
            presenceInfo.presence = presence;
            proxy.PurpleStatusGetAttrStringRemote(new_status_id, 'message', set_presence_message);
        };

        proxy.PurpleStatusGetIdRemote(new_status_id, set_presence);

    },

    _onBuddySignedOff: function(emitter, buddy) {
        if (buddy != this._author_buddy) return;

        let shouldNotify = this._presence != 'offline';
        let presenceMessage = _("%s is offline.").format(this.title);
        this._notification.appendPresence(presenceMessage, shouldNotify);
        this._presence = 'offline';
        if (shouldNotify) 
            this.notify();
    },

    _onBuddySignedOn: function(emitter, buddy) {
        if (buddy != this._author_buddy) return;

        let shouldNotify = this._presence == 'offline';
        let presenceMessage = _("%s is online.").format(this.title);
        this._notification.appendPresence(presenceMessage, shouldNotify);
        this._presence = 'online';
        if (shouldNotify) 
            this.notify();
    },

    _onDisplayedMessage: function(emitter, something, details) {
        var account = details[0];
        var author = details[1];
        var text = details[2];
        var conversation = details[3];
        var flag = details[4];
        if (text && (this._conversation == conversation)) {
            let direction = null;
            if (flag == 1) {
                direction = TelepathyClient.NotificationDirection.SENT;
            } else if (flag == 2) {
                direction = TelepathyClient.NotificationDirection.RECEIVED;
            }

            let message = wrappedText(text, author, null, direction);

            if (direction != null) {
                this._notification.appendMessage(message, false);
            }

            if (direction == TelepathyClient.NotificationDirection.RECEIVED) {
                this._addPendingMessage(message);
                this.notify();
            } else if (direction == TelepathyClient.NotificationDirection.SENT) {
                this._flushPendingMessages();
                this.notify();
            }
        }

    },

    _addPersistentNotification: function() {
      //UserMenuButton._iconBox.add_style_class_name('pidgin-notification');
    },

    _removePersistentNotification: function() {
      //UserMenuButton._iconBox.remove_style_class_name('pidgin-notification');
    },
    
    _addPendingMessage: function (message) {
        this._pendingMessages.push(message);
        this._updateCount();
        this._addPersistentNotification();
    },

    _updateCount: function () {
        //this._setCount(this._pendingMessages.length, this._pendingMessages.length > 0);
        //this.countUpdated();
    },

    _flushPendingMessages: function() {
        this._pendingMessages = [];
        this._updateCount();
    }

}

function ChatroomSource(client, account, author, initialMessage, conversation, flag) {
    this._init(client, account, author, initialMessage, conversation, flag);
}
ChatroomSource.prototype = {
    __proto__: Source.prototype,

    _init: function(client, account, author, initialMessage, conversation, flag) {
        Source.prototype._init.call(this, client, account, author, initialMessage, conversation, flag);
        this._cbNames = {};
        this._cbBlockedMsg = {};
        this._isChat = true;
        this._iconCacheDir = null;
    },

    _connectSignals : function() {
        let proxy = this._client.proxy();
        this._messageDisplayedId = proxy.connectSignal('DisplayedChatMsg', 
                Lang.bind(this, this._onDisplayedMessage));
    },

    _destroy : function() {
        let proxy = this._client.proxy();
        proxy.disconnectSignal(this._messageDisplayedId);
        Source.prototype.destroy.call(this);
    },

    _get_icon_begin: function() {
        let proxy = this._client.proxy();
        proxy.PurpleBuddyIconsGetCacheDirRemote(Lang.bind(this, this._async_get_icon_cache_dir));
    },

    _async_get_icon_cache_dir: function(dir) {
        let proxy = this._client.proxy();
        this._iconCacheDir = dir;
        if(!dir){
            this._get_icon_end();
            return;
        }
        proxy.PurpleConversationGetNameRemote(this._conversation, Lang.bind(this, this._async_get_chat_name));
    },

    _async_get_chat_name: function(chat_name) {
        let proxy = this._client.proxy();
        proxy.PurpleBlistFindChatRemote(this._account, chat_name[0], Lang.bind(this, this._async_get_chat_node));
    },

    _async_get_chat_node: function(chat_node) {
        let proxy = this._client.proxy();
        proxy.PurpleBlistNodeGetStringRemote(chat_node, "custom_buddy_icon", Lang.bind(this, this._get_icon_file_name));
    },

    _get_icon_file_name: function(file_name) {
        if(file_name && file_name != ""){
            this._iconUri = "file://"+this._iconCacheDir+"/"+file_name;
            log(this._iconUri);
        }
        this._get_icon_end();
    },

    _async_find_buddy : function(buddy, something, author) {
        let proxy = this._client.proxy();
        //if we didn't find the buddy, the cb is not our friends, so it's name is display name
        if(buddy==0){
            this._async_set_cb_name(author, "", author);
            return;
        }
        proxy.PurpleBuddyGetAliasRemote(buddy, Lang.bind(this, this._async_set_cb_name, author));
    },

    _async_set_cb_name : function(alias, something, author) {
        this._cbNames[author] = alias;
        this._onDisplayedMessage("","",this._cbBlockedMsg[author]);
        this._cbBlockedMsg[author] = null;
    },

    _onDisplayedMessage : function(emitter, something, details) {
        var account = details[0];
        var author = details[1];
        var text = details[2];
        var conversation = details[3];
        var flag = details[4];
        var author_nick = null;

        if(flag==2 && this._cbNames[author] == undefined){
            let proxy = this._client.proxy();
            this._cbBlockedMsg[author] = details;
            proxy.PurpleFindBuddyRemote(this._account, author, Lang.bind(this, this._async_find_buddy, author));
            return;
        }
        if (text && (this._conversation == conversation)) {
            let direction = null;
            if (flag == 1) {
                direction = TelepathyClient.NotificationDirection.SENT;
                author_nick = "me";
            } else if (flag == 2) {
                direction = TelepathyClient.NotificationDirection.RECEIVED;
                author_nick = this._cbNames[author];
            }

            let message = wrappedText('['+author_nick+']: '+text, author, null, direction);

            if (direction != null) {
                this._notification.appendMessage(message, false);
            }

            if (direction == TelepathyClient.NotificationDirection.RECEIVED) {
                this._addPendingMessage(message);
                this.notify();
            } else if (direction == TelepathyClient.NotificationDirection.SENT) {
                this._flushPendingMessages();
                this.notify();
            }
        }
    },

}

const Pidgin = Gio.DBusProxy.makeProxyWrapper(DBusIface.PidginIface);

function PidginClient() {
    this._init();
}

PidginClient.prototype = {
    _init: function() {
        this._sources = {};
        this._chatroomsources = {};
        this._proxy = new Pidgin(Gio.DBus.session, 'im.pidgin.purple.PurpleService', '/im/pidgin/purple/PurpleObject');
        this._displayedImMsgId = 0;
        this._displayedChatMsgId = 0;
        this._setAvailable = 0;
        this._setUnavailable = 0;
    },

    enable: function() {
        this._displayedImMsgId = this._proxy.connectSignal('DisplayedImMsg', Lang.bind(this, this._messageDisplayed));
        this._displayedChatMsgId = this._proxy.connectSignal('DisplayedChatMsg', Lang.bind(this, this._chatroomMessageDisplayed));
        this._setAvailable = this._proxy.connectSignal('SignedOn', Lang.bind(this, this._onSignedOn));
        this._setUnavailable = this._proxy.connectSignal('SignedOff', Lang.bind(this, this._onSignedOff));
    },

    disable: function() {
        if (this._displayedImMsgId > 0) {
            this._proxy.disconnectSignal(this._displayedImMsgId);
            this._displayedImMsgId = 0;
        }

        if (this._displayedChatMsgId > 0) {
            this._proxy.disconnectSignal(this._displayedChatMsgId);
            this._displayedChatMsgId = 0;
        }

        if (this._setAvailable > 0) {
            this._proxy.disconnectSignal(this._setAvailable);
            this._setAvailable = 0;
        }
        if (this._setUnavailable > 0) {
            this._proxy.disconnectSignal(this._setUnavailable);
            this._setUnavailable = 0;
        }


        for (let key in this._sources) {
            if (this._sources.hasOwnProperty(key))
                this._sources[key].destroy();
        }
    },

    proxy: function () {
        return this._proxy;
    },

    _messageDisplayed: function(emitter, something, details) {

        var account = details[0];
        var author = details[1];
        var message = details[2];
        var conversation = details[3];
        var flag = details[4];

        // only trigger on message received/message sent
        if (flag != 2 && flag != 1) 
        {
            return;
        }

        if (conversation) {
            let source = this._sources[conversation];
            if (!source) {
                source = new ImSource(this, account, author, message, conversation, flag);
                source.connect('destroy', Lang.bind(this, 
                            function() {
                                delete this._sources[conversation];
                            }
                            ));
            }
            this._sources[conversation] = source;
        }
    },

    _chatroomMessageDisplayed: function(emitter, something, details) {
        var account = details[0];
        var author = details[1];
        var message = details[2];
        var conversation = details[3];
        var flag = details[4];
        //send is 1, recv is 2, flag & 3 == 0 means nither send nor recv
        if (flag & 3 == 0) return;

        if (conversation) {
            let source = this._chatroomsources[conversation];
            if (!source) {
                source = new ChatroomSource(this, account, author, message, conversation, flag);
                source.connect('destroy', Lang.bind(this,
                            function() {
                                delete this._chatroomsources[conversation];
                            }
                            ));
            }
            this._chatroomsources[conversation] = source;
        } 
    },
    _onSignedOn: function(emitter, connection) {
        //UserMenuButton._iconBox.child = UserMenuButton._availableIcon;
    }, 
    _onSignedOff: function(emitter, connection) {
        //UserMenuButton._iconBox.child = UserMenuButton._offlineIcon;
    }
}

function init(metaObject) {
    var LocalDir;
    LocalDir = metaObject.metadata.localedir;
    imports.gettext.bindtextdomain('gnome-shell-extensions', LocalDir);
    return new PidginClient();
}

// vim: tabstop=4 softtabstop=4 shiftwidth=4 expandtab
