var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['angular2/core', 'rxjs/Subject', 'rxjs/add/operator/share', 'rxjs/add/operator/startWith'], function(exports_1) {
    var core_1, Subject_1;
    var initialMessages, MessagesService, messagesServiceInjectables;
    return {
        setters:[
            function (_core_1) {
                core_1 = _core_1;
            },
            function (_Subject_1) {
                Subject_1 = _Subject_1;
            },
            function (_) {},
            function (_) {}],
        execute: function() {
            //import {Subject, Observable} from 'rxjs';
            initialMessages = [];
            MessagesService = (function () {
                function MessagesService() {
                    // a stream that publishes new messages only once
                    this.newMessages = new Subject_1.Subject();
                    // `updates` receives _operations_ to be applied to our `messages`
                    // it's a way we can perform changes on *all* messages (that are currently
                    // stored in `messages`)
                    this.updates = new Subject_1.Subject();
                    // action streams
                    this.create = new Subject_1.Subject();
                    this.markThreadAsRead = new Subject_1.Subject();
                    this.messages = this.updates
                        .scan(function (messages, operation) {
                        return operation(messages);
                    }, initialMessages)
                        .publishReplay(1)
                        .refCount();
                    // `create` takes a Message and then puts an operation (the inner function)
                    // on the `updates` stream to add the Message to the list of messages.
                    //
                    // That is, for each item that gets added to `create` (by using `next`)
                    // this stream emits a concat operation function.
                    //
                    // Next we subscribe `this.updates` to listen to this stream, which means
                    // that it will receive each operation that is created
                    //
                    // Note that it would be perfectly acceptable to simply modify the
                    // "addMessage" function below to simply add the inner operation function to
                    // the update stream directly and get rid of this extra action stream
                    // entirely. The pros are that it is potentially clearer. The cons are that
                    // the stream is no longer composable.
                    this.create
                        .map(function (message) {
                        return function (messages) {
                            return messages.concat(message);
                        };
                    })
                        .subscribe(this.updates);
                    this.newMessages
                        .subscribe(this.create);
                }
                // an imperative function call to this action stream
                MessagesService.prototype.addMessage = function (message) {
                    this.newMessages.next(message);
                    console.log(message.title);
                };
                MessagesService = __decorate([
                    core_1.Injectable()
                ], MessagesService);
                return MessagesService;
            })();
            exports_1("MessagesService", MessagesService);
            exports_1("messagesServiceInjectables", messagesServiceInjectables = [
                core_1.bind(MessagesService).toClass(MessagesService)
            ]);
        }
    }
});
