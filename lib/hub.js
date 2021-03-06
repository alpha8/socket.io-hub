// Generated by CoffeeScript 1.6.2
(function() {
  var Hub, _,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ = require('underscore');

  Hub = function(options) {
    var Adapter, adapterName;

    this.socket = require('./socket');
    this.namespace = require('./namespace');
    adapterName = options.adapter || 'redis';
    if (__indexOf.call(Hub.adapters, adapterName) < 0) {
      throw "adapter " + adapterName + " is not exist!";
    }
    Adapter = require("./" + adapterName + "-adapter");
    Hub.adapter = new Adapter(options);
    Hub.adapter.sub(Hub.channel);
    Hub.adapterActive = true;
    return this;
  };

  Hub.channel = 'socket.io.hub';

  Hub.adapter = null;

  Hub.adapterActive = false;

  Hub.adapters = ['redis'];

  module.exports = Hub;

}).call(this);
