﻿// event-thumbnail.component.js

import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'


@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
		.thumbnail { min-height: 210px; }
		.pad-left { margin-left:10px; }
		.well div { color: #bbb; }
	`]
})

export class EventThumbnailComponent {
    @Input() event: IEvent

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' }
        return {}
    }
}