import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Job } from '../../store/list/list.models';


@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent implements OnInit {

    //list display from db
    @Input() item: Job;
    @Input() isEditable: boolean;

    @Output() edit = new EventEmitter<Job>();
    @Output() delete = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
        console.log("test1",this.item);
    }

    onEdit(job: Job): void {
        //job data display when selected
        this.edit.emit(job);
        console.log("test",job);
       
    }

    onDelete(id: string): void {
        console.log("delete", id);
        this.delete.emit(id);
    }
    
}
