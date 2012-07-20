const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const Gettext = imports.gettext.domain('gnome-shell-extensions');
const _ = Gettext.gettext;
const N_ = function(e) { return e; };

let settings;
let boolSettings;

let extension = imports.misc.extensionUtils.getCurrentExtension();
let convenience = extension.imports.convenience;

function _createBoolSetting(setting) {
  let hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL});

  let settingLabel = new Gtk.Label({label: boolSettings[setting].label,
                                    xalign: 0});

  let settingSwitch = new Gtk.Switch({active: settings.get_boolean(setting)});
  settingSwitch.connect('notify::active', function(button) {
    settings.set_boolean(setting, button.active);
  });

  if (boolSettings[setting].help) {
    settingLabel.set_tooltip_text(boolSettings[setting].help);
    settingSwitch.set_tooltip_text(boolSettings[setting].help);
  }

  hbox.pack_start(settingLabel, true, true, 0);
  hbox.add(settingSwitch);

  return hbox;
}

function init() {
  settings = convenience.getSettings();

  boolSettings = {
    'show-online-offline': {
      label: _("Show online availability."),
      help: _("Show or hide if contacts are going online or offline. (default: ON)")
    },
    'show-status-changes': {
      label: _("Show status changes."),
      help: _("Show or hide if contacts are switching status, e.g. away, dnd. (default: ON)")
    }
  };
}

function buildPrefsWidget() {
  let frame = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL,
                            border_width: 10 });

  let vbox = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL,
                           margin_left: 20 });

  // Add all bool settings
  for (setting in boolSettings) {
    let hbox = _createBoolSetting(setting);
    vbox.add(hbox);
  }

  frame.add(vbox);
  frame.show_all();
  return frame;
}
