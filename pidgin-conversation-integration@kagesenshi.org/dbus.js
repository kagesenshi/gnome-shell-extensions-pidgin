/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */
/**
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
**/

const Gio = imports.gi.Gio;

const PidginIface = loadInterfaceXml("dbus.xml")

// inspired from https://github.com/rgcjonas/gnome-shell-extension-appindicator/blob/master/interfaces.js
// i just copy it and it works , how amazine , i just didn't know what happend
function loadInterfaceXml(filename) {
    let extension = imports.misc.extensionUtils.getCurrentExtension()

    let interfaces_dir = extension.dir.get_child(".")

    let file = interfaces_dir.get_child(filename)

    let [ result, contents ] = imports.gi.GLib.file_get_contents(file.get_path())

    if (result) {
        //HACK: The "" + trick is important as hell because file_get_contents returns
        // an object (WTF?) but Gio.makeProxyWrapper requires `typeof() == "string"`
        // Otherwise, it will try to check `instanceof XML` and fail miserably because there
        // is no `XML` on very recent SpiderMonkey releases (or, if SpiderMonkey is old enough,
        // will spit out a TypeError soon).
        return "<node>" + contents + "</node>"
    } else {
        throw new Error("AppIndicatorSupport: Could not load file: "+filename)
    }
}
