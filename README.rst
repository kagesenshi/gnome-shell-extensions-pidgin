Gnome Shell Pidgin extension
=============================

The extension utilize pidgin's dbus API, to integrate Pidgin into the GNOME
shell. I only did some rough test with it only on my Fedora 16 machine, but
I believe it should work ok everywhere else.

Install
---------

Copy the files over::

    mkdir -p ~/.local/share/gnome-shell/extensions/pidgin-conversation-integration@kagesenshi.org
    cp extension.js metadata.json ~/.local/share/gnome-shell/extensions/pidgin-conversation-integration@kagesenshi.org/

restart Gnome shell (Alt+F2 type r and hit enter)

using gnome-tweak-tool, or https://extensions.gnome.org/local/ , enable Pidgin
Conversation Integration extension

Enjoy!
