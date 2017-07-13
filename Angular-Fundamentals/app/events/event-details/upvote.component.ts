import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'upvote',
	styleUrls: ['app/events/event-details/upvote.component.css'],
	templateUrl: 'app/events/event-details/upvote.component.html'
})
export class UpvoteComponent {
	@Input() count: number;
	@Input() set voted(val) {
		this.iconColor = val ? 'red' : 'white';
	}
	@Output() vote = new EventEmitter();
	iconColor: string;

	onClick() {
		this.vote.emit({});
	}
}