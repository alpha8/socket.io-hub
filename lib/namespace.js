// Generated by CoffeeScript 1.6.2
(function() {
  var Hub, SocketNamespace, _;

  SocketNamespace = require('socket.io/lib/namespace');

  Hub = require('./hub');

  _ = require('underscore');

  SocketNamespace.prototype.$$emit = SocketNamespace.prototype.emit;

  SocketNamespace.prototype.emit = function() {
    var data;

    if (this.needAdapter()) {
      data = _.clone(arguments);
      data._pid = process.pid;
      data._flags = this.flags;
      if (this.name !== '') {
        data._namespace = this.name;
      }
      Hub.adapter.pub(Hub.channel, data);
    }
    return this.$$emit.apply(this, arguments);
  };

  SocketNamespace.prototype.needAdapter = function() {
    if (Hub.adapterActive) {
      return true;
    } else {
      return false;
    }
  };

}).call(this);
