//>>built
define("dojox/xmpp/ChatService",["dijit","dojo","dojox"],function(f,d,c){d.provide("dojox.xmpp.ChatService");c.xmpp.chat={CHAT_STATE_NS:"http://jabber.org/protocol/chatstates",ACTIVE_STATE:"active",COMPOSING_STATE:"composing",INACTIVE_STATE:"inactive",PAUSED_STATE:"paused",GONE_STATE:"gone"};d.declare("dojox.xmpp.ChatService",null,{state:"",constructor:function(){this.state="";this.chatid=Math.round(1E15*Math.random())},receiveMessage:function(b,a){if(b&&!a)this.onNewMessage(b)},setSession:function(b){this.session=
b},setState:function(b){this.state!=b&&(this.state=b)},invite:function(b){if(!this.uid){if(!b||""==b)throw Error("ChatService::invite() contact is NULL");this.uid=b;var a=new c.string.Builder(c.xmpp.util.createElement("message",{xmlns:"jabber:client",to:this.uid,from:this.session.jid+"/"+this.session.resource,type:"chat"},!1));a.append(c.xmpp.util.createElement("thread",{},!1));a.append(this.chatid);a.append("\x3c/thread\x3e");a.append(c.xmpp.util.createElement("active",{xmlns:c.xmpp.chat.CHAT_STATE_NS},
!0));a.append("\x3c/message\x3e");this.session.dispatchPacket(a.toString());this.onInvite(b);this.setState(c.xmpp.chat.CHAT_STATE_NS)}},sendMessage:function(b){if(this.uid&&(b.body&&""!=b.body||b.xhtml)){var a=new c.string.Builder(c.xmpp.util.createElement("message",{xmlns:"jabber:client",to:this.uid,from:this.session.jid+"/"+this.session.resource,type:"chat"},!1)),d=c.xmpp.util.createElement("html",{xmlns:c.xmpp.xmpp.XHTML_IM_NS},!1),e=c.xmpp.util.createElement("body",{"xml:lang":this.session.lang,
xmlns:c.xmpp.xmpp.XHTML_BODY_NS},!1)+b.body+"\x3c/body\x3e";b=c.xmpp.util.createElement("body",{},!1)+c.xmpp.util.stripHtml(b.body)+"\x3c/body\x3e";a.subject&&""!=a.subject&&(a.append(c.xmpp.util.createElement("subject",{},!1)),a.append(a.subject),a.append("\x3c/subject\x3e"));a.append(b);a.append(d);a.append(e);a.append("\x3c/html\x3e");a.append(c.xmpp.util.createElement("thread",{},!1));a.append(this.chatid);a.append("\x3c/thread\x3e");this.useChatStates&&a.append(c.xmpp.util.createElement("active",
{xmlns:c.xmpp.chat.CHAT_STATE_NS},!0));a.append("\x3c/message\x3e");this.session.dispatchPacket(a.toString())}},sendChatState:function(b){if(this.useChatState&&!this.firstMessage&&b!=this._currentState){var a=new c.string.Builder(c.xmpp.util.createElement("message",{xmlns:"jabber:client",to:this.uid,from:this.session.jid+"/"+this.session.resource,type:"chat"},!1));a.append(c.xmpp.util.createElement(b,{xmlns:c.xmpp.chat.CHAT_STATE_NS},!0));this._currentState=b;a.append("\x3cthread\x3e");a.append(this.chatid);
a.append("\x3c/thread\x3e\x3c/message\x3e");this.session.dispatchPacket(a.toString())}},onNewMessage:function(b){},onInvite:function(b){}})});