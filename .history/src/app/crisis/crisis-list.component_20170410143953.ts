import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'crisis-list',
    templateUrl: './crisit-list.html',
    providers: [CrisisService]
})

export class CrisisListComponent implements OnInit{

    constructor(){}
}