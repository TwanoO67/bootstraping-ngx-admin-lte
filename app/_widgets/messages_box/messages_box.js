var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['angular2/core', "../../_models/message", "../../_services/messages_service"], function(exports_1) {
    var core_1, message_1, messages_service_1;
    var MessagesBox;
    return {
        setters:[
            function (_core_1) {
                core_1 = _core_1;
            },
            function (_message_1) {
                message_1 = _message_1;
            },
            function (_messages_service_1) {
                messages_service_1 = _messages_service_1;
            }],
        execute: function() {
            //import {MessagesService } from "../../_services/messages_service";
            MessagesBox = (function () {
                function MessagesBox(_msg_serv) {
                    this._msg_serv = _msg_serv;
                    this.messages = [];
                }
                MessagesBox.prototype.NgOnInit = function () {
                    var _this = this;
                    this._msg_serv.messages.subscribe(function (msg) {
                        _this.messages = msg;
                    });
                    this._msg_serv.messages.addMessage(new message_1.Message({
                        'content': "Lorem ipsum dolor",
                        "title": "Why not buy a new awesome theme?"
                    }));
                };
                MessagesBox = __decorate([
                    core_1.Component({
                        // Declare the tag name in index.html to where the component attaches
                        selector: '.messagesBox',
                        inputs: ['user'],
                        providers: [messages_service_1.MessagesService],
                        // Location of the template for this component
                        templateUrl: 'app/_widgets/messages_box/messages_box.html'
                    })
                ], MessagesBox);
                return MessagesBox;
            })();
            exports_1("MessagesBox", MessagesBox);
        }
    }
});
