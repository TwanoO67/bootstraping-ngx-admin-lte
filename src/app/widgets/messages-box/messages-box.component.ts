import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from 'ng2-translate';
import { MessagesService } from '../../services/messages.service';
import { LoggerService } from '../../services/logger.service';
import { Message } from '../../models/message';

@Component( {
    /* tslint:disable */
    selector: '.messagesBox',
    /* tslint:enable */
    styleUrls: ['./messages-box.component.css'],
    templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
    // Declaring the variable for binding with initial value
    private messages: Message[];
    private msgLength: {};

<<<<<<< HEAD
    constructor( private msgServ: MessagesService, private logger: LoggerService ) {
        this.messages = [];
        //translate = translate;
    }

=======
    //    private translate: TranslateService;
    //    private logger: LoggerService;

    constructor( private msgServ: MessagesService, @Input() private logger: LoggerService ) {
        this.messages = [];
        //translate = translate;
    }

>>>>>>> 9752d7ef1bd1db77f4c229463e0018e7e63db030
    public ngOnInit() {
        // à chaque modification de message on change nos données
        this.msgServ.messages.subscribe(( msg: Message[] ) => {
            this.logger.log( 'MsgBox', null, 'RECIEVED.MESSAGE', null );
            this.messages = msg;
            this.msgLength = { 0: this.messages.length };
        });
    }
}
