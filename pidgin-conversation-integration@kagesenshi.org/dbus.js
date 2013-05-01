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


const PidginIface = <interface name='im.pidgin.purple.PurpleInterface'>
    <method name='PurpleAccountsFindAny'>
      <arg name='name' type='s' direction='in'/>
      <arg name='protocol' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountsFindConnected'>
      <arg name='name' type='s' direction='in'/>
      <arg name='protocol' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeIsChat'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeIsBuddy'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeIsContact'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeIsGroup'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIsOnline'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeHasFlag'>
      <arg name='node' type='i' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeShouldSave'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionIsConnected'>
      <arg name='connection' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionIsValid'>
      <arg name='connection' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvIm'>
      <arg name='conversation' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChat'>
      <arg name='conversation' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountNew'>
      <arg name='username' type='s' direction='in'/>
      <arg name='protocol_id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountDestroy'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountConnect'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRegister'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountDisconnect'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountNotifyAdded'>
      <arg name='account' type='i' direction='in'/>
      <arg name='remote_user' type='s' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountRequestAdd'>
      <arg name='account' type='i' direction='in'/>
      <arg name='remote_user' type='s' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountRequestCloseWithAccount'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRequestClose'>
      <arg name='ui_handle' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRequestChangePassword'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRequestChangeUserInfo'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetUsername'>
      <arg name='account' type='i' direction='in'/>
      <arg name='username' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetPassword'>
      <arg name='account' type='i' direction='in'/>
      <arg name='password' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetAlias'>
      <arg name='account' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetUserInfo'>
      <arg name='account' type='i' direction='in'/>
      <arg name='user_info' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetBuddyIconPath'>
      <arg name='account' type='i' direction='in'/>
      <arg name='path' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetProtocolId'>
      <arg name='account' type='i' direction='in'/>
      <arg name='protocol_id' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetConnection'>
      <arg name='account' type='i' direction='in'/>
      <arg name='gc' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetRememberPassword'>
      <arg name='account' type='i' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetCheckMail'>
      <arg name='account' type='i' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetEnabled'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetProxyInfo'>
      <arg name='account' type='i' direction='in'/>
      <arg name='info' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetPrivacyType'>
      <arg name='account' type='i' direction='in'/>
      <arg name='privacy_type' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetStatusTypes'>
      <arg name='account' type='i' direction='in'/>
      <arg name='status_types' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetStatusList'>
      <arg name='account' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
      <arg name='active' type='i' direction='in'/>
      <arg name='attrs' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountGetSilenceSuppression'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountSetSilenceSuppression'>
      <arg name='account' type='i' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountClearSettings'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRemoveSetting'>
      <arg name='account' type='i' direction='in'/>
      <arg name='setting' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetInt'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetString'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetBool'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetUiInt'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountSetUiString'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSetUiBool'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountIsConnected'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountIsConnecting'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountIsDisconnected'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetUsername'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetPassword'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetAlias'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetUserInfo'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetBuddyIconPath'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetProtocolId'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetProtocolName'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetConnection'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetNameForDisplay'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetRememberPassword'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetCheckMail'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetEnabled'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetProxyInfo'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetPrivacyType'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetActiveStatus'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetStatus'>
      <arg name='account' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetStatusType'>
      <arg name='account' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetStatusTypeWithPrimitive'>
      <arg name='account' type='i' direction='in'/>
      <arg name='primitive' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetPresence'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountIsStatusActive'>
      <arg name='account' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetStatusTypes'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleAccountGetInt'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='default_value' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetString'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='default_value' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetBool'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='default_value' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetUiInt'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='default_value' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetUiString'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='default_value' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAccountGetUiBool'>
      <arg name='account' type='i' direction='in'/>
      <arg name='ui' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='default_value' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetLog'>
      <arg name='account' type='i' direction='in'/>
      <arg name='create' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountDestroyLog'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountAddBuddy'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddy' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountAddBuddyWithInvite'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountAddBuddies'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddies' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountAddBuddiesWithInvite'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddies' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountRemoveBuddy'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='group' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRemoveBuddies'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddies' type='i' direction='in'/>
      <arg name='groups' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountRemoveGroup'>
      <arg name='account' type='i' direction='in'/>
      <arg name='group' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountChangePassword'>
      <arg name='account' type='i' direction='in'/>
      <arg name='orig_pw' type='s' direction='in'/>
      <arg name='new_pw' type='s' direction='in'/>
    </method>
    <method name='PurpleAccountSupportsOfflineMessage'>
      <arg name='account' type='i' direction='in'/>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountGetCurrentError'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountClearCurrentError'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountsAdd'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountsRemove'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountsDelete'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountsReorder'>
      <arg name='account' type='i' direction='in'/>
      <arg name='new_index' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountsGetAll'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleAccountsGetAllActive'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleAccountsFind'>
      <arg name='name' type='s' direction='in'/>
      <arg name='protocol' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountsRestoreCurrentStatuses'>
    </method>
    <method name='PurpleAccountsSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleAccountsGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAccountsInit'>
    </method>
    <method name='PurpleAccountsUninit'>
    </method>
    <method name='PurpleBlistNew'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSetBlist'>
      <arg name='blist' type='i' direction='in'/>
    </method>
    <method name='PurpleGetBlist'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistGetRoot'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistGetBuddies'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleBlistNodeNext'>
      <arg name='node' type='i' direction='in'/>
      <arg name='offline' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeGetParent'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeGetFirstChild'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeGetSiblingNext'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeGetSiblingPrev'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistShow'>
    </method>
    <method name='PurpleBlistDestroy'>
    </method>
    <method name='PurpleBlistSetVisible'>
      <arg name='show' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistUpdateBuddyStatus'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='old_status' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistUpdateNodeIcon'>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistUpdateBuddyIcon'>
      <arg name='buddy' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistRenameBuddy'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistAliasContact'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistAliasBuddy'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistServerAliasBuddy'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistAliasChat'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistRenameGroup'>
      <arg name='group' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleChatNew'>
      <arg name='account' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
      <arg name='components' type='a{ss}' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleChatDestroy'>
      <arg name='chat' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistAddChat'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='group' type='i' direction='in'/>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleBuddyNew'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyDestroy'>
      <arg name='buddy' type='i' direction='in'/>
    </method>
    <method name='PurpleBuddySetIcon'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='icon' type='i' direction='in'/>
    </method>
    <method name='PurpleBuddyGetAccount'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyGetName'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyGetIcon'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyGetContact'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyGetPresence'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyGetMediaCaps'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddySetMediaCaps'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='media_caps' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistAddBuddy'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='contact' type='i' direction='in'/>
      <arg name='group' type='i' direction='in'/>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleGroupNew'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleGroupDestroy'>
      <arg name='group' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistAddGroup'>
      <arg name='group' type='i' direction='in'/>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleContactNew'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleContactDestroy'>
      <arg name='contact' type='i' direction='in'/>
    </method>
    <method name='PurpleContactGetGroup'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistAddContact'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='group' type='i' direction='in'/>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistMergeContact'>
      <arg name='source' type='i' direction='in'/>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleContactGetPriorityBuddy'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleContactSetAlias'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleContactGetAlias'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleContactOnAccount'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleContactInvalidatePriorityBuddy'>
      <arg name='contact' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistRemoveBuddy'>
      <arg name='buddy' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistRemoveContact'>
      <arg name='contact' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistRemoveChat'>
      <arg name='chat' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistRemoveGroup'>
      <arg name='group' type='i' direction='in'/>
    </method>
    <method name='PurpleBuddyGetAliasOnly'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyGetServerAlias'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyGetContactAlias'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyGetLocalAlias'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyGetAlias'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyGetLocalBuddyAlias'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleChatGetName'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleFindBuddy'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleFindBuddyInGroup'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='group' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleFindBuddies'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleFindGroup'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistFindChat'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleChatGetGroup'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleChatGetAccount'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyGetGroup'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleGroupGetAccounts'>
      <arg name='g' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleGroupOnAccount'>
      <arg name='g' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleGroupGetName'>
      <arg name='group' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBlistAddAccount'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistRemoveAccount'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistGetGroupSize'>
      <arg name='group' type='i' direction='in'/>
      <arg name='offline' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistGetGroupOnlineCount'>
      <arg name='group' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistLoad'>
    </method>
    <method name='PurpleBlistScheduleSave'>
    </method>
    <method name='PurpleBlistRequestAddBuddy'>
      <arg name='account' type='i' direction='in'/>
      <arg name='username' type='s' direction='in'/>
      <arg name='group' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistRequestAddChat'>
      <arg name='account' type='i' direction='in'/>
      <arg name='group' type='i' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistRequestAddGroup'>
    </method>
    <method name='PurpleBlistNodeSetBool'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistNodeGetBool'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeSetInt'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistNodeGetInt'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeSetString'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistNodeGetString'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBlistNodeRemoveSetting'>
      <arg name='node' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
    </method>
    <method name='PurpleBlistNodeSetFlags'>
      <arg name='node' type='i' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistNodeGetFlags'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeGetType'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistNodeGetExtendedMenu'>
      <arg name='n' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleBlistSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleBlistGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBlistInit'>
    </method>
    <method name='PurpleBlistUninit'>
    </method>
    <method name='PurpleBuddyIconNew'>
      <arg name='account' type='i' direction='in'/>
      <arg name='username' type='s' direction='in'/>
      <arg name='icon_data' type='i' direction='in'/>
      <arg name='icon_len' type='i' direction='in'/>
      <arg name='checksum' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconRef'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconUnref'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconUpdate'>
      <arg name='icon' type='i' direction='in'/>
    </method>
    <method name='PurpleBuddyIconSetData'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='data' type='i' direction='in'/>
      <arg name='len' type='i' direction='in'/>
      <arg name='checksum' type='s' direction='in'/>
    </method>
    <method name='PurpleBuddyIconGetAccount'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconGetUsername'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyIconGetChecksum'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyIconGetData'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='ay' direction='out'/>
    </method>
    <method name='PurpleBuddyIconGetExtension'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyIconGetFullPath'>
      <arg name='icon' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsSetForUser'>
      <arg name='account' type='i' direction='in'/>
      <arg name='username' type='s' direction='in'/>
      <arg name='icon_data' type='i' direction='in'/>
      <arg name='icon_len' type='i' direction='in'/>
      <arg name='checksum' type='s' direction='in'/>
    </method>
    <method name='PurpleBuddyIconsFind'>
      <arg name='account' type='i' direction='in'/>
      <arg name='username' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsFindAccountIcon'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsSetAccountIcon'>
      <arg name='account' type='i' direction='in'/>
      <arg name='icon_data' type='i' direction='in'/>
      <arg name='icon_len' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsGetAccountIconTimestamp'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsNodeHasCustomIcon'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsNodeFindCustomIcon'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsNodeSetCustomIcon'>
      <arg name='node' type='i' direction='in'/>
      <arg name='icon_data' type='i' direction='in'/>
      <arg name='icon_len' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsNodeSetCustomIconFromFile'>
      <arg name='node' type='i' direction='in'/>
      <arg name='filename' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsHasCustomIcon'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsFindCustomIcon'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsSetCustomIcon'>
      <arg name='contact' type='i' direction='in'/>
      <arg name='icon_data' type='i' direction='in'/>
      <arg name='icon_len' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsSetCaching'>
      <arg name='caching' type='i' direction='in'/>
    </method>
    <method name='PurpleBuddyIconsIsCaching'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsSetCacheDir'>
      <arg name='cache_dir' type='s' direction='in'/>
    </method>
    <method name='PurpleBuddyIconsGetCacheDir'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleBuddyIconsInit'>
    </method>
    <method name='PurpleBuddyIconsUninit'>
    </method>
    <method name='PurpleBuddyIconGetScaleSize'>
      <arg name='spec' type='i' direction='in'/>
      <arg name='width' type='i' direction='in'/>
      <arg name='height' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionNew'>
      <arg name='account' type='i' direction='in'/>
      <arg name='regist' type='i' direction='in'/>
      <arg name='password' type='s' direction='in'/>
    </method>
    <method name='PurpleConnectionDestroy'>
      <arg name='gc' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionSetState'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='state' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionSetAccount'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionSetDisplayName'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleConnectionSetProtocolData'>
      <arg name='connection' type='i' direction='in'/>
      <arg name='proto_data' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionGetState'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionGetAccount'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionGetPrpl'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionGetPassword'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConnectionGetDisplayName'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConnectionUpdateProgress'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='text' type='s' direction='in'/>
      <arg name='step' type='i' direction='in'/>
      <arg name='count' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionNotice'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='text' type='s' direction='in'/>
    </method>
    <method name='PurpleConnectionError'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='reason' type='s' direction='in'/>
    </method>
    <method name='PurpleConnectionErrorReason'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='reason' type='i' direction='in'/>
      <arg name='description' type='s' direction='in'/>
    </method>
    <method name='PurpleConnectionSslError'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='ssl_error' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionErrorIsFatal'>
      <arg name='reason' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionsDisconnectAll'>
    </method>
    <method name='PurpleConnectionsGetAll'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConnectionsGetConnecting'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConnectionsSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleConnectionsGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConnectionsInit'>
    </method>
    <method name='PurpleConnectionsUninit'>
    </method>
    <method name='PurpleConversationNew'>
      <arg name='type' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationDestroy'>
      <arg name='conv' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationPresent'>
      <arg name='conv' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationGetType'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationSetUiOps'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationsSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationGetUiOps'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationSetAccount'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationGetAccount'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationGetGc'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationSetTitle'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='title' type='s' direction='in'/>
    </method>
    <method name='PurpleConversationGetTitle'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConversationAutosetTitle'>
      <arg name='conv' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationSetName'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleConversationGetName'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConvChatCbGetAttribute'>
      <arg name='cb' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConvChatCbGetAttributeKeys'>
      <arg name='cb' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConvChatCbSetAttribute'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='cb' type='i' direction='in'/>
      <arg name='key' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatCbSetAttributes'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='cb' type='i' direction='in'/>
      <arg name='keys' type='i' direction='in'/>
      <arg name='values' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationSetLogging'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='log' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationIsLogging'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationGetImData'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationGetChatData'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleGetConversations'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleGetIms'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleGetChats'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleFindConversationWithAccount'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationWrite'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='mtime' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationSetFeatures'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='features' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationGetFeatures'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationHasFocus'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationUpdate'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='type' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationGetMessageHistory'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConversationClearMessageHistory'>
      <arg name='conv' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationMessageGetSender'>
      <arg name='msg' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConversationMessageGetMessage'>
      <arg name='msg' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConversationMessageGetFlags'>
      <arg name='msg' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConversationMessageGetTimestamp'>
      <arg name='msg' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImGetConversation'>
      <arg name='im' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImSetIcon'>
      <arg name='im' type='i' direction='in'/>
      <arg name='icon' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImGetIcon'>
      <arg name='im' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImSetTypingState'>
      <arg name='im' type='i' direction='in'/>
      <arg name='state' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImGetTypingState'>
      <arg name='im' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImStartTypingTimeout'>
      <arg name='im' type='i' direction='in'/>
      <arg name='timeout' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImStopTypingTimeout'>
      <arg name='im' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImGetTypingTimeout'>
      <arg name='im' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImSetTypeAgain'>
      <arg name='im' type='i' direction='in'/>
      <arg name='val' type='u' direction='in'/>
    </method>
    <method name='PurpleConvImGetTypeAgain'>
      <arg name='im' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImStartSendTypedTimeout'>
      <arg name='im' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImStopSendTypedTimeout'>
      <arg name='im' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImGetSendTypedTimeout'>
      <arg name='im' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImUpdateTyping'>
      <arg name='im' type='i' direction='in'/>
    </method>
    <method name='PurpleConvImWrite'>
      <arg name='im' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='mtime' type='i' direction='in'/>
    </method>
    <method name='PurpleConvPresentError'>
      <arg name='who' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='what' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvImSend'>
      <arg name='im' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleConvSendConfirm'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleConvImSendWithFlags'>
      <arg name='im' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
    </method>
    <method name='PurpleConvCustomSmileyAdd'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='smile' type='s' direction='in'/>
      <arg name='cksum_type' type='s' direction='in'/>
      <arg name='chksum' type='s' direction='in'/>
      <arg name='remote' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvCustomSmileyClose'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='smile' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatGetConversation'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatSetUsers'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='users' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConvChatGetUsers'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConvChatIgnore'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatUnignore'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatSetIgnored'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='ignored' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConvChatGetIgnored'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConvChatGetIgnoredUser'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConvChatIsUserIgnored'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatSetTopic'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='topic' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatGetTopic'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConvChatSetId'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='id' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatGetId'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatWrite'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='mtime' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatSend'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatSendWithFlags'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatAddUser'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='extra_msg' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='new_arrival' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatAddUsers'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='users' type='i' direction='in'/>
      <arg name='extra_msgs' type='i' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='new_arrivals' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatRenameUser'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='old_user' type='s' direction='in'/>
      <arg name='new_user' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatRemoveUser'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='reason' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatRemoveUsers'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='users' type='i' direction='in'/>
      <arg name='reason' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatFindUser'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatUserSetFlags'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatUserGetFlags'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatClearUsers'>
      <arg name='chat' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatSetNick'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='nick' type='s' direction='in'/>
    </method>
    <method name='PurpleConvChatGetNick'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleFindChat'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='id' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatLeft'>
      <arg name='chat' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatInviteUser'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='user' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='confirm' type='i' direction='in'/>
    </method>
    <method name='PurpleConvChatHasLeft'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatCbNew'>
      <arg name='name' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatCbFind'>
      <arg name='chat' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleConvChatCbGetName'>
      <arg name='cb' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleConvChatCbDestroy'>
      <arg name='cb' type='i' direction='in'/>
    </method>
    <method name='PurpleConversationGetExtendedMenu'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleConversationsInit'>
    </method>
    <method name='PurpleConversationsUninit'>
    </method>
    <method name='PurpleCoreInit'>
      <arg name='ui' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleCoreQuit'>
    </method>
    <method name='PurpleCoreGetVersion'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleCoreGetUi'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleGetCore'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleCoreSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleCoreGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleCoreMigrate'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleCoreEnsureSingleInstance'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferNew'>
      <arg name='account' type='i' direction='in'/>
      <arg name='type' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXfersGetAll'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleXferRef'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferUnref'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferRequest'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferRequestAccepted'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='filename' type='s' direction='in'/>
    </method>
    <method name='PurpleXferRequestDenied'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferGetType'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetAccount'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetRemoteUser'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleXferGetStatus'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferIsCanceled'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferIsCompleted'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetFilename'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleXferGetLocalFilename'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleXferGetBytesSent'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetBytesRemaining'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetSize'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetLocalPort'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='u' direction='out'/>
    </method>
    <method name='PurpleXferGetRemoteIp'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleXferGetRemotePort'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='u' direction='out'/>
    </method>
    <method name='PurpleXferGetStartTime'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferGetEndTime'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferSetCompleted'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='completed' type='i' direction='in'/>
    </method>
    <method name='PurpleXferSetMessage'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleXferSetFilename'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='filename' type='s' direction='in'/>
    </method>
    <method name='PurpleXferSetLocalFilename'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='filename' type='s' direction='in'/>
    </method>
    <method name='PurpleXferSetSize'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='size' type='i' direction='in'/>
    </method>
    <method name='PurpleXferSetBytesSent'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='bytes_sent' type='i' direction='in'/>
    </method>
    <method name='PurpleXferGetUiOps'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleXferStart'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='fd' type='i' direction='in'/>
      <arg name='ip' type='s' direction='in'/>
      <arg name='port' type='u' direction='in'/>
    </method>
    <method name='PurpleXferEnd'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferAdd'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferCancelLocal'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferCancelRemote'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferError'>
      <arg name='type' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='msg' type='s' direction='in'/>
    </method>
    <method name='PurpleXferUpdateProgress'>
      <arg name='xfer' type='i' direction='in'/>
    </method>
    <method name='PurpleXferGetThumbnail'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='ay' direction='out'/>
    </method>
    <method name='PurpleXferGetThumbnailMimetype'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleXferPrepareThumbnail'>
      <arg name='xfer' type='i' direction='in'/>
      <arg name='formats' type='s' direction='in'/>
    </method>
    <method name='PurpleXfersInit'>
    </method>
    <method name='PurpleXfersUninit'>
    </method>
    <method name='PurpleXfersSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleXfersGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogFree'>
      <arg name='log' type='i' direction='in'/>
    </method>
    <method name='PurpleLogWrite'>
      <arg name='log' type='i' direction='in'/>
      <arg name='type' type='i' direction='in'/>
      <arg name='from' type='s' direction='in'/>
      <arg name='time' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleLogGetLogs'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleLogGetSystemLogs'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleLogGetSize'>
      <arg name='log' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogGetTotalSize'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogGetActivityScore'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogIsDeletable'>
      <arg name='log' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogDelete'>
      <arg name='log' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogGetLogDir'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleLogSetFree'>
      <arg name='set' type='i' direction='in'/>
    </method>
    <method name='PurpleLogCommonWriter'>
      <arg name='log' type='i' direction='in'/>
      <arg name='ext' type='s' direction='in'/>
    </method>
    <method name='PurpleLogCommonLister'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='ext' type='s' direction='in'/>
      <arg name='logger' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleLogCommonTotalSizer'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='ext' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogCommonSizer'>
      <arg name='log' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogCommonDeleter'>
      <arg name='log' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogCommonIsDeletable'>
      <arg name='log' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogLoggerFree'>
      <arg name='logger' type='i' direction='in'/>
    </method>
    <method name='PurpleLogLoggerAdd'>
      <arg name='logger' type='i' direction='in'/>
    </method>
    <method name='PurpleLogLoggerRemove'>
      <arg name='logger' type='i' direction='in'/>
    </method>
    <method name='PurpleLogLoggerSet'>
      <arg name='logger' type='i' direction='in'/>
    </method>
    <method name='PurpleLogLoggerGet'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleLogLoggerGetOptions'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleLogInit'>
    </method>
    <method name='PurpleLogUninit'>
    </method>
    <method name='PurpleNotifySearchresultsFree'>
      <arg name='results' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifySearchresultsNewRows'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='results' type='i' direction='in'/>
      <arg name='data' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifySearchresultsNew'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifySearchresultsColumnNew'>
      <arg name='title' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifySearchresultsColumnAdd'>
      <arg name='results' type='i' direction='in'/>
      <arg name='column' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifySearchresultsRowAdd'>
      <arg name='results' type='i' direction='in'/>
      <arg name='row' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifySearchresultsGetRowsCount'>
      <arg name='results' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifySearchresultsGetColumnsCount'>
      <arg name='results' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifySearchresultsRowGet'>
      <arg name='results' type='i' direction='in'/>
      <arg name='row_id' type='u' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleNotifySearchresultsColumnGetTitle'>
      <arg name='results' type='i' direction='in'/>
      <arg name='column_id' type='u' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoNew'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoDestroy'>
      <arg name='user_info' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoGetEntries'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoGetTextWithNewline'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='newline' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoAddPair'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoAddPairPlaintext'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoPrependPair'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoRemoveEntry'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='user_info_entry' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoEntryNew'>
      <arg name='label' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoAddSectionBreak'>
      <arg name='user_info' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoPrependSectionBreak'>
      <arg name='user_info' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoAddSectionHeader'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoPrependSectionHeader'>
      <arg name='user_info' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoRemoveLastItem'>
      <arg name='user_info' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoEntryGetLabel'>
      <arg name='user_info_entry' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoEntrySetLabel'>
      <arg name='user_info_entry' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoEntryGetValue'>
      <arg name='user_info_entry' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoEntrySetValue'>
      <arg name='user_info_entry' type='i' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleNotifyUserInfoEntryGetType'>
      <arg name='user_info_entry' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifyUserInfoEntrySetType'>
      <arg name='user_info_entry' type='i' direction='in'/>
      <arg name='type' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyClose'>
      <arg name='type' type='i' direction='in'/>
      <arg name='ui_handle' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyCloseWithHandle'>
      <arg name='handle' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifySetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleNotifyGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNotifyInit'>
    </method>
    <method name='PurpleNotifyUninit'>
    </method>
    <method name='PurplePrefsInit'>
    </method>
    <method name='PurplePrefsUninit'>
    </method>
    <method name='PurplePrefsAddNone'>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsAddBool'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsAddInt'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsAddString'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsAddStringList'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsAddPath'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsAddPathList'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsRemove'>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsRename'>
      <arg name='oldname' type='s' direction='in'/>
      <arg name='newname' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsRenameBooleanToggle'>
      <arg name='oldname' type='s' direction='in'/>
      <arg name='newname' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsDestroy'>
    </method>
    <method name='PurplePrefsSetBool'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsSetInt'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsSetString'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsSetStringList'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsSetPath'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsSetPathList'>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsExists'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrefsGetType'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrefsGetBool'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrefsGetInt'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrefsGetString'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurplePrefsGetStringList'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='as' direction='out'/>
    </method>
    <method name='PurplePrefsGetPath'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurplePrefsGetPathList'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='as' direction='out'/>
    </method>
    <method name='PurplePrefsGetChildrenNames'>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='as' direction='out'/>
    </method>
    <method name='PurplePrefsDisconnectCallback'>
      <arg name='callback_id' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsDisconnectByHandle'>
      <arg name='handle' type='i' direction='in'/>
    </method>
    <method name='PurplePrefsTriggerCallback'>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurplePrefsLoad'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrefsUpdateOld'>
    </method>
    <method name='PurpleRoomlistShowWithAccount'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistNew'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistRef'>
      <arg name='list' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistUnref'>
      <arg name='list' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistSetFields'>
      <arg name='list' type='i' direction='in'/>
      <arg name='fields' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistSetInProgress'>
      <arg name='list' type='i' direction='in'/>
      <arg name='in_progress' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistGetInProgress'>
      <arg name='list' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistRoomAdd'>
      <arg name='list' type='i' direction='in'/>
      <arg name='room' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistGetList'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistCancelGetList'>
      <arg name='list' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistExpandCategory'>
      <arg name='list' type='i' direction='in'/>
      <arg name='category' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistGetFields'>
      <arg name='roomlist' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleRoomlistRoomNew'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='parent' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistRoomJoin'>
      <arg name='list' type='i' direction='in'/>
      <arg name='room' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistRoomGetType'>
      <arg name='room' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistRoomGetName'>
      <arg name='room' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleRoomlistRoomGetParent'>
      <arg name='room' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistRoomGetFields'>
      <arg name='room' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleRoomlistFieldNew'>
      <arg name='type' type='i' direction='in'/>
      <arg name='label' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='hidden' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistFieldGetType'>
      <arg name='field' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistFieldGetLabel'>
      <arg name='field' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleRoomlistFieldGetHidden'>
      <arg name='field' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRoomlistSetUiOps'>
      <arg name='ops' type='i' direction='in'/>
    </method>
    <method name='PurpleRoomlistGetUiOps'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusNew'>
      <arg name='title' type='s' direction='in'/>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusSetTitle'>
      <arg name='status' type='i' direction='in'/>
      <arg name='title' type='s' direction='in'/>
    </method>
    <method name='PurpleSavedstatusSetType'>
      <arg name='status' type='i' direction='in'/>
      <arg name='type' type='i' direction='in'/>
    </method>
    <method name='PurpleSavedstatusSetMessage'>
      <arg name='status' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleSavedstatusSetSubstatus'>
      <arg name='status' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='type' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
    </method>
    <method name='PurpleSavedstatusUnsetSubstatus'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleSavedstatusDelete'>
      <arg name='title' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusDeleteByStatus'>
      <arg name='saved_status' type='i' direction='in'/>
    </method>
    <method name='PurpleSavedstatusesGetAll'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleSavedstatusesGetPopular'>
      <arg name='how_many' type='u' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetCurrent'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetDefault'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetIdleaway'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusIsIdleaway'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusSetIdleaway'>
      <arg name='idleaway' type='i' direction='in'/>
    </method>
    <method name='PurpleSavedstatusGetStartup'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusFind'>
      <arg name='title' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusFindByCreationTime'>
      <arg name='creation_time' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusFindTransientByTypeAndMessage'>
      <arg name='type' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusIsTransient'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetTitle'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetType'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetMessage'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetCreationTime'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusHasSubstatuses'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusGetSubstatus'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusSubstatusGetType'>
      <arg name='substatus' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSavedstatusSubstatusGetMessage'>
      <arg name='substatus' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSavedstatusActivate'>
      <arg name='saved_status' type='i' direction='in'/>
    </method>
    <method name='PurpleSavedstatusActivateForAccount'>
      <arg name='saved_status' type='i' direction='in'/>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurpleSavedstatusesInit'>
    </method>
    <method name='PurpleSavedstatusesUninit'>
    </method>
    <method name='PurpleSmileyNew'>
      <arg name='img' type='i' direction='in'/>
      <arg name='shortcut' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSmileyNewFromFile'>
      <arg name='shortcut' type='s' direction='in'/>
      <arg name='filepath' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSmileyDelete'>
      <arg name='smiley' type='i' direction='in'/>
    </method>
    <method name='PurpleSmileySetShortcut'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='shortcut' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSmileySetData'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='smiley_data' type='i' direction='in'/>
      <arg name='smiley_data_len' type='i' direction='in'/>
    </method>
    <method name='PurpleSmileyGetShortcut'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSmileyGetChecksum'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSmileyGetStoredImage'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSmileyGetData'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='RESULT' type='ay' direction='out'/>
    </method>
    <method name='PurpleSmileyGetExtension'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSmileyGetFullPath'>
      <arg name='smiley' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSmileysGetAll'>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleSmileysFindByShortcut'>
      <arg name='shortcut' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSmileysFindByChecksum'>
      <arg name='checksum' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSmileysGetStoringDir'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSmileysInit'>
    </method>
    <method name='PurpleSmileysUninit'>
    </method>
    <method name='PurplePrimitiveGetIdFromType'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurplePrimitiveGetNameFromType'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurplePrimitiveGetTypeFromId'>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeNewFull'>
      <arg name='primitive' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='saveable' type='i' direction='in'/>
      <arg name='user_settable' type='i' direction='in'/>
      <arg name='independent' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeNew'>
      <arg name='primitive' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='user_settable' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeDestroy'>
      <arg name='status_type' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusTypeSetPrimaryAttr'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='attr_id' type='s' direction='in'/>
    </method>
    <method name='PurpleStatusTypeAddAttr'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusTypeGetPrimitive'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeGetId'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusTypeGetName'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusTypeIsSaveable'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeIsUserSettable'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeIsIndependent'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeIsExclusive'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeIsAvailable'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeGetPrimaryAttr'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusTypeGetAttr'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusTypeGetAttrs'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurpleStatusTypeFindWithId'>
      <arg name='status_types' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusAttrNew'>
      <arg name='id' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='value_type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusAttrDestroy'>
      <arg name='attr' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusAttrGetId'>
      <arg name='attr' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusAttrGetName'>
      <arg name='attr' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusAttrGetValue'>
      <arg name='attr' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusNew'>
      <arg name='status_type' type='i' direction='in'/>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusDestroy'>
      <arg name='status' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusSetActive'>
      <arg name='status' type='i' direction='in'/>
      <arg name='active' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusSetActiveWithAttrsList'>
      <arg name='status' type='i' direction='in'/>
      <arg name='active' type='i' direction='in'/>
      <arg name='attrs' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusSetAttrBoolean'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusSetAttrInt'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='value' type='i' direction='in'/>
    </method>
    <method name='PurpleStatusSetAttrString'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='PurpleStatusGetType'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusGetPresence'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusGetId'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusGetName'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusIsIndependent'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusIsExclusive'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusIsAvailable'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusIsActive'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusIsOnline'>
      <arg name='status' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusGetAttrValue'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusGetAttrBoolean'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusGetAttrInt'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusGetAttrString'>
      <arg name='status' type='i' direction='in'/>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStatusCompare'>
      <arg name='status1' type='i' direction='in'/>
      <arg name='status2' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceNew'>
      <arg name='context' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceNewForAccount'>
      <arg name='account' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceNewForConv'>
      <arg name='conv' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceNewForBuddy'>
      <arg name='buddy' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceDestroy'>
      <arg name='presence' type='i' direction='in'/>
    </method>
    <method name='PurplePresenceAddStatus'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='status' type='i' direction='in'/>
    </method>
    <method name='PurplePresenceSetStatusActive'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
      <arg name='active' type='i' direction='in'/>
    </method>
    <method name='PurplePresenceSwitchStatus'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
    </method>
    <method name='PurplePresenceSetIdle'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='idle' type='i' direction='in'/>
      <arg name='idle_time' type='i' direction='in'/>
    </method>
    <method name='PurplePresenceSetLoginTime'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='login_time' type='i' direction='in'/>
    </method>
    <method name='PurplePresenceGetContext'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetAccount'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetConversation'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetChatUser'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurplePresenceGetBuddy'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetStatuses'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurplePresenceGetStatus'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetActiveStatus'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceIsAvailable'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceIsOnline'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceIsStatusActive'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceIsStatusPrimitiveActive'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='primitive' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceIsIdle'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetIdleTime'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceGetLoginTime'>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePresenceCompare'>
      <arg name='presence1' type='i' direction='in'/>
      <arg name='presence2' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStatusInit'>
    </method>
    <method name='PurpleStatusUninit'>
    </method>
    <method name='ServSendTyping'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='state' type='i' direction='in'/>
      <arg name='RESULT' type='u' direction='out'/>
    </method>
    <method name='ServMoveBuddy'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='i' direction='in'/>
      <arg name='param2' type='i' direction='in'/>
    </method>
    <method name='ServSendIm'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
      <arg name='param2' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleGetAttentionTypeFromCode'>
      <arg name='account' type='i' direction='in'/>
      <arg name='type_code' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='ServSendAttention'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='type_code' type='i' direction='in'/>
    </method>
    <method name='ServGotAttention'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='type_code' type='i' direction='in'/>
    </method>
    <method name='ServGetInfo'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
    </method>
    <method name='ServSetInfo'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
    </method>
    <method name='ServAddPermit'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
    </method>
    <method name='ServAddDeny'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
    </method>
    <method name='ServRemPermit'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
    </method>
    <method name='ServRemDeny'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='s' direction='in'/>
    </method>
    <method name='ServSetPermitDeny'>
      <arg name='param0' type='i' direction='in'/>
    </method>
    <method name='ServChatInvite'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='i' direction='in'/>
      <arg name='param2' type='s' direction='in'/>
      <arg name='param3' type='s' direction='in'/>
    </method>
    <method name='ServChatLeave'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='i' direction='in'/>
    </method>
    <method name='ServChatWhisper'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='i' direction='in'/>
      <arg name='param2' type='s' direction='in'/>
      <arg name='param3' type='s' direction='in'/>
    </method>
    <method name='ServChatSend'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='param1' type='i' direction='in'/>
      <arg name='param2' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='ServAliasBuddy'>
      <arg name='param0' type='i' direction='in'/>
    </method>
    <method name='ServGotAlias'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='PurpleServGotPrivateAlias'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='alias' type='s' direction='in'/>
    </method>
    <method name='ServGotTyping'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='timeout' type='i' direction='in'/>
      <arg name='state' type='i' direction='in'/>
    </method>
    <method name='ServGotTypingStopped'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='ServGotIm'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='msg' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='mtime' type='i' direction='in'/>
    </method>
    <method name='ServJoinChat'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='data' type='a{ss}' direction='in'/>
    </method>
    <method name='ServRejectChat'>
      <arg name='param0' type='i' direction='in'/>
      <arg name='data' type='a{ss}' direction='in'/>
    </method>
    <method name='ServGotChatInvite'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='data' type='a{ss}' direction='in'/>
    </method>
    <method name='ServGotJoinedChat'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='id' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleServGotJoinChatFailed'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='data' type='a{ss}' direction='in'/>
    </method>
    <method name='ServGotChatLeft'>
      <arg name='g' type='i' direction='in'/>
      <arg name='id' type='i' direction='in'/>
    </method>
    <method name='ServGotChatIn'>
      <arg name='g' type='i' direction='in'/>
      <arg name='id' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='flags' type='i' direction='in'/>
      <arg name='message' type='s' direction='in'/>
      <arg name='mtime' type='i' direction='in'/>
    </method>
    <method name='ServSendFile'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='file' type='s' direction='in'/>
    </method>
    <method name='PurpleMenuActionFree'>
      <arg name='act' type='i' direction='in'/>
    </method>
    <method name='PurpleUtilSetCurrentSong'>
      <arg name='title' type='s' direction='in'/>
      <arg name='artist' type='s' direction='in'/>
      <arg name='album' type='s' direction='in'/>
    </method>
    <method name='PurpleUtilInit'>
    </method>
    <method name='PurpleUtilUninit'>
    </method>
    <method name='PurpleMimeDecodeField'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleTimeBuild'>
      <arg name='year' type='i' direction='in'/>
      <arg name='month' type='i' direction='in'/>
      <arg name='day' type='i' direction='in'/>
      <arg name='hour' type='i' direction='in'/>
      <arg name='min' type='i' direction='in'/>
      <arg name='sec' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleMarkupEscapeText'>
      <arg name='text' type='s' direction='in'/>
      <arg name='length' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupStripHtml'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupLinkify'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUnescapeText'>
      <arg name='text' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUnescapeHtml'>
      <arg name='html' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupSlice'>
      <arg name='str' type='s' direction='in'/>
      <arg name='x' type='i' direction='in'/>
      <arg name='y' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupGetTagName'>
      <arg name='tag' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupUnescapeEntity'>
      <arg name='text' type='s' direction='in'/>
      <arg name='length' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupGetCssProperty'>
      <arg name='style' type='s' direction='in'/>
      <arg name='opt' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleMarkupIsRtl'>
      <arg name='html' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleHomeDir'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUserDir'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUtilSetUserDir'>
      <arg name='dir' type='s' direction='in'/>
    </method>
    <method name='PurpleBuildDir'>
      <arg name='path' type='s' direction='in'/>
      <arg name='mode' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleUtilWriteDataToFile'>
      <arg name='filename' type='s' direction='in'/>
      <arg name='data' type='s' direction='in'/>
      <arg name='size' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleUtilWriteDataToFileAbsolute'>
      <arg name='filename_full' type='s' direction='in'/>
      <arg name='data' type='s' direction='in'/>
      <arg name='size' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleProgramIsValid'>
      <arg name='program' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRunningGnome'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRunningKde'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleRunningOsx'>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleFdGetIp'>
      <arg name='fd' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleSocketGetFamily'>
      <arg name='fd' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleSocketSpeaksIpv4'>
      <arg name='fd' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStrequal'>
      <arg name='left' type='s' direction='in'/>
      <arg name='right' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleNormalize'>
      <arg name='account' type='i' direction='in'/>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleNormalizeNocase'>
      <arg name='account' type='i' direction='in'/>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrHasPrefix'>
      <arg name='s' type='s' direction='in'/>
      <arg name='p' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStrHasSuffix'>
      <arg name='s' type='s' direction='in'/>
      <arg name='x' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleStrdupWithhtml'>
      <arg name='src' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrAddCr'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrreplace'>
      <arg name='string' type='s' direction='in'/>
      <arg name='delimiter' type='s' direction='in'/>
      <arg name='replacement' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUtf8NcrEncode'>
      <arg name='in' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUtf8NcrDecode'>
      <arg name='in' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrcasereplace'>
      <arg name='string' type='s' direction='in'/>
      <arg name='delimiter' type='s' direction='in'/>
      <arg name='replacement' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrcasestr'>
      <arg name='haystack' type='s' direction='in'/>
      <arg name='needle' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrSizeToUnits'>
      <arg name='size' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrSecondsToString'>
      <arg name='sec' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleStrBinaryToAscii'>
      <arg name='binary' type='s' direction='in'/>
      <arg name='len' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleGotProtocolHandlerUri'>
      <arg name='uri' type='s' direction='in'/>
    </method>
    <method name='PurpleUtilFetchUrlCancel'>
      <arg name='url_data' type='i' direction='in'/>
    </method>
    <method name='PurpleUrlDecode'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUrlEncode'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleEmailIsValid'>
      <arg name='address' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleIpAddressIsValid'>
      <arg name='ip' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleIpv4AddressIsValid'>
      <arg name='ip' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleIpv6AddressIsValid'>
      <arg name='ip' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleUriListExtractUris'>
      <arg name='uri_list' type='s' direction='in'/>
      <arg name='RESULT' type='as' direction='out'/>
    </method>
    <method name='PurpleUriListExtractFilenames'>
      <arg name='uri_list' type='s' direction='in'/>
      <arg name='RESULT' type='as' direction='out'/>
    </method>
    <method name='PurpleUtf8TryConvert'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUtf8Salvage'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUtf8StripUnprintables'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUtf8Strcasecmp'>
      <arg name='a' type='s' direction='in'/>
      <arg name='b' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleUtf8HasWord'>
      <arg name='haystack' type='s' direction='in'/>
      <arg name='needle' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleTextStripMnemonic'>
      <arg name='in' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUnescapeFilename'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleEscapeFilename'>
      <arg name='str' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleOscarConvert'>
      <arg name='act' type='s' direction='in'/>
      <arg name='protocol' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleRestoreDefaultSignalHandlers'>
    </method>
    <method name='PurpleGetHostName'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleUuidRandom'>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeInsertChild'>
      <arg name='parent' type='i' direction='in'/>
      <arg name='child' type='i' direction='in'/>
    </method>
    <method name='XmlnodeInsertData'>
      <arg name='node' type='i' direction='in'/>
      <arg name='data' type='s' direction='in'/>
      <arg name='size' type='i' direction='in'/>
    </method>
    <method name='XmlnodeGetData'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeGetDataUnescaped'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeSetAttrib'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='XmlnodeSetAttribWithPrefix'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='prefix' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='XmlnodeSetAttribWithNamespace'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='xmlns' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='XmlnodeSetAttribFull'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='xmlns' type='s' direction='in'/>
      <arg name='prefix' type='s' direction='in'/>
      <arg name='value' type='s' direction='in'/>
    </method>
    <method name='XmlnodeGetAttrib'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeGetAttribWithNamespace'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='xmlns' type='s' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeRemoveAttrib'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
    </method>
    <method name='XmlnodeRemoveAttribWithNamespace'>
      <arg name='node' type='i' direction='in'/>
      <arg name='attr' type='s' direction='in'/>
      <arg name='xmlns' type='s' direction='in'/>
    </method>
    <method name='XmlnodeSetNamespace'>
      <arg name='node' type='i' direction='in'/>
      <arg name='xmlns' type='s' direction='in'/>
    </method>
    <method name='XmlnodeGetNamespace'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeSetPrefix'>
      <arg name='node' type='i' direction='in'/>
      <arg name='prefix' type='s' direction='in'/>
    </method>
    <method name='XmlnodeGetPrefix'>
      <arg name='node' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeToStr'>
      <arg name='node' type='i' direction='in'/>
      <arg name='len' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeToFormattedStr'>
      <arg name='node' type='i' direction='in'/>
      <arg name='len' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='XmlnodeFree'>
      <arg name='node' type='i' direction='in'/>
    </method>
    <method name='PurpleAttentionTypeNew'>
      <arg name='ulname' type='s' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='inc_desc' type='s' direction='in'/>
      <arg name='out_desc' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurpleAttentionTypeSetName'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleAttentionTypeSetIncomingDesc'>
      <arg name='type' type='i' direction='in'/>
      <arg name='desc' type='s' direction='in'/>
    </method>
    <method name='PurpleAttentionTypeSetOutgoingDesc'>
      <arg name='type' type='i' direction='in'/>
      <arg name='desc' type='s' direction='in'/>
    </method>
    <method name='PurpleAttentionTypeSetIconName'>
      <arg name='type' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
    </method>
    <method name='PurpleAttentionTypeSetUnlocalizedName'>
      <arg name='type' type='i' direction='in'/>
      <arg name='ulname' type='s' direction='in'/>
    </method>
    <method name='PurpleAttentionTypeGetName'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAttentionTypeGetIncomingDesc'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAttentionTypeGetOutgoingDesc'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAttentionTypeGetIconName'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurpleAttentionTypeGetUnlocalizedName'>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='s' direction='out'/>
    </method>
    <method name='PurplePrplGotAccountIdle'>
      <arg name='account' type='i' direction='in'/>
      <arg name='idle' type='i' direction='in'/>
      <arg name='idle_time' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotAccountLoginTime'>
      <arg name='account' type='i' direction='in'/>
      <arg name='login_time' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotAccountActions'>
      <arg name='account' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotUserIdle'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='idle' type='i' direction='in'/>
      <arg name='idle_time' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotUserLoginTime'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='login_time' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotUserStatusDeactive'>
      <arg name='account' type='i' direction='in'/>
      <arg name='name' type='s' direction='in'/>
      <arg name='status_id' type='s' direction='in'/>
    </method>
    <method name='PurplePrplChangeAccountStatus'>
      <arg name='account' type='i' direction='in'/>
      <arg name='old_status' type='i' direction='in'/>
      <arg name='new_status' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGetStatuses'>
      <arg name='account' type='i' direction='in'/>
      <arg name='presence' type='i' direction='in'/>
      <arg name='RESULT' type='ai' direction='out'/>
    </method>
    <method name='PurplePrplSendAttention'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='type_code' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotAttention'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='type_code' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGotAttentionInChat'>
      <arg name='gc' type='i' direction='in'/>
      <arg name='id' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='type_code' type='i' direction='in'/>
    </method>
    <method name='PurplePrplGetMediaCaps'>
      <arg name='account' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrplInitiateMedia'>
      <arg name='account' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
      <arg name='type' type='i' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <method name='PurplePrplGotMediaCaps'>
      <arg name='account' type='i' direction='in'/>
      <arg name='who' type='s' direction='in'/>
    </method>
    <method name='PurpleFindPrpl'>
      <arg name='id' type='s' direction='in'/>
      <arg name='RESULT' type='i' direction='out'/>
    </method>
    <signal name='ReceivedImMsg'>
      <arg type='i'/>
      <arg type='s'/>
      <arg type='s'/>
      <arg type='i'/>
      <arg type='u'/>
    </signal>
    <signal name='ReceivedChatMsg'>
      <arg type='i'/>
      <arg type='i'/>
      <arg type='i'/>
      <arg type='i'/>
      <arg type='u'/>
    </signal>
    <signal name='DisplayedImMsg'>
      <arg type='i'/>
      <arg type='s'/>
      <arg type='s'/>
      <arg type='i'/>
      <arg type='i'/>
    </signal> 
    <signal name='DisplayedChatMsg'>
      <arg type='i'/>
      <arg type='s'/>
      <arg type='s'/>
      <arg type='i'/>
      <arg type='i'/>
    </signal>   
    <signal name='SentImMsg'>
      <arg type='i'/>
      <arg type='s'/>
      <arg type='s'/>
    </signal>
    <signal name='SentChatMsg'>
      <arg type='i'/>
      <arg type='i'/>
      <arg type='u'/>
    </signal>
    <signal name='BuddyStatusChanged'>
      <arg type='i'/>
      <arg type='i'/>
      <arg type='i'/>
    </signal>
    <signal name='BuddySignedOn'>
      <arg type='i'/>
    </signal>
    <signal name='BuddySignedOff'>
      <arg type='i'/>
    </signal>
    <signal name='DeletingConversation'>
      <arg type='i'/>
    </signal>
    <signal name='ConversationCreated'>
      <arg type='i'/>
    </signal>
    <signal name='ConversationUpdated'>
      <arg type='i'/>
      <arg type='u'/>
    </signal>
    <signal name='AccountSignedOn'>
      <arg type='i'/>
    </signal>
    <signal name='AccountSignedOff'>
      <arg type='i'/>
    </signal>  
</interface>
